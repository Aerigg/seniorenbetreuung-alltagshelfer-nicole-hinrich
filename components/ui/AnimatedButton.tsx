"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "orange";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: AnimatedButtonProps) {
  const variants = {
    primary: "bg-primary-blue hover:bg-primary-blue/90 text-white",
    secondary: "bg-white hover:bg-soft-gray text-primary-blue border-2 border-primary-blue",
    orange: "bg-warm-orange hover:bg-warm-orange/90 text-white",
  };

  const baseClasses = `${variants[variant]} px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`;

  const Component = href ? motion(Link) : motion.button;
  const props = href ? { href } : { onClick, type };

  return (
    <Component
      {...props}
      className={baseClasses}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
    >
      <motion.span
        className="inline-block"
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0.9 }}
      >
        {children}
      </motion.span>
    </Component>
  );
}
