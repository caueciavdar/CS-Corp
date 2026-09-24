# Changelog

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
