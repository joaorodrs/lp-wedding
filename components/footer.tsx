export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-primary">Planner de Casamento 2026</h3>
          <p className="text-muted-foreground">
            {"Criado com ♥ por Thais Sousa para ajudar noivas a organizarem o casamento dos sonhos"}
          </p>
          <div className="pt-4 text-sm text-muted-foreground">
            {"© "}
            {new Date().getFullYear()}
            {" Todos os direitos reservados"}
          </div>
        </div>
      </div>
    </footer>
  )
}
