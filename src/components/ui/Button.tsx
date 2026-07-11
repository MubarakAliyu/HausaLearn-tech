"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "solid" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /** react-feather icon (or any node) before the label. */
  leftIcon?: ReactNode;
  /** react-feather icon (or any node) after the label. */
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  "aria-label"?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-gradient-strong text-white shadow-[var(--shadow-card)] [text-shadow:0_1px_2px_rgba(0,0,0,0.25)]",
  solid: "bg-kore-600 text-white hover:bg-kore-700",
  outline: "border-2 border-shudi text-shudi hover:bg-shudi-tint dark:text-shudi dark:border-shudi",
  ghost: "text-shudi hover:bg-shudi-tint",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "text-sm px-4 py-2 gap-1.5",
  md: "text-base px-5 py-2.5 gap-2",
  lg: "text-lg px-7 py-3.5 gap-2.5",
};

/**
 * Brand button. Variants: primary (gradient), solid (kore), outline (shudi),
 * ghost. Montserrat 700 label, hover scale 1.03 + shadow lift, tap 0.97.
 * Renders as <a> when `href` is provided, else <button>. Reduced-motion aware.
 */
export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    leftIcon,
    rightIcon,
    fullWidth,
    disabled,
  } = props;
  const reduced = useReducedMotion();

  const classes = cn(
    "rounded-md inline-flex items-center justify-center font-[family-name:var(--font-heading)] font-bold leading-none whitespace-nowrap transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shudi",
    "disabled:opacity-50 disabled:pointer-events-none",
    VARIANTS[variant],
    SIZES[size],
    fullWidth && "w-full",
    className,
  );

  const hover = reduced ? undefined : { scale: 1.03 };
  const tap = reduced ? undefined : { scale: 0.97 };
  const transition = { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const };

  const content = (
    <>
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </>
  );

  if (props.href !== undefined) {
    const { href, target, rel, onClick } = props;
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        onClick={onClick}
        whileHover={hover}
        whileTap={tap}
        transition={transition}
        className={classes}
        aria-label={props["aria-label"]}
      >
        {content}
      </motion.a>
    );
  }

  const { type = "button", onClick } = props;
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? undefined : hover}
      whileTap={disabled ? undefined : tap}
      transition={transition}
      className={classes}
      aria-label={props["aria-label"]}
    >
      {content}
    </motion.button>
  );
}
