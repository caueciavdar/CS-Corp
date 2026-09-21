# CS-Corp

Novo website da empresa CS Corp, reconstruído com React + TypeScript + HTML5 + CSS e Vite. Esta etapa estabelece somente a base técnica e uma página temporária; design e páginas definitivas ainda serão aprovados.

## Requisitos

- Node.js 24 LTS (versão principal registrada em .nvmrc).
- npm incluído no Node.
- Git para versionamento; GitHub para hospedagem do código.

O Node 18 não é compatível com esta configuração. Instale/ative Node 24 antes dos comandos abaixo.

## Instalação e desenvolvimento

```sh
npm install
npm run dev
```

Abra a URL mostrada pelo Vite (normalmente http://localhost:5173). Use Ctrl+C para parar.

### Observação opcional: ambiente Windows inicial

Neste ambiente foi preparado Node 24 portátil, pois o Node global é 18.16.0. Esse caminho local não é requisito do projeto: em outras máquinas, basta instalar/ativar Node 24 LTS. Para usar o runtime portátil existente:

```powershell
$csNode = Get-ChildItem "$env:LOCALAPPDATA\CS-Corp\runtime" -Directory -Filter 'node-v24.*-win-x64' | Sort-Object Name | Select-Object -Last 1
$env:Path = "$($csNode.FullName);$env:Path"
npm.cmd install
npm.cmd run dev
```

Use npm.cmd no PowerShell se npm.ps1 for bloqueado pela política de scripts; não é necessário mudar a política. O servidor da primeira execução está em http://127.0.0.1:5173/. Veja detalhes em [Deployment](docs/DEPLOYMENT.md).

## Build e verificação

```sh
npm run build
npm run typecheck
npm run lint
npm run preview
```

O build verifica TypeScript e gera os arquivos estáticos em dist/. Typecheck valida tipos sem emitir arquivos. Lint verifica JavaScript, TypeScript e React Hooks sem alterar arquivos e falha também em avisos. Preview serve apenas para conferir o build localmente. Para instalar exatamente o lockfile em outro ambiente, use npm ci.

ESLint usa configuração flat em eslint.config.js. TypeScript está na linha 6.0 para compatibilidade com typescript-eslint; veja a decisão 007 em [Decisões](docs/DECISIONS.md).

## Estrutura

- src/main.tsx: entrada React e CSS global.
- src/App.tsx: composição da aplicação.
- src/pages/: componentes de página; contém somente HomePage temporária.
- src/styles/: CSS global básico.
- src/components/ e src/assets/: reservados para componentes compartilhados e assets quando necessários.
- public/: reservado para arquivos servidos sem transformação.
- docs/: documentação oficial do projeto.
- AGENTS.md: instruções permanentes para futuras sessões do Codex.

Pastas reservadas sem conteúdo não são versionadas pelo Git; serão adicionadas quando houver arquivos úteis.

## Documentação

Leia [AGENTS.md](AGENTS.md) e [visão geral](docs/PROJECT_OVERVIEW.md).
Consulte também [regras de negócio](docs/BUSINESS_RULES.md), [arquitetura](docs/ARCHITECTURE.md), [design](docs/DESIGN_SYSTEM.md), [estrutura do site](docs/SITE_STRUCTURE.md), [deploy](docs/DEPLOYMENT.md), [decisões](docs/DECISIONS.md) e [changelog](docs/CHANGELOG.md).

Destino futuro: Hostinger. Processo definitivo de publicação: TBD. Nenhuma integração automática de deploy foi criada.
