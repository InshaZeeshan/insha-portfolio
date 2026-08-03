import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import ProjectArchive from './components/ProjectArchive.jsx'
import Experience from './components/Experience.jsx'
import Toolbox from './components/Toolbox.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-berry focus:px-4 focus:py-2 focus:text-cream"
      >
        skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <ProjectArchive />
        <Experience />
        <Toolbox />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
