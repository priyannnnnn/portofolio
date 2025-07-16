"use client"
import { motion } from "framer-motion"
import { ExternalLink, Github, Smartphone, Globe, Award } from "lucide-react"
// import stunting from '../images/stunting.jpg';
import stunting from '../images/stuntingg.png';
import anyfarm from '../images/TemanTernakk.png';
import pkm from '../images/pkm-RE.png'
import gemastik from '../images/gemastik.jpg';
import MuslimAr from '../images/muslim.png'
import english2 from '../images/english2.jpg'
// import english2 from '../images/TemanTernakk.png'
import mitrakota from '../images/mitrakota.png'

const Projects = () => {
  const projects = [
    {
      title: "English Test Platform",
      description:
        "A comprehensive web application for English proficiency testing with real TOEFL-style questions and detailed skill analysis.",
      longDescription:
          "Built with React.js and Tailwind CSS on the frontend, and Java Spring Boot with PostgreSQL on the backend, this platform provides comprehensive English testing capabilities including TOEFL preparation, skill assessment, and detailed performance analytics. The system is deployed on a reliable VPS for stable access and scalability.",
      link: "https://github.com/priyannnnnn/BackEnd-EnglishTest",
      image:english2,
      type: "Web Application",
      technologies: ["React.js", "Tailwind CSS", "PostgreSQL", "Java Spring Boot", "VPS"],
      features: ["TOEFL-style Testing", "Performance Analytics", "Skill Assessment", "Progress Tracking"],
      status: "Completed",
      icon: <Globe className="w-5 h-5" />,
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "StuntGuard",
      description:
        "Mobile application for stunting prevention in children and pregnant women through daily nutrition tracking and health monitoring.",
      longDescription:
        "React Native application with comprehensive nutrition tracking, health monitoring, and educational resources for preventing stunting in children and supporting maternal health.",
      link: "https://github.com/priyannnnnn/StuntGuardMobile",
      image:stunting,
      type: "Mobile Application",
      technologies: ["React Native", "Firebase", "React Redux", "TensorFlow"],
      features: ["Nutrition Tracking", "Health Monitoring", "Educational Content", "Progress Reports"],
      status: "Completed",
      icon: <Smartphone className="w-5 h-5" />,
      color: "from-emerald-600 to-teal-600",
    },
    {
      title: "Temanternak",
      description:
        "Real-time quail farm management system with IoT integration for monitoring and managing quail cages remotely.",
      longDescription:
        "Comprehensive farm management solution with IoT sensors, real-time monitoring, and mobile application for remote farm management and optimization.",
      link: "https://play.google.com/store/apps/details?id=com.temanternak",
      image: anyfarm,
      type: "Mobile Application",
      technologies: ["React Native", "Kotlin", "Spring Boot", "PostgreSQL", "IoT"],
      features: ["Real-time Monitoring", "IoT Integration", "Data Analytics", "Remote Control"],
      status: "Published",
      icon: <Smartphone className="w-5 h-5" />,
      color: "from-green-600 to-emerald-600",
    },
    {
      title: "RL Glass Myopia Therapy",
      description:
        "Innovative mobile application utilizing low-level red light technology glasses for myopia therapy and education.",
      longDescription:
        "Medical technology application combining hardware integration with mobile software for myopia treatment using red light therapy, including progress tracking and educational resources.",
      link: "https://bit.ly/supriPKM",
      image: pkm,
      type: "Medical Technology",
      technologies: ["React Native", "Bluetooth Integration", "Health APIs", "Data Analytics"],
      features: ["Hardware Integration", "Therapy Tracking", "Medical Reports", "Educational Content"],
      status: "Research Project",
      icon: <Award className="w-5 h-5" />,
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "Muslim AR",
      description:
        "AR-powered Islamic application for prayer guidance and Quran recitation with motion detection and voice feedback.",
      longDescription:
        "Augmented Reality Islamic application featuring prayer guidance, Quran recitation with Tajweed learning, motion detection for prayer movements, and voice-based feedback system.",
      link: "https://github.com/priyannnnnn/APLIKASI_AL-QURAN_BerkahSelalu",
      image: MuslimAr,
      type: "AR Mobile Application",
      technologies: ["React Native", "ARCore", "Voice Recognition", "Machine Learning"],
      features: ["AR Prayer Guidance", "Voice Recognition", "Motion Detection", "Tajweed Learning"],
      status: "Completed",
      icon: <Smartphone className="w-5 h-5" />,
      color: "from-orange-600 to-red-600",
    },
    {
      title: "Mitra Kota",
      description:
        "Smart city platform for reporting government facility issues and tracking resolution progress with citizen feedback system.",
      longDescription:
        "Comprehensive smart city solution enabling citizens to report infrastructure issues, track resolution progress, and provide feedback to government agencies for improved public services.",
      link: "https://github.com/Ahmedalghaili/SmartCity",
      image: mitrakota,
      type: "Web Application",
      technologies: ["React.js", "MySQL", "PHP", "LLM"],
      features: ["Issue Reporting", "Progress Tracking", "Citizen Feedback", "Government Dashboard"],
      status: "Completed",
      icon: <Globe className="w-5 h-5" />,
      color: "from-cyan-600 to-blue-600",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-100 text-emerald-800"
      case "Published":
        return "bg-blue-100 text-blue-800"
      case "Research Project":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-slate-100 text-slate-800"
    }
  }

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of innovative software solutions spanning mobile applications, web platforms, and emerging
            technologies that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    {project.icon}
                    <span className="text-xs font-medium text-slate-700">{project.type}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                <p className="text-sm text-slate-500 mb-6 leading-relaxed">{project.longDescription}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 bg-gradient-to-r ${project.color} text-white rounded text-xs font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-xs text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium`}
                  >
                    {project.link.includes("github") ? <Github size={16} /> : <ExternalLink size={16} />}
                    {project.link.includes("github") ? "View Code" : "View Project"}
                  </a>
                  <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">3</div>
              <div className="text-slate-600">Published Apps</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-slate-600">App Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">5</div>
              <div className="text-slate-600">Technologies Mastered</div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default Projects
