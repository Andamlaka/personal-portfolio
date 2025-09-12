"use client";

import { motion } from "framer-motion";
import { SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiStripe } from "react-icons/si";
import { FiEye } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Brevo Landing Page Clone",
    subtitle: "Landing Page Project",
    link: "https://mohssine32.github.io/Brevo-Repo/",
    github: "https://github.com/mohssine32/Brevo-Repo",
    screenshot: "/landingpage.jpg",
    video: "/landingpage.mp4",
    tech: [
      <SiJavascript key="js" className="w-6 h-6" />,
      <SiTailwindcss key="tw" className="w-6 h-6" />,
    ],
  },
  {
    title: "E-commerce Website",
    subtitle: "Full Stack Project",
    link: "https://e-commerce-project-eta-ruddy.vercel.app/",
    github: "https://github.com/mohssine32/e-commerce-project",
    screenshot: "/ecommerce.jpg",
    video: "/ecommerce.mp4",
    tech: [
      <SiNextdotjs key="next" className="w-6 h-6" />,
      <SiReact key="react" className="w-6 h-6" />,
      <SiTailwindcss key="tw" className="w-6 h-6" />,
      <SiStripe key="stripe" className="w-6 h-6" />,
    ],
  },
];

export default function Projects() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 min-h-screen bg-[#FBFBFC] dark:bg-[#101828] transition-colors">
      <h2 className="text-4xl font-bold mb-10 text-center text-black dark:text-white">
        Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 justify-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative block rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-lg w-full max-w-lg mx-auto transition-colors"
          >
            {/* Screenshot / Video */}
            <div className="relative w-full h-80 overflow-hidden">
              <img
                src={project.screenshot}
                alt={project.title}
                className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />
              <video
                src={project.video}
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            {/* Text */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {project.subtitle}
              </p>

              {/* Tech Icons */}
              <div className="flex gap-4 mt-4 text-gray-700 dark:text-gray-300">
                {project.tech}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between p-4 gap-3">
              {/* Live Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 flex-1 bg-emerald-400 hover:bg-emerald-500 text-black font-medium px-4 py-2 rounded-lg transition"
              >
                <FiEye className="w-5 h-5" />
                See Live Project
              </a>

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-emerald-400 dark:hover:bg-zinc-700 transition"
              >
                <FaGithub className="w-6 h-6 text-gray-900 dark:text-white" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
