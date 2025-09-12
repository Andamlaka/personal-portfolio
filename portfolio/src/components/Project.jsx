"use client";

import { motion } from "framer-motion";
import { SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiStripe } from "react-icons/si";

const projects = [
  {
    title: "Brevo Landing Page Clone",
    subtitle: "Landing Page Project",
    link: "https://mohssine32.github.io/Brevo-Repo/",
    screenshot: "/landingpage.jpg",
    video: "/landingpage.mp4",
    tech: [<SiJavascript key="js" className="w-6 h-6" />, <SiTailwindcss key="tw" className="w-6 h-6" />],
  },
  {
    title: "E-commerce Website",
    subtitle: "Full Stack Project",
    link: "https://e-commerce-project-eta-ruddy.vercel.app/",
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
    <section className="px-6 md:px-12 lg:px-24 py-16 min-h-screen bg-white dark:bg-black transition-colors">
      <h2 className="text-4xl font-bold mb-10 text-center text-black dark:text-white">
        Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 justify-center">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
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
          </motion.a>
        ))}
      </div>
    </section>
  );
}
