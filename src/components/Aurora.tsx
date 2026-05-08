export default function Aurora() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-ink" />

      <div
        className="absolute -top-1/4 -left-1/4 w-[80vw] h-[80vw] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(0,240,200,0.4) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute -bottom-1/4 right-1/4 w-[60vw] h-[60vw] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.4) 0%, transparent 60%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  )
}
