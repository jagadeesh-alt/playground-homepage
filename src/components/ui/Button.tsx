"use client";
import { motion } from "framer-motion";

export default function Button({ children, onClick, className }: any) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold transition-all bg-blue-500 hover:bg-blue-600 text-white ${className}`}
    >
      {children}
    </motion.button>
  );
}
