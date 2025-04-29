import React from 'react';
import { motion } from 'framer-motion';

const ResumeSection = () => {
  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-green-100 via-green-50 to-amber-50 px-6 pt-16 text-green-900"
    >
      <div className="max-w-5xl w-full">

        {/* Education Section */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Education
          </motion.h2>

          <div className="relative border-l-2 border-green-800 pl-8 space-y-12">
            {[
              {
                title: "Universitas Islam Indonesia",
                period: "2022 — 2026",
              },
              {
                title: "State Senior High School 1 Wonotunggal",
                period: "2019 — 2022",
              },
            ].map((item, index) => (
              <div key={index} className="relative text-left">
                <div className="absolute -left-4 top-2 w-3 h-3 bg-green-800 rounded-full"></div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-green-700 text-sm mb-2">{item.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Experience
          </motion.h2>

          <div className="relative border-l-2 border-green-800 pl-8 space-y-12">
            {[
              {
                title: "Teaching Assistant – SRIKEL Lab",
                period: "Mar 2025 — Present",
                desc: "As a Teaching Assistant at SRIKEL (Informatics Department, Universitas Islam Indonesia), assisted with lab sessions guiding system design with BPMN and LLM integration."
              },
              {
                title: "Leader Pragramming Study Club",
                period: "Des 2024 — Present",
                desc: "Lead club activities and conduct regular meetings to encourage member engagement and learning. Develop structured learning materials and host coding workshops and guest lectures."
              },
              {
                title: "Leader UKM Football",
                period: "Apr 2024 — Present",
                desc: "Design and establish a clear Vision and Mission, provide direction to be achieved, and build motivation to work with high dedication. Responsible for and ensure effective communication between the management and members of the Unisi Football team."
              },
              {
                title: "Staff Sinera",
                period: "Feb 2024 — Present",
                desc: "Become an integral part of PPKO Ormawa by contributing to village service programs. Support initiatives that enhance community development and self-reliance. Help increase the village’s added value toward achieving independence."
              },
              {
                title: "Student Executive Institute",
                period: "Jul 2023 — Jan 2024",
                desc: "Analyze problems related to student studies around campus and find solutions. Create 'Action' events that aim to intellectualize current issues among students."
              },
              {
                title: "Programmer at Temanternak Farm",
                period: "Oct 2022 — Jan 2024",
                desc: "Developed mobile applications using React Native with a Kotlin backend, featuring data input and visualization capabilities. Implemented and enhanced features to improve functionality and performance. Deployed, monitored, and maintained server infrastructure."
              }
            ].map((item, index) => (
              <div key={index} className="relative text-left">
                <div className="absolute -left-4 top-2 w-3 h-3 bg-green-800 rounded-full"></div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-green-700 text-sm mb-2">{item.period}</p>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="my-20">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            My Skills
          </motion.h2>

          <div className="bg-white p-8 rounded-2xl shadow-md max-w-3xl mx-auto space-y-6">
            {[
              { title: "Mobile Development", level: 85 },
              { title: "Web Development", level: 60 },
              { title: "Back End Developer", level: 55 },
              { title: "DevOps", level: 40 },
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <h5 className="text-lg font-semibold text-green-900">{skill.title}</h5>
                  <span className="text-green-800">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-green-100 rounded-full">
                  <div
                    className="h-full bg-green-700 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default ResumeSection;
