import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-2xl">
            <a href="/" className="hover:text-blue-200 transition">
              StudentSync
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a
              href="/"
              className="hover:text-blue-200 transition font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-blue-200 transition font-medium"
            >
              About
            </a>
            <a
              href="#features"
              className="hover:text-blue-200 transition font-medium"
            >
              Features
            </a>
            <a
              href="#contact"
              className="hover:text-blue-200 transition font-medium"
            >
              Contact
            </a>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-200 focus:outline-none transition"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="block px-3 py-2 rounded-md hover:bg-blue-600 transition font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md hover:bg-blue-600 transition font-medium"
            >
              About
            </a>
            <a
              href="#features"
              className="block px-3 py-2 rounded-md hover:bg-blue-600 transition font-medium"
            >
              Features
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md hover:bg-blue-600 transition font-medium"
            >
              Contact
            </a>
            <button className="w-full text-left px-3 py-2 rounded-md bg-white text-blue-600 font-medium hover:bg-blue-50 transition">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
