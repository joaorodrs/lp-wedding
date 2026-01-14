import { ShieldCheck } from "lucide-react"

export function GuaranteeBadge() {
  return (
    <div className="inline-flex items-center gap-3 px-6 py-4 bg-accent/50 border-2 border-primary/20 rounded-xl">
      <ShieldCheck className="h-12 w-12 text-primary flex-shrink-0" />
      <div className="text-left">
        <div className="font-bold text-lg">Garantia de 7 Dias</div>
        <div className="text-sm text-muted-foreground">Se não gostar, devolvemos 100% do seu dinheiro</div>
      </div>
    </div>
  )
}
