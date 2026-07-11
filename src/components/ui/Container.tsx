import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/**
 * Centered max-width wrapper (1200px) with responsive horizontal padding.
 */
export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8", className)}
    >
      {children}
    </Tag>
  );
}
