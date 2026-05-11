import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300";
  const variants = {
    primary: "bg-teal-700 text-white hover:bg-teal-800 px-6 py-3 shadow-md hover:shadow-lg",
    secondary: "bg-white text-gray-900 hover:bg-gray-50 px-6 py-3 shadow-md hover:shadow-lg",
    outline: "border-2 border-teal-700 text-teal-700 hover:bg-teal-50 px-6 py-3",
    ghost: "text-gray-600 hover:text-teal-700 hover:bg-teal-50/50 px-4 py-2",
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
