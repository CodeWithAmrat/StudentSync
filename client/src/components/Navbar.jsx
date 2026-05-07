import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-white/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Gradient Logo */}
          <div className="flex-shrink-0 font-extrabold text-2xl tracking-tight">
            <Link to="/" className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-80 transition">
              StudentSync
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/"
              className="text-slate-600 hover:text-blue-600 transition font-medium"
            >
              Home
            </Link>
            <Link
              to="/directory"
              className="text-slate-600 hover:text-blue-600 transition font-medium"
            >
              Directory
            </Link>
            <a
              href="/#feedback-section"
              className="text-slate-600 hover:text-blue-600 transition font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
               onClick={toggleMenu}
               className="text-slate-600 hover:text-blue-600 focus:outline-none transition"
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

      {/* Mobile Navigation (Frosted Glass Menu) */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              to="/"
              onClick={toggleMenu}
              className="block px-3 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition font-medium"
            >
              Home
            </Link>
            <Link
              to="/directory"
              onClick={toggleMenu}
              className="block px-3 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition font-medium"
            >
              Directory
            </Link>
            <a
              href="/#feedback-section"
              onClick={toggleMenu}
              className="block px-3 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}