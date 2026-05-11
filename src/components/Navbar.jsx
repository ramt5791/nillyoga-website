import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-stone-50/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-3xl font-serif text-teal-900 tracking-tight">Nillyoga</a>
          </div>
          <div className="hidden md:flex items-center space-x-8 bg-white/70 backdrop-blur-sm rounded-full px-6 py-2 shadow-sm border border-white/40">
            <a href="#why-us" className="text-gray-700 hover:text-teal-700 font-medium transition-colors">Why us</a>
            <a href="#pricing" className="text-gray-700 hover:text-teal-700 font-medium transition-colors">Pricing</a>
            <a href="#classes" className="text-gray-700 hover:text-teal-700 font-medium transition-colors">Classes</a>
            <a href="#testimonials" className="text-gray-700 hover:text-teal-700 font-medium transition-colors">Testimonials</a>
            <a href="#faq" className="text-gray-700 hover:text-teal-700 font-medium transition-colors">FAQ</a>
          </div>
          <div className="hidden md:flex">
            <Button>Book A Session</Button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-teal-700 bg-white/50 p-2 rounded-full backdrop-blur-sm">
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
            className="md:hidden absolute top-full left-0 right-0 bg-stone-50/95 backdrop-blur-md border-t border-stone-200/50 shadow-lg"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              <a href="#why-us" className="block text-gray-800 font-medium text-lg hover:text-teal-700 transition-colors" onClick={() => setIsOpen(false)}>Why us</a>
              <a href="#pricing" className="block text-gray-800 font-medium text-lg hover:text-teal-700 transition-colors" onClick={() => setIsOpen(false)}>Pricing</a>
              <a href="#classes" className="block text-gray-800 font-medium text-lg hover:text-teal-700 transition-colors" onClick={() => setIsOpen(false)}>Classes</a>
              <a href="#testimonials" className="block text-gray-800 font-medium text-lg hover:text-teal-700 transition-colors" onClick={() => setIsOpen(false)}>Testimonials</a>
              <a href="#faq" className="block text-gray-800 font-medium text-lg hover:text-teal-700 transition-colors" onClick={() => setIsOpen(false)}>FAQ</a>
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
