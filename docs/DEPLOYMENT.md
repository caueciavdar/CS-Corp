# Deployment

## Development

- Node 24 LTS e npm.
- npm install para instalar; npm ci para reproduzir package-lock.json.
- npm run dev executa localmente com Vite; URL padrão http://localhost:5173, podendo mudar se a porta estiver ocupada.
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

## Production

Hostinger é o destino previsto. Processo definitivo de deploy: TBD; será definido e documentado posteriormente. Nenhuma integração automática de deploy criada.

Confirmar plano, diretório público, domínio, HTTPS, base URL e eventual fallback de rotas antes da publicação. Essas decisões não estão aprovadas nesta etapa.

## Primeira execução — 2026-09-21

Validado com Node 24.21.0 e npm 11.19.0. No PowerShell local, usar npm.cmd porque npm.ps1 é bloqueado pela política de execução; nenhuma política foi alterada.

Servidor iniciado em segundo plano com npm run dev -- --host 127.0.0.1 --port 5173 --strictPort. URL confirmada: http://127.0.0.1:5173/. HTTP 200 no HTML e no módulo HomePage.

Logs em %LOCALAPPDATA%\CS-Corp\logs\vite.stdout.log e vite.stderr.log. O processo Vite desta execução tem PID 12584; para encerrá-lo nesta sessão, verificar primeiro que esse PID ainda corresponde ao Vite deste projeto e executar Stop-Process -Id 12584. PIDs não são permanentes. Execuções normais em primeiro plano terminam com Ctrl+C.
