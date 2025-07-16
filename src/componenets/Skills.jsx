"use client"
import { motion } from "framer-motion"
import { Code, Database, Smartphone, Globe, Server, PenToolIcon as Tool, Languages, Award } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development",
      level: 85,
      skills: ["React Native", "Kotlin", "Android Studio", "Flutter", "Expo"],
      color: "from-blue-600 to-indigo-700",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Frontend Development",
      level: 80,
      skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Astro"],
      color: "from-emerald-600 to-teal-700",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend Development",
      level: 75,
      skills: ["Java Spring Boot", "Node.js", "Express.js", "RESTful APIs", "GraphQL"],
      color: "from-purple-600 to-pink-700",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database & Cloud",
      level: 70,
      skills: ["PostgreSQL", "MySQL", "Supabase", "Firebase", "Oracle DB"],
      color: "from-orange-600 to-red-700",
    },
    {
      icon: <Tool className="w-6 h-6" />,
      title: "DevOps & Tools",
      level: 65,
      skills: ["GitHub", "Docker", "Postman", "CI/CD", "Linux"],
      color: "from-cyan-600 to-blue-700",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      level: 85,
      skills: ["JavaScript", "TypeScript", "Java", "Kotlin", "Python"],
      color: "from-green-600 to-emerald-700",
    },
  ]

  const certifications = [
    "Oracle SQL Certified",
    "React Native Specialist",
    "Java Spring Boot Developer",
    "Database Design Professional",
  ]

  const languages = [
    { name: "Indonesian", level: "Native", percentage: 100 },
    { name: "English", level: "Advanced", percentage: 85 },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive technical expertise across the full software development lifecycle, from mobile and web
            development to backend systems and database management.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                {/* Progress Bar */}
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm opacity-90">Proficiency</span>
                    <span className="text-sm font-semibold">{category.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-white rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg">
                <Languages className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Languages</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-700">{lang.name}</span>
                    <span className="text-sm text-slate-500">{lang.level}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
