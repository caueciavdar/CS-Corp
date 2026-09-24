# Site structure

## Status

- **Confirmed:** a raiz `/` continua sendo um placeholder técnico; nenhuma página definitiva foi implementada.
- **Confirmed:** o idioma principal do website será inglês. Não implementar funcionalidade multilíngue nesta etapa.
- **Confirmed:** a navegação inicial e a estrutura de alto nível da Home abaixo foram aprovadas para orientar implementação futura.
- **Proposed:** URLs/rotas exatas permanecem propostas até o roteamento ser implementado.
- **TBD:** conteúdo, assets, dados comerciais e estratégia de roteamento.

## Decision status

- **Confirmed:** o novo website deve ser simples de navegar, profissional, moderno, preparado para crescer e acessível.
- **Confirmed:** a navegação inicial é Home, Services, About, Projects, Contact e Get a Free Estimate; desktop e mobile expõem os mesmos destinos em ordem equivalente.
- **Proposed:** Home, Services, About, Projects e Contact continuam como destinos planejados; as rotas exatas abaixo ainda não foram implementadas.
- **TBD:** conteúdo, dados comerciais, assets, URLs finais e estratégia de roteamento.

## Proposed information architecture

| Page | Proposed path | Purpose | Status |
| --- | --- | --- | --- |
| Home | `/` | Visão geral e caminhos principais | Proposed |
| Services | `/services` | Apresentar serviços aprovados | Proposed; conteúdo TBD |
| About | `/about` | Contexto institucional aprovado | Proposed; conteúdo TBD |
| Projects | `/projects` | Demonstrar trabalhos com materiais autorizados | Proposed; conteúdo TBD |
| Contact | `/contact` | Disponibilizar canais e formulário aprovados | Proposed; fluxo e dados TBD |

Os caminhos são sugestões técnicas, não rotas implementadas. Não inferir serviços, projetos, dados de contato, áreas atendidas ou promessas comerciais.

## Approved initial primary navigation

O CTA primário aprovado é `Get a Free Estimate`. Seu destino exato permanece TBD. A rota sugerida de cada item também permanece proposta até a implementação do roteamento.

### Desktop

1. Logo com link para Home.
2. Home.
3. Services.
4. About.
5. Projects.
6. Contact.
7. Get a Free Estimate.

### Mobile

1. Logo com link para Home.
2. Botão de menu com nome acessível e estado `aria-expanded`.
3. Dentro do menu: Home, Services, About, Projects, Contact e Get a Free Estimate.
4. Painel de navegação com gerenciamento de foco.

O menu deve fechar por ação explícita, seleção de destino e tecla Escape; o foco deve retornar ao botão de abertura. Comportamento exato permanece **TBD** até a implementação.

### Approved navigation labels; proposed routes

Desktop: Logo → Home → Services → About → Projects → Contact → Get a Free Estimate.

Mobile: Logo → Menu Button; dentro do menu: Home → Services → About → Projects → Contact → Get a Free Estimate.

Os labels acima estão aprovados. URLs/rotas e comportamento de destino permanecem propostos/TBD até o roteamento e o fluxo do CTA serem definidos.

## Approved high-level Home structure

Cada página deve usar um único `main`, título principal claro, `Container` para alinhamento horizontal e `Section` para ritmo vertical. Header e Footer ficam fora de `main`. A estrutura abaixo está aprovada, mas a Home ainda não deve ser implementada nesta etapa.

### Future Home composition

| Section | Status | Notes |
| --- | --- | --- |
| Header | Approved structure; not implemented | Componente global; logo e dados reais ainda TBD. |
| Hero | Approved structure; not implemented | Mensagem, imagem e CTA dependem de conteúdo real; CTA: `Get a Free Estimate`. |
| Trust / Credibility | Approved structure; not implemented | Só usar evidências fornecidas e autorizadas; números, certificações e selos são TBD. |
| Services | Approved structure; not implemented | Serviços e descrições ainda não fornecidos. |
| Why Choose Us | Approved structure; not implemented | Diferenciais reais ainda precisam ser recebidos. |
| Featured Projects | Approved structure; not implemented | Exige fotos, descrições e autorização de uso. |
| Our Process | Approved structure; not implemented | Etapas reais do atendimento ainda são TBD. |
| Reviews / Testimonials | Approved structure; not implemented | Só incluir avaliações reais, com autorização. |
| Final CTA | Approved structure; not implemented | Usar `Get a Free Estimate`; destino e conteúdo permanecem TBD. |
| Footer | Approved structure; not implemented | Dados de contato, redes e links ainda são TBD. |

A estrutura é aprovada para planejamento, não autoriza conteúdo comercial inventado nem a implementação da Home nesta etapa.

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

## Content and asset intake required

Antes da implementação visual, solicitar e confirmar:

- nome comercial definitivo, idioma(s), tagline e descrição institucional;
- logotipo, versões, formatos e regras de uso;
- telefone, email, endereço ou área de atendimento e horário, somente se aprovados para publicação;
- lista de serviços, descrições, prioridades e eventuais limitações;
- áreas atendidas, diferenciais e processo real de atendimento;
- fotos reais de projetos, créditos, autorizações, legendas e textos alternativos;
- reviews/testimonials reais, nomes, autorização e origem;
- redes sociais e demais links oficiais;
- CTA escolhido, destino, fluxo esperado e mensagem pós-ação;
- requisitos legais, privacidade, consentimento e dados de contato para formulários.

Tudo que não for fornecido ou aprovado permanece **TBD**. Não preencher lacunas com estatísticas, preços, garantias, certificações, anos de experiência, quantidade de clientes ou áreas atendidas inventadas.
