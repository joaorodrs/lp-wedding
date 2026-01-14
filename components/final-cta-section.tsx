"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PaymentMethods } from "./payment-methods";
import { GuaranteeBadge } from "./guarantee-badge";
import { trackInitiateCheckout } from "@/app/head-scripts";

const includes = [
  "Calendário completo do ano 2026",
  "Mais de 15 checklists detalhados",
  "Controle financeiro com planilhas",
  "Gestão de convidados e papelaria",
  "Planejamento de decoração e estilo",
  "Organização de fornecedores",
  "Checklists mensais e semanais",
  "Acesso imediato após a compra",
];

export function FinalCTASection() {
  const handlePurchaseClick = () => {
    trackInitiateCheckout();
    window.open("https://payfast.greenn.com.br/152465", "_blank");
  };

  return (
    <section
      id="cta-section"
      className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 h-32 w-32">
          <svg viewBox="0 0 100 100" className="text-white">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              fill="none"
              strokeWidth="1"
            />
            <circle
              cx="50"
              cy="50"
              r="30"
              stroke="currentColor"
              fill="none"
              strokeWidth="1"
            />
          </svg>
        </div>
        <div className="absolute bottom-10 left-10 h-32 w-32 rotate-45">
          <svg viewBox="0 0 100 100" className="text-white">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              fill="none"
              strokeWidth="1"
            />
            <circle
              cx="50"
              cy="50"
              r="30"
              stroke="currentColor"
              fill="none"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-balance">
              Comece a Planejar Seu Casamento Hoje
            </h2>
            <p className="text-xl text-primary-foreground/90 text-pretty">
              Tenha acesso imediato ao planner completo e organize seu grande
              dia com tranquilidade
            </p>
          </div>

          <div className="bg-card text-card-foreground rounded-2xl p-8 md:p-12 shadow-2xl mb-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  O que está incluído:
                </h3>
                <ul className="space-y-3">
                  {includes.slice(0, 4).map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 invisible md:visible">
                  E mais:
                </h3>
                <ul className="space-y-3">
                  {includes.slice(4).map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border text-center space-y-6">
              <div className="mb-6">
                <div className="text-sm text-muted-foreground mb-2">
                  Investimento
                </div>
                <div className="mb-2">
                  <span className="text-2xl text-muted-foreground line-through">
                    R$ 59,90
                  </span>
                </div>
                <div className="text-5xl font-bold text-primary mb-2">
                  R$ 19,90
                </div>
                <div className="text-sm text-muted-foreground">
                  Pagamento único • Acesso vitalício
                </div>
              </div>

              <div className="flex justify-center mb-6">
                <GuaranteeBadge />
              </div>

              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-6 w-full md:w-auto"
                onClick={handlePurchaseClick}
              >
                Quero Garantir Meu Planner Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <div className="mt-6">
                <PaymentMethods />
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span>
                  Ambiente 100% seguro - Seus dados estão protegidos com
                  criptografia SSL
                </span>
              </div>
            </div>
          </div>

          {/* <div className="text-center text-primary-foreground/80 text-sm"> */}
          {/*   <p>Mais de 500 noivas já organizaram seus casamentos com este planner</p> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
