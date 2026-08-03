import { Moon, Sun, SunMoon } from "lucide-react";
import { motion } from "motion/react";
import { useTheme, type Theme } from "../theme-provider";

const OPTIONS: { value: Theme; icon: typeof Sun; label: string }[] = [
  { value: "light", icon: Sun, label: "Light" },
  { value: "dim", icon: SunMoon, label: "Lights out" },
  { value: "dark", icon: Moon, label: "Dark" },
];

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-card/70 p-1 backdrop-blur">
      {OPTIONS.map(({ value, icon: Icon, label }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            type="button"
            aria-label={`${label} theme`}
            aria-pressed={active}
            onClick={() => setTheme(value)}
            className="relative flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
          >
            {active && (
              <motion.span
                layoutId="theme-pill"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                className="absolute inset-0 rounded-full bg-primary/20"
              />
            )}
            <Icon
              className={`relative size-4 ${active ? "text-primary" : ""}`}
              strokeWidth={2}
            />
          </button>
        );
      })}
    </div>
  );
}