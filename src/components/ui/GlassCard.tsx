"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  as?: "article" | "div" | "aside";
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({ as = "article", children, className }: GlassCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        "glass-panel relative overflow-hidden rounded-glass p-6 shadow-glass transition-colors hover:border-cyan-200",
        className,
      )}
    >
      {children}
    </MotionTag>
  );
}
