"use client"
import { motion } from "framer-motion"
import { Calendar, MapPin, ChevronRight } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      organization: "Temanternak Farm",
      period: "Feb 2024 — Present",
      location: "Remote",
      description:
        "Developed mobile applications using React Native with a Kotlin backend, featuring data input and visualization capabilities. Implemented and enhanced features to improve functionality and performance.",
      contributions: [
        "Built cross-platform mobile app using React Native for quail farm management",
        "Developed RESTful APIs using Kotlin and Spring Boot framework",
        "Implemented real-time data visualization for farm monitoring",
        "Deployed applications on Google Play Store",
        "Maintained server infrastructure and database optimization",
      ],
      color: "from-green-600 to-emerald-700",
    },
    {
      title: "Teaching Assistant – SRIKEL Lab",
      organization: "Universitas Islam Indonesia",
      period: "Mar 2025 — Present",
      location: "Yogyakarta, Indonesia",
      description:
        "As a Teaching Assistant at SRIKEL (Informatics Department, Universitas Islam Indonesia), assisted with lab sessions guiding system design with BPMN and LLM integration.",
      contributions: [
        "Assisting 60+ students in two classes, international and regular, in developing information systems",
        "Guided more than 60+ students in designing intelligent information systems, with a focus on visualizing key concepts and workflows",
        "Mentor students in software engineering best practices",
      ],
      color: "from-blue-600 to-indigo-700",
    },
    {
      title: "Leader Programming Study Club",
      organization: "Universitas Islam Indonesia",
      period: "Des 2024 — Present",
      location: "Yogyakarta, Indonesia",
      description:
        "Lead club activities and conduct regular meetings to encourage member engagement and learning. Develop structured learning materials and host coding workshops and guest lectures.",
      contributions: [
        "Designed and implemented structured technical roadmaps centered on problem solving and competitive programming.",
        "Organized weekly coding workshops, algorithm training, and internal competitions to prepare members for national-level contests.",
      ],
      color: "from-emerald-600 to-teal-700",
    },
    {
      title: "Web Manager",
      organization: "Sinera & Forsimba",
      period: "Feb 2024 — Present",
      location: "Yogyakarta, Indonesia",
      description:
        "Created village branding websites using Astro and Tailwind CSS. Become an integral part of PPKO Ormawa by contributing to village service programs.",
      contributions: [
        "Develop responsive websites using Astro framework and Tailwind CSS",
        "Implement SEO optimization for better search engine visibility",
        "Create content management systems for village administrators",
        "Support community development initiatives through digital solutions",
      ],
      color: "from-purple-600 to-pink-700",
    },
    {
      title: "Leader UKM Football",
      organization: "Universitas Islam Indonesia",
      period: "Apr 2024 — Jun 2025",
      location: "Yogyakarta, Indonesia",
      description:
        "Design and establish a clear Vision and Mission, provide direction to be achieved, and build motivation to work with high dedication. Responsible for and ensure effective communication between the management and members of the Unisi Football team.",
      contributions: [
        "Lead team of 30+ members in competitive tournaments",
        "Develop strategic planning for team performance improvement",
        "Coordinate training schedules and team building activities",
        "Represent university in inter-university sports competitions",
        "Manage team budget and equipment procurement",
      ],
      color: "from-orange-600 to-red-700",
    },
    {
      title: "Student Executive Institute",
      organization: "Universitas Islam Indonesia",
      period: "Jul 2023 — Jan 2024",
      location: "Yogyakarta, Indonesia",
      description:
        "Analyze problems related to student studies around campus and find solutions. Create 'Action' events that aim to intellectualize current issues among students.",
      contributions: [
        "Conduct research on student academic challenges and propose solutions",
        "Organize intellectual discourse events for student community",
        "Collaborate with faculty to improve academic support systems",
        "Develop policy recommendations for student welfare improvements",
      ],
      color: "from-cyan-600 to-blue-700",
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
