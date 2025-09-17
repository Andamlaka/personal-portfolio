import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaBehance, FaYoutube } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-secondary dark:text-gray-300 font-manrope font-semibold text-base'
      : 'text-primary dark:text-white hover:text-secondary dark:hover:text-secondary font-manrope font-semibold text-base';

  return (
    <nav className='fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md bg-white dark:bg-primary text-primary dark:text-white'>
      <div className='max-w-7xl mx-auto px-4 flex items-center justify-between h-16'>
        {/* Left: Logo */}
        <div className='flex items-center cursor-pointer'>
          <h1 className='text-xl sm:text-2xl font-semibold leading-[29px] text-primary dark:text-light'>
            Mohammed
          </h1>
          <h1 className='text-xl sm:text-2xl font-light leading-[29px] text-secondary dark:text-secondary ml-1'>
            Mouhssine
          </h1>
        </div>

        {/* Right: Desktop Links */}
        <div className='hidden lg:flex items-center space-x-4 lg:space-x-6 ml-auto'>
          <NavLink to='/' className={linkClass}>
            Home page
          </NavLink>
          <NavLink to='/about' className={linkClass}>
            About me
          </NavLink>
          <NavLink to='/portfolio' className={linkClass}>
            Portfolio
          </NavLink>
          <NavLink to='/blog' className={linkClass}>
            Blog
          </NavLink>

          <a
            href='#'
            className='text-gray-600 text-xl dark:text-gray-300 hover:text-blue-500'
          >
            <FaLinkedin />
          </a>
          <a
            href='#'
            className='text-gray-600 text-xl dark:text-gray-300 hover:text-blue-500'
          >
            <FaBehance />
          </a>
          <a
            href='#'
            className='text-gray-600 text-xl dark:text-gray-300 hover:text-red-600'
          >
            <FaYoutube />
          </a>

          <button
            className='bg-primary w-auto text-sm sm:text-base dark:bg-white font-semibold font-dm  text-white
           dark:text-black px-4 sm:px-6 py-2 rounded-full ml-2 sm:ml-4 cursor-pointer'
          >
            Get in touch
          </button>

          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <div className='lg:hidden ml-auto flex items-center'>
          <button
            className='text-2xl p-2 cursor-pointer'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle menu'
          >
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='lg:hidden bg-white dark:bg-primary shadow-lg border-t border-gray-200 dark:border-gray-700 cursor-pointer'>
          <div className='flex flex-col px-4 py-4 space-y-4'>
            {/* Links */}
            <NavLink
              to='/'
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              Home page
            </NavLink>
            <NavLink
              to='/about'
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              About me
            </NavLink>
            <NavLink
              to='/portfolio'
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              Portfolio
            </NavLink>
            <NavLink
              to='/screenshots'
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              Screenshots
            </NavLink>

            {/* Social Icons */}
            <div className='flex items-center justify-start space-x-4 mt-2'>
              <a
                href='#'
                className='text-gray-600 text-xl dark:text-gray-300 hover:text-blue-500'
              >
                <FaLinkedin />
              </a>
              <a
                href='#'
                className='text-gray-600 text-xl dark:text-gray-300 hover:text-blue-500'
              >
                <FaBehance />
              </a>
              <a
                href='#'
                className='text-gray-600 text-xl dark:text-gray-300 hover:text-red-600'
              >
                <FaYoutube />
              </a>
            </div>

            {/* Get in touch button */}
            <button
              className='w-full sm:w-auto bg-primary text-sm sm:text-base leading-normal 
             dark:bg-white font-semibold font-dm text-white dark:text-black 
             px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mt-2 cursor-pointer'
              onClick={() => setMenuOpen(false)}
            >
              Get in touch
            </button>

            {/* Theme toggle */}
            <div className='mt-2'>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
