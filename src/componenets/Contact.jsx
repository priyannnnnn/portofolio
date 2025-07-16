"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Calendar } from "lucide-react"
import cvFile from '../supricv.pdf';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "22523294@students.uii.ac.id",
      link: "mailto:22523294@students.uii.ac.id",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Alternative Email",
      value: "supriyanto031003@gmail.com",
      link: "mailto:supriyanto031003@gmail.com",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Yogyakarta, Indonesia",
      link: "#",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Availability",
      value: "Open for opportunities",
      link: "#",
      color: "from-purple-500 to-purple-600",
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/priyannnnnn",
      color: "hover:bg-gray-800",
      username: "@priyannnnnn",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/supri-yanto-62367024b/",
      color: "hover:bg-blue-600",
      username: "Supri Yanto",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: "WhatsApp",
      url: "https://wa.me/6285328783238",
      color: "hover:bg-green-500",
      username: "Available on request",
    },
  ]

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-green-900 mb-6">Let's Connect</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on innovative software solutions? Let's discuss how we can work together to create
            impactful technology that makes a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-green-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on innovative projects, or simply connect
                with fellow developers and technology enthusiasts. Whether you're looking for a software engineering
                intern, a project collaborator, or just want to chat about technology, feel free to reach out!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="block p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300 group"
                >
                  <div
                    className={`inline-flex p-3 bg-gradient-to-r ${info.color} text-white rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {info.icon}
                  </div>
                  <h4 className="font-semibold text-green-900 mb-1">{info.title}</h4>
                  <p className="text-gray-600 text-sm">{info.value}</p>
                </motion.a>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-green-900 mb-4">Connect on Social Media</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 group ${social.color}`}
                  >
                    <div className="flex-shrink-0">{social.icon}</div>
                    <div>
                      <div className="font-semibold">{social.name}</div>
                      <div className="text-sm opacity-75">{social.username}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100"
          >
            <h3 className="text-2xl font-bold text-green-900 mb-6">Send a Message</h3>

            <form 
              action="https://formspree.io/f/xblkjaeb"  // replace with your real Formspree endpoint
              method="POST"
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, collaboration idea, or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 font-semibold"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>

            <div className="mt-8 p-4 bg-white/50 rounded-lg border border-green-200">
              <p className="text-sm text-gray-600 text-center">
                <strong>Response Time:</strong> I typically respond within 24 hours. For urgent matters, please reach
                out via email directly.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white p-12 rounded-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let's turn your ideas into innovative software solutions that make a real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:22523294@students.uii.ac.id"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              <Mail size={20} />
              Start a Conversation
            </a>
            <a
              href={cvFile}
              download="Supriyanto_CV.pdf"
              className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
