# Architecture Decision Log

## Decision 032: Vector logos and "Insured" on the flooring page

Data: 2026-10-21. Status: aceita.
O usuário aprovou o redesenho vetorial das marcas (CS com telhado para Flooring e empresa-mãe; CS dourado com gota para Cleaning) e pediu para usá-las no site. Elas substituem os recortes provisórios da Decision 028 como SVG em `src/assets/brand/` (`cs-mark-white.svg`, `flooring-mark.svg`, `cleaning-mark.svg`). Os arquivos de trabalho (cores, PNGs, versão para o Google) ficam fora do repositório, na pasta compartilhada do projeto.

O usuário enviou o certificado de seguro: General Liability da Hiscox em nome de Conexion Services Corp, válido de 2026-10-03 a 2027-10-03. O site passa a mostrar só a palavra "Insured" no hero de Flooring & Interiors, sem número de apólice, valores ou endereço. Cleaning fica sem "Insured" até o usuário confirmar com a Hiscox que a limpeza está coberta. Se a apólice não for renovada até 2027-10-03, o "Insured" tem que sair.

## Decision 031: Launch plan on Hostinger, manual upload

Data: 2026-10-13. Status: aceita.
O domínio está na Hostinger. A publicação é um envio manual do conteúdo de `dist/` para `public_html`, sem deploy automático (regra do AGENTS.md). O build leva `.htaccess` (HTTPS, fallback das rotas para `index.html`, cache), `robots.txt` e `sitemap.xml`. O usuário confirmou que ainda não há fotos reais de limpeza (divisão nova) nem avaliações publicadas, então o lançamento mantém as ilustrações da página de limpeza e `Client reviews coming soon.`; ambos são trocados quando o conteúdo real chegar. Publicar continua dependendo do OK explícito do usuário.

## Decision 030: Reviews section ready, fed only by real reviews

Data: 2026-10-13. Status: aceita.
O usuário pediu o visual da seção de avaliações do modelo pronto, porque a primeira avaliação real chega em breve. A seção usa uma foto de fundo gerada por IA (permitida pela Decision 029) escurecida, mostra uma avaliação por vez com estrelas, nome e origem, e setas quando houver mais de uma. As avaliações ficam numa lista em `src/content/reviews.ts`, separada do componente; enquanto a lista estiver vazia aparece `Client reviews coming soon.` A avaliação de teste do modelo ("Sarah M.") é inventada e nunca entra no site.

## Decision 029: AI-generated photos as ambient backgrounds only

Data: 2026-10-13. Status: aceita.
O usuário aprovou fotos geradas por IA para o fundo do hero e dos cards das divisões, seguindo o modelo visual que ele enviou. Elas nunca aparecem como trabalho da empresa: Our Work, Projects e os antes/depois continuam só com fotos reais. As fotos ficam como `<img>` decorativas (`alt=""`) atrás de gradientes que garantem o contraste do texto.

## Decision 028: Provisional logos extracted from the user's screenshot

Data: 2026-10-13. Status: aceita (provisória).
O usuário enviou os logos das divisões feitos no ChatGPT, mas como print de tela. Usamos só a marca "CS" de cada divisão, recortada e sem fundo, e deixamos os nomes como texto real para ficarem nítidos e legíveis pelo Google. Quando chegarem os arquivos originais (ou um logo refeito), basta substituir os arquivos em `src/assets/brand/` mantendo os mesmos nomes. O logo da empresa-mãe continua TBD; por enquanto o Header usa a marca de Flooring em branco.

## Decision 027: Estimate form via Web3Forms, no backend

Data: 2026-10-12. Status: aceita.
O usuário pediu um formulário de orçamento. Como o projeto não usa backend nem PHP, o formulário em `/contact` envia para o Web3Forms, um serviço gratuito que encaminha cada pedido para o e-mail da empresa. A chave pública da empresa fica como padrão em `EstimateForm.tsx` (pode ser sobrescrita por `VITE_WEB3FORMS_ACCESS_KEY`) e a lista de serviços vem só de BUSINESS_RULES.md. Sem a chave, o envio abre um e-mail pré-preenchido para o endereço publicado, então o formulário nunca perde um pedido em silêncio. Envio de fotos não foi incluído porque exige plano pago; fica TBD.

## Decision 026: Keep internal placeholder notes out of the public UI

Data: 2026-10-12. Status: aceita.
Pending items (official logo, hero photography) stay tracked in /docs as TBD, not as visible text on the website. Visitors see the neutral current treatment without labels such as "logo pending" or "placeholder". Default SEO metadata and LocalBusiness structured data live in `index.html` and may only contain confirmed business data from BUSINESS_RULES.md.

## Decision 025: Implement Projects as a local filtered real-photo portfolio

Data: 2026-09-27. Status: aceita.
Implement `/projects` with a small typed local dataset, front-end category filters and one expanded project detail area. Use only the supplied real WebP photos and the five documented Before/After pairs. Do not show Cleaning filters or invent client, location, price, duration or other detailed metadata; Cleaning photography and confirmed project metadata remain TBD.

## Decision 024: Refine Cleaning closing sections without adding unconfirmed content

Data: 2026-09-27. Status: aceita.
Keep the approved Cleaning Header, Hero and service cards unchanged while refining only the lower sections. Use the confirmed four differentiators, three process steps, service-area sentence and final CTA copy. Present future Cleaning work as an intentional abstract teaser with category structure, never as real photography. Preserve the temporary published email as the mailto destination until a definitive CTA flow exists.

## Decision 023: Implement the Cleaning Services division page with temporary abstract visuals

Data: 2026-09-27. Status: aceita.
Implement `/cleaning-services` with the four confirmed cleaning services, black/charcoal surfaces, restrained gold/bronze accents and small premium-blue accents. Reuse the shared Header and Footer, mark the route active, and keep the hero/work visuals abstract until real Cleaning photography and the official division logo are supplied. The temporary published email remains the CTA destination; the permanent email and definitive CTA destination remain TBD.

## Decision 022: Complete the Flooring & Interiors closing blocks with safe copy

Data: 2026-09-27. Status: aceita.
`/flooring-interiors` uses the approved four-pillar `WHY CHOOSE CS FLOORING & INTERIORS?` section, the confirmed service-area sentence, and the final CTA `READY TO TRANSFORM YOUR SPACE?`. The CTA keeps the temporary published email as a mailto destination until a definitive flow exists. The official logo and permanent email remain TBD. The existing Footer is reused, with internal-page links directed back to Home anchors where no internal destination exists.

## Decision 019: Minimal pathname routing for the first internal page

For the first real secondary page, the application uses a small pathname switch in `App.tsx` instead of adding `react-router-dom`. The current scope is limited to `/` and `/flooring-interiors`; this keeps dependencies unchanged while preserving a clear place to evolve routing when more pages require nested navigation or route state. Direct refreshes are supported by Vite's local fallback.

## Decision 020: Flooring & Interiors page uses confirmed assets and safe copy

`/flooring-interiors` uses only the five confirmed services, the approved Hallway LVP before/after pair and real gallery assets listed in `PHOTO_INDEX.md`. The hero remains an architectural CSS composition until a definitive horizontal photograph is confirmed. No project location, client, price, duration, certification, license, insurance or performance claim is presented.

## Decision 021: Secondary transformation is static and lightweight

`/flooring-interiors` keeps Hallway LVP as the single dominant interactive comparison and adds the confirmed Bedroom LVP pair as a smaller static side-by-side treatment. This gives the page a second real transformation without turning the section into multiple equally weighted sliders. Exact project metadata remains TBD.

## Decision 016: Porta fixa para o servidor Vite
Data: 2026-09-24. Status: aceita.
Configurar o servidor de desenvolvimento do Vite para usar a porta 5173 com `strictPort: true`. Isso mantém a URL local previsível e evita que uma instância duplicada seja deslocada silenciosamente para outra porta; a instância existente deve ser verificada e encerrada conforme a decisão 009.

## Decision 014: Conteúdo comercial confirmado e Home aprovada para implementação
Data: 2026-09-24. Status: aceita.
Confirmados CS Conexion Services Corp, as duas divisões, telefone, email temporário, Instagram, Facebook, serviços de flooring e cleaning e Jacksonville como área adicional. A Home segue a referência visual enviada pelo usuário e inclui Header, Hero, Two Divisions, Why Choose CS, Our Work, reviews placeholder, CTA e Footer. Reviews reais e fotos reais permanecem pendentes; nenhum conteúdo fictício deve ser apresentado.

## Decision 015: Comparação before/after reutilizável
Data: 2026-09-24. Status: implementada.
`BeforeAfterSlider` usa Pointer Events para mouse e touch, mantém barra central arrastável, labels Before/After, semântica `role="slider"`, valores ARIA e controle por ArrowLeft/ArrowRight. Recebe fontes e alt text opcionais para fotos reais; sem essas propriedades, mostra placeholders neutros explicitamente temporários. O componente está preparado para múltiplos projetos.

## Decision 017: Our Work sem fotos reais
Data: 2026-09-25. Status: aceita.
Manter `Our Work` com cabeçalho aprovado, um slider de destaque e slots neutros para projetos futuros. Não incluir stock photography, nomes, metadados ou comparações inventadas. Fotos reais, créditos, autorizações, legendas, metadados e rota definitiva de Projects permanecem TBD.

## Decision 018: Fotos reais oficiais em Our Work
Data: 2026-09-26. Status: implementada.
Usar o par Hallway LVP como comparação principal da Home e três fotos reais — hardwood fireplace, kitchen backsplash corner e light LVP room — na galeria compacta existente. Os pares Bedroom LVP, Stairs Restoration, Kitchen Backsplash e Shower Remodel permanecem reservados para a futura página Projects. Não foram usadas stock photos; localizações, títulos específicos e demais metadados continuam TBD.

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
