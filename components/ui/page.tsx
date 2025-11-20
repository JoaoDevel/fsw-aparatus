// Criei esse arquivo para armazenar componentes reutilizáveis relacionados à estrutura da página

// Componente para o contêiner principal da página
export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-6 p-5">{children}</div>;
};

// Componente para o título das seções da página
export const PageSectionTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <h2 className="text-foreground text-sm font-semibold uppercase">
      {children}
    </h2>
  );
};

// Componente para agrupar itens dentro de uma seção
export const PageSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-3">{children}</div>;
};

// Componente para criar uma área de rolagem horizontal para itens da seção
export const PageSectonScroller = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {children}
    </div>
  );
};
