import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PillVariant = "kore" | "shudi" | "ink" | "outline";

interface PillProps {
  children: ReactNode;
  variant?: PillVariant;
  className?: string;
  /** Optional leading node (e.g. a small icon or dot). */
  icon?: ReactNode;
}

const VARIANTS: Record<PillVariant, string> = {
  kore: "bg-kore-tint text-kore-700 dark:text-kore",
  shudi: "bg-shudi-tint text-shudi-700 dark:text-shudi",
  ink: "bg-footer text-white",
  outline: "border border-line text-slate bg-surface",
};

/**
 * Small rounded label for level / module chips.
 */
export function Pill({ children, variant = "kore", className, icon }: PillProps) {
  return (
    <span
      className={cn(
        "rounded-pill inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wide",
        VARIANTS[variant],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
