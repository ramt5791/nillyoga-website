import React from 'react';
import { motion } from 'framer-motion';
import { Award, Wind, Clock, Heart, Users, Leaf } from 'lucide-react';

const features = [
  {
    title: "Expert guidance",
    description: "Certified instructors guide every session with care, clarity, & personal attention.",
    icon: <Award className="w-6 h-6 text-teal-700" />
  },
  {
    title: "Peaceful space",
    description: "A calm environment designed to help you disconnect and focus inward.",
    icon: <Wind className="w-6 h-6 text-teal-700" />
  },
  {
    title: "Flexible classes",
    description: "Morning & evening sessions suited for beginners & experienced practitioners alike.",
    icon: <Clock className="w-6 h-6 text-teal-700" />
  },
  {
    title: "Holistic approach",
    description: "We blend movement, breath, & mindfulness for complete physical & mental wellness.",
    icon: <Heart className="w-6 h-6 text-teal-700" />
  },
  {
    title: "Community focus",
    description: "Supportive community that encourages growth, consistency, & shared wellness.",
    icon: <Users className="w-6 h-6 text-teal-700" />
  },
  {
    title: "Natural inspiration",
    description: "Sessions inspired by nature to promote harmony, balance, & deep relaxation.",
    icon: <Leaf className="w-6 h-6 text-teal-700" />
  }
];

export default function Features() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-gray-900 mb-6"
          >
            Why our yoga studio stands out
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            We create meaningful yoga experiences that inspire balance, emotional clarity, and physical strength through guided practices rooted in calm awareness.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="bg-teal-50 p-4 rounded-2xl mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
