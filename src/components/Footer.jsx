import React from 'react';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <a href="#" className="text-3xl font-serif text-white tracking-tight block mb-6">Nillyoga</a>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Find your balance, strength, and inner peace with our expert-guided yoga sessions in a calm, welcoming environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#why-us" className="hover:text-white transition-colors">Why us</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#classes" className="hover:text-white transition-colors">Classes</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Classes</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Sunrise Flow</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Power Vinyasa</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gentle Hatha</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Core Strength</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Meditation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-teal-500">📍</span>
                <span>123 Serenity Lane, Wellness District, Seville, 41001</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-teal-500" />
                <a href="mailto:hello@nillyoga.com" className="hover:text-white transition-colors">hello@nillyoga.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Nillyoga. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
