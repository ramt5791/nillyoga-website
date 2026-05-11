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
    features: ["Guided sessions", "Breath practice", "Mobile access", "Beginner classes", "24/7 support", "Progress tracking", "Video library"],
  },
  {
    name: "4 Classes bundle",
    subtitle: "For mid-level",
    price: "€45",
    period: "/month",
    features: ["Basic features", "Intermediate flow", "Offline downloads", "Priority support", "Group workshops", "Meditation guides", "Weekly goals"],
  },
  {
    name: "6 Classes bundle",
    subtitle: "For experts",
    price: "€55",
    period: "/month",
    features: ["Standard features", "Advanced classes", "1-on-1 coaching", "Exclusive retreats", "Live sessions", "Custom plans", "Expert mentors"],
  },
  {
    name: "8 Classes bundle",
    subtitle: "For experts",
    price: "€65",
    period: "/month",
    features: ["Standard features", "Advanced classes", "1-on-1 coaching", "Exclusive retreats", "Live sessions", "Custom plans", "Expert mentors"],
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#e8ebe4] py-20 sm:py-24">
      <div className="mx-auto max-w-[1150px] px-5 sm:px-8 xl:px-0">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[560px] text-5xl font-semibold leading-[1.08] text-stone-950 lg:text-[52px]"
          >
            Simple pricing for every yoga journey
          </motion.h2>
          <Button className="w-fit !bg-[#527538] !text-white hover:!bg-[#46642f]">
            Book a session
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl bg-white p-3 text-stone-950"
            >
              <div className="rounded-xl bg-[#e8ebe4] p-5">
                <h3 className="mb-1 text-2xl font-semibold">{plan.name}</h3>
                <p className="text-stone-600">{plan.subtitle}</p>
                <div className="my-4 border-t border-stone-950/10" />
                <div className="mb-7 flex items-baseline">
                  <span className="text-4xl font-semibold">{plan.price}</span>
                  {plan.period && <span className="ml-1 text-stone-600">{plan.period}</span>}
                </div>
                <Button className="w-full !bg-[#527538] !text-white hover:!bg-[#46642f]">
                  Book a session
                </Button>
              </div>

              <div className="space-y-4 px-5 pb-6 pt-5">
                <p className="font-medium text-stone-700">Included features</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check className="mr-3 h-4 w-4 flex-shrink-0 text-stone-600" />
                      <span className="text-stone-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
