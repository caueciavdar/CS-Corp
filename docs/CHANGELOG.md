# Changelog

## 2026-09-27 — Refinamento de Our Services em Flooring & Interiors

- Refinada somente a seção `OUR SERVICES`, preservando Header, Hero, Before/After, Recent Work, Why Choose, CTA, Footer e Home.
- Mantidos os cinco serviços confirmados, com copy factual revisada, ícones SVG inline e cards claros com numeração e acentos discretos.
- Substituída a grade rígida por composição 3+2 no desktop, duas colunas no tablet e uma coluna no mobile, com hover sutil e suporte a `prefers-reduced-motion`.
- Ajustado o dimensionamento final para manter os cards inferiores com a mesma proporção visual dos superiores e centralizá-los explicitamente.
- Preservada a quebra natural de `Bathroom Remodeling` e `Kitchen Remodeling`, sem quebra de palavras e com largura confortável para as descrições.

### Validação desta etapa

- Lint, typecheck e build executados após as alterações.

## 2026-09-27 — Refinamento do Header e Hero de Flooring & Interiors

- Corrigida a composição da headline para preservar `TRANSFORM` e `YOUR SPACE.` como palavras inteiras, com escala, largura, line-height e wrapping responsivos.
- Refinados apenas no contexto de `/flooring-interiors` o peso visual do Header, os CTAs, o espaçamento da primeira dobra e o detalhe arquitetônico lateral.
- Preparada uma área visual isolada para futura fotografia horizontal real; nenhuma stock photo foi adicionada. Services, demais seções da página e Home foram preservados.

## 2026-09-27 — Flooring & Interiors internal page

- Implemented `/flooring-interiors` as the first complete internal division page while preserving the approved Home composition.
- Reused Header, Footer, Container, Section and `BeforeAfterSlider`; navigation now supports the internal route and marks the active division with `aria-current`.
- Added the five confirmed Flooring & Interiors services, real project gallery photography, the Hallway LVP comparison, safe differentiators, service area and final estimate CTA.
- Added route-specific title and meta description without a metadata dependency. The hero remains a temporary architectural CSS composition; definitive hero photography and detailed project metadata remain TBD.

### Validação desta etapa

- Lint, typecheck e build executados após as alterações.

## 2026-09-26 — Integração das fotos reais em Our Work

- Substituído o placeholder do `BeforeAfterSlider` pelo par real Hallway LVP, mantendo mouse, touch, teclado, ARIA, labels Before/After, faixa 0–100% e posição inicial em 50%.
- Substituídos os três slots inferiores por fotos reais de hardwood fireplace, kitchen backsplash corner e light LVP room, com `object-fit: cover`, alt text factual e carregamento lazy para a galeria.
- Mantidos nos assets, sem renderização adicional na Home, os pares Bedroom LVP, Stairs Restoration, Kitchen Backsplash e Shower Remodel para uso futuro na página Projects.
- Nenhuma stock photo foi usada; títulos específicos, localizações, créditos, autorizações e demais metadados continuam TBD.

### Validação desta etapa

- Lint, typecheck, build e validação local em `5173` executados após as alterações; servidor encerrado ao final da validação.

## 2026-09-26 — Refinamento visual final de Our Work

- Removidos da interface os textos técnicos de desenvolvimento dos placeholders do comparador e da galeria.
- Mantida a estrutura preparada para fotos reais, com placeholders arquitetônicos neutros, proporção consistente e composição mais compacta no desktop.
- Preservados o slider Before/After, interação por mouse/touch/teclado, ARIA, faixa de 0–100% e CTA `VIEW MORE PROJECTS`.
- Fotografias reais, `beforeSrc`, `afterSrc`, imagens de projetos, alt text e metadados continuam TBD; nenhuma imagem externa ou projeto inventado foi incluído.

## 2026-09-25 — Refinamento de Our Work e BeforeAfterSlider

- Atualizada a seção `Our Work` para o cabeçalho `OUR WORK` / `REAL PROJECTS. REAL RESULTS.`, composição centralizada, slider em destaque e três slots neutros para projetos futuros.
- Refinado `BeforeAfterSlider` para aceitar fontes opcionais de imagens e alt text, manter posição inicial em 50%, revelar de 0% a 100%, suportar mouse/touch e ajuste por ArrowLeft/ArrowRight.
- Adicionados `role="slider"`, valores ARIA, label acessível, handle com alvo confortável e comportamento responsivo sem overflow horizontal.
- Placeholders permanecem explicitamente temporários; nenhuma foto externa, projeto, metadata ou before/after real foi inventado.
- Fotos reais, créditos, autorizações, metadados e rotas de Projects continuam pendentes.

### Validação desta etapa

- Lint, typecheck, build e validação HTTP local em `5173` executados com sucesso; servidor encerrado após a validação.

## 2026-09-25 — Ajustes finais da seção Why Choose CS

- Corrigida a quebra do título `Responsive communication` para respeitar palavras inteiras e favorecer duas linhas naturais no desktop.
- Reduzido moderadamente o espaçamento vertical da seção e tornado o eyebrow `The CS difference` mais discreto, mantendo o heading `Why choose CS?` como foco visual.
- Preservados textos, ícones, divisores e os layouts responsivos 4 colunas, 2×2 e uma coluna das demais áreas.

## 2026-09-25 — Refinamento da seção Why Choose CS

- Substituída a estrutura anterior por quatro pilares horizontais: `Quality-focused`, `Responsive communication`, `Residential & commercial` e `Two specialized divisions`.
- Adicionados ícones SVG inline, heading centralizado, descrições curtas e divisores discretos alinhados à referência visual aprovada.
- Implementado comportamento responsivo em coluna no mobile, grid 2×2 no tablet e quatro colunas no desktop; Header, Hero, Our Divisions e demais seções foram preservados.
- Mantidas somente afirmações de valor fornecidas, sem awards, licenças, garantias, certificações, métricas ou outros claims não comprovados.

### Validação desta etapa

- Lint, typecheck e build executados após as alterações.
## 2026-09-24 — Refinamento da seção Our Divisions

- Transformados os dois cards em painéis grandes e equilibrados para Flooring & Interiors e Home & Commercial Cleaning, com identidades visuais distintas e composição responsiva lado a lado/empilhada.
- Mantidos exclusivamente os serviços confirmados; adicionadas as taglines aprovadas, CTAs específicos e ícones SVG inline leves.
- Preparado espaço explícito para os logos oficiais e mantidos backgrounds arquitetônicos CSS temporários, sem stock photography.
- Centralizados os novos tons dos painéis em tokens de design; Header, Hero e as demais seções da Home não foram alterados.

### Validação desta etapa

- Lint e typecheck aprovados.
- Build repetido com permissão de subprocessos após bloqueio `spawn EPERM` do sandbox; aprovado com Vite 8.3.0.

## 2026-09-24 — Ajustes finais de Header e Hero

- Ajustada a headline do Hero para manter `ONE COMMITMENT.` junto em desktop, com escala e largura responsivas; no mobile a quebra permanece natural.
- Removido o CTA duplicado do conteúdo do Hero e o label `Service divisions`, mantendo o CTA principal no Header e o conteúdo institucional lateral.
- Tornada a separação do Header mais sutil, refinada a altura/centralização e ampliada discretamente a área do logo temporário.
- Reforçados os três value items com tipografia mais presente, espaçamento melhor e ícones SVG inline leves.
- Mantidos o background arquitetônico CSS temporário, a estrutura preparada para fotografia real e todas as demais seções da Home sem alteração.

### Validação desta etapa

- Lint, typecheck e build executados após as alterações.
- Nenhuma instância de desenvolvimento estava ativa em `5173`; validação local não iniciou uma nova instância.

## 2026-09-24 — Segunda rodada visual de Header e Hero

- Refinada a distribuição do Header desktop, com navegação mais compacta, separação visual sutil e CTA/telefone melhor alinhados.
- Tornada a área de logo provisória mais discreta, mantendo explícito que o asset oficial ainda não foi entregue.
- Reduzida e neutralizada a headline do Hero, mantendo `TWO SERVICES. ONE COMMITMENT.` em branco e reservando azul/dourado para acentos.
- Reestruturado o placeholder arquitetônico do Hero com overlays, linhas e composição mais equilibrada; nenhuma fotografia externa foi adicionada.
- Reorganizados o bloco institucional à direita, o CTA e os três itens de valor, preservando responsividade e as demais seções da Home.

### Validação desta etapa

- Lint, typecheck e build executados após as alterações.
- Instância de desenvolvimento em `5173` verificada antes da validação; nenhuma nova instância foi iniciada.

## 2026-09-24 — Porta fixa do servidor Vite

- Configurado o Vite para servir o desenvolvimento na porta 5173 com `strictPort: true`.
- Atualizadas as instruções de desenvolvimento e o registro de decisões.

### Validação desta etapa

- Lint, typecheck e build executados após a alteração.
- Servidor Vite iniciado em instância única na porta 5173 e encerrado após a validação.

## 2026-09-24 — Revisão visual de Header e Hero

- Ajustado o Header para integrar-se ao Hero, com navegação compacta, CTA, telefone e comportamento mobile preservado.
- Substituída a identidade provisória circular por uma área explicitamente temporária para receber o logo oficial.
- Atualizado o Hero com a copy aprovada, composição predominantemente à esquerda, overlay escuro, placeholder arquitetônico em CSS e itens de valor.
- As demais seções da Home não foram redesenhadas; fotografia arquitetônica e logo oficial continuam pendentes.

### Validação desta etapa

- Lint, typecheck e build executados após as alterações.
- Servidor Vite iniciado em instância única para validação visual e encerrado ao final.

## 2026-09-24 — Implementação estrutural da Home

- Implementada a Home inspirada na referência visual aprovada: Header, Hero, duas divisões, Why Choose CS, Our Work, reviews placeholder, CTA e Footer.
- Confirmados e publicados os serviços de flooring e cleaning, Jacksonville na área atendida, contatos e redes sociais aprovadas.
- Criado `BeforeAfterSlider` reutilizável para mouse e touch, com placeholders neutros claramente temporários e pronto para fotos reais.
- Reviews exibem somente `Client reviews coming soon.`; nenhuma avaliação, estrela, nome ou imagem de portfólio foi inventada.
- Fotos reais dos trabalhos, reviews reais e logo oficial permanecem pendentes.

## 2026-09-23 — Aprovação da direção visual, navegação e estrutura planejada

- Confirmada a direção visual clean, profissional, moderna e premium, com espaço em branco, fotografia real preferencial, texto escuro sobre fundos claros, animação mínima, sombras sutis, cantos levemente arredondados e prioridade de acessibilidade/legibilidade.
- Aprovada a Option C — Black / White / Premium Blue — e atualizados os tokens semânticos em `src/styles/tokens.css`.
- Aprovada a tipografia Manrope para headings e Source Sans 3 para body/interface text, com fallbacks e pesos recomendados documentados.
- Confirmados inglês como idioma principal, sem multilíngue nesta etapa, e `Get a Free Estimate` como CTA primário.
- Aprovada a navegação inicial desktop/mobile e a estrutura de alto nível da Home, sem implementar Header, Hero ou Home.
- Mantidos como TBD o conteúdo comercial, nome, logo, tagline, serviços, áreas, contatos, redes, descrição, diferenciais, reviews e fotos autorizadas.
- Registradas as decisões 010–013.

### Validação desta etapa

- Alterações restritas à documentação e tokens/CSS globais da fundação; Vite não foi iniciado.
- Build, typecheck e lint executados após as alterações.
- `git diff --check` executado após as alterações.

## 2026-09-23 — Preparação de identidade visual e navegação para aprovação

- Organizadas em Confirmed, Proposed e TBD as decisões de branding e direção visual.
- Registradas três opções de paleta com HEX provisórios, três combinações tipográficas e cinco labels de CTA para futura escolha.
- Documentada a proposta de navegação desktop/mobile sem implementar Header definitivo.
- Documentada a composição futura da Home por seção, sem conteúdo comercial inventado e sem construir a página.
- Adicionada lista de conteúdo, assets e dados reais necessários antes da implementação visual.
- Registrada a decisão 010; nenhum token final, dependência, componente definitivo ou página foi alterado nesta etapa.

### Validação desta etapa

- Alterações restritas à documentação; lint, typecheck e build não foram necessários e não foram executados.
- Servidor local não foi iniciado; `stopped after validation`.
- Revisão de `git diff --check` executada após as alterações.

## 2026-09-21 — Regra de servidor local único

- Adicionada ao `AGENTS.md` a regra permanente de verificar e controlar instâncias Vite/Node antes de executar `npm run dev`.
- Documentado que somente uma instância de desenvolvimento deste projeto pode permanecer ativa, evitando o acúmulo de portas 5173, 5174, 5175 e seguintes.
- Servidores iniciados apenas para validação devem ser encerrados ao final; a resposta final deve informar `running` com a porta atual ou `stopped after validation`.
- Orientação operacional alinhada em `docs/DEPLOYMENT.md` e registrada na decisão 009.

## 2026-09-21 — Fundação visual e proposta de navegação

- Estruturado o design system inicial com status Confirmed, Proposed e TBD para brand, cores, tipografia, espaçamento, formas, componentes, responsividade, acessibilidade e motion.
- Adicionados tokens CSS neutros e temporários, separados dos estilos globais e sem declarar identidade de marca aprovada.
- Criadas as primitives reutilizáveis `Container`, `Section` e `Button`; o placeholder técnico passou a demonstrar a fundação sem se tornar uma Home definitiva.
- Proposta arquitetura de informação para Home, Services, About, Projects / Gallery e Contact, incluindo padrões desktop e mobile; páginas, rotas, CTA e conteúdo continuam sem aprovação.
- Documentados componentes futuros, estratégia mobile-first, breakpoints propostos, requisitos de acessibilidade e decisão técnica 008.
- Nenhuma dependência, router, backend, integração ou configuração de deploy adicionada.

### Validação desta etapa

- Node 24.21.0; `npm.cmd run lint`: aprovado sem avisos; `npm.cmd run typecheck`: aprovado.
- `npm.cmd run build`: aprovado; Vite 8.3.0 gerou o build de produção. A primeira tentativa no sandbox falhou com `spawn EPERM`; a repetição com permissão para subprocessos foi concluída.
- `npm.cmd run dev -- --host 127.0.0.1 --port 5175 --strictPort`: servidor iniciado; HTTP 200 confirmado para a raiz, `main.tsx`, `HomePage.tsx`, `tokens.css` e `global.css`; servidor encerrado após a verificação.
- `git diff --check`: aprovado, somente avisos locais de conversão LF/CRLF. Verificação visual em navegador não realizada.

## 2026-09-21 — Revisão da fundação técnica

- Configurado ESLint flat com presets recomendados JavaScript, TypeScript e React Hooks; npm run lint verifica sem alterar arquivos e rejeita avisos.
- Adicionados ESLint 10.11.0, @eslint/js 10.0.1, typescript-eslint 8.70.1 e eslint-plugin-react-hooks 7.1.1 como dependências de desenvolvimento.
- Ajustado TypeScript de 7.0.2 para ~6.0.3 por compatibilidade declarada do parser; preservados tsconfig.json e typecheck sem emissão. Lockfile atualizado.
- README atualizado com lint, verificações e instruções portáteis; runtime Windows documentado como observação opcional.
- Revisados e preservados .gitignore e .nvmrc (24). Nenhum asset de demonstração encontrado; página temporária, CSS e estrutura útil preservados.
- Atualizadas arquitetura e decisão 007; nenhuma página definitiva, identidade visual ou configuração de deploy adicionada.

### Validação da revisão

- Node 24.21.0; npm.cmd install concluído, zero vulnerabilidades reportadas; npm.cmd ls --depth=0 sem conflitos.
- npm.cmd run lint: aprovado sem avisos; npm.cmd run typecheck: aprovado; npm.cmd run build: aprovado.
- A primeira tentativa de build no sandbox falhou com spawn EPERM; repetição com permissão para subprocessos aprovada, sem alterar configuração do projeto.
- npm.cmd run dev -- --host 127.0.0.1 --port 5174 --strictPort: iniciado; HTTP 200 no HTML, main.tsx, HomePage.tsx e CSS global. Placeholder confirmado no módulo servido. Verificação visual em navegador não realizada.
- git ls-files: nenhum arquivo rastreado em node_modules ou dist, nem .env/.env.local. git check-ignore confirmou dependências, build, ambientes privados e temporários ignorados; .env.example, src, public, docs e AGENTS.md permitidos.
- git diff --check: aprovado, apenas aviso local de conversão LF/CRLF.

## 2026-09-21 — Initial project setup

- Inspecionado repositório: somente README.md e Git existentes; nenhum frontend ou alteração pendente.
- Preservados Git original e título do README, ampliado com instruções.
- Configurada fundação React + TypeScript + Vite, HTML5 e CSS nativo.
- Criada página temporária CS Corp / New website under development.
- Adicionados reset básico, configuração TypeScript estrita, scripts npm e regras de ignore.
- Criados AGENTS.md e oito documentos em /docs.
- Registrados design, negócio e páginas ainda não confirmados como TBD/propostas.
- Definido Node 24 LTS; runtime portátil local para contornar Node global 18.
- Sem PHP, backend, dependências de interface, roteamento ou deploy automático.

## Validação inicial

- npm.cmd install: concluído; lockfile gerado, zero vulnerabilidades reportadas pelo npm.
- npm.cmd run build: aprovado (TypeScript e Vite); saída estática em dist/.
- npm.cmd run typecheck: aprovado.
- npm.cmd run dev -- --host 127.0.0.1 --port 5173 --strictPort: Vite iniciado com sucesso; URL http://127.0.0.1:5173/.
- HTTP 200 no HTML raiz e no módulo HomePage; texto do placeholder confirmado no módulo servido.
- git diff --check: sem erros; somente aviso de conversão LF/CRLF do ambiente.
- git check-ignore: node_modules, dist e .env privados ignorados; .env.example não ignorado.
- Lint não configurado. Verificação visual em navegador não realizada.
- Ambiente: Node 24.21.0 portátil e npm 11.19.0. Uso de npm.cmd contornou bloqueio de npm.ps1 sem alterar política do PowerShell.
- Versões diretas iniciais: React/React DOM 19.3.0, tipos React/React DOM 19.3.0, Vite 8.3.0, plugin React 6.1.1 e TypeScript 7.0.2. Manifesto usa intervalos compatíveis; package-lock.json registra resolução exata.
## 2026-09-26 — Reviews placeholder, Final CTA e Footer

- Refinada a seção `WHAT OUR CLIENTS SAY` com estado vazio honesto, fundo dark arquitetônico sutil e estrutura tipada preparada para reviews reais (`customerName`, `reviewText`, `rating`, `source` e `date`), sem conteúdo fictício.
- Atualizado o CTA final para `LET'S WORK TOGETHER`, com supporting text aprovado, composição horizontal no desktop e empilhada no mobile; o destino definitivo continua TBD e o email publicado atual segue temporário.
- Refinado o Footer com marca textual provisória, navegação, telefone, email temporário, redes sociais com SVG inline acessível, área de atendimento, tagline e copyright dinâmico.
- Logo oficial, reviews reais, email permanente e destino definitivo do CTA continuam pendentes. Header, Hero, Our Divisions, Why Choose CS, Our Work e BeforeAfterSlider foram preservados.

### Validação desta etapa

- Lint, typecheck e build executados após as alterações.
