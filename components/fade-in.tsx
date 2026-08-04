"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "h2" | "li" | "p";
  /** Animate immediately on mount (hero). Keeps opacity at 1 for SSR safety. */
  onMount?: boolean;
};

export default function FadeIn({
  children,
  className,
  delay = 0,
  as = "div",
  onMount = false,
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];

  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const motionProps = onMount
    ? {
        initial: { opacity: 1, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.65, delay, ease: EASE },
      }
    : {
        initial: { opacity: 1, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.65, delay, ease: EASE },
      };

  return (
    <Component className={className} {...motionProps}>
      {children}
    </Component>
  );
}
