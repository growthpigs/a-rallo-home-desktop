import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0.8, y: 3 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0.8, y: -3 }}
      transition={{
        duration: 0.15,
        ease: "easeOut"
      }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};