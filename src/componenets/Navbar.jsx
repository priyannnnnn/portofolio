import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">My Portfolio</div>
        <div className="space-x-4">
          <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
