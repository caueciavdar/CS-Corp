# Architecture

## Internal page routing and metadata — 2026-09-27

- `src/App.tsx` provides a minimal pathname-based route switch for `/` and `/flooring-interiors`. A routing dependency was not added because the current two-page scope only needs deterministic static entry selection, while Vite's history fallback supports direct local refreshes.
- `FlooringInteriorsPage` owns the division page composition and imports only the confirmed project assets needed above and below the fold. It reuses the existing Header, Footer, layout primitives and accessible `BeforeAfterSlider`.
- The page keeps the Hallway LVP pair in the reusable interactive slider and presents the Bedroom LVP pair as a lighter static side-by-side transformation; this preserves one dominant comparison while showing another confirmed real result.
- The page updates `document.title` and the description meta tag on mount and restores the base title on unmount. Route metadata is intentionally kept dependency-free.

## Stack e execução

React compõe a interface; TypeScript verifica tipos; HTML5 define a entrada semântica; CSS nativo controla apresentação; Vite serve desenvolvimento e gera build estático. npm gerencia dependências e package-lock.json fixa a resolução. Node 24 LTS é o runtime de desenvolvimento.

## Estrutura e responsabilidades

- index.html: documento de entrada, idioma inglês somente para o placeholder atual.
- src/main.tsx: inicialização React em StrictMode e importação do CSS.
- src/App.tsx: composição principal.
- src/pages/HomePage.tsx: composição da Home implementada.
- src/components/site/: componentes compartilhados da Home e da página interna (`Header`, `Hero`, `DivisionCard`, `WhyChoose`, `ProjectsSection`, `BeforeAfterSlider`, `ReviewsPlaceholder`, `FinalCTA` e `Footer`). A página `/flooring-interiors` mantém os quatro diferenciais específicos, a área de atendimento e o CTA final na composição da página, enquanto reutiliza o `Footer`; o Footer converte âncoras da Home em links `/#...` quando usado na rota interna. `ProjectsSection` usa o par real Hallway LVP no slider principal e três fotografias reais na galeria; os demais pares permanecem disponíveis nos assets para uma futura página Projects. `ReviewsPlaceholder` aceita uma lista futura tipada com `customerName`, `reviewText`, `rating`, `source` e `date`, mas renderiza apenas o estado vazio enquanto reviews reais não forem fornecidos.
- src/components/layout/: primitives reutilizáveis de estrutura (`Container` e `Section`).
- src/components/ui/: primitives reutilizáveis de interface; contém o `Button` inicial.
- src/styles/tokens.css: custom properties semânticas do design system, com a paleta inicial e tipografia aprovadas documentadas em DESIGN_SYSTEM.md.
- src/styles/global.css: reset, fundamentos globais, estilos das primitives e placeholder.
- src/components/: reservada para componentes compartilhados quando houver reutilização real.
- src/assets/: reservada para assets importados pelo código e processados pelo Vite.
- public/: reservada para arquivos que precisam preservar nome e caminho, sem transformação.
- docs/: fonte principal da documentação.
- vite.config.ts: integração oficial React/Vite e servidor de desenvolvimento fixado na porta 5173 com `strictPort` habilitado.
- tsconfig.json: TypeScript estrito, sem emissão; build feito pelo Vite.
- eslint.config.js: configuração flat do ESLint para JavaScript, TypeScript e React Hooks; dist ignorado e node_modules excluído por padrão.
- dist/: saída gerada e ignorada pelo Git.

Pastas reservadas podem estar vazias localmente; Git não versiona diretórios vazios. Criá-las com conteúdo útil quando necessário, sem arquivos artificiais.

## Componentes e páginas

Manter componentes pequenos, reutilizáveis e sem duplicação. Separar conteúdo, lógica e apresentação quando apropriado. Páginas ficam em `src/pages`; layout compartilhado em `src/components/layout`; elementos de UI em `src/components/ui`. `Container`, `Section` e `Button` formam a base mínima atual. Os componentes futuros estão propostos em SITE_STRUCTURE.md e só devem ser criados conforme requisitos reais. Apenas o placeholder raiz existe. Roteamento e URLs definitivas: TBD, após aprovação da estrutura. Nenhuma biblioteca de roteamento é necessária agora.

## CSS e assets

CSS nativo organizado em duas camadas: `tokens.css` é importado primeiro e concentra valores compartilhados; `global.css` contém reset, defaults acessíveis, primitives e o placeholder. Estilos específicos devem ficar próximos aos componentes quando a base crescer. A estratégia é mobile-first, com breakpoints propostos em DESIGN_SYSTEM.md. A paleta e as famílias tipográficas iniciais estão aprovadas; web fonts, assets de marca, conteúdo e ajustes de layout permanecem TBD. Não adicionar assets de marca não confirmados.

Componentes devem preferir tokens semânticos a valores visuais soltos. Breakpoints são documentados como tokens de referência, mas precisam ser literais em `@media`. O fallback global de `prefers-reduced-motion` deve permanecer; animações futuras precisam justificar função. `BeforeAfterSlider` é reutilizável, recebe opcionalmente `beforeSrc`/`afterSrc` e textos alternativos, usa Pointer Events para mouse e touch, oferece `role="slider"`, valores ARIA e ajuste por ArrowLeft/ArrowRight. Sem fontes de imagem, renderiza apenas placeholders explicitamente temporários; com as fontes oficiais atuais, usa `object-fit: cover`, alt text factual e carregamento prioritário para o destaque. `ProjectsSection` e `FlooringInteriorsPage` usam galerias compactas com fotos reais; metadados específicos permanecem TBD.

## Integrações e qualidade

Integrações futuras, formulários, APIs, backend e gestão de conteúdo: TBD. Nenhuma implementada. Nunca expor secrets no frontend, inclusive em variáveis VITE_*.

npm run build executa TypeScript e Vite; npm run typecheck verifica tipos isoladamente, sem emitir arquivos. npm run lint executa ESLint sem modificar código e com zero avisos permitidos. São usados os presets recomendados de @eslint/js, typescript-eslint e eslint-plugin-react-hooks; regras React se aplicam a src/. TypeScript permanece estrito, na linha 6.0 compatível com o parser (decisão 007). Testes automatizados não configurados nesta etapa mínima. Validações registradas em CHANGELOG.md.
