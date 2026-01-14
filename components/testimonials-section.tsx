import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Noiva 2024",
    content: "Este planner me salvou! Consegui organizar tudo sem estresse e ainda economizei. Super recomendo!",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    role: "Casou em 2024",
    content: "Amei cada página! O controle financeiro foi essencial para manter o orçamento. Valeu muito a pena!",
    rating: 5,
  },
  {
    name: "Camila Rodrigues",
    role: "Noiva 2025",
    content: "Estava perdida no planejamento até encontrar este guia. Agora está tudo sob controle e organizado!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-balance">O Que Dizem Outras Noivas</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Centenas de noivas já organizaram seus casamentos com este planner
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">{`"${testimonial.content}"`}</p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
