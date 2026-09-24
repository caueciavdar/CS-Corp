# Site structure

## Status

- **Confirmed:** a raiz `/` continua sendo um placeholder técnico; nenhuma página definitiva ou rota comercial foi aprovada.
- **Proposed:** arquitetura e navegação abaixo, preparadas para avaliação na próxima etapa.
- **TBD:** aprovação das páginas, conteúdo, labels, URLs, CTA, idiomas e estratégia de roteamento.

## Proposed information architecture

| Page | Proposed path | Purpose | Status |
| --- | --- | --- | --- |
| Home | `/` | Visão geral e caminhos principais | Proposed |
| Services | `/services` | Apresentar serviços aprovados | Proposed; conteúdo TBD |
| About | `/about` | Contexto institucional aprovado | Proposed; conteúdo TBD |
| Projects / Gallery | `/projects` | Demonstrar trabalhos com materiais autorizados | Proposed; nome e conteúdo TBD |
| Contact | `/contact` | Disponibilizar canais e formulário aprovados | Proposed; fluxo e dados TBD |

Os caminhos são sugestões técnicas, não rotas implementadas. Não inferir serviços, projetos, dados de contato, áreas atendidas ou promessas comerciais.

## Proposed primary navigation

Ordem inicial para avaliação: Home, Services, About, Projects / Gallery e Contact. Evitar duplicar Contact como item e CTA até definir label e objetivo do CTA.

### Desktop

1. Logo com link para Home.
2. Navegação principal visível.
3. CTA primário separado visualmente, somente após definição de ação e texto.

### Mobile

1. Logo com link para Home.
2. Botão de menu com nome acessível e estado `aria-expanded`.
3. Painel de navegação com ordem equivalente ao desktop e gerenciamento de foco.
4. CTA primário dentro do fluxo do menu, se aprovado.

O menu deve fechar por ação explícita, seleção de destino e tecla Escape; o foco deve retornar ao botão de abertura. Comportamento exato permanece **TBD** até a implementação.

## Proposed page composition

Cada página deve usar um único `main`, título principal claro, `Container` para alinhamento horizontal e `Section` para ritmo vertical. Header e Footer ficam fora de `main`. A Home será composta somente depois da aprovação de conteúdo e direção visual.

## Proposed reusable components

| Component | Responsibility | Current status |
| --- | --- | --- |
| Header | Cabeçalho global e composição da navegação | Proposed, not created |
| Navigation | Links principais e estado da rota | Proposed, not created |
| MobileMenu | Interação e acessibilidade do menu mobile | Proposed, not created |
| Footer | Navegação secundária e dados aprovados | Proposed, not created |
| Container | Largura máxima e gutters consistentes | Proposed, implemented as foundation |
| Section | Espaçamento vertical em um elemento semântico de seção | Proposed, implemented as foundation |
| Button | Ações `primary` e `secondary` | Proposed, implemented as foundation |
| ServiceCard | Resumo de serviço aprovado | Proposed, not created |
| ProjectCard | Resumo visual de projeto aprovado | Proposed, not created |
| CTA | Bloco contextual de chamada para ação | Proposed, not created |
| ContactForm | Campos, validação e feedback de envio | Proposed, not created; requirements TBD |

Não criar componentes de conteúdo antes de requisitos reais demonstrarem reutilização.
