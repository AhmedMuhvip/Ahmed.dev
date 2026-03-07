'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Rocket } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      title: 'Rightgive',
      description: 'A comprehensive donation platform with secure payment processing and real-time features',
      period: 'Feb 2025 — Dec 2025',
      status: 'In Development',
      link: null,
      github: null,
      features: [
        'Designed and developed scalable backend architecture using Laravel (PHP)',
        'Implemented secure Stripe payment integration supporting one-time and recurring donations',
        'Built and maintained RESTful APIs for frontend and dashboard consumption',
        'Developed real-time features (notifications, updates) using WebSockets with Pusher and Firebase',
        'Built backend logic for admin dashboard with campaign management and donation tracking',
        'Optimized database queries for high-volume donation transactions'
      ],
      technologies: ['Laravel', 'PHP', 'MySQL', 'Stripe API', 'WebSockets', 'Pusher', 'Firebase', 'RESTful API'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Socialze X',
      description: 'A modern social media platform with comprehensive user interaction features',
      period: 'Jan 2025 — Present',
      status: 'Active',
      link: null,
      github: null,
      features: [
        'Developed complete social media platform with user authentication and profile management',
        'Built CRUD functionalities for posts (text and images), likes, and comments',
        'Implemented friend request system with send, accept, decline, unfriend, and view friends features',
        'Created timeline feature to view posts from friends',
        'Implemented Eloquent ORM for efficient database management and relationship handling'
      ],
      technologies: ['Laravel', 'PHP', 'MySQL', 'Eloquent ORM', 'Authentication', 'RESTful API'],
      gradient: 'from-blue-500 to-cyan-500'
    }
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-gray-400 text-lg">Notable projects and applications I've built</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects?.map?.((project, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl p-8 group relative overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project?.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}
              />

              {/* Project Header */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                      {project?.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">{project?.period}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      project?.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {project?.status}
                    </span>
                  </div>
                  <Rocket className="w-8 h-8 text-purple-400" />
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6">{project?.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-purple-400">Key Features:</h4>
                  <ul className="space-y-2">
                    {project?.features?.slice?.(0, 4)?.map?.((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    )) ?? []}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-purple-400">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project?.technologies?.map?.((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    )) ?? []}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project?.link && (
                    <motion.a
                      href={project?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </motion.a>
                  )}
                  {project?.github && (
                    <motion.a
                      href={project?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-semibold hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  )}
                  {!project?.link && !project?.github && (
                    <p className="text-sm text-gray-500 italic">Project links coming soon</p>
                  )}
                </div>
              </div>
            </motion.div>
          )) ?? []}
        </div>
      </div>
    </section>
  )
}

export default Projects
