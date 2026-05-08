const tools = [
  "TypeScript",
  ".NET 8",
  "Next.js",
  "React",
  "Python",
  "C#",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Docker",
  "AWS",
  "OpenAI",
  "Anthropic",
  "Tailwind",
  "Framer Motion",
  "Vercel",
]

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-bone/10 bg-deep/40 backdrop-blur-md py-6 select-none">
      <div className="marquee-track whitespace-nowrap">
        {[...tools, ...tools].map((tool, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 mx-6 font-display text-2xl md:text-3xl text-bone/90"
          >
            {tool}
            <span className="text-neon">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
