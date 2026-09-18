"use client"
import { motion } from "framer-motion"
import { Download, Mail, Github, Linkedin, Code2 } from "lucide-react"
import myPhoto from '../images/supri.jpg';
import cvFile from '../supricv.pdf'  // Make sure path is correct


const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-6 pt-20">
      <div className="max-w-6xl w-full">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex-shrink-0"
          >
            {/* Glow ring behind card */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl blur-xl opacity-30 scale-105" />

            {/* Portrait card */}
            <div className="relative w-72 h-96 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-1 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[22px] overflow-hidden">
                <img
                  src={myPhoto}
                  alt="Supriyanto Profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Code badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-full shadow-lg">
              <Code2 size={24} />
            </div>

            {/* Floating tag */}
            <div className="absolute -top-3 -left-3 bg-white text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-md border border-blue-100">
              Full Stack Dev
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold text-slate-800 mb-4"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Supriyanto
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-2xl lg:text-3xl font-semibold text-slate-600 mb-6"
            >
               Full Stack Developer · Fresh Graduate, Informatics Engineering (International Program) — UII
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-slate-600 mb-8 max-w-2xl"
            >
              Results-driven Full Stack Developer with hands-on production experience building web and mobile platforms using JavaScript (React/React Native), PHP (Laravel), Golang, and Python. Delivered ERP systems, fintech PoCs, and a published mobile app — from architecture through deployment. Experienced integrating REST APIs, RAG/LLM pipelines, and third-party services (Odoo) in real business environments.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href={cvFile}
                download="Supriyanto_CV.pdf"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                Download CV
              </a>
              <a
                href="mailto:22523294@students.uii.ac.id"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <Mail size={20} />
                Let's Connect
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex gap-6 justify-center lg:justify-start mt-8"
            >
              <a
                href="https://github.com/priyannnnnn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-slate-200"
              >
                <Github size={24} className="text-slate-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/supri-yanto-62367024b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-slate-200"
              >
                <Linkedin size={24} className="text-blue-600" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
