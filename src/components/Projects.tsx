import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { projects, type Project } from "../data/projects"

const accentBg: Record<Project["accent"], string> = {
  ember: "bg-gradient-to-br from-neon/30 via-neon/10 to-deep",
  moss: "bg-gradient-to-br from-violet/30 via-violet/10 to-deep",
  ink: "bg-gradient-to-br from-cyan/30 via-cyan/10 to-deep",
}

export default function Projects() {
  return (
    <section id="work" className="py-32 px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-16 flex-wrap gap-6"
        >
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neon mb-4">
              <span className="w-8 h-px bg-neon" />
              01 / Work
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-medium leading-[0.95] tracking-tight">
              Things I've <span className="italic text-neon">shipped.</span>
            </h2>
          </div>
          <p className="text-bone/60 max-w-sm">
            A few projects I've built and put live. Click any of them to check
            it out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const colSpan = index === 0 ? "md:col-span-12" : "md:col-span-6"

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`group relative block ${colSpan} glass rounded-2xl overflow-hidden hover:border-neon/60 transition-all duration-500`}
    >
      <div
        className={`relative ${accentBg[project.accent]} overflow-hidden ${
          index === 0 ? "aspect-[16/6]" : "aspect-[16/9]"
        }`}
      >
        {project.image ? (
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              decoding="async"
              className="max-h-[55%] max-w-[55%] object-contain opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
          </div>
        ) : (
          <ProjectPlaceholder project={project} />
        )}

        <div className="absolute top-5 left-5 flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs font-mono">
          <span className="text-neon">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-bone/40">/</span>
          <span className="text-bone/80">{project.year}</span>
        </div>

        <div className="absolute top-5 right-20 flex items-center gap-1.5 bg-neon text-ink rounded-full px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-ink animate-pulse" />
          live
        </div>

        <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-bone text-ink flex items-center justify-center group-hover:bg-neon transition-colors">
          <ArrowUpRight
            size={20}
            className="group-hover:rotate-45 transition-transform duration-500"
          />
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-baseline justify-between gap-4 mb-3 flex-wrap">
          <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight">
            {project.name}
          </h3>
          <span className="text-sm font-mono text-bone/50">
            {project.role}
          </span>
        </div>

        <p className="text-bone/70 leading-relaxed mb-5 max-w-2xl">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-xs font-mono px-2.5 py-1 bg-bone/5 border border-bone/10 rounded-full text-bone/70"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}

function ProjectPlaceholder({ project }: { project: Project }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="text-center">
        <div className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-bone mb-2">
          {project.name}
        </div>
        <div className="font-mono text-xs uppercase tracking-widest text-bone/50">
          {project.tagline}
        </div>
      </div>
    </div>
  )
}
