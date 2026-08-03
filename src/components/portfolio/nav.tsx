import { useEffect, useState } from "react";
import { NAV } from "./data";
import { ThemeSwitch } from "./theme-switch";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between gap-4 rounded-full px-3 py-2 transition-all duration-500 ${
          scrolled
            ? "border border-border bg-card/80 shadow-lg backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        }`}
      >
        <a
          href="#top"
          className="pl-2 font-display text-sm font-bold tracking-tight sm:text-base"
        >
          shreyash<span className="text-primary">.</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeSwitch />
      </nav>
    </header>
  );
}