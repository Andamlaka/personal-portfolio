"use client"; // for Next.js App Router

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="px-6  py-16 md:px-12 lg:px-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mt-30 mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Profile Image */}
        <motion.img
          src="/portpic.jfif" // 🔹 Replace with your image path
          alt="Mohammed Mouhssine"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-98 object-cover rounded-full lg:rounded-xl shadow-lg flex-shrink-0"
        />

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-gray-900 dark:text-gray-200 flex-1 text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Mohammed Mouhssine 👋
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-[44px] font-semibold text-heading dark:text-gray-400 mb-6">
            also known as MOMO — Full Stack Developer
          </h2>
          <p className="text-base sm:text-[30px] leading-relaxed text-secondary dark:text-gray-300 mb-6">
            A passionate full stack developer originally from Morocco and currently based in Paris,
            France. With a strong background in both{" "}
            <span className="font-bold text-black dark:text-white">front-end</span> and{" "}
            <span className="font-bold text-black dark:text-white">back-end</span>{" "}
            development, I enjoy building modern, scalable, and user-friendly
            web applications. Always eager to learn and adapt, I thrive on
            tackling new challenges, exploring innovative technologies, and
            creating impactful digital solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
