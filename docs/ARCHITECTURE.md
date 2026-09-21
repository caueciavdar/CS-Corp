# Architecture

## Stack e execução

React compõe a interface; TypeScript verifica tipos; HTML5 define a entrada semântica; CSS nativo controla apresentação; Vite serve desenvolvimento e gera build estático. npm gerencia dependências e package-lock.json fixa a resolução. Node 24 LTS é o runtime de desenvolvimento.

## Estrutura e responsabilidades

- index.html: documento de entrada, idioma inglês somente para o placeholder atual.
- src/main.tsx: inicialização React em StrictMode e importação do CSS.
- src/App.tsx: composição principal.
- src/pages/HomePage.tsx: página temporária de verificação.
- src/styles/global.css: reset mínimo e estilos neutros provisórios.
- src/components/: reservada para componentes compartilhados quando houver reutilização real.
- src/assets/: reservada para assets importados pelo código e processados pelo Vite.
- public/: reservada para arquivos que precisam preservar nome e caminho, sem transformação.
- docs/: fonte principal da documentação.
- vite.config.ts: integração oficial React/Vite.
- tsconfig.json: TypeScript estrito, sem emissão; build feito pelo Vite.
- eslint.config.js: configuração flat do ESLint para JavaScript, TypeScript e React Hooks; dist ignorado e node_modules excluído por padrão.
- dist/: saída gerada e ignorada pelo Git.

Pastas reservadas podem estar vazias localmente; Git não versiona diretórios vazios. Criá-las com conteúdo útil quando necessário, sem arquivos artificiais.

## Componentes e páginas

Manter componentes pequenos, reutilizáveis e sem duplicação. Separar conteúdo, lógica e apresentação quando apropriado. Páginas ficam em src/pages; elementos compartilhados em src/components. Apenas o placeholder raiz existe. Roteamento e URLs definitivas: TBD, após aprovação da estrutura. Nenhuma biblioteca de roteamento é necessária agora.

## CSS e assets

CSS global nativo para reset e fundamentos; estilos específicos próximos aos componentes quando surgirem. Fonte de sistema, imagens responsivas e links preservando sublinhado padrão. Valores do placeholder não constituem identidade visual aprovada. Não adicionar assets de marca não confirmados.

## Integrações e qualidade

Integrações futuras, formulários, APIs, backend e gestão de conteúdo: TBD. Nenhuma implementada. Nunca expor secrets no frontend, inclusive em variáveis VITE_*.

npm run build executa TypeScript e Vite; npm run typecheck verifica tipos isoladamente, sem emitir arquivos. npm run lint executa ESLint sem modificar código e com zero avisos permitidos. São usados os presets recomendados de @eslint/js, typescript-eslint e eslint-plugin-react-hooks; regras React se aplicam a src/. TypeScript permanece estrito, na linha 6.0 compatível com o parser (decisão 007). Testes automatizados não configurados nesta etapa mínima. Validações registradas em CHANGELOG.md.
