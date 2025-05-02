import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-white">
          Juanj72
        </div>
        <div className="hidden md:flex space-x-4">
          <a className="text-white hover:text-blue">Home</a>
          <a className="text-white hover:text-blue">About</a>
          <a className="text-white hover:text-blue">Posts</a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
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
      {/* Menú desplegable con transición */}
      <div
        className={`md:hidden px-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <a
          className="block py-2 text-white hover:text-blue"
          onClick={() => setIsOpen(false)}
        >
          Home
        </a>
        <a
          className="block py-2 text-white hover:text-blue"
          onClick={() => setIsOpen(false)}
        >
          About
        </a>
        <a
          className="block py-2 text-white hover:text-blue"
          onClick={() => setIsOpen(false)}
        >
          Posts
        </a>
      </div>
    </nav>
  );
};
