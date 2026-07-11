import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  /** Anchor id for in-page navigation. */
  id?: string;
  /** Use the surface-2 background for alternating sections. */
  alt?: boolean;
  className?: string;
  /** Set false to render children without the inner Container. */
  contained?: boolean;
  containerClassName?: string;
}

/**
 * Vertical-rhythm section wrapper with optional alternating background
 * and an anchor id for scroll navigation.
 */
export function Section({
  children,
  id,
  alt = false,
  className,
  contained = true,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-16 sm:py-20 lg:py-28",
        alt ? "bg-surface-2" : "bg-surface",
        className,
      )}
    >
      {contained ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
