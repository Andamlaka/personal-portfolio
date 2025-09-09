import React from "react";
import { motion } from "framer-motion";

import {
  SiJavascript, SiTypescript, SiPython, SiPhp, SiReact,
  SiExpress, SiNestjs, SiHtml5, SiCss3, SiTailwindcss,
  SiFigma, SiAdobephotoshop
} from "react-icons/si";

import { FaJava } from "react-icons/fa";   // ✅ Java
import { DiCode } from "react-icons/di";   // ✅ For C language

const skills = {
"Programming Languages": [
  { name: "C", icon: <DiCode className="text-blue-600 text-2xl" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Python", icon: <SiPython className="text-green-500" /> },
  { name: "PHP", icon: <SiPhp className="text-indigo-500" /> },
],

  "Framework & Tech": [
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Express", icon: <SiExpress className="text-gray-800 dark:text-gray-200" /> },
    { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-500" /> },
  ],
  "Design": [
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-500" /> },
  ],
};

export default function TechSection() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12"
        >
          My Skills / Toolset
        </motion.h2>

        {/* Categories */}
        <div className="space-y-12">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Category Title */}
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                {category}:
              </h3>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-4">
                {items.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg 
                               bg-[#F0F6FB] dark:bg-gray-800 
                               text-gray-800 dark:text-gray-100 
                               text-xl font-medium shadow-sm 
                               hover:scale-105 transition-transform"
                  >
                    {item.icon}
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
