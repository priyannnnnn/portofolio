"use client"
import { motion } from "framer-motion"
import { Calendar, MapPin, ChevronRight } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer (Freelance)",
      organization: "PT Javan Cipta Solusi",
      period: "Apr 2026 — Present",
      location: "Yogyakarta, Indonesia",
      description:
        "Built the Syarq AOS platform using a three-layer architecture: React.js frontend, Golang backend, and Laravel for authentication and admin management. Managed and maintained the development server environment to ensure a stable workflow.",
      contributions: [
        "Built Syarq AOS (aosonline.merapi.alurkerja.com) with React.js + Golang + Laravel three-layer architecture",
        "Managed development server: service configuration, environment variables, and dependency management",
        "Integrated Odoo (Sales, Inventory, CRM) into Syarq store service (store.merapi.syarq.com), enabling MSMEs to manage operations digitally",
        "Maintained platform stability across React frontend, Golang services, REST APIs, and PostgreSQL databases",
      ],
      color: "from-violet-600 to-purple-700",
    },
    {
      title: "Full-Stack Developer Intern",
      organization: "PT Javan Cipta Solusi",
      period: "Oct 2025 — Apr 2026",
      location: "Yogyakarta, Indonesia",
      description:
        "Developed and maintained frontend UIs for product landing and application pages using React, alongside backend business logic in Golang, contributing to the core platform at alurkerja.com.",
      contributions: [
        "Developed React frontend and Golang backend for alurkerja.com core platform",
        "Configured and managed staging server environments for QA testing and client validation",
        "Engineered a PoC for Bank BTPN — ARIMA, SARIMA, and LSTM time-series forecasting with React + Django REST backend",
        "Contributed to code reviews to maintain code quality across the team",
        "Debugged cross-layer issues spanning React, Golang services, REST APIs, and PostgreSQL",
      ],
      color: "from-blue-600 to-indigo-700",
    },
    {
      title: "CEO & Founder · Full-Stack Developer",
      organization: "TemanTernak Farm",
      period: "Dec 2023 — Present",
      location: "Yogyakarta, Indonesia",
      description:
        "Founded TemanTernak — a digital platform for smallholder farmers. Led a cross-functional team of 3 (backend engineers + UI/UX designer) and shipped both a mobile app and a web-based ERP platform.",
      contributions: [
        "Led sprint planning, task breakdown, and stakeholder communication for a team of 3",
        "Built and shipped a cross-platform React Native mobile app with 5 core features: farm tracking, income/expense recording, livestock production logging",
        "Engineered RESTful API with JWT-based authentication",
        "Managed the full Google Play Store release cycle from build to deployment",
        "Drove business development for quail seed and egg distribution",
      ],
      color: "from-green-600 to-emerald-700",
    },
    {
      title: "Assistant Lecturer — Mobile Development",
      organization: "Laboratorium Terpadu Informatika UII",
      period: "Sep 2025 — May 2026",
      location: "Yogyakarta, Indonesia",
      description:
        "Assisted 60+ students across international and regular classes in developing mobile applications using Kotlin. Guided students step by step through building applications with hands-on learning.",
      contributions: [
        "Mentored 60+ students in international and regular classes on Kotlin mobile development",
        "Guided students through practical application building with Kotlin and Android Studio",
        "Provided hands-on support for debugging and architectural decisions",
      ],
      color: "from-teal-600 to-cyan-700",
    },
    {
      title: "Assistant Lecturer — Information Systems Development",
      organization: "Laboratorium Terpadu Informatika UII",
      period: "Mar 2025 — Aug 2025",
      location: "Yogyakarta, Indonesia",
      description:
        "Assisted 60+ students in developing information systems with a focus on designing guidance systems using BPMN and LLM integration.",
      contributions: [
        "Assisted 60+ students in international and regular classes in designing intelligent information systems",
        "Guided students in BPMN workflow design and LLM integration",
        "Focused on visualizing key concepts and practical system design",
      ],
      color: "from-sky-600 to-blue-700",
    },
    {
      title: "Leader",
      organization: "Programming Study Club (PSC) — UII",
      period: "Jan 2025 — Nov 2025",
      location: "Yogyakarta, Indonesia",
      description:
        "Led programming club activities, organized regular meetings, developed structured learning materials, facilitated coding workshops, and hosted guest lectures to enhance technical skills.",
      contributions: [
        "Led club activities and regular meetings to foster member engagement",
        "Developed structured learning materials and facilitated coding workshops",
        "Hosted guest lectures and collaborated with industry professionals",
        "Partnered with other student organizations to broaden learning opportunities",
      ],
      color: "from-emerald-600 to-teal-700",
    },
    {
      title: "Leader",
      organization: "UII Football Student Activity Unit",
      period: "Feb 2024 — Jul 2025",
      location: "Yogyakarta, Indonesia",
      description:
        "Led and managed the UII Football club — overseeing strategic planning, policy development, and long-term goals. Represented UII at scholarship and talent outreach events.",
      contributions: [
        "Led strategic planning, policy development, and long-term goals for the club",
        "Coordinated management team to improve operational efficiency",
        "Represented UII in regional and national competitions",
        "Delivered keynote presentations at 'Scholarship for Athletes & Arts' program, SMANKO Semarang",
      ],
      color: "from-orange-600 to-red-700",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Professional Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My progression through academic, organizational, and professional roles showcasing leadership, mentoring,
            and technical delivery capabilities.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-indigo-600 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>

                <div className="lg:ml-20">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${exp.color} p-6 text-white`}>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                          <p className="text-lg opacity-90">{exp.organization}</p>
                        </div>
                        <div className="flex flex-col lg:items-end gap-2">
                          <div className="flex items-center gap-2 text-sm opacity-90">
                            <Calendar size={16} />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-2 text-sm opacity-90">
                            <MapPin size={16} />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-slate-700 mb-6 leading-relaxed">{exp.description}</p>

                      <div>
                        <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                          <ChevronRight size={20} className="text-blue-600" />
                          Key Contributions
                        </h4>
                        <ul className="space-y-2">
                          {exp.contributions.map((contribution, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-600">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{contribution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
