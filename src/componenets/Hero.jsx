import React from 'react';
import { FaCode, FaArrowRight } from 'react-icons/fa';
import myPhoto from '../supribaground.png';


const Hero = () => {
  return (
    <section className="bg-black text-white h-screen flex items-center justify-center px-6" id="home">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            I&apos;M S<span className="bg-lime-300 text-black px-2 rounded-full">U</span>PRI <br />
            <span className="text-purple-400">Mobile</span> Developer
          </h1>
          <p className="text-gray-400 max-w-md mb-6">
             I design and build modern mobile applications with intuitive UI and seamless user experience.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-lime-300 hover:text-white transition-all font-medium text-lg"
          >
            Get Started <FaArrowRight />
          </a>

          <div className="mt-10">
            <h2 className="font-bold text-white mb-2">SERVICES I’M PROVIDING</h2>
            <div className="flex gap-4">
              <span className="bg-lime-300 text-black px-4 py-2 rounded-full font-semibold">Android Dev</span>
              <span className="border border-purple-400 text-purple-400 px-4 py-2 rounded-full font-semibold">iOS Dev</span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative">
          <div className="bg-purple-500 p-6 rounded-2xl relative z-10">
            <img
              src={myPhoto}
              alt="Profile"
              className="w-40 h-40 object-cover rounded-xl mx-auto mb-4"
            />
            <div className="text-white text-center space-y-2">
              <p className="font-semibold text-xl">SUPRIYANTO</p>
              <p className="text-sm">Android Dev & iOS Dev</p>
            </div>
          </div>

          {/* Floating icons/elements */}
          <div className="absolute top-[-30px] right-[20px] bg-yellow-200 p-2 rounded-md shadow-lg text-black font-mono">
            &lt;/&gt;
          </div>
          <div className="absolute bottom-[-30px] right-[30px] bg-black border border-white px-3 py-1 rounded-md text-sm">
            CSS
          </div>
          <div className="absolute top-0 left-[40%] bg-black border border-white px-3 py-1 rounded-md text-sm">
            JAVA
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
