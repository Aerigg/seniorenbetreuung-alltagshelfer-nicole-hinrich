"use client";

import { motion } from "framer-motion";
import { useState, InputHTMLAttributes } from "react";

interface AnimatedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function AnimatedInput({ label, id, ...props }: AnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative">
      <motion.input
        {...props}
        id={id}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value !== "");
          props.onBlur?.(e);
        }}
        className={`w-full px-4 py-3 rounded-lg border-2 outline-none transition-all duration-300 ${
          isFocused
            ? "border-primary-blue ring-2 ring-primary-blue/20"
            : "border-primary-blue/20"
        } ${props.className || ""}`}
        animate={{
          scale: isFocused ? 1.01 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.label
        htmlFor={id}
        className={`absolute left-4 pointer-events-none transition-all duration-300 ${
          isFocused || hasValue
            ? "text-xs -top-2 bg-white px-1 text-primary-blue font-medium"
            : "text-sm top-3 text-foreground/60"
        }`}
        initial={false}
      >
        {label}
      </motion.label>
    </div>
  );
}
