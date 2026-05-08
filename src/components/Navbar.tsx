import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40)
  })

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/90 border-b border-bone/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight flex items-center gap-1">
          MK<span className="text-neon">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-bone/70 hover:text-bone transition-colors flex items-center gap-1.5"
            >
              <span className="text-neon/60 text-[10px] font-mono">
                0{i + 1}
              </span>
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-neon text-ink px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm font-medium hover:bg-bone transition-colors"
        >
          Let's talk
        </a>
      </div>
    </motion.nav>
  )
}
