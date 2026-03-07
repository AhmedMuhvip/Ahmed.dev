'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      company: 'E-Technologies',
      position: 'Back End Developer',
      location: 'Istanbul, Turkey',
      period: '2025 — Present',
      current: true,
      responsibilities: [
        'Designed and developed robust RESTful APIs and backend services using PHP (Laravel) to support dynamic web and mobile applications',
        'Built efficient, reusable, and scalable backend systems leveraging Laravel Eloquent ORM for seamless interaction with MySQL databases',
        'Developed and maintained modular codebases, adhering to SOLID principles, design patterns, and Laravel best practices',
        'Implemented authentication (Laravel Sanctum/Passport), authorization (policies, gates), job queues, and event broadcasting for real-time features',
        'Ensured application security, performance optimization, and adherence to RESTful standards',
        'Collaborated closely with frontend developers, product managers, and QA teams to deliver feature-rich applications on time'
      ]
    },
    {
      company: 'Robolabs Company',
      position: 'Back-End Developer Intern',
      location: 'Istanbul, Turkey',
      period: 'Aug 2024 — Sep 2024',
      current: false,
      responsibilities: [
        'Assisted in backend development using PHP and Laravel, enhancing application functionality',
        'Contributed to designing and optimizing MySQL database queries, ensuring smooth data management',
        'Gained practical experience with Laravel\'s Eloquent ORM for efficient database handling',
        'Collaborated with the team to implement core backend concepts like routing, controllers, and database relationships',
        'Helped improve backend performance and efficiency through process optimization'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Work Experience</h2>
          <p className="text-gray-400 text-lg">Professional journey and achievements</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 rounded-full" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences?.map?.((exp, index) => (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="flex-1 w-full">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass rounded-3xl p-6 md:p-8 group"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                          {exp?.position}
                        </h3>
                        <div className="flex items-center gap-2 text-purple-400 font-semibold mb-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp?.company}</span>
                        </div>
                      </div>
                      {exp?.current && (
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp?.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp?.location}</span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-3">
                      {exp?.responsibilities?.map?.((resp, respIndex) => (
                        <motion.li
                          key={respIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.2 + respIndex * 0.1 }}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{resp}</span>
                        </motion.li>
                      )) ?? []}
                    </ul>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className={`w-6 h-6 rounded-full bg-gradient-to-br ${exp?.current ? 'from-green-500 to-emerald-500' : 'from-purple-500 to-pink-500'} shadow-lg animate-pulse-glow`}
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            )) ?? []}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
