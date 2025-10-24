"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  rotateOnHover?: boolean;
}

export default function HoverCard({
  children,
  className = "",
  scale = 1.03,
  rotateOnHover = false,
}: HoverCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 1 }}
      whileHover={{
        scale,
        rotateZ: rotateOnHover ? 1 : 0,
        transition: {
          duration: 0.3,
          ease: [0.25, 0.4, 0.25, 1],
        },
      }}
      whileTap={{
        scale: scale * 0.98,
      }}
    >
      {children}
    </motion.div>
  );
}
