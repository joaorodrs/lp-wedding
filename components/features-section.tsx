import { CheckCircle2 } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-balance">O Que Você Vai Encontrar</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Mais de 100 páginas de conteúdo prático e organizado para facilitar cada etapa do planejamento
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {/* Feature 1 */}
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <img src="/images/1.jpg" alt="Planeje seu casamento sem estresse" className="rounded-lg shadow-xl" />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-balance">Planeje Cada Detalhe com Facilidade</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Local e Estrutura:</strong> 3 páginas para especificar estilo e fornecedores da cerimônia e
                    recepção
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Buffet e Bebidas:</strong> 4 páginas com seções para escolher estilos e registrar
                    fornecedores
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Decoração e Estilo:</strong> 10 páginas dedicadas ao cerimonial, recepção, festa e
                    fornecedores
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Música e Danças:</strong> 3 páginas para definir o estilo e escolher fornecedores
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-balance">Tenha o Domínio Total do Seu Orçamento</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Controle Financeiro:</strong> 6 páginas com planilhas para relacionar fornecedores e valores
                    a pagar
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Controle Mensal:</strong> Mais de 10 páginas com checklists para cada mês e semana
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Papelaria Completa:</strong> 6 páginas para convites, brindes, padrinhos e madrinhas
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Lista de Convidados:</strong> 3 páginas organizadas com checklists
                  </span>
                </p>
              </div>
            </div>
            <div>
              <img src="/images/2.jpg" alt="Controle financeiro completo" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
