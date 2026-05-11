import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-stone-100">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero.webp" 
          alt="Yoga practice" 
          className="w-full h-full object-cover opacity-90 mix-blend-multiply"
        />
        {/* Soft gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/20 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-tight mb-6">
            do your practice and <br className="hidden md:block"/>all is coming
          </h1>
          <p className="text-white/80 tracking-[0.3em] text-sm md:text-base font-medium mb-12 uppercase">
            Sri K. Pattabhi Jois
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-lg">
            Book a session
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-lg !bg-white/10 !text-white !border-none hover:!bg-white/20 backdrop-blur-sm">
            View pricing
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
