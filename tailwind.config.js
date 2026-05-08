/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070d",
        deep: "#0a0e1a",
        bone: "#e8eef5",
        neon: "#00f0c8",
        violet: "#a78bfa",
        cyan: "#22d3ee",
        rose: "#fb7185",
      },
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "aurora": "aurora 18s ease-in-out infinite",
        "twinkle": "twinkle 3s ease-in-out infinite",
        "spin-slow": "spin 16s linear infinite",
        "spin-reverse": "spin-reverse 10s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "weld": "weld 1.4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) scale(1) rotate(0deg)" },
          "33%": { transform: "translate(40px, -60px) scale(1.15) rotate(20deg)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.9) rotate(-15deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        weld: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.4)" },
        },
      },
    },
  },
  plugins: [],
}
