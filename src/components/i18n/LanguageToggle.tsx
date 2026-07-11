"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale, useT } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/cn";

interface LanguageToggleProps {
  className?: string;
  /** Use a lighter treatment when placed over a dark/gradient surface. */
  onDark?: boolean;
}

/**
 * Animated EN | HA pill switch. The active side is filled with the brand
 * gradient thumb, which slides between sides (framer-motion layout). Toggles
 * the locale instantly (no reload). role=switch + keyboard operable.
 * Respects prefers-reduced-motion (crossfade instead of slide).
 */
export function LanguageToggle({ className, onDark = false }: LanguageToggleProps) {
  const { locale, toggle } = useLocale();
  const t = useT();
  const reduced = useReducedMotion();
  const isHa = locale === "ha";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isHa}
      aria-label={t.toggle.label}
      onClick={toggle}
      className={cn(
        "rounded-pill relative inline-flex h-9 w-[76px] items-center p-1 text-xs font-bold transition-colors",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shudi",
        onDark
          ? "border border-white/25 bg-white/10"
          : "border-line bg-surface-2 border",
        className,
      )}
    >
      {/* Sliding gradient thumb */}
      <motion.span
        aria-hidden
        layout={!reduced}
        className="bg-brand-gradient rounded-pill absolute top-1 bottom-1 w-[34px] shadow-sm"
        initial={false}
        animate={{ left: isHa ? "calc(100% - 38px)" : "4px" }}
        transition={
          reduced
            ? { duration: 0 }
            : { type: "spring", stiffness: 500, damping: 34 }
        }
      />
      {/* Labels */}
      <span
        className={cn(
          "relative z-10 flex-1 text-center transition-colors",
          !isHa ? "text-white" : onDark ? "text-white/70" : "text-slate",
        )}
      >
        {t.toggle.en}
      </span>
      <span
        className={cn(
          "relative z-10 flex-1 text-center transition-colors",
          isHa ? "text-white" : onDark ? "text-white/70" : "text-slate",
        )}
      >
        {t.toggle.ha}
      </span>
    </button>
  );
}
