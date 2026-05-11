import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is Nillyoga?",
    answer: "Nillyoga is a yoga studio offering guided classes, meditation, and community support for all skill levels. We focus on building a sustainable and mindful practice."
  },
  {
    question: "Do I need prior yoga experience?",
    answer: "Not at all! We offer classes for all levels, from absolute beginners to advanced practitioners. Our instructors provide modifications for every pose."
  },
  {
    question: "How do I join a class?",
    answer: "You can book a session directly through our website by selecting your preferred class and time. Drop-ins are also welcome, though booking in advance guarantees your spot."
  },
  {
    question: "Are the instructors certified?",
    answer: "Yes, all our instructors are fully certified and have hundreds of hours of training in various disciplines, including Vinyasa, Hatha, and Ashtanga."
  },
  {
    question: "Can I practice anytime?",
    answer: "We offer both morning and evening classes to fit your schedule. Check our class schedule for specific times. With our bundles, you also get access to some recorded sessions."
  },
  {
    question: "What equipment do I need?",
    answer: "We provide high-quality mats and props at the studio. You only need to bring comfortable clothing and a water bottle."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-gray-900 mb-6"
          >
            Quick answers to common questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-stone-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left bg-stone-50 hover:bg-stone-100 transition-colors focus:outline-none"
              >
                <span className="font-medium text-gray-900 text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-teal-700 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-5 bg-white text-gray-600 leading-relaxed border-t border-stone-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
