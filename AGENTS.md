# Repository instructions

## Project Rules

- Este projeto utiliza React + TypeScript, HTML5, CSS, Vite e npm.
- Não utilizar PHP, backend, frameworks CSS ou bibliotecas de componentes nesta etapa.
- Preferir componentes reutilizáveis, pequenos e organizados.
- Separar conteúdo, apresentação e lógica quando apropriado; evitar código duplicado.
- Não adicionar dependências sem necessidade.
- Não remover funcionalidades existentes sem autorização. Preservar arquivos úteis e o Git existente.
- Antes de implementar algo, verificar a documentação existente.
- Nunca inventar regras de negócio não documentadas, serviços, preços ou áreas atendidas.
- Decisões desconhecidas devem ser registradas como TBD.
- Manter responsividade para desktop, tablet e mobile, acessibilidade básica e HTML semântico.
- Não colocar credenciais ou secrets no código; arquivos .env privados não devem ser versionados.
- Não definir identidade visual nem implementar páginas propostas sem confirmação.
- Usar Node 24 LTS e npm; versionar package-lock.json ao alterar dependências.
- Não configurar deploy automático nesta etapa.

## Documentation Rules

- /docs é a fonte principal de documentação do projeto e source of truth.
- Nunca deixar uma regra importante somente no chat.
- Antes de iniciar uma tarefa, consultar README.md e documentos relevantes em /docs.
- Atualizar a documentação na mesma tarefa quando houver alterações relevantes em regras de negócio, estrutura, arquitetura, componentes, páginas, design, cores, tipografia, conteúdo, navegação, integrações, dependências, configuração, deploy, infraestrutura ou decisões técnicas.
- Depois de concluir uma tarefa, verificar se alguma documentação precisa ser atualizada.
- Registrar decisões em docs/DECISIONS.md e alterações relevantes em docs/CHANGELOG.md.
- Executar npm run build após alterações de código/configuração; executar lint se configurado.
- Distinguir verificações executadas de verificações pendentes; não declarar validações não realizadas.

## Mandatory Final Response

Ao final de toda resposta/tarefa, incluir obrigatoriamente:

### Documentation

- Documentation created: listar exatamente os arquivos ou None.
- Documentation updated: listar exatamente os arquivos ou None.
- Documentation reviewed but unchanged: listar exatamente os arquivos ou None.

Se nada foi atualizado, escrever explicitamente "Documentation updated: None".
Nunca omitir esta seção.

### Validation

Informar os comandos/verificações executados e seus resultados, incluindo build, lint se configurado e execução local quando aplicável. Se não executados, informar explicitamente.
