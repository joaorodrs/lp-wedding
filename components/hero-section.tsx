"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TrustBadges } from "./trust-badges";

export function HeroSection() {
  const handleCTAClick = () => {
    const ctaSection = document.getElementById("cta-section");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLearnMore = () => {
    const benefitsSection = document.getElementById("benefits-section");
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Decorative botanical elements */}
      <div className="absolute right-0 top-0 h-64 w-64 opacity-10">
        <svg viewBox="0 0 200 200" className="text-primary">
          <path
            d="M100,20 Q120,40 130,70 Q135,85 140,100 Q135,115 130,130 Q120,160 100,180"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
          />
          <path
            d="M130,70 Q145,75 155,85"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
          />
          <path
            d="M140,100 Q155,100 165,105"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
          />
          <path
            d="M130,130 Q145,125 155,115"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="absolute left-0 bottom-0 h-64 w-64 opacity-10 rotate-180">
        <svg viewBox="0 0 200 200" className="text-primary">
          <path
            d="M100,20 Q120,40 130,70 Q135,85 140,100 Q135,115 130,130 Q120,160 100,180"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
          />
          <path
            d="M130,70 Q145,75 155,85"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
          />
          <path
            d="M140,100 Q155,100 165,105"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
          />
          <path
            d="M130,130 Q145,125 155,115"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
                Planeje Seu Casamento Sem Estresse
              </h1>
              <p className="text-xl text-muted-foreground text-pretty md:text-2xl leading-relaxed">
                O guia completo para organizar cada detalhe do seu grande dia
                com tranquilidade e controle total do orçamento
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
                onClick={handleCTAClick}
              >
                Garanta Seu Guia Completo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/5 bg-transparent"
                onClick={handleLearnMore}
              >
                Conhecer Mais
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">70+</div>
                <div className="text-sm text-muted-foreground">
                  Páginas de Conteúdo
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">
                  Checklists Completos
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Digital</div>
              </div>
            </div>

            <div className="pt-8">
              <TrustBadges />
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img
                src="/images/5.jpg"
                alt="Planner de Casamento 2026"
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
