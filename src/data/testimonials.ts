export type Testimonial = {
  id: string
  name: string
  role: string
  company: string
  quote: string
  avatar?: string
  projectUrl?: string
}

export const testimonials: Testimonial[] = [
  {
    id: "tinylinks",
    name: "Tiny Links Pediatrics",
    role: "Founder",
    company: "Tiny Links Pediatrics",
    projectUrl: "https://www.tinylinkspediatrics.com/",
    quote:
      "Working with Michael on my company website was a great experience from start to finish. He was professional, prompt, and incredibly responsive throughout the entire process. What really stood out was his willingness to offer unlimited revisions and genuinely welcome feedback, making sure every detail aligned with my vision. Michael went above and beyond what was initially asked for, providing thoughtful input, creative ideas, and guidance that elevated the final product. At the same time, he executed everything I asked for exactly as I envisioned, paying close attention to the smallest details. My website was up and running with no issues and feels completely personalized to my company and audience. I couldn't be happier with the outcome and would highly recommend him to anyone looking for a reliable and talented web developer.",
  },
]
