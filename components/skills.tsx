'use client'

import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {Code2, Database, GitBranch, Globe, Package, Server} from 'lucide-react'

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    const skillCategories = [
        {
            title: 'Backend',
            icon: Server,
            color: 'from-cyan-500 to-blue-500',
            skills: ['PHP', 'Laravel', 'Eloquent ORM', 'RESTful APIs', 'OOP', 'Design Patterns', 'SOLID Principles', 'GraphQL']
        },
        {
            title: 'Database',
            icon: Database,
            color: 'from-blue-500 to-cyan-500',
            skills: ['MySQL', 'PostgreSQL', 'SQL', 'Database Optimization', 'Query Design']
        },
        {
            title: 'Frontend',
            icon: Globe,
            color: 'from-orange-500 to-yellow-500',
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Livewire', 'Blade Template']
        },
        {
            title: 'Tools & Tech',
            icon: Package,
            color: 'from-green-500 to-emerald-500',
            skills: ['Git', 'GitHub', 'Laravel Sanctum', 'Laravel Passport', 'Pusher', 'Stripe', 'Dailymotion', 'Socialite', 'Cashier', 'Redis', 'JWT', 'Sentry']
        },
        {
            title: 'Development',
            icon: Code2,
            color: 'from-pink-500 to-rose-500',
            skills: ['API Development', 'WebSockets', 'Job Queues', 'Event Broadcasting', 'Authentication', 'Middleware', 'Service Layer']
        },
        {
            title: 'DevOps & Infrastructure',
            icon: GitBranch,
            color: 'from-indigo-500 to-purple-500',
            skills: ['Docker', 'Laravel Telescope', 'Nginx', 'Linux/Unix', 'GitHub Actions', 'Logging & Monitoring', 'Deployment']
        },
        {
            title: 'Version Control',
            icon: GitBranch,
            color: 'from-slate-500 to-cyan-500',
            skills: ['Git', 'GitHub', 'Agile/Scrum', 'Code Review', 'CI/CD']
        }
    ]

    const languages = [
        {name: 'English', level: 80},
        {name: 'Turkish', level: 95},
        {name: 'Arabic', level: 100}
    ]

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.5}
        }
    }

    return (
        <section id="skills" className="py-20 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 20}}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Technical Skills</h2>
                    <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'visible'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                >
                    {skillCategories?.map?.((category, index) => {
                        const Icon = category?.icon
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{y: -5}}
                                className="glass rounded-3xl p-6 group cursor-pointer transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${category?.color} shadow-lg`}>
                                        {Icon && <Icon className="w-6 h-6 text-white"/>}
                                    </div>
                                    <h3 className="text-xl font-semibold">{category?.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category?.skills?.map?.((skill, skillIndex) => (
                                        <motion.span
                                            key={skillIndex}
                                            whileHover={{scale: 1.05}}
                                            className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-colors"
                                        >
                                            {skill}
                                        </motion.span>
                                    )) ?? []}
                                </div>
                            </motion.div>
                        )
                    }) ?? []}
                </motion.div>

                {/* Languages Section */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.3}}
                    className="glass rounded-3xl p-8"
                >
                    <h3 className="text-2xl font-bold mb-8 text-center">Languages</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {languages?.map?.((lang, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, scale: 0.9}}
                                animate={inView ? {opacity: 1, scale: 1} : {opacity: 1, scale: 1}}
                                transition={{duration: 0.5, delay: 0.4 + index * 0.1}}
                                className="text-center"
                            >
                                <h4 className="text-lg font-semibold mb-3">{lang?.name}</h4>
                                <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{width: 0}}
                                        animate={inView ? {width: `${lang?.level ?? 0}%`} : {width: `${lang?.level ?? 0}%`}}
                                        transition={{duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut'}}
                                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                                    />
                                </div>
                                <p className="text-sm text-gray-400 mt-2">{lang?.level}%</p>
                            </motion.div>
                        )) ?? []}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
