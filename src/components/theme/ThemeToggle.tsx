"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Sun, Moon } from "react-feather";
import { useTheme } from "./ThemeProvider";
import { useT } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/cn";

interface ThemeToggleProps {
  className?: string;
}

/**
 * Light / dark theme switch with an animated icon crossfade.
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggle } = useTheme();
  const reduced = useReducedMotion();
  const t = useT();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.a11y.toggleTheme}
      title={t.a11y.toggleTheme}
      className={cn(
        "border-line bg-surface-2 text-ink rounded-pill relative inline-flex h-9 w-9 items-center justify-center overflow-hidden border transition-colors",
        "hover:border-kore/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shudi",
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={reduced ? { opacity: 0 } : { opacity: 0, rotate: -90, scale: 0.5 }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, rotate: 0, scale: 1 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center"
        >
          {isDark ? <Moon size={17} /> : <Sun size={17} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
