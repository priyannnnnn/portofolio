"use client"
import { motion } from "framer-motion"
import { GraduationCap, Users, Award, Code } from "lucide-react"

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "3rd-year Informatics Engineering student with national recognition from Ministry of Education",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership Roles",
      description: "Leading Programming Study Club and UKM Football while serving as Teaching Assistant",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Expertise",
      description: "Full-stack development with React Native, Next.js, Spring Boot, and modern databases",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Real Impact",
      description: "Developed solutions for stunting prevention, myopia therapy, and agricultural monitoring",
      color: "from-orange-500 to-red-600",
    },
  ]

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              I am a passionate and results-driven third-year Informatics student at Universitas Islam Indonesia,
              actively involved in various leadership and technical roles within the field of Information Technology.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              With strong expertise in software development, system design, and web and mobile application development,
              I have hands-on experience in modern frameworks such as React Native, Next.js, Java Spring Boot, and
              Node.js, supported by PostgreSQL and MySQL databases.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              I currently serve as the Leader of the Programming Study Club and UKM Football, as well as a Teaching
              Assistant at the Information System Development Laboratory, where I guide system design projects
              integrating BPMN and Large Language Models (LLM).
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              I have contributed to projects on stunting prevention, creating a system for myopia therapy using glasses,
              and agricultural monitoring. Honored with national recognition from the Ministry of Education, I am
              passionate about using technology to create practical and real solutions.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div
                  className={`inline-flex p-3 bg-gradient-to-r ${item.color} text-white rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
