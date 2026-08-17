"use client";

import { Link } from "@/i18n/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const premiumEase = [0.23, 1, 0.32, 1] as const;

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
  external?: boolean;
  showArrow?: boolean;
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-gradient-to-br from-dev-orange to-[#e96208] text-white shadow-orange hover:shadow-[0_18px_42px_rgba(255,122,26,0.34)]",
  secondary:
    "border border-cyan-200/80 bg-white/70 text-dev-navy shadow-[0_14px_34px_rgba(53,189,242,0.14)] hover:bg-cyan-50/80",
  dark: "bg-gradient-to-br from-dev-navy to-dev-navy2 text-white shadow-[0_16px_35px_rgba(6,43,73,0.24)]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
  showArrow = false,
  ariaLabel,
}: ButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  const motionProps = prefersReducedMotion
    ? {}
    : {
        whileHover: { y: -2 },
        whileTap: { scale: 0.97 },
        transition: { duration: 0.16, ease: premiumEase },
      };

  const sharedClassName = cn(
    "inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-full px-5 font-display text-sm font-extrabold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-dev-orange focus-visible:ring-offset-2",
    variants[variant],
    className,
  );

  const content = (
    <>
      {children}
      {showArrow ? <ArrowRight aria-hidden="true" size={17} strokeWidth={2.3} /> : null}
    </>
  );

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={ariaLabel}
        className={sharedClassName}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div {...motionProps}>
      <Link href={href} aria-label={ariaLabel} className={sharedClassName}>
        {content}
      </Link>
    </motion.div>
  );
}
