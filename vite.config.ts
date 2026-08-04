// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  plugins: [
    // Nitro stamps the generated Cloudflare worker config with today's date as
    // `compatibility_date`. On/after 2026-08-04 `nodejs_compat` is the default
    // flag and passing it explicitly makes the worker fail to boot (502).
    // Pin the date just before that change so the flag stays valid.
    {
      name: "pin-worker-compatibility-date",
      apply: "build" as const,
      enforce: "post" as const,
      async closeBundle() {
        const { readFile, writeFile } = await import("node:fs/promises");
        const path = "dist/server/wrangler.json";
        try {
          const config = JSON.parse(await readFile(path, "utf8"));
          if (config.compatibility_date >= "2026-08-04") {
            config.compatibility_date = "2026-08-03";
            await writeFile(path, JSON.stringify(config, null, 2));
          }
        } catch {
          // wrangler.json not generated for this build target — nothing to pin.
        }
      },
    },
  ],
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
