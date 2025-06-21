'use client';

// @flow strict
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <Link
              href="/"
              className="text-white text-2xl font-bold">
                <span className="hidden md:inline">DHANIN GEORGE</span>
                <span className="md:hidden">DG</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-4">
              <li>
                <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
                  <div className="text-sm text-white transition-colors duration-300 hover:text-gray-300">ABOUT</div>
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
                  <div className="text-sm text-white transition-colors duration-300 hover:text-gray-300">EXPERIENCE</div>
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
                  <div className="text-sm text-white transition-colors duration-300 hover:text-gray-300">SKILLS</div>
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education">
                  <div className="text-sm text-white transition-colors duration-300 hover:text-gray-300">EDUCATION</div>
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#learning">
                  <div className="text-sm text-white transition-colors duration-300 hover:text-gray-300">LEARNING</div>
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
                  <div className="text-sm text-white transition-colors duration-300 hover:text-gray-300">PORTFOLIO</div>
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#contact">
                  <div className="text-sm text-white transition-colors duration-300 hover:text-gray-300">CONTACT</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 right-0 z-[100] bg-black/95 backdrop-blur-sm`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white" href="/#about">
            ABOUT
          </Link>
          <Link className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white" href="/#experience">
            EXPERIENCE
          </Link>
          <Link className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white" href="/#skills">
            SKILLS
          </Link>
          <Link className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white" href="/#education">
            EDUCATION
          </Link>
          <Link className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white" href="/#learning">
            LEARNING
          </Link>
          <Link className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white" href="/#projects">
            PORTFOLIO
          </Link>
          <Link className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white" href="/#contact">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;