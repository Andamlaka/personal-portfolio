import { FaLinkedin, FaBehance, FaYoutube } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-24 bg-white dark:bg-[#030712] text-gray-900 dark:text-white">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
        Let's work together!
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl mb-6">
        Let's begin by discussing the details of the project to make sure we are on the same page.
      </p>

      {/* Email with hover swap */}
      <a
        href="mailto:youremail@example.com"
        className="group relative inline-flex items-center justify-center"
      >
        {/* Arrow + email */}
        <span className="flex items-end gap-2 text-xl sm:text-2xl font-semibold relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 sm:w-6 h-5 sm:h-6 text-black dark:text-white transform transition-transform duration-300 origin-left -rotate-45 group-hover:rotate-0 translate-y-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
            />
          </svg>

          {/* Email text */}
          <span className="text-black dark:text-white transition-opacity duration-300 group-hover:opacity-0 self-end">
            mohssinem32@gmail.com
          </span>

          {/* Hover text */}
          <span className="absolute left-8 text-black dark:text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-sm sm:text-base md:text-lg">
            Let&apos;s talk
          </span>
        </span>

        {/* Underline */}
        <span className="absolute -bottom-1 left-0 h-[1px] w-full bg-black dark:bg-white transition-colors group-hover:bg-current" />
      </a>

      {/* Social icons */}
      <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-8 text-gray-700 dark:text-gray-300">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <FaLinkedin size={28} className="sm:w-7 sm:h-7" />
        </a>
        <a
          href="https://behance.net"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
        >
          <FaBehance size={28} className="sm:w-7 sm:h-7" />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
        >
          <FaYoutube size={28} className="sm:w-7 sm:h-7" />
        </a>
      </div>
    </section>
  );
}
