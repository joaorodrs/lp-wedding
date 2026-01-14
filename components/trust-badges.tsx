import { Shield, Lock, Download, HeadphonesIcon } from "lucide-react"

export function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
      <div className="flex items-center gap-2 text-sm">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
          <Shield className="h-5 w-5 text-primary" />
        </div>
        <span className="text-muted-foreground">Compra Segura</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
          <Lock className="h-5 w-5 text-primary" />
        </div>
        <span className="text-muted-foreground">Dados Protegidos</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
          <Download className="h-5 w-5 text-primary" />
        </div>
        <span className="text-muted-foreground">Acesso Imediato</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
          <HeadphonesIcon className="h-5 w-5 text-primary" />
        </div>
        <span className="text-muted-foreground">Suporte Dedicado</span>
      </div>
    </div>
  )
}
