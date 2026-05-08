import { motion } from "framer-motion"
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"

const links = [
  { label: "Email", value: "keshishianmichael@gmail.com", href: "mailto:keshishianmichael@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "in/michaelkesh", href: "https://www.linkedin.com/in/michaelkesh/", icon: Linkedin },
  { label: "GitHub", value: "@michaelkesh", href: "https://github.com/", icon: Github },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-10 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neon mb-4">
            <span className="w-8 h-px bg-neon" />
            05 / Contact
          </div>
          <h2 className="font-display font-medium tracking-tight leading-[0.9] text-[clamp(3rem,10vw,9rem)] mb-12">
            Let's <span className="italic text-neon">work together.</span>
          </h2>

          <p className="text-xl text-bone/70 max-w-2xl mb-16 leading-relaxed">
            I take on a few client projects each year. If you've got a
            website, app, or automation idea you want built, send me an email
            and we'll talk.
          </p>

          <div className="grid md:grid-cols-3 gap-px bg-bone/10 border border-bone/10 mb-20 rounded-2xl overflow-hidden">
            {links.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="bg-deep/40 backdrop-blur-md p-8 group hover:bg-neon hover:text-ink transition-colors flex items-center justify-between"
                >
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-neon group-hover:text-ink mb-2">
                      {link.label}
                    </div>
                    <div className="font-display text-lg md:text-xl">
                      {link.value}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon size={20} />
                    <ArrowUpRight
                      size={18}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </div>
                </a>
              )
            })}
          </div>
        </motion.div>

        <footer className="border-t border-bone/10 pt-8 flex flex-wrap gap-4 items-center justify-between text-sm text-bone/50 font-mono">
          <div>© {new Date().getFullYear()} Michael Keshishian · LA, CA</div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            Built with React + Vite
          </div>
        </footer>
      </div>
    </section>
  )
}
