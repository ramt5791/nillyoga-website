import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 900);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${scrolled ? 'border-stone-200/80 bg-white/95 py-4 text-stone-950 backdrop-blur-xl' : 'border-white/10 bg-black/25 py-5 text-white backdrop-blur-md'}`}>
      <div className="mx-auto max-w-[1150px] px-5 sm:px-8 xl:px-0">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl md:text-[28px] font-semibold tracking-tight">Nillyoga</a>
          </div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#why-us" className={`font-semibold text-base transition-colors ${scrolled ? 'hover:text-[#527538]' : 'hover:text-white/75'}`}>Why us</a>
            <a href="#pricing" className={`font-semibold text-base transition-colors ${scrolled ? 'hover:text-[#527538]' : 'hover:text-white/75'}`}>Pricing</a>
            <a href="#classes" className={`font-semibold text-base transition-colors ${scrolled ? 'hover:text-[#527538]' : 'hover:text-white/75'}`}>Classes</a>
            <a href="#testimonials" className={`font-semibold text-base transition-colors ${scrolled ? 'hover:text-[#527538]' : 'hover:text-white/75'}`}>Testimonials</a>
            <a href="#faq" className={`font-semibold text-base transition-colors ${scrolled ? 'hover:text-[#527538]' : 'hover:text-white/75'}`}>FAQ</a>
          </div>
          <div className="hidden md:flex">
            <Button className={`px-7 py-3 text-base ${scrolled ? '!bg-[#527538] !text-white hover:!bg-[#46642f]' : ''}`}>Book A Session</Button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-950 bg-white p-2 rounded-full">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/85 backdrop-blur-xl border-t border-white/10 shadow-lg"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              <a href="#why-us" className="block text-white font-semibold text-lg hover:text-white/75 transition-colors" onClick={() => setIsOpen(false)}>Why us</a>
              <a href="#pricing" className="block text-white font-semibold text-lg hover:text-white/75 transition-colors" onClick={() => setIsOpen(false)}>Pricing</a>
              <a href="#classes" className="block text-white font-semibold text-lg hover:text-white/75 transition-colors" onClick={() => setIsOpen(false)}>Classes</a>
              <a href="#testimonials" className="block text-white font-semibold text-lg hover:text-white/75 transition-colors" onClick={() => setIsOpen(false)}>Testimonials</a>
              <a href="#faq" className="block text-white font-semibold text-lg hover:text-white/75 transition-colors" onClick={() => setIsOpen(false)}>FAQ</a>
              <div className="pt-2">
                <Button className="w-full">Book A Session</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
