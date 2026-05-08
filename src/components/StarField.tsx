import { useMemo } from "react"

type Star = {
  x: number
  y: number
  size: number
  delay: number
  duration: number
  baseOpacity: number
}

export default function StarField() {
  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: 80 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.4 + 0.5,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2.5,
        baseOpacity: Math.random() * 0.5 + 0.3,
      })),
    []
  )

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-bone star-twinkle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.baseOpacity,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
