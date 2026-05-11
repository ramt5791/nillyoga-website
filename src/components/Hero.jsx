import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-stone-950">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}assets/hero.webp`}
          alt="Yoga practice" 
          className="w-full h-full object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-[#2a1206]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/15"></div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1150px] items-end px-5 pb-11 pt-32 sm:px-8 lg:pb-12 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[560px]"
        >
          <h1 className="mb-5 text-[48px] font-light italic leading-[1.08] text-white sm:text-[56px] lg:text-[58px]">
            do your practice <br className="hidden sm:block" />and all is coming
          </h1>
          <p className="mb-8 text-xs font-bold uppercase text-white/75 sm:text-sm">
            Sri K. Pattabhi Jois
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-row items-center gap-5"
          >
            <Button className="px-6 py-3 text-base">
              Book a session
            </Button>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 text-base font-semibold text-white transition-colors hover:text-white/75"
            >
              View pricing
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
