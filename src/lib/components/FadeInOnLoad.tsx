// FadeInOnLoad.tsx
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInOnLoadProps {
  children: ReactNode;
  duration?: number; // seconds
  delay?: number; // seconds
}

export default function FadeInOnLoad({
  children,
  duration = 0.5,
  delay = 0,
}: FadeInOnLoadProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
