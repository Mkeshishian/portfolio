import Aurora from "./components/Aurora"
import StarField from "./components/StarField"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import About from "./components/About"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="relative">
      <Aurora />
      <StarField />
      <Navbar />
      <main className="relative">
        <Hero />
        <Marquee />
        <Projects />
        <Experience />
        <About />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}
