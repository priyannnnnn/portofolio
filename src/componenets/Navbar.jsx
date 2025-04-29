import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-green-800">My Portfolio</div>
        <div className="space-x-6 text-base">
          <a href="#about" className="text-gray-700 hover:text-green-600">About</a>
          <a href="#projects" className="text-gray-700 hover:text-green-600">Projects</a>
          <a href="#resume" className="text-gray-700 hover:text-green-600">Resume</a> {/* ➡️ Added Resume Link */}
          <a href="#contact" className="text-gray-700 hover:text-green-600">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
