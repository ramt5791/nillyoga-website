import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carmen Castejón",
    text: `"Nilly teaches you not only to do YOGA but how to breathe and be in contact with your body, to trust more in yourself, to release the CONTROL, and be conscience of your body as never before. She is a wonderful teacher."`
  },
  {
    name: "Berta De La Cerda Vega",
    text: `"Nilly has a wonderful spirit and I'm so glad I found her yoga classes in Seville. I tried quite a few other schools and she is definitely the best teacher that I met in Seville. Amazing work Nilly - thanks!"`
  },
  {
    name: "Diana Garcia",
    text: `"Nilly classes are amazing and she really helps you understand how yoga positions works and how you should approach the practice. She really is a good teacher and the peace and warmth of the practices space really help you disconnect from the stress and connect with yourself. Thank you, Nilly!"`
  },
  {
    name: "Eduardo Briales Palacios",
    text: `"Nilly brings so much of her heart and soul to her classes that no matter how you're feeling that day, you always feel safe and supported during your practice. I've never wanted to recommend a yoga teacher so strongly!"`
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-teal-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
          <svg width="400" height="400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
          </svg>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            What our students say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-teal-100"
          >
            Amazing!! In her classes there is a wonderful energy, I love to practice yoga with Nilly, she is an authentic professional.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-teal-50 text-lg leading-relaxed mb-6 italic">{t.text}</p>
              <p className="font-medium text-white">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
