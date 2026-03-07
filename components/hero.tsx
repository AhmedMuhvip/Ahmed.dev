'use client'

import {motion} from 'framer-motion'
import {ArrowDown, Download, Github, Linkedin, Mail} from 'lucide-react'
import {useEffect, useState} from 'react'

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0})

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({x: e?.clientX ?? 0, y: e?.clientY ?? 0})
        }
        window?.addEventListener?.('mousemove', handleMouseMove)
        return () => window?.removeEventListener?.('mousemove', handleMouseMove)
    }, [])

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Animated background elements */}
            <motion.div
                className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
                animate={{
                    x: mousePosition?.x / 20 ?? 0,
                    y: mousePosition?.y / 20 ?? 0
                }}
                transition={{type: 'spring', stiffness: 50}}
                style={{top: '10%', left: '10%'}}
            />
            <motion.div
                className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
                animate={{
                    x: -(mousePosition?.x / 30) ?? 0,
                    y: -(mousePosition?.y / 30) ?? 0
                }}
                transition={{type: 'spring', stiffness: 50}}
                style={{bottom: '10%', right: '10%'}}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    {/* Greeting */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        className="mb-4"
                    >
                        <span className="text-purple-400 text-lg">Hello, I'm</span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.1}}
                        className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
                    >
                        Ahmed Muhammed
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className="text-2xl md:text-4xl text-gray-300 mb-6"
                    >
                        Backend Developer
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.3}}
                        className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
                    >
                        Specializing in PHP & Laravel • Building scalable web applications with clean, maintainable code
                    </motion.p>

                    {/* Location */}
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.4}}
                        className="text-gray-500 mb-12 flex items-center justify-center gap-2"
                    >
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Based in Istanbul, Turkey
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.5}}
                        className="flex flex-wrap items-center justify-center gap-4 mb-12"
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
                        >
                            <Mail className="w-5 h-5"/>
                            Get In Touch
                        </motion.a>

                        <motion.a
                            href="/Ahmed_Muhammed_Resume.pdf"
                            download
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className="px-8 py-3 glass rounded-full font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors"
                        >
                            <Download className="w-5 h-5"/>
                            Download CV
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.6}}
                        className="flex items-center justify-center gap-6"
                    >
                        <motion.a
                            href="https://github.com/AhmedMuhvip"
                            whileHover={{scale: 1.2, rotate: 5}}
                            whileTap={{scale: 0.9}}
                            className="p-3 glass rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                            title="GitHub"
                        >
                            <Github className="w-6 h-6"/>
                        </motion.a>

                        <motion.a
                            href={"https://www.linkedin.com/in/ahmedmuhammeddev/"}
                            whileHover={{scale: 1.2, rotate: -5}}
                            whileTap={{scale: 0.9}}
                            className="p-3 glass rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                            title="LinkedIn"
                        >
                            <Linkedin className="w-6 h-6"/>
                        </motion.a>

                        <motion.a
                            href="mailto:progahmedmuhammed@gmail.com"
                            whileHover={{scale: 1.2, rotate: 5}}
                            whileTap={{scale: 0.9}}
                            className="p-3 glass rounded-full hover:bg-white/10 transition-colors"
                        >
                            <Mail className="w-6 h-6"/>
                        </motion.a>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1, y: [0, 10, 0]}}
                        transition={{duration: 1.5, repeat: Infinity, delay: 1}}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    >
                        <ArrowDown className="w-6 h-6 text-purple-400"/>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
