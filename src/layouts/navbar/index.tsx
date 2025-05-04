import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0a0a23] shadow-md text-gray-100 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="">
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Juanj72
            </span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="hover:text-indigo-400 transition-colors duration-300">
            Home
          </Link>
          <Link to="about" className="hover:text-indigo-400 transition-colors duration-300">
            About
          </Link>
          <Link to="projects" className="hover:text-indigo-400 transition-colors duration-300">
            Projects
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable con transición */}
      <div
        className={`md:hidden flex flex-col items-center px-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link
          to=""
          className="block py-2 hover:text-indigo-400 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to=""
          className="block py-2 hover:text-indigo-400 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to=""
          className="block py-2 hover:text-indigo-400 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Posts
        </Link>
      </div>
    </nav>
  );
};
