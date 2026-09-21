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
