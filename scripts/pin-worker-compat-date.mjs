// Nitro stamps the generated Cloudflare worker config with today's date as
// `compatibility_date`. From 2026-08-04 `nodejs_compat` is the default flag and
// passing it explicitly makes the worker fail to boot (502 Internal server
// error). Pin the date just before that change so the flag stays valid.
import { readFile, writeFile } from "node:fs/promises";

const CONFIG_PATH = "dist/server/wrangler.json";
const MAX_DATE = "2026-08-03";

try {
  const config = JSON.parse(await readFile(CONFIG_PATH, "utf8"));
  if (config.compatibility_date > MAX_DATE) {
    config.compatibility_date = MAX_DATE;
    await writeFile(CONFIG_PATH, `${JSON.stringify(config, null, 2)}\n`);
    console.log(`[pin-worker-compat-date] compatibility_date -> ${MAX_DATE}`);
  }
} catch (error) {
  if (error?.code !== "ENOENT") throw error;
}
