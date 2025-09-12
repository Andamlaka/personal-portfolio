{/* Buttons */}
<div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
  {/* Live Button */}
  <a
    href={project.link}
    target="_blank"
    rel="noreferrer"
    className="flex items-center justify-center gap-2 bg-emerald-400 hover:bg-emerald-500 text-black font-medium px-4 py-2 rounded-lg transition"
  >
    <FiEye className="w-5 h-5" />
    See Live
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
