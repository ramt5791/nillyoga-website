import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300";
  const variants = {
    primary: "bg-white text-stone-950 shadow-sm ring-1 ring-stone-950/10 hover:bg-stone-100 px-7 py-3.5",
    secondary: "bg-stone-950 text-white hover:bg-stone-800 px-7 py-3.5",
    outline: "border border-stone-950 text-stone-950 hover:bg-stone-950 hover:text-white px-7 py-3.5",
    ghost: "text-stone-700 hover:text-stone-950 hover:bg-stone-100 px-4 py-2",
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
