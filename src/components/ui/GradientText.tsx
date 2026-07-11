import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/**
 * Renders text clipped to the brand green->blue gradient.
 */
export function GradientText({
  children,
  className,
  as: Tag = "span",
}: GradientTextProps) {
  return <Tag className={cn("text-gradient", className)}>{children}</Tag>;
}
