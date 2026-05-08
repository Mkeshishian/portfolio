import { motion } from "framer-motion"
import { Coffee, Code2, MapPin, GraduationCap } from "lucide-react"

const skillGroups = [
  { label: "Frontend", items: ["React", "Next.js 15", "TypeScript", "TailwindCSS", "Shadcn/UI"] },
  { label: "Backend", items: [".NET 8", "C#", "Python", "Node.js", "PHP"] },
  { label: "Data", items: ["MySQL", "Redis", "AWS RDS", "Power BI", "Tableau"] },
  { label: "Infra", items: ["Docker", "AWS", "Vercel", "CI/CD", "Prometheus / Grafana"] },
  { label: "AI / Automation", items: ["OpenAI", "Anthropic", "Selenium", "Windmill", "n8n"] },
  { label: "Comms / APIs", items: ["Microsoft Graph", "Gmail API", "Mailgun", "Twilio", "Zapier"] },
]

const facts = [
  { icon: MapPin, label: "Based in", value: "Los Angeles, CA" },
  { icon: GraduationCap, label: "Studied at", value: "Cal Poly Pomona, CS '23" },
  { icon: Code2, label: "Started with", value: "Python" },
  { icon: Coffee, label: "Runs on", value: "Coffee" },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-12 gap-10 mb-20"
        >
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neon mb-4">
              <span className="w-8 h-px bg-neon" />
              03 / About
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-medium leading-[0.95] tracking-tight">
              About
              <br />
              <span className="italic">me.</span>
            </h2>
          </div>

          <div className="md:col-span-6 md:col-start-7 space-y-6 text-lg text-bone/80 leading-relaxed">
            <p>
              I'm a software engineer based in LA. I work mostly on backend
              systems, automation pipelines, and full-stack apps — the kind of
              stuff that quietly runs in the background and saves a team hours
              a week.
            </p>
            <p>
              Most recently I led the dev team at Cubework, where we built a
              CRM and marketing automation platform that runs operations
              across 80+ warehouses. Right now I'm freelancing and taking on
              contract work.
            </p>
            <p>
              Day to day I write a lot of TypeScript and C#. Started with
              Python and still come back to it for anything automation
              related. If you've got a problem that involves a lot of moving
              parts and weird edge cases, that's usually where I want to be.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-16 border-b border-bone/10"
        >
          {facts.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.label} className="flex items-start gap-3">
                <Icon size={18} className="text-neon mt-1 shrink-0" />
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-bone/50">
                    {f.label}
                  </div>
                  <div className="font-display text-base md:text-lg font-medium mt-0.5">
                    {f.value}
                  </div>
                </div>
              </div>
            )
          })}
        </motion.div>

        <div className="mb-8">
          <div className="font-mono text-sm text-neon mb-2">/ stack</div>
          <h3 className="font-display text-3xl md:text-4xl font-medium tracking-tight">
            What I work with.
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-bone/10 border border-bone/10 rounded-xl overflow-hidden">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-deep/70 p-6 md:p-8 hover:bg-neon hover:text-ink transition-colors duration-300 group"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-neon group-hover:text-ink mb-4">
                {group.label}
              </div>
              <ul className="space-y-1.5 text-base md:text-lg font-display">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
