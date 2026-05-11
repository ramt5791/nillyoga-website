import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Expert guidance",
    description: "Certified instructors guide every session with care, clarity, & personal attention.",
  },
  {
    title: "Peaceful space",
    description: "A calm environment designed to help you disconnect and focus inward.",
  },
  {
    title: "Flexible classes",
    description: "Morning & evening sessions suited for beginners & experienced practitioners alike.",
  },
  {
    title: "Holistic approach",
    description: "We blend movement, breath, & mindfulness for complete physical & mental wellness.",
  },
  {
    title: "Community focus",
    description: "Supportive community that encourages growth, consistency, & shared wellness.",
  },
  {
    title: "Natural inspiration",
    description: "Sessions inspired by nature to promote harmony, balance, & deep relaxation.",
  }
];

const collageImages = [
  {
    src: "https://framerusercontent.com/images/UjKXiE4EbSieYjLlHrWTne3IQa4.jpg?scale-down-to=1024&width=2272&height=1568",
    alt: "Woman meditating at sunrise over water",
  },
  {
    src: "https://framerusercontent.com/images/Yv9ZQKef3xeoBFUZcPNNmOMT9TI.jpg?scale-down-to=1024&width=2270&height=1568",
    alt: "Silhouette stretching by a window",
  },
  {
    src: "https://framerusercontent.com/images/BaMagUMPNFeDWX6Yc9rXrDDqoE.jpg?scale-down-to=1024&width=2272&height=1568",
    alt: "Woman breathing in warm studio light",
  },
  {
    src: "https://framerusercontent.com/images/0gsrrX3fDYutAW3w2uLRXjelk.jpg?scale-down-to=1024&width=2272&height=1568",
    alt: "Woman looking upward in warm light",
  },
];

export default function Features() {
  return (
    <section id="why-us" className="bg-[#e8ebe4] py-20 sm:py-24">
      <div className="mx-auto max-w-[1150px] px-5 sm:px-8 xl:px-0">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[980px] text-3xl font-semibold leading-[1.22] text-stone-950 sm:text-4xl lg:text-[36px]"
        >
          We create meaningful yoga experiences that inspire balance, emotional clarity,
          and physical strength through{" "}
          <span className="text-stone-500">guided practices rooted in calm awareness.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-20 grid h-[330px] grid-cols-2 gap-3 overflow-hidden sm:grid-cols-[100px_100px_100px_100px_1fr] sm:gap-3 lg:h-[360px]"
        >
          {collageImages.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={`h-full w-full rounded-xl object-cover ${index > 1 ? 'hidden sm:block' : ''}`}
            />
          ))}
          <img
            src="https://framerusercontent.com/images/aF8q8vdefDvOehcKCeAofLHc.jpg?scale-down-to=1024&width=2272&height=1568"
            alt="Woman watching a desert sunset"
            className="col-span-2 h-full w-full rounded-xl object-cover sm:col-span-1"
          />
        </motion.div>

        <div className="mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-4xl font-semibold leading-tight text-stone-950 sm:text-5xl"
          >
            Why our yoga studio stands out
          </motion.h2>

          <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border-t border-stone-950/15 pt-6"
              >
                <h3 className="mb-3 text-xl font-semibold text-stone-950">{feature.title}</h3>
                <p className="leading-relaxed text-stone-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
