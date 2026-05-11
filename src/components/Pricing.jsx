import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from './Button';

const plans = [
  {
    name: "Drop-in class",
    subtitle: "No commitment",
    price: "€15",
    period: "",
    features: ["Guided sessions", "Breath practice", "Mobile access", "Beginner classes"],
    highlighted: false
  },
  {
    name: "4 Classes bundle",
    subtitle: "For mid-level",
    price: "€45",
    period: "/month",
    features: ["Basic features", "Intermediate flow", "Offline downloads", "Priority support", "Group workshops", "Meditation guides"],
    highlighted: true
  },
  {
    name: "8 Classes bundle",
    subtitle: "For experts",
    price: "€65",
    period: "/month",
    features: ["Standard features", "Advanced classes", "1-on-1 coaching", "Exclusive retreats", "Live sessions", "Custom plans"],
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-gray-900 mb-6"
          >
            Simple pricing for every yoga journey
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-3xl p-8 border ${plan.highlighted ? 'bg-teal-900 border-teal-900 text-white shadow-xl relative transform md:-translate-y-4' : 'bg-white border-stone-200 text-gray-900 shadow-sm'}`}
            >
              <div className="mb-8">
                <h3 className={`text-2xl font-medium mb-1 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <p className={`${plan.highlighted ? 'text-teal-100' : 'text-gray-500'}`}>{plan.subtitle}</p>
              </div>
              
              <div className="mb-8 flex items-baseline">
                <span className="text-5xl font-serif">{plan.price}</span>
                <span className={`ml-2 ${plan.highlighted ? 'text-teal-100' : 'text-gray-500'}`}>{plan.period}</span>
              </div>

              <div className="space-y-4 mb-8">
                <p className={`font-medium ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>Included features</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.highlighted ? 'text-teal-300' : 'text-teal-600'}`} />
                      <span className={plan.highlighted ? 'text-teal-50' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                variant={plan.highlighted ? "secondary" : "outline"} 
                className={`w-full ${plan.highlighted ? '!bg-white !text-teal-900 hover:!bg-stone-50' : ''}`}
              >
                Book a session
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
