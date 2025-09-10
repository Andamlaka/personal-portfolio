import React, { useEffect, useState } from "react";

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
    <section className="relative flex items-center justify-center lg:justify-start min-h-screen px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black overflow-hidden">
      {/* Floating labels - hidden on small screens */}
      <span className="hidden md:inline absolute bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg animate-bounce
                        top-24 lg:top-40 lg:right-80 right-6">
        User experience
      </span>

      <span className="hidden md:inline absolute bg-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg animate-pulse
                        top-60 lg:top-72 lg:right-60 right-6">
        Analytics
      </span>

      <span className="hidden md:inline absolute bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg animate-bounce
                        bottom-20 lg:right-80 right-6">
        User interactions
      </span>

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center lg:text-left lg:mx-0 lg:pl-20">
        {/* Text block */}
        <div className="px-2 sm:px-6 md:px-12 lg:px-0">
          <h1 className="font-dm font-bold text-2xl sm:text-2xl md:text-3xl lg:text-[40px] leading-tight sm:leading-[56px] lg:leading-[62px] text-black dark:text-white">
            Hi, I’m Momo — Full-Stack Developer
          </h1>

          <p className="mt-6 font-dm text-base sm:text-xl  lg:text-2xl leading-snug text-secondary dark:text-gray-300">
            I enjoy creating products from scratch and improve existing ones.
            <br />
            In simple terms, I develop{" "}
            {/* ROTATING WORD */}
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
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
            {["Frontend", "Backend", "FinTech", "Startups", "ESN"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-2xl font-medium bg-[#FAFAFA] dark:bg-gray-800 text-[16px] sm:text-[18px] md:text-[20px] leading-[21px] border border-gray-300 dark:border-gray-700 text-primary dark:text-gray-200"
              >
                #{t}
              </span>
            ))}
          </div>

          {/* CTA - full width on small screens */}
          <button className="mt-10 w-full h-[45px] sm:w-auto px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full text-lg sm:text-xl font-semibold shadow-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition flex justify-center items-center">
  Let’s talk
</button>

        </div>
      </div>

      {/* Only the rotating word uses this custom animation */}
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
