
import React from 'react';
import { FaCode, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import myPhoto from '../supribaground.png';
import cvFile from '../supricv.pdf';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-green-100 via-green-50 to-amber-50 px-6 pt-16">
      
      {/* Top Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-bold text-green-900 mb-12"
      >
        I'm Supriyanto.
      </motion.h1>

      {/* Main Content */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-64 h-80 bg-profile-bg rounded-t-full overflow-hidden shadow-lg"
        >
          <img
            src={myPhoto}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center md:text-left flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
            I'm a Student of the International Informatics Engineering Program at UII.
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            I'm a 3rd-year Informatics Engineering student passionate about Software Engineering. 
            I love learning new skills and tools, and I'm always looking for ways to grow and improve.
          </p>
          <p className="text-gray-700 text-lg">
          Currently, I'm focusing on both frontend and backend development. 
          I enjoy working with creative teams and building solutions that make an impact.
          </p>

          {/* Buttons */}
          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start mt-12">
            <a
              href={cvFile}
              download="Supriyanto_CV.pdf"
              className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition"
            >
              Download CV
            </a>
            <a
              href="mailto:supriyanto031003@gmail.com"
              className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-full font-semibold hover:bg-green-600 hover:text-white transition"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
