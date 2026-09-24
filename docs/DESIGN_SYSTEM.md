# Design system

Sistema visual inicial aprovado para o novo website. A direção visual, a paleta inicial, a tipografia, o idioma primário e o CTA principal abaixo estão confirmados. Isso não aprova conteúdo comercial, assets de marca, rotas finais ou a implementação das páginas.

Os termos abaixo têm significado específico:

- **Confirmed:** requisito já estabelecido pelo projeto.
- **Proposed:** direção recomendada e preparada para avaliação; pode mudar.
- **TBD:** depende de decisão ou material ainda não fornecido.

## Brand

- **Confirmed:** a experiência deve ser clean, profissional, moderna e premium, com bastante espaço em branco, textos escuros sobre fundos claros, sombras sutis, cantos levemente arredondados, animação mínima e intencional, acessibilidade e legibilidade como prioridades.
- **Confirmed:** fotografias reais da empresa/projetos devem ser preferidas a stock photography genérica quando estiverem disponíveis e autorizadas.
- **TBD:** nome comercial definitivo; logotipo oficial, versões, área de proteção e arquivos; tagline; manual de marca; aplicações da identidade em fundos claros e escuros.

## Color palette

- **Confirmed:** Option C — Black / White / Premium Blue — é a direção de cor selecionada.
- **Confirmed:** `src/styles/tokens.css` usa tokens semânticos; componentes não devem espalhar valores HEX diretamente.
- **Confirmed:** a paleta inicial aprovada é:

| Token semântico | HEX | Uso inicial |
| --- | --- | --- |
| `--color-background` | `#FFFFFF` | Fundo principal |
| `--color-surface` | `#F1F5F9` | Superfícies e áreas neutras |
| `--color-brand-primary` | `#2F80ED` | Azul premium para marca, links e CTA |
| `--color-brand-dark` | `#0B1220` | Preto quase absoluto para contraste e superfícies escuras |
| `--color-brand-secondary` | `#334155` | Azul/cinza escuro secundário e estados de interação |
| `--color-text` | `#111827` | Texto principal |
| `--color-text-muted` | `#475569` | Texto secundário |
| `--color-border` | `#CBD5E1` | Bordas e divisores |
| `--color-focus` | `#2F80ED` | Indicador de foco |

- **TBD:** cores específicas de feedback (success, warning e error) e validação de contraste de cada combinação final em componentes reais.

### Palette options previously considered

Os HEX são referências iniciais para discussão, não valores implementados.

| Token | Option A — Blue / White / Dark Gray | Option B — Navy / White / Light Blue | Option C — Black / White / Premium Blue |
| --- | --- | --- | --- |
| primary | `#1D4ED8` | `#0F2747` | `#0B1220` |
| secondary | `#2563EB` | `#315B87` | `#334155` |
| accent | `#60A5FA` | `#8CC8F5` | `#2F80ED` |
| background | `#FFFFFF` | `#F8FAFC` | `#FFFFFF` |
| surface | `#F8FAFC` | `#FFFFFF` | `#F1F5F9` |
| text | `#111827` | `#102033` | `#111827` |
| muted text | `#4B5563` | `#526274` | `#475569` |
| border | `#D1D5DB` | `#D9E2EC` | `#CBD5E1` |

Option C foi aprovada; as opções A e B permanecem apenas como histórico de alternativas consideradas. A paleta deve ser validada em header, botões, links, cards, imagens, estados de foco e contraste AA antes da implementação final de páginas.

## Typography

- **Confirmed:** `Manrope` para headings e `Source Sans 3` para body/interface text.
- **Confirmed:** tokens separados `--font-family-heading` e `--font-family-body` devem ser usados na apresentação.
- **Confirmed:** fallback stacks iniciais: `"Manrope", "Segoe UI", Arial, sans-serif` e `"Source Sans 3", "Segoe UI", Arial, sans-serif`.
- **Confirmed:** pesos recomendados: 400 para corpo, 500/600 para controles e 700 para headings; usar somente pesos necessários.
- **TBD:** implementação de web fonts, incluindo fonte de distribuição, licenciamento, subset, preload, `font-display` e impacto de desempenho. Não adicionar fontes externas nesta etapa.

### Typography options previously considered

| Option | Headings | Body | Rationale |
| --- | --- | --- | --- |
| A | `Inter` | `Inter` | Sistema neutro, legível e consistente em todos os tamanhos. |
| B | `Manrope` | `Source Sans 3` | Contraste moderado entre títulos e corpo, mantendo leitura confortável. |
| C | `system-ui` | `system-ui` | Zero download adicional e comportamento previsível; opção mais conservadora. |

Pesos, arquivos, estratégia de preload e fallback de web fonts permanecem TBD; os fallbacks CSS e pesos recomendados acima já estão aprovados.

## Spacing

- **Proposed:** escala compartilhada de `0.25rem`, `0.5rem`, `0.75rem`, `1rem`, `1.5rem`, `2rem`, `3rem` e um espaçamento responsivo amplo via `clamp()`. Novos componentes devem reutilizar essa escala.
- **TBD:** validação da escala junto aos layouts reais.

## Border radius

- **Proposed:** `0.25rem`, `0.5rem`, `1rem` e formato pill. Usar com moderação para manter aparência profissional.
- **TBD:** linguagem final de formas da marca.

## Shadows

- **Proposed:** duas elevações discretas (`sm` e `md`) para separar superfícies somente quando borda e espaço não forem suficientes.
- **TBD:** elevação final após validação dos componentes.

## Buttons

- **Proposed:** componente base `Button` com variantes `primary` e `secondary`, altura mínima de 44px, foco visível, hover apenas em dispositivos compatíveis e estado disabled. O tipo padrão é `button` para evitar submissão acidental.
- **TBD:** destino, raio e necessidade de tamanhos adicionais; o texto do CTA primário está aprovado como `Get a Free Estimate`.

### Primary CTA

O CTA primário aprovado é `Get a Free Estimate`. Usá-lo em todo o website, salvo decisão posterior registrada. O destino exato permanece TBD até o roteamento e o fluxo real serem definidos.

Links de navegação não devem ser renderizados como `button`, nem ações como links. Uma futura variante de link com aparência de botão deve preservar semântica de âncora.

## Links

- **Confirmed:** links precisam ser reconhecíveis, acessíveis por teclado e não depender apenas da cor.
- **Proposed:** sublinhado por padrão, espessura e offset consistentes, cor via token semântico e foco global visível.
- **TBD:** estilo específico para links de navegação e links sobre fundos de marca.

## Form controls

- **Confirmed:** todo controle deve ter label associado; placeholder não substitui label; erros precisam ser relacionados ao campo e compreensíveis sem depender apenas de cor.
- **Proposed:** herdar tipografia, preservar foco visível, alvo mínimo de 44px e criar estados default, hover, focus, disabled e error quando o primeiro formulário for definido.
- **TBD:** campos, validação, mensagens, consentimento, destino e tratamento de dados do formulário de contato.

## Cards

- **Proposed:** cards devem ser usados apenas quando agruparem conteúdo relacionado; espaçamento, borda, raio e sombra vêm dos tokens. Cards inteiramente clicáveis devem ter uma única ação principal clara e foco perceptível.
- **TBD:** conteúdo e variantes de `ServiceCard` e `ProjectCard`.

## Navigation

- **Confirmed:** desktop com logo, navegação principal e CTA primário; mobile com logo, botão de menu, navegação móvel e CTA. O item atual deve ser indicado visualmente e por `aria-current="page"`.
- **Confirmed:** labels iniciais, idioma inglês e CTA `Get a Free Estimate` estão aprovados; URLs, comportamento do menu e recursos de logo permanecem TBD.
- **Confirmed:** navegação completa não faz parte desta etapa de implementação.

## Section layout

- **Proposed:** componente semântico `Section` com espaçamento vertical default e compact; seções usam título associado quando necessário. A composição parte de mobile e cresce sem valores isolados.
- **TBD:** variantes de fundo, densidade e ritmo final após definir a Home.

## Containers

- **Proposed:** componente `Container` centralizado com largura máxima de `75rem`, gutter responsivo e variante de leitura de `48rem`. Os valores são tokens temporários e evitam limites diferentes por página.
- **TBD:** largura final após aprovação dos layouts e conteúdo.

## Images

- **Confirmed:** imagens são responsivas, preservam proporção e exigem texto alternativo quando informativas. Imagens decorativas devem usar `alt=""`.
- **Proposed:** definir `width` e `height` para reduzir layout shift; usar formatos otimizados e `loading="lazy"` fora da primeira dobra quando apropriado.
- **TBD:** direção fotográfica, acervo, tratamento, proporções e regras para imagens de projetos.

## Icons

- **Proposed:** usar conjunto visual consistente, SVG quando apropriado, tamanho e stroke uniformes. Ícones decorativos ficam ocultos de tecnologia assistiva; ícones interativos precisam de nome acessível.
- **TBD:** biblioteca ou conjunto próprio. Nenhuma dependência deve ser adicionada antes de necessidade confirmada.

## Responsive breakpoints

- **Confirmed:** experiência deve funcionar em smartphone, tablet, laptop e desktop grande, com estratégia mobile-first consistente.
- **Proposed:** estilos base para smartphone; `48rem` (tablet), `64rem` (laptop) e `80rem` (desktop grande). Breakpoints existem como referência em tokens e são escritos literalmente nas media queries porque custom properties não funcionam em condições `@media`.
- **TBD:** ajustes baseados no conteúdo real. Um componente pode responder antes apenas quando seu conteúdo exigir, com justificativa documentada.

## Accessibility

- **Confirmed:** HTML semântico, navegação por teclado, labels, alt text, contraste e foco visível são obrigatórios.
- **Proposed:** WCAG 2.2 AA como meta; contraste mínimo de 4.5:1 para texto normal e 3:1 para texto grande e limites/estados essenciais; áreas interativas mínimas de 44 × 44px; ordem de foco acompanha a ordem visual; `:focus-visible` global usa token de foco.
- **TBD:** auditoria sobre conteúdo, paleta e componentes finais.

## Motion / animation

- **Confirmed:** evitar excesso de animações e respeitar preferência por movimento reduzido.
- **Proposed:** transições discretas de 150–250ms somente para feedback e mudança de estado; regra global de `prefers-reduced-motion: reduce` reduz animações e desativa rolagem suave.
- **TBD:** qualquer movimento de marca; só adicionar após justificar função e acessibilidade.

## Token implementation

Tokens vivem em `src/styles/tokens.css` e são importados antes de `src/styles/global.css`. A separação permite trocar valores de identidade sem reescrever componentes. Os tokens de cor, tipografia e papéis semânticos documentados nesta página são **Confirmed** como paleta inicial; ajustes de contraste e tokens ainda não definidos permanecem TBD.
