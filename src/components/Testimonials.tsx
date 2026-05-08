import { motion } from "framer-motion"
import { Quote, ArrowUpRight } from "lucide-react"
import { testimonials } from "../data/testimonials"

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neon mb-4">
            <span className="w-8 h-px bg-neon" />
            04 / Testimonials
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-medium leading-[0.95] tracking-tight max-w-3xl">
            What clients <span className="italic text-neon">say.</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="grid md:grid-cols-12 gap-8 md:gap-12 glass rounded-3xl p-8 md:p-12"
            >
              <div className="md:col-span-3 flex md:flex-col items-start gap-4">
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover border border-bone/20"
                  />
                ) : (
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-neon/10 border border-neon/40 flex items-center justify-center font-display text-3xl font-medium text-neon">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-display text-xl md:text-2xl font-medium leading-tight">
                    {t.name}
                  </div>
                  <div className="text-sm text-bone/60 mt-1">
                    {t.role} · {t.company}
                  </div>
                  {t.projectUrl && (
                    <a
                      href={t.projectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-neon mt-3 hover:gap-2 transition-all"
                    >
                      View site <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>

              <blockquote className="md:col-span-9 relative">
                <Quote
                  className="absolute -top-2 -left-2 text-neon/30"
                  size={48}
                />
                <p className="relative font-display text-xl md:text-2xl leading-snug text-bone/85 pl-4">
                  {t.quote}
                </p>
              </blockquote>
            </motion.figure>
          ))}
        </div>

        {testimonials.length === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 text-center text-bone/40 font-mono text-sm"
          >
            More coming as projects wrap up.
          </motion.div>
        )}
      </div>
    </section>
  )
}
