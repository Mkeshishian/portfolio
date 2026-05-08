import { motion } from "framer-motion"

type Role = {
  company: string
  title: string
  date: string
  blurb: string
  current?: boolean
}

const roles: Role[] = [
  {
    company: "Cubework",
    title: "Software Engineer",
    date: "Nov 2024 — Present",
    current: true,
    blurb:
      "Led the dev side of CW Platform, a multi-tenant CRM and marketing automation system on .NET 8 and Next.js. Built the Python automation pipeline that handles 4,000+ leads a month at 99% accuracy, and shipped the full marketing module that pushes 50K+ emails a month.",
  },
  {
    company: "TwinPeaks Online",
    title: "Fullstack Software Engineer",
    date: "Jan 2023 — Aug 2024",
    blurb:
      "Built a Python-based lead generation platform that grew client databases 15x. Automated KPI reporting for 250+ clients with Selenium and MySQL (cut report time by 90%). Also led dev on a WooCommerce B2B marketplace and ran Google Ads campaigns that pushed daily traffic up 600%.",
  },
  {
    company: "UNIS",
    title: "Process Automation Intern",
    date: "Jul 2022 — Dec 2022",
    blurb:
      "Automated invoice retrieval with Python and Selenium and built billing dashboards in Power BI and Tableau. Cut billing cycle times by 90%.",
  },
  {
    company: "ENAS Media",
    title: "Admin & Digital Operations Intern",
    date: "May 2018 — Aug 2021",
    blurb:
      "First real job. Cleaned up financial workflows with Excel Power Query and kept the WordPress site running. Mostly got paid to learn how a business actually runs.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-12 gap-10 mb-16"
        >
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neon mb-4">
              <span className="w-8 h-px bg-neon" />
              02 / Experience
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-medium leading-[0.95] tracking-tight">
              Where I've
              <br />
              <span className="italic">worked.</span>
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 self-end text-bone/60 max-w-md">
            From admin work as a teenager to leading dev teams. Here's the
            short list.
          </p>
        </motion.div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-0 md:left-[22%] top-0 bottom-0 w-px bg-bone/10"
          />

          {roles.map((role, i) => (
            <motion.div
              key={role.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative grid md:grid-cols-5 gap-6 py-10 border-b border-bone/10 last:border-b-0 pl-6 md:pl-0 group"
            >
              <span
                aria-hidden
                className={`absolute left-[-4px] md:left-[calc(22%-4px)] top-12 w-2 h-2 rounded-full ${
                  role.current ? "bg-neon animate-pulse shadow-[0_0_12px_rgba(0,240,200,0.8)]" : "bg-bone/40"
                }`}
              />

              <div className="md:col-span-1 md:pl-8">
                <div className="font-mono text-xs uppercase tracking-widest text-bone/50">
                  {role.date}
                </div>
                {role.current && (
                  <div className="mt-2 inline-block text-[10px] font-mono uppercase tracking-widest bg-neon text-ink px-2 py-0.5 rounded-full">
                    NOW
                  </div>
                )}
              </div>

              <div className="md:col-span-4 md:pl-8">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                  <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight group-hover:text-neon transition-colors">
                    {role.title}
                  </h3>
                  <span className="text-bone/30">·</span>
                  <span className="font-display text-xl md:text-2xl text-bone/70">
                    {role.company}
                  </span>
                </div>
                <p className="text-bone/65 leading-relaxed max-w-2xl">
                  {role.blurb}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
