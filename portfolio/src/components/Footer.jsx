import { FaLinkedin, FaBehance, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-gray-900 text-white  px-6 py-16 text-center md:px-12 lg:px-24">
      <h2 className="text-[22px] sm:text-[26px] md:text-[30px] leading-[30px] sm:leading-[34px] md:leading-[39px] font-dm font-bold text-[rgba(255,255,255,0.52)] mb-6">
        Let&apos;s discuss your project:
      </h2>

      {/* Email link with hover swap */}
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
            className="w-5 sm:w-6 h-5 sm:h-6 text-white transform transition-transform duration-300 origin-left -rotate-45 group-hover:rotate-0 translate-y-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
            />
          </svg>

          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent transition-opacity duration-300 group-hover:opacity-0 self-end">
            mohssinem32@gmail.com
          </span>

          <span className="absolute left-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-sm sm:text-base md:text-lg">
            Let&apos;s talk
          </span>
        </span>

        {/* Underline */}
        <span className="absolute -bottom-1 left-0 h-[1px] w-full bg-white/60 transition-colors group-hover:bg-white" />
      </a>

      {/* Social icons */}
      <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-8 text-white/60">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          <FaLinkedin size={28} className="sm:w-7 sm:h-7" />
        </a>
        <a
          href="https://behance.net"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          <FaBehance size={28} className="sm:w-7 sm:h-7" />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          <FaYoutube size={28} className="sm:w-7 sm:h-7" />
        </a>
      </div>
    </footer>
  );
}
