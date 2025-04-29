import React from 'react';
import { motion } from 'framer-motion';

const ResumeSection = () => {
  return (
    <section id="resume" className="min-h-screen bg-[#0d0d0d] text-white py-20 px-8">
      <div className="max-w-5xl mx-auto">

        {/* Education Section */}
        <section className="mb-20">
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Education
          </motion.h2>

          <div className="relative border-l-2 border-yellow-400 pl-8 space-y-12 text-center">
            {/* Timeline Items */}
            {[
              {
                title: "Universitas Islam Indonesia",
                period: "2022 — 2026",
                desc: "Bachelor's degree in Informatics with a GPA of 3.93; language of study was English. Demonstrated strong academic performance and awarded the Future Global Leaders Scholarships (FGLS) from the university."
              },
              {
                title: "Emirates International University",
                period: "2020 — 2022",
                desc: "Completed an intensive Petroleum Engineering diploma with a GPA of 92%, ranking first in the class, and received a scholarship from the Bazara Foundation."
              },
              {
                title: "Al-Nawabeg Private School",
                period: "2016 — 2019",
                desc: "Graduated with a GPA of 94%, specializing in the science branch, and received a scholarship from the school."
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-4 top-1.5 w-3 h-3 bg-yellow-400 rounded-full"></div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-yellow-400 text-sm mb-2">{item.period}</p>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16"
          >
            Experience
          </motion.h2>

          <div className="relative border-l-2 border-yellow-400 pl-8 space-y-12">
            {/* Timeline Items */}
            {[
              {
                title: "Teaching Assistant – SRIKEL Lab",
                period: "2023 — Present",
                desc: "As a Teaching Assistant at SRIKEL in (Informatics Department, Universitas Islam Indonesia), assisted with lab sessions on desktop, web, and mobile app development, as well as information systems, and supported group projects."
              },
              {
                title: "Teaching Assistant – SIBER Lab",
                period: "2024 — Present",
                desc: "Teaching Assistant at SIBER Lab, supporting various academic and research activities."
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-4 top-1.5 w-3 h-3 bg-yellow-400 rounded-full"></div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-yellow-400 text-sm mb-2">{item.period}</p>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </section>
  );
};

export default ResumeSection;
