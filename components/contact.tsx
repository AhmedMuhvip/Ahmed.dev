'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'progahmedmuhammed@gmail.com',
      link: 'mailto:progahmedmuhammed@gmail.com',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+90 505 053 70 22',
      link: 'tel:+905050537022',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Istanbul, Turkey',
      link: null,
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      link: 'mailto:progahmedmuhammed@gmail.com',
      color: 'hover:text-purple-400'
    }
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm currently available for freelance work and full-time opportunities. If you have a project or position in mind, let's connect!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {contactInfo?.map?.((item, index) => {
            const Icon = item?.icon
            const CardWrapper = item?.link ? 'a' : 'div'
            const linkProps = item?.link ? { href: item?.link, target: item?.link?.startsWith?.('http') ? '_blank' : undefined, rel: item?.link?.startsWith?.('http') ? 'noopener noreferrer' : undefined } : {}
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <CardWrapper
                  {...linkProps}
                  className={`glass rounded-2xl p-6 text-center group ${item?.link ? 'cursor-pointer hover:bg-white/10' : ''} transition-all duration-300 block`}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item?.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                    {Icon && <Icon className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item?.label}</h3>
                  <p className="text-gray-400 text-sm">{item?.value}</p>
                </CardWrapper>
              </motion.div>
            )
          }) ?? []}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass rounded-3xl p-12 text-center relative overflow-hidden group"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block mb-6"
            >
              <Send className="w-16 h-16 text-purple-400" />
            </motion.div>
            <h3 className="text-3xl font-bold mb-4">Ready to work together?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to chat about backend development, feel free to reach out. I typically respond within 24 hours.
            </p>
            <motion.a
              href="mailto:AhmedMuhammed0031@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
            >
              <Mail className="w-5 h-5" />
              Send me an email
            </motion.a>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          {socialLinks?.map?.((social, index) => {
            const Icon = social?.icon
            return (
              <motion.a
                key={index}
                href={social?.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 glass rounded-full transition-colors ${social?.color}`}
                aria-label={social?.label}
              >
                {Icon && <Icon className="w-6 h-6" />}
              </motion.a>
            )
          }) ?? []}
        </motion.div>

        {/* Footer */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center mt-16 text-gray-500 text-sm"
        >
          <p>© {new Date()?.getFullYear?.()} Ahmed Muhammed. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
