"use client"; // if you're in Next.js App Router

import { motion } from "framer-motion";

const items = [
  {
    title: "For Businesses",
    description:
      "I build scalable and maintainable applications that are user-friendly for customers and efficient for teams to operate. My code is optimized for performance, security, and long-term growth.",
  },
  {
    title: "For Startups",
    description:
      "I help transform ideas into functional MVPs. If you don’t yet have technical resources, I can guide you on the best tools, frameworks, and technologies to get your product running quickly.",
  },
  {
    title: "For Product Teams",
    description:
      "I collaborate with teams to develop new features, run experiments, and solve complex challenges. My goal is to deliver clean, reliable code that helps products grow and evolve.",
  },
];

export default function WhatICanDo() {
  return (
    <section className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white px-6 py-16 sm:px-8 md:px-12 lg:px-24 text-center overflow-hidden">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[28px] sm:text-[20px] md:text-[30px] lg:text-[36px] font-dm text-heading font-bold mb-12  dark:text-white"
      >
        What I Can Do for You
      </motion.h2>

      {/* Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="grid gap-12 md:gap-16 md:grid-cols-3 text-left max-w-10xl mx-auto"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-dm font-semibold">
              {item.title}
            </h3>
            <p className="text-base sm:text-lg font-dm text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
