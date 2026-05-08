import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import RobotScene from "./RobotScene"

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="relative max-w-[1500px] mx-auto px-6 md:px-10 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12 text-xs md:text-sm font-mono"
        >
          <div className="flex items-center gap-2 text-bone/60">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-neon animate-ping opacity-75" />
              <span className="relative w-2 h-2 rounded-full bg-neon" />
            </span>
            ONLINE · LA, CA
          </div>
          <div className="hidden md:flex items-center gap-3 text-bone/40">
            <span>v.04</span>
            <span className="text-bone/20">/</span>
            <span>2026</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 mb-8 text-xs font-mono"
            >
              <span className="text-neon">●</span>
              <span className="text-bone/80">Available for work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-medium tracking-tight leading-[0.92] text-[clamp(3rem,8.5vw,8rem)]"
            >
              <span className="block">
                Hi, I'm <span className="italic text-neon neon-text">Michael</span>.
              </span>
              <span className="block">Software engineer</span>
              <span className="block">based in LA<span className="text-neon">.</span></span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 max-w-2xl"
            >
              <p className="text-base md:text-lg text-bone/70 leading-relaxed">
                I build full-stack apps, automation systems, and the kind of
                internal tools businesses actually use every day. Right now
                I'm freelancing and open to contract work.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 bg-neon text-ink px-6 py-3 rounded-full font-medium hover:bg-bone transition-colors"
                >
                  See my work
                  <ArrowDown
                    size={18}
                    className="group-hover:translate-y-1 transition-transform"
                  />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border border-bone/20 hover:border-neon hover:text-neon transition-colors"
                >
                  Get in touch
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-14 grid grid-cols-3 gap-px bg-bone/10 border border-bone/10 rounded-2xl overflow-hidden max-w-xl"
            >
              {[
                { v: "5+", l: "Years coding" },
                { v: "50K+", l: "Emails / month" },
                { v: "4K+", l: "Leads handled / mo" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="bg-deep/70 p-5"
                >
                  <div className="font-display text-3xl md:text-4xl font-medium text-neon">
                    {s.v}
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-bone/50 mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <RobotScene />
            <div className="mt-4 text-center text-xs font-mono text-bone/40 uppercase tracking-widest">
              <span className="text-neon">{">"}</span> automation_unit_001
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
