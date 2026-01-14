import { Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Heart className="h-8 w-8 text-primary fill-primary" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Quem Sou Eu</h2>
          </div>

          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 space-y-6 border border-border">
            <div className="text-center mb-8">
              <div className="mb-6 flex justify-center">
                <img
                  src="/images/thais.jpeg"
                  alt="Thais Sousa"
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                />
              </div>
              <h3 className="text-3xl font-semibold mb-2">Thais Sousa</h3>
              <p className="text-primary text-lg">Criadora do Planner de Casamento 2026</p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Olá! Eu sou a Thais, e há alguns meses eu estava exatamente onde você está agora: planejando meu
                casamento e sentindo aquela mistura de empolgação e ansiedade que só quem está organizando o grande dia
                consegue entender.
              </p>

              <p>
                Durante meu próprio planejamento, percebi como era difícil manter tudo organizado. Eram tantos
                fornecedores, tantas decisões, tantos prazos... e o orçamento? Nem me fale! Foi então que comecei a
                criar planilhas, listas e um sistema completo para não perder nenhum detalhe.
              </p>

              <p className="text-foreground font-medium">
                Criei este planner digital completo com tudo que aprendi na prática, todas as ferramentas que usei e
                todas as dicas que gostaria de ter recebido quando comecei. Minha missão agora é ajudar você a ter o
                casamento dos seus sonhos, com organização, tranquilidade e muito amor!
              </p>

              <p className="text-center italic pt-4 text-base">
                "Que seu planejamento seja tão especial quanto o dia do seu casamento!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
