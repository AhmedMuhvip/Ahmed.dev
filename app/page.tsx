import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Education from '@/components/education'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}
