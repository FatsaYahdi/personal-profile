"use client";
import { motion } from "framer-motion";
import React from "react";

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.nav
      className="relative flex items-center justify-center w-full gap-10 py-4 border rounded-full md:py-6 md:px-8"
      initial={{
        opacity: 0,
        y: -40,
      }}
      animate={{
        opacity: 1,
        y: [-20, -5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
    >
      {children}
    </motion.nav>
  );
};

export const MenuItem = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="relative">
      <div className="cursor-pointer text-foreground hover:opacity-[0.9]">
        {children}
      </div>
    </div>
  );
};
