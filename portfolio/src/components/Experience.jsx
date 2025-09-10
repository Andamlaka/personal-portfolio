"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const experiences = [
  {
    role: "Full Stack Developer – Internship",
    company: "Fcpo Digital Agency",
    link: "https://www.fcpo.ma/",
    logo: "/fcpo.jpg",
    date: "05/2025 – 07/2025 • Oujda, Morocco",
    description: "Cloud application for warehouse management",
    points: [
      "Designed responsive and user-friendly interfaces with React and Tailwind CSS",
      "Set up and managed REST APIs with Nest.js",
      "Containerized and deployed applications with Docker, deployed on Vercel",
      "Performed unit and integration testing with Jest",
      "Designed and executed API tests with Postman",
    ],
    tags: ["React", "Nest.js", "Docker", "Vercel", "Jest", "Postman"],
  },
  {
    role: "Full Stack Developer – Internship",
    company: "Technologica Oriental",
    link: "https://technologica.ma/",
    logo: "/technologica.jpg",
    date: "03/2024 – 04/2024 • Oujda, Morocco",
    description: "Development of an e-commerce web application",
    points: [
      "Managed authentication and user roles (JWT, sessions, admin/client roles)",
      "Performed unit testing (Jest) and API testing (Postman)",
      "Integrated Stripe for secure online payments",
      "Designed and developed the frontend using React.js with Tailwind CSS for a modern and responsive interface",
      "Used Git for version control and team collaboration",
    ],
    tags: ["JWT", "Stripe", "React", "Tailwind", "Jest", "Postman", "Git"],
  },
  {
    role: "School Event Organization",
    company: "Institut Français Maroc",
    link: "https://if-maroc.org/",
    logo: "/maroc.jpg",
    date: "2023 • Oujda, Morocco",
    description: "Volunteer for organizing the open day and educational workshops",
    points: [
      "Welcoming visitors, guiding participants, coordinating with teachers and students to ensure smooth execution of activities",
    ],
    tags: ["Event Planning", "Collaboration", "Communication"],
  },
];

export default function Experience() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 bg-white dark:bg-gray-950">
      <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
        Experience
      </h2>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-800 p-8 rounded-2xl"
          >
            {/* Logo + Role + Company */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
              {/* Logo */}
              <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 flex-shrink-0">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {exp.role}
                </h3>
                <div className="flex justify-center md:justify-start items-center gap-2 text-lg font-semibold text-gray-600 dark:text-gray-300">
                  {exp.company}
                  <a href={exp.link} target="_blank" rel="noreferrer">
                    <FiExternalLink className="inline ml-1" />
                  </a>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {exp.date}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-700 dark:text-gray-300 text-base">
              {exp.description}
            </p>

            {/* Bullet Points */}
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
              {exp.points.map((point, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-blue-500">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {exp.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
