'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, BookOpen, Award } from 'lucide-react'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const education = [
    {
      degree: 'Bachelor of Computer Engineering',
      institution: 'Zonguldak Bülent Ecevit University',
      location: 'Zonguldak, Turkey',
      period: '2020 — 2024',
      description: 'Acquired a solid foundation in computer science, with a focus on computational theory, algorithms, data structures, digital system design, database management, and advanced mathematics, including statistics and calculus.',
      highlights: [
        'Computational Theory & Algorithms',
        'Data Structures & Design Patterns',
        'Database Management Systems',
        'Digital System Design',
        'Advanced Mathematics & Statistics',
        'Software Engineering Principles'
      ]
    }
  ]

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Education</h2>
          <p className="text-gray-400 text-lg">Academic background and qualifications</p>
        </motion.div>

        {/* Education Card */}
        {education?.map?.((edu, index) => (
          <motion.div
            key={index}
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden group"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl shadow-lg flex-shrink-0"
                  >
                    <GraduationCap className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                      {edu?.degree}
                    </h3>
                    <p className="text-xl text-purple-400 font-semibold mb-2">{edu?.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        {edu?.period}
                      </span>
                      <span>{edu?.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-8 leading-relaxed">{edu?.description}</p>

                {/* Highlights */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-purple-400" />
                    <h4 className="text-lg font-semibold text-purple-400">Key Areas of Study</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {edu?.highlights?.map?.((highlight, highlightIndex) => (
                      <motion.div
                        key={highlightIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.3 + highlightIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                      >
                        <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" />
                        <span className="text-gray-300">{highlight}</span>
                      </motion.div>
                    )) ?? []}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )) ?? []}
      </div>
    </section>
  )
}

export default Education
