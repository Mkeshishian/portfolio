import { motion } from "framer-motion"

export default function RobotScene() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      {/* Glow ring */}
      <div className="absolute inset-8 rounded-full bg-neon/15 blur-3xl" />

      {/* Outer rotating ring with tick marks */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full animate-spin-slow"
      >
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="none"
          stroke="rgba(232,238,245,0.12)"
          strokeWidth="1"
          strokeDasharray="2 8"
        />
        <circle
          cx="200"
          cy="200"
          r="160"
          fill="none"
          stroke="rgba(0,240,200,0.25)"
          strokeWidth="1"
        />
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24
          return (
            <line
              key={i}
              x1="200"
              y1="20"
              x2="200"
              y2={i % 6 === 0 ? 36 : 28}
              stroke={i % 6 === 0 ? "#00f0c8" : "rgba(232,238,245,0.3)"}
              strokeWidth={i % 6 === 0 ? 2 : 1}
              transform={`rotate(${angle} 200 200)`}
            />
          )
        })}
      </svg>

      {/* Inner counter-rotating ring */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full animate-spin-reverse"
      >
        <circle
          cx="200"
          cy="200"
          r="120"
          fill="none"
          stroke="rgba(167,139,250,0.3)"
          strokeWidth="1"
          strokeDasharray="60 8 4 8"
        />
        <circle cx="80" cy="200" r="3" fill="#a78bfa" />
        <circle cx="320" cy="200" r="2" fill="#22d3ee" />
        <circle cx="200" cy="80" r="2.5" fill="#00f0c8" />
      </svg>

      {/* Robot body — center */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg viewBox="0 0 200 200" className="w-1/2 h-1/2">
          <defs>
            <linearGradient id="bot-body" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a2030" />
              <stop offset="100%" stopColor="#0a0e1a" />
            </linearGradient>
            <radialGradient id="eye-glow">
              <stop offset="0%" stopColor="#00f0c8" />
              <stop offset="100%" stopColor="rgba(0,240,200,0)" />
            </radialGradient>
          </defs>

          {/* Antenna */}
          <line x1="100" y1="20" x2="100" y2="40" stroke="#e8eef5" strokeWidth="2" />
          <circle cx="100" cy="18" r="4" fill="#00f0c8">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
          </circle>

          {/* Head */}
          <rect x="65" y="40" width="70" height="60" rx="14" fill="url(#bot-body)" stroke="#2a3245" strokeWidth="1.5" />

          {/* Eye visor */}
          <rect x="75" y="58" width="50" height="22" rx="11" fill="#000" />
          <ellipse cx="90" cy="69" rx="6" ry="5" fill="url(#eye-glow)" />
          <ellipse cx="110" cy="69" rx="6" ry="5" fill="url(#eye-glow)" />
          <circle cx="90" cy="69" r="2" fill="#00f0c8">
            <animate attributeName="cx" values="88;92;88" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="110" cy="69" r="2" fill="#00f0c8">
            <animate attributeName="cx" values="108;112;108" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Mouth grille */}
          <line x1="85" y1="90" x2="115" y2="90" stroke="#2a3245" strokeWidth="1.5" />
          <line x1="88" y1="93" x2="112" y2="93" stroke="#2a3245" strokeWidth="1" />

          {/* Neck */}
          <rect x="92" y="100" width="16" height="8" fill="#2a3245" />

          {/* Body / chest */}
          <rect x="55" y="108" width="90" height="68" rx="12" fill="url(#bot-body)" stroke="#2a3245" strokeWidth="1.5" />

          {/* Chest panel */}
          <rect x="80" y="120" width="40" height="30" rx="4" fill="#0f1422" stroke="#2a3245" strokeWidth="1" />
          <circle cx="100" cy="135" r="6" fill="#00f0c8" opacity="0.8">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <line x1="84" y1="146" x2="116" y2="146" stroke="#a78bfa" strokeWidth="0.8" opacity="0.7" />

          {/* Side panels with status dots */}
          <circle cx="65" cy="120" r="2" fill="#fb7185">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="65" cy="130" r="2" fill="#22d3ee" opacity="0.8" />
          <circle cx="135" cy="120" r="2" fill="#00f0c8" opacity="0.8" />
          <circle cx="135" cy="130" r="2" fill="#a78bfa">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite" />
          </circle>

          {/* Arms */}
          <motion.g
            animate={{ rotate: [0, -8, 0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "55px 115px" }}
          >
            <rect x="38" y="115" width="18" height="42" rx="6" fill="#1a2030" stroke="#2a3245" strokeWidth="1" />
            <circle cx="47" cy="160" r="8" fill="#0a0e1a" stroke="#2a3245" strokeWidth="1.5" />
          </motion.g>

          <motion.g
            animate={{ rotate: [0, 8, 0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            style={{ transformOrigin: "145px 115px" }}
          >
            <rect x="144" y="115" width="18" height="42" rx="6" fill="#1a2030" stroke="#2a3245" strokeWidth="1" />
            <circle cx="153" cy="160" r="8" fill="#0a0e1a" stroke="#2a3245" strokeWidth="1.5" />
            {/* Welding sparks */}
            <circle cx="153" cy="160" r="3" fill="#00f0c8" className="animate-weld" />
          </motion.g>
        </svg>
      </motion.div>

      {/* Floating code particles */}
      <FloatingTag text="async()" className="top-[12%] left-[8%]" delay={0} />
      <FloatingTag text="docker up" className="top-[20%] right-[10%]" delay={1.2} color="violet" />
      <FloatingTag text="git push" className="bottom-[28%] left-[6%]" delay={2.4} color="cyan" />
      <FloatingTag text="ship_it()" className="bottom-[18%] right-[8%]" delay={0.8} />
      <FloatingTag text="200 OK" className="top-[44%] left-[2%]" delay={1.8} color="neon" />
    </div>
  )
}

function FloatingTag({
  text,
  className = "",
  delay = 0,
  color = "neon",
}: {
  text: string
  className?: string
  delay?: number
  color?: "neon" | "violet" | "cyan"
}) {
  const colorMap = {
    neon: "border-neon/40 text-neon",
    violet: "border-violet/40 text-violet",
    cyan: "border-cyan/40 text-cyan",
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.5, delay },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={`absolute glass rounded-full px-3 py-1 text-[10px] font-mono ${colorMap[color]} ${className}`}
    >
      {text}
    </motion.div>
  )
}
