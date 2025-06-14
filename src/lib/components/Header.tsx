"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full">
      <div className="w-full p-6">
        <div className="flex md:justify-center justify-between md:items-center items-start w-full">
          <div className="flex flex-col gap-8 items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0 }}
            >
              <div className="flex-shrink-0">
                <h1 className="md:text-6xl text-4xl font-medium text-gray-900 mb-2">
                  Zoia Lu
                </h1>
                <p className="md:text-2xl text-xl text-gray-900 font-light md:text-center">
                  Retoucher
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <nav className="hidden md:flex items-center justify-center gap-5">
                <Link href="/">
                  <span className="text-gray-700 hover:text-gray-400 transition-all px-3 py-2 rounded-md text-xs font-medium">
                    Home
                  </span>
                </Link>
                <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                <Link href="/about">
                  <span className="text-gray-700 hover:text-gray-400 transition-all px-3 py-2 rounded-md text-xs font-medium">
                    About
                  </span>
                </Link>
                <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                <Link href="/contact">
                  <span className="text-gray-700 hover:text-gray-400 transition-all px-3 py-2 rounded-md text-xs font-medium">
                    Contact
                  </span>
                </Link>
              </nav>
            </motion.div>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-gray-400 transition-all z-30 cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 z-20 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden
    ${isMobileMenuOpen ? "translate-x-0 pointer-events-auto opacity-100" : "translate-x-full pointer-events-none opacity-0"}
  `}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 mt-16">
          <Link href="/">
            <span className="block text-gray-700 hover:bg-gray-100 hover:text-gray-400 transition-all px-3 py-2 rounded-md text-base font-medium">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="block text-gray-700 hover:bg-gray-100 hover:text-gray-400 transition-all px-3 py-2 rounded-md text-base font-medium">
              About
            </span>
          </Link>
          <Link href="/contact">
            <span className="block text-gray-700 hover:bg-gray-100 hover:text-gray-400 transition-all px-3 py-2 rounded-md text-base font-medium">
              Contact
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
