import React from "react";
import { motion } from "framer-motion";
import Projects from "../components/Projects";

const Portfolio = () => {
  return (
    <section className="px-6 py-16 text-left md:px-12 lg:px-24 bg-white dark:bg-gray-950">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-10 text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold leading-snug text-gray-900 dark:text-white max-w-4xl mx-auto text-center md:text-left"
      >
        I build{" "}
        <span className="text-blue-600 dark:text-blue-400">
          full-stack apps
        </span>{" "}
        for e-commerce, streaming, dashboards, and SaaS — where{" "}
        <span className="text-blue-600 dark:text-blue-400">design</span> meets{" "}
        <span className="text-blue-600 dark:text-blue-400">scalability</span>.
      </motion.h1>

      {/* Projects */}
      <div className="mt-16">
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
