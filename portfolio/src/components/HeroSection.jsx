"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const words = ["web solutions", "web platforms", "dashboards", "SaaS Products", "mobile apps"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative top-40 mb-40 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        
        {/* Desktop Image */}
        <div className="hidden lg:block flex-shrink-0 w-1/3">
          <img
            src="/homeHeroPic.jpg"
            alt="Developer working"
            className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Text + Mobile Image */}
        <motion.div
          className="w-full lg:w-2/3 text-center lg:text-left"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Mobile circular image with floating labels */}
          <div className="block lg:hidden relative mx-auto mb-6 w-40 h-40">
            <img
              src="/homeHeroPic.jpg"
              alt="Developer portrait"
              className="w-full h-full rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-800"
            />
            {/* Floating labels for mobile */}
            <span className="absolute -top-4 left-1/5 -translate-x-1/2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg animate-bounce">
              UX
            </span>
            <span className="absolute -top-0 left-0 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg animate-pulse">
              Analytics
            </span>
            <span className="absolute -top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg animate-bounce">
              Interaction
            </span>
            <span className="absolute bottom-0 left-1/10 -translate-x-1/2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg animate-pulse">
              Growth
            </span>
            <span className="absolute bottom-0 right-1/10 translate-x-1/2 bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg animate-bounce">
              Performance
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-dm font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[40px] leading-snug sm:leading-tight lg:leading-[62px] text-black dark:text-white">
            Hi, I’m Momo — Full-Stack Developer
          </h1>

          {/* Rotating paragraph */}
          <p className="mt-4 sm:mt-6 font-dm text-base sm:text-lg md:text-xl lg:text-2xl leading-snug text-gray-700 dark:text-gray-300">
            I enjoy creating products from scratch and improve existing ones.
            <br />
            In simple terms, I develop{" "}
            <span
              className="relative inline-flex align-baseline overflow-hidden h-[1.8rem] sm:h-[2.2rem] md:h-[2.6rem] min-w-[9ch] sm:min-w-[12ch] md:min-w-[14ch]"
              aria-live="polite"
            >
              <span
                key={index}
                className="whitespace-nowrap font-extrabold text-black dark:text-white leading-none animate-slide-up"
              >
                {words[index]}
              </span>
            </span>
            <br />
            that make a profit or enhance business.
          </p>

          {/* Tags */}
          <div className="mt-4 sm:mt-6 flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
            {["Frontend", "Backend", "FinTech", "Startups", "ESN"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-2xl font-medium bg-[#FAFAFA] dark:bg-gray-800 text-sm sm:text-base md:text-lg border border-gray-300 dark:border-gray-700 text-primary dark:text-gray-200"
              >
                #{t}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button className="mt-4 sm:mt-6 w-full sm:w-auto px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full text-base sm:text-lg md:text-xl font-semibold shadow-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition flex justify-center items-center">
            Let’s talk
          </button>
        </motion.div>
      </div>

      {/* Floating labels (desktop only) */}
      <span className="hidden lg:inline absolute bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg animate-bounce top-28 right-12">
        User experience
      </span>
      <span className="hidden lg:inline absolute bg-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg animate-pulse top-70 right-20">
        Analytics
      </span>
      <span className="hidden lg:inline absolute bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg animate-bounce bottom-28 right-40">
        User interactions
      </span>

      {/* Rotating word animation */}
      <style>{`
        @keyframes slideUp {
          0%   { transform: translateY(110%); opacity: 0; }
          55%  { transform: translateY(-8%);  opacity: 1; }
          100% { transform: translateY(0);     opacity: 1; }
        }
        .animate-slide-up {
          display: inline-block;
          will-change: transform, opacity;
          animation: slideUp 0.6s cubic-bezier(.22,.9,.3,1);
        }
      `}</style>
    </section>
  );
}
