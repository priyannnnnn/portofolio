"use client"
import { motion } from "framer-motion"
import { ExternalLink, Github, Smartphone, Globe, Award, Star } from "lucide-react"
// import stunting from '../images/stunting.jpg';
import stunting from '../images/stuntingg.png';
import anyfarm from '../images/app_temanternak.png';
import pkm from '../images/pkm-RE.png'
import MuslimAr from '../images/muslim.png'
import english2 from '../images/english2.jpg'
import mitrakota from '../images/mitrakota.png'
import temanternakErp1 from '../images/temanternakweb-erp.png'
import temanternakErp2 from '../images/temanternakweb-erp1.png'
import aosOnline1 from '../images/AOS_online.png'
import aosOnline2 from '../images/AOS_online1.png'
import syarq from '../images/syarq.png'

const Projects = () => {
  const projects = [
    {
      title: "TemanTernak Poultry Farm ERP",
      description:
        "Web-based ERP platform for small-scale poultry farmers managing 1,000–6,000 quail and layer chickens with full cost-center tracking.",
      longDescription:
        "Designed a species-aware farm → enclosure → flock structure where each flock is an independent cost center throughout its production cycle. Features include egg grading, flock-level feed tracking and FCR calculation, real-time HPP per kg, daily IOFC profitability, customer and pricing management, payment terms, and overdue receivable alerts.",
      link: "https://github.com/priyannnnnn",
      images: [temanternakErp1, temanternakErp2],
      type: "Web ERP Platform",
      technologies: ["React.js", "Laravel", "PostgreSQL", "Tailwind CSS", "REST API"],
      features: ["Egg Grading System", "FCR Calculation", "Real-time HPP/kg", "Daily IOFC Profitability", "Receivable Alerts", "Cost Center Tracking"],
      status: "Production",
      highlight: true,
      icon: <Globe className="w-5 h-5" />,
      color: "from-green-600 to-emerald-600",
    },
    {
      title: "AOS Online — Business Strategy Platform",
      description:
        "Comprehensive Business Strategy & Management Platform for SMEs built on a 12-step AOS (Alignment & Operations System) Framework.",
      longDescription:
        "A guided, step-by-step system that helps business owners design, align, and execute their entire company strategy — from defining core purpose to setting KPIs and generating management reports. Built with React.js frontend, Golang backend, and Laravel for authentication & admin management. Live at aosonline.merapi.alurkerja.com.",
      link: "https://aosonline.merapi.alurkerja.com",
      images: [aosOnline1, aosOnline2],
      type: "Web Application",
      technologies: ["React.js", "Golang", "Laravel", "PostgreSQL", "REST API"],
      features: ["12-Step AOS Framework", "KPI Management", "Strategy Alignment", "Management Reports", "Multi-role Auth", "SME-focused UX"],
      status: "Live",
      highlight: true,
      icon: <Globe className="w-5 h-5" />,
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Syarq — ERP for UMKM (Odoo + AI)",
      description:
        "Production-ready ERP system for Indonesian SMEs pairing Odoo as the operational database with an AI assistant using RAG for natural-language business queries.",
      longDescription:
        "Odoo handles daily recording (inventory, sales, purchases, accounting). A RAG pipeline embeds this data into a vector store so owners can ask questions like \"top-selling products this month?\" and get answers from real records. Delivered: Odoo integration, Django REST API bridge, RAG pipeline, NL query interface, PostgreSQL, Ubuntu deployment.",
      link: "https://syarq.com",
      images: [syarq],
      type: "ERP + AI Platform",
      technologies: ["Odoo", "Django REST", "React.js", "PostgreSQL", "RAG / LLM", "Ubuntu"],
      features: ["Odoo Integration", "RAG Pipeline", "NL Business Queries", "Sales & Inventory", "Django API Bridge", "Ubuntu Deployment"],
      status: "Production",
      highlight: true,
      icon: <Star className="w-5 h-5" />,
      color: "from-violet-600 to-purple-600",
    },
    {
      title: "TemanTernak Mobile App",
      description:
        "Cross-platform mobile app for smallholder farmers with real-time farm activity tracking, income & expense recording, and livestock production logging.",
      longDescription:
        "Led a cross-functional team of 3 (backend + UI/UX). Built 5 core features including real-time farm activity tracking, daily income & expense recording, and livestock production logging. Engineered RESTful API with JWT authentication and managed the full Google Play Store release cycle from build to deployment.",
      link: "https://play.google.com/store/apps/details?id=com.temanternak",
      images: [anyfarm],
      type: "Mobile Application",
      technologies: ["React Native", "JWT Auth", "REST API", "PostgreSQL", "Google Play"],
      features: ["Real-time Farm Tracking", "Income & Expense Log", "Livestock Production Log", "JWT Authentication", "Google Play Published", "Team Leadership"],
      status: "Published",
      icon: <Smartphone className="w-5 h-5" />,
      color: "from-teal-600 to-green-600",
    },
    {
      title: "English Test Platform",
      description:
        "Comprehensive web application for English proficiency testing with real TOEFL-style questions and detailed skill analysis.",
      longDescription:
        "Built with React.js and Tailwind CSS on the frontend, and Java Spring Boot with PostgreSQL on the backend. Provides comprehensive English testing capabilities including TOEFL preparation, skill assessment, and detailed performance analytics deployed on a VPS.",
      link: "https://github.com/priyannnnnn/BackEnd-EnglishTest",
      images: [english2],
      type: "Web Application",
      technologies: ["React.js", "Tailwind CSS", "PostgreSQL", "Java Spring Boot", "VPS"],
      features: ["TOEFL-style Testing", "Performance Analytics", "Skill Assessment", "Progress Tracking"],
      status: "Completed",
      icon: <Globe className="w-5 h-5" />,
      color: "from-sky-600 to-blue-600",
    },
    {
      title: "StuntGuard",
      description:
        "Mobile application for stunting prevention in children and pregnant women through daily nutrition tracking and health monitoring.",
      longDescription:
        "React Native application with comprehensive nutrition tracking, health monitoring, and educational resources for preventing stunting in children and supporting maternal health.",
      link: "https://github.com/priyannnnnn/StuntGuardMobile",
      images: [stunting],
      type: "Mobile Application",
      technologies: ["React Native", "Firebase", "React Redux", "TensorFlow"],
      features: ["Nutrition Tracking", "Health Monitoring", "Educational Content", "Progress Reports"],
      status: "Completed",
      icon: <Smartphone className="w-5 h-5" />,
      color: "from-emerald-600 to-teal-600",
    },
    {
      title: "RL Glass Myopia Therapy",
      description:
        "Innovative mobile application utilizing low-level red light technology glasses for myopia therapy and education.",
      longDescription:
        "Medical technology application combining hardware integration with mobile software for myopia treatment using red light therapy, including progress tracking and educational resources.",
      link: "https://bit.ly/supriPKM",
      images: [pkm],
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
      images: [MuslimAr],
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
      images: [mitrakota],
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
      case "Production":
        return "bg-green-100 text-green-800"
      case "Live":
        return "bg-sky-100 text-sky-800"
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

        {/* Highlighted / Featured Projects */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-700 mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500 fill-yellow-400" />
            Highlight Projects
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.filter(p => p.highlight).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-yellow-300"
              >
                {/* Image carousel — show two images side by side if available */}
                <div className="relative overflow-hidden">
                  {project.images.length > 1 ? (
                    <div className="flex h-52">
                      {project.images.slice(0, 2).map((img, i) => (
                        <img key={i} src={img} alt={`${project.title} ${i+1}`} className="w-1/2 h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      ))}
                    </div>
                  ) : (
                    <img src={project.images[0]} alt={project.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 rounded-full text-xs font-bold bg-yellow-400 text-yellow-900 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-900" /> Featured
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    {project.icon}
                    <span className="text-xs font-medium text-slate-500">{project.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3 leading-relaxed">{project.description}</p>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">{project.longDescription}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className={`px-2 py-0.5 bg-gradient-to-r ${project.color} text-white rounded text-xs font-medium`}>{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4 grid grid-cols-2 gap-1">
                    {project.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                        {f}
                      </div>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium`}
                  >
                    {project.link.includes("github") ? <Github size={14} /> : <ExternalLink size={14} />}
                    {project.link.includes("github") ? "View Code" : "View Project"}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <h3 className="text-2xl font-bold text-slate-700 mb-6">Other Projects</h3>
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.filter(p => !p.highlight).map((project, index) => (
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
                  src={project.images[0] || "/placeholder.svg"}
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
