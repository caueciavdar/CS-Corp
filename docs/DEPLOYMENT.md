# Deployment

## Development

- `vite.config.ts` fixa o servidor de desenvolvimento em `http://localhost:5173` com `strictPort` habilitado. Se a porta estiver ocupada, o Vite encerra com erro em vez de selecionar outra porta.

- Node 24 LTS e npm.
- npm install para instalar; npm ci para reproduzir package-lock.json.
- npm run dev executa localmente com Vite em http://localhost:5173; a porta é fixa e `strictPort` está habilitado.
- npm run build verifica tipos e gera dist/.
- npm run preview permite conferir o build, sem servir como servidor de produção.
- Parar o servidor com Ctrl+C.

### Ciclo de vida do servidor local

Antes de executar `npm run dev`, verificar se já existe uma instância Vite/Node deste projeto em execução. Se houver, manter somente a instância que o usuário estiver utilizando ativamente ou encerrá-la e reiniciá-la de forma controlada; nunca iniciar uma duplicata. Não acumular servidores em portas sucessivas como 5173, 5174 e 5175.

Quando o servidor for iniciado somente para validação, encerrá-lo ao concluir. A resposta final da tarefa deve registrar um destes estados: `running`, acompanhado da porta atual, ou `stopped after validation`.

### Ambiente inicial Windows

O Node global encontrado era 18.16.0, incompatível com o Vite atual.
Foi preparado Node 24 portátil em %LOCALAPPDATA%\CS-Corp\runtime, sem substituir o Node global.
Para utilizá-lo no PowerShell deste ambiente:

```powershell
$csNode = Get-ChildItem "$env:LOCALAPPDATA\CS-Corp\runtime" -Directory -Filter 'node-v24.*-win-x64' | Sort-Object Name | Select-Object -Last 1
$env:Path = "$($csNode.FullName);$env:Path"
node --version
npm.cmd install
npm.cmd run dev
```

Em outras máquinas, instalar/ativar Node 24 LTS normalmente. O runtime portátil não pertence ao repositório.

## Version control

Git e GitHub. Repositório Git original preservado; não inicializar Git aninhado. Versionar fontes, documentação e lockfile; não versionar node_modules, dist ou .env privados. .env.example pode ser versionado sem secrets.

## Environment variables

- `VITE_WEB3FORMS_ACCESS_KEY`: optional override for the `/contact` estimate form key (see `.env.example`). The company's public Web3Forms key (form "CS Website", account caue@conexionservicesfl.com) is the default in `EstimateForm.tsx`, so no variable is needed for production. Web3Forms access keys are public by design.

## Production

Hostinger (2026-10-13: o usuário confirmou que o domínio conexionservicesfl.com está na Hostinger). Deploy manual, sem integração automática (ver Decision 031).

O que já está no build (`public/` é copiado para `dist/`):

- `.htaccess`: força HTTPS, entrega `index.html` para rotas do app (`/contact`, `/projects`, etc.) que não são arquivos reais, desliga listagem de pastas e deixa os arquivos com hash em cache por um ano, enquanto `index.html` é sempre revalidado.
- `robots.txt` e `sitemap.xml` com as cinco páginas em `https://www.conexionservicesfl.com/`.

Passo a passo:

1. `npm ci` e `npm run build`.
2. Compactar o **conteúdo** de `dist/` (incluindo o arquivo oculto `.htaccess`) num zip.
3. Na Hostinger: hPanel → Websites → conexionservicesfl.com → File Manager → `public_html`.
4. Fazer backup do que já estiver em `public_html` (o site antigo), apagar o conteúdo e enviar o zip; extrair ali, de modo que `index.html` fique direto em `public_html`.
5. Conferir HTTPS (SSL ativo no hPanel), as cinco páginas, um refresh em `/contact` e um envio real do formulário.

Pendências TBD: se o site antigo está nesta mesma conta Hostinger (e quem tem o acesso), versão preferida do domínio (com ou sem `www`; o JSON-LD e o sitemap usam `www`), e cadastro no Google Search Console.

## Primeira execução — 2026-09-21

Validado com Node 24.21.0 e npm 11.19.0. No PowerShell local, usar npm.cmd porque npm.ps1 é bloqueado pela política de execução; nenhuma política foi alterada.

Servidor iniciado em segundo plano com npm run dev -- --host 127.0.0.1 --port 5173 --strictPort. URL confirmada: http://127.0.0.1:5173/. HTTP 200 no HTML e no módulo HomePage.

Logs em %LOCALAPPDATA%\CS-Corp\logs\vite.stdout.log e vite.stderr.log. O processo Vite desta execução tem PID 12584; para encerrá-lo nesta sessão, verificar primeiro que esse PID ainda corresponde ao Vite deste projeto e executar Stop-Process -Id 12584. PIDs não são permanentes. Execuções normais em primeiro plano terminam com Ctrl+C.
