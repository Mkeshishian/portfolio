export type Project = {
  id: string
  name: string
  tagline: string
  description: string
  url: string
  image?: string
  year: string
  role: string
  stack: string[]
  accent: "ember" | "moss" | "ink"
}

export const projects: Project[] = [
  {
    id: "tinylinks",
    name: "Tiny Links Pediatrics",
    tagline: "Pediatric occupational therapy site",
    description:
      "A custom website for a pediatric OT practice serving kids ages 0–5. Designed and built it from scratch around the founder's brand — service pages, booking flow, the whole thing. Now live and bringing in new clients.",
    url: "https://www.tinylinkspediatrics.com/",
    image: "/images/tinylinks.png",
    year: "2025",
    role: "Design + Dev",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
    accent: "ember",
  },
  {
    id: "bmp",
    name: "Bakery Marketplace",
    tagline: "B2B platform for bakery wholesalers",
    description:
      "A wholesale marketplace for bakery and restaurant suppliers. Built on top of WooCommerce with custom PHP/Java services for inventory sync, automated order routing, and per-vendor storefronts. Saved hours of manual ordering work for everyone using it.",
    url: "https://bakerymarketplace.com",
    image: "/images/bmp.png",
    year: "2024",
    role: "Lead Engineer",
    stack: ["WooCommerce", "PHP", "Java", "MySQL", "CI/CD"],
    accent: "moss",
  },
  {
    id: "blu",
    name: "Blu Productions",
    tagline: "Photography portfolio + booking",
    description:
      "Portfolio site for a photography studio. Custom gallery system, fast image delivery, and an inquiry flow that funnels site visitors into actual bookings.",
    url: "https://bluproductions.com",
    image: "/images/blu.jpg",
    year: "2023",
    role: "Design + Dev",
    stack: ["React", "Node.js", "AWS S3", "Stripe"],
    accent: "ink",
  },
]
