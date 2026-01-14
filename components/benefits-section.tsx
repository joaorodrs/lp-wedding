import { CheckCircle2, Heart, Calendar, DollarSign, ListChecks, Users } from "lucide-react"

const benefits = [
  {
    icon: Calendar,
    title: "Organização Completa",
    description: "Calendário 2026, checklists mensais e semanais para não esquecer nenhum detalhe",
  },
  {
    icon: DollarSign,
    title: "Controle Financeiro Total",
    description: "Planilhas detalhadas para gerenciar fornecedores, pagamentos e manter o orçamento sob controle",
  },
  {
    icon: ListChecks,
    title: "Checklists Práticos",
    description: "Listas completas para noivo e noiva, convidados, papelaria e todos os aspectos do casamento",
  },
  {
    icon: Users,
    title: "Gestão de Convidados",
    description: "Organize sua lista de convidados, padrinhos e madrinhas de forma simples e eficiente",
  },
  {
    icon: Heart,
    title: "Planejamento de Cerimônia",
    description: "Seções dedicadas para planejar cada momento especial da cerimônia e recepção",
  },
  {
    icon: CheckCircle2,
    title: "Tudo em Um Lugar",
    description: "Local e estrutura, buffet, decoração, música, mídias e muito mais em um único guia",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits-section" className="py-20 md:py-32 bg-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-balance">
            Por Que Você Precisa Deste Planner?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Transforme o planejamento do seu casamento em uma experiência organizada e sem estresse
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
