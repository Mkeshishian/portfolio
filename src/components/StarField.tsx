import { useEffect, useMemo, useRef } from "react"

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

  const trailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = trailRef.current
    if (!container) return

    let lastEmit = 0
    let lastX = -1000
    let lastY = -1000

    const onMouseMove = (e: MouseEvent) => {
      const now = performance.now()
      const dx = e.clientX - lastX
      const dy = e.clientY - lastY
      const speed = Math.sqrt(dx * dx + dy * dy)
      lastX = e.clientX
      lastY = e.clientY

      if (now - lastEmit < 45 || speed < 3) return
      lastEmit = now

      const size = Math.random() * 3 + 2
      const p = document.createElement("div")
      p.className = "cursor-particle"
      p.style.left = `${e.clientX + (Math.random() - 0.5) * 8}px`
      p.style.top = `${e.clientY + (Math.random() - 0.5) * 8}px`
      p.style.width = `${size}px`
      p.style.height = `${size}px`
      p.style.marginLeft = `-${size / 2}px`
      p.style.marginTop = `-${size / 2}px`
      container.appendChild(p)

      window.setTimeout(() => {
        p.remove()
      }, 800)
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMouseMove)
  }, [])

  return (
    <>
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

      <div
        ref={trailRef}
        className="fixed inset-0 z-[60] pointer-events-none overflow-hidden hidden md:block"
      />
    </>
  )
}
