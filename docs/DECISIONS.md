# Architecture Decision Log

## Decision 001: Use React + TypeScript + Vite.
Data: 2026-09-21. Status: aceita.
Usar HTML5, CSS nativo e npm para uma base frontend simples e preparada para crescer.

## Decision 002: Do not use PHP.
Data: 2026-09-21. Status: aceita.
Nenhum PHP ou backend nesta etapa.

## Decision 003: Documentation stored inside repository is considered project source of truth.
Data: 2026-09-21. Status: aceita.
Manter /docs como fonte principal e AGENTS.md como instruções permanentes.

## Decision 004: Relevant changes must include documentation updates.
Data: 2026-09-21. Status: aceita.
Documentar mudanças relevantes na mesma tarefa; nunca guardar regras somente no chat.

## Decision 005: Runtime de desenvolvimento Node 24 LTS.
Data: 2026-09-21. Status: decisão técnica de configuração.
Node 18.16.0 encontrado no ambiente não satisfaz o Vite atual. Usar Node 24 LTS, registrado em engines e .nvmrc; runtime portátil local evita substituir a instalação global.
Referência: https://vite.dev/guide/

## Decision 006: Fundação mínima, sem decisões comerciais ou visuais.
Data: 2026-09-21. Status: aceita.
Sem router, lint, framework CSS, biblioteca de componentes ou integrações nesta etapa. Adicionar ferramentas somente diante de necessidade documentada. Páginas e design permanecem TBD.

A ausência de lint foi superada pela decisão 007; as demais restrições permanecem.

## Decision 007: ESLint flat e compatibilidade TypeScript.
Data: 2026-09-21. Status: aceita na revisão da fundação técnica.
Adicionar npm run lint com eslint . --max-warnings 0, sem correção automática. Usar somente ESLint, @eslint/js, typescript-eslint e eslint-plugin-react-hooks, com presets recomendados para JavaScript, TypeScript e React Hooks. Não adicionar ferramentas de formatação ou plugins extras.

O registro npm informa que typescript-eslint 8.70.1 suporta TypeScript >=4.8.4 <6.1.0. Substituir TypeScript 7.0.2 por ~6.0.3 para manter uma combinação suportada, preservando tsconfig.json e tsc --noEmit. package-lock.json fixa as versões exatas. Reavaliar o intervalo quando o parser suportar novas versões; não ignorar conflitos de peer dependencies.

Referências: https://typescript-eslint.io/users/configs/ e https://react.dev/reference/eslint-plugin-react-hooks; compatibilidade consultada com npm view typescript-eslint peerDependencies.

## Decision 008: Fundação visual baseada em tokens neutros e primitives.
Data: 2026-09-21. Status: aceita como decisão técnica; valores visuais permanecem propostos.
Separar custom properties em `src/styles/tokens.css`, importadas antes de `global.css`, e centralizar cores semânticas, tipografia, espaçamento, raios, sombras, containers, breakpoints de referência e motion. Criar somente `Container`, `Section` e `Button` como primitives iniciais; demais componentes e todas as páginas continuam propostas.

Os valores atuais são defaults neutros temporários, não identidade CS Corp aprovada. A arquitetura de navegação em SITE_STRUCTURE.md também permanece proposta. A estratégia responsiva é mobile-first, com referências iniciais de 48rem, 64rem e 80rem, sujeitas a validação pelo conteúdo.

## Decision 009: Instância única do servidor local de desenvolvimento.
Data: 2026-09-21. Status: aceita.
Antes de iniciar o Vite com `npm run dev`, verificar e encerrar qualquer instância anterior deste projeto, exceto quando uma única instância estiver em uso ativo pelo usuário e puder ser preservada. Servidores iniciados somente para validação devem ser encerrados ao final. Não acumular instâncias ou portas sucessivas; informar o estado final e a porta, quando aplicável, em cada resposta final.

## Decision 010: Direção visual inicial aprovada.
Data: 2026-09-23. Status: aceita.
Adotar direção clean, profissional, moderna e premium, com espaço em branco, fotografia real preferencialmente, texto escuro sobre fundos claros, animação mínima e intencional, sombras sutis, cantos levemente arredondados e acessibilidade/legibilidade como prioridades. Selecionar Option C — Black / White / Premium Blue — com os tokens documentados em DESIGN_SYSTEM.md. Componentes devem consumir tokens semânticos, não HEXs soltos.

## Decision 011: Tipografia e idioma inicial.
Data: 2026-09-23. Status: aceita.
Usar Manrope em headings e Source Sans 3 em body/interface text, com fallbacks documentados e apenas os pesos necessários. O idioma principal do website é inglês; não implementar multilíngue nesta etapa. Web fonts, licenciamento e estratégia de carregamento permanecem TBD.

## Decision 012: CTA primário aprovado.
Data: 2026-09-23. Status: aceita.
Usar `Get a Free Estimate` como CTA primário em todo o website, até que uma decisão posterior documentada o altere. Destino e fluxo permanecem TBD.

## Decision 013: Navegação e estrutura de Home aprovadas.
Data: 2026-09-23. Status: aceita para planejamento.
Navegação inicial: Home, Services, About, Projects, Contact e Get a Free Estimate. Desktop exibe logo e itens; mobile exibe logo e botão de menu, com os mesmos itens dentro do menu. A Home terá Header, Hero, Trust / Credibility, Services, Why Choose Us, Featured Projects, Our Process, Reviews / Testimonials, Final CTA e Footer. URLs exatas, conteúdo, assets e componentes permanecem propostos/TBD; Header, Hero e Home não serão implementados nesta etapa.
