'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt'; // Install with: npm install react-parallax-tilt
import myPhoto from '../supri1.jpeg';
import stunting from '../images/stunting.jpg';
import anyfarm from '../images/anyfarm.jpg';
import pkm from '../images/pkm.jpg'
import gemastik from '../images/gemastik.jpg';
import english2 from '../images/english2.jpg'
import mitrakota from '../images/mitrakota.png'

// Project Data
const projects = [
  {
    title: 'English Test',
    description: 'A Web Website to find out how much you understand English by testing how much you know English with real tests like TOEFL, and summarize your skills.',
    link: 'https://github.com/priyannnnnn/BackEnd-EnglishTest',
    image: english2,
  },
  {
    title: 'StuntGuard',
    description: 'A Mobile application to prevent stunting in children and pregnant women through daily intake activities.',
    link: 'https://github.com/priyannnnnn/StuntGuardMobile',
    image: stunting,
  },
  {
    title: 'Temanternak',
    description: 'A Mobile application to manage and monitor quail cages in real time and at any time.',
    link: 'https://play.google.com/apps/internaltest/4701621904094739285',
    image: anyfarm,
  },
  {
    title: 'RL Glass Myopi',
    description: 'A Mobile application to use low-level red light technology glasses for myopia therapy and myopia education.',
    link: 'https://github.com/priyannnnnn/StuntGuardMobile',
    image: pkm,
  },
  {
    title: 'EcoStyles',
    description: 'An Mobile application used to sell and donate clothes, and can be an educational type of fabric, and a chatbot that can ask about styles.',
    link: 'https://drive.google.com/file/d/1wxDx_2gotImGoKMfA0W95nEgLSW8K07_/view?usp=sharing',
    image: gemastik,
  },
  {
    title: 'Project Six',
    description: 'A Website to be used to report government facilities and to provide feedback to the government and check the tracking of your reports.',
    link: 'https://github.com/Ahmedalghaili/SmartCity',
    image: mitrakota,
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-100" id="projects">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Tilt key={index} glareEnable={true} glareMaxOpacity={0.3} scale={1.02} transitionSpeed={450}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 flex flex-col"
              >
                {/* Project Image */}
                <img
                  src={typeof project.image === 'string' ? project.image : URL.createObjectURL(project.image)}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-semibold mb-2 text-green-900">{project.title}</h3>
                  <p className="text-gray-700 mb-4 flex-1">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-semibold hover:underline mt-auto"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
