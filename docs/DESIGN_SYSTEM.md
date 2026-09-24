# Design system

Sistema visual inicial para o novo website. A fundação técnica está implementada, mas a identidade de marca continua pendente de aprovação. Os termos abaixo têm significado específico:

- **Confirmed:** requisito já estabelecido pelo projeto.
- **Proposed:** direção recomendada e preparada para avaliação; pode mudar.
- **TBD:** depende de decisão ou material ainda não fornecido.

## Brand

- **Confirmed:** a experiência deve transmitir profissionalismo, confiança, organização, qualidade, simplicidade e modernidade, com navegação fácil e sem aparência carregada ou genérica.
- **Proposed:** usar composição limpa, hierarquia tipográfica clara, espaço em branco e poucos elementos decorativos.
- **TBD:** logotipo oficial, versões e área de proteção; cores institucionais; tipografia de marca; tom visual; tagline e manual de marca.

## Color palette

- **Confirmed:** evitar excesso de cores e validar contraste antes de aprovar a paleta.
- **Proposed:** escala neutra temporária em `src/styles/tokens.css`, com papéis semânticos para fundo, superfície, texto, texto secundário, borda e foco. `--color-brand-primary` e `--color-brand-secondary` são aliases provisórios neutros, não cores oficiais.
- **TBD:** paleta de marca final, cores de apoio e estados de feedback (success, warning e error).

Nenhuma cor temporária deve ser apresentada como identidade aprovada. Componentes devem consumir tokens semânticos, não hexadecimais soltos.

## Typography

- **Confirmed:** legibilidade, hierarquia consistente e carregamento responsável.
- **Proposed:** stack nativa `system-ui` enquanto a fonte oficial é TBD; escala inicial `sm`, `md`, `lg` e `xl`, line-height de corpo 1.6 e títulos compactos. O título fluido usa `clamp()`.
- **TBD:** famílias, pesos e arquivos de fonte oficiais; escala tipográfica final.

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
- **TBD:** texto, destinos, hierarquia e cores finais de CTAs; necessidade de tamanhos adicionais.

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

- **Proposed:** desktop com logo, navegação principal e CTA primário; mobile com logo, botão de menu, navegação móvel e CTA. O item atual deve ser indicado visualmente e por `aria-current="page"`.
- **Confirmed:** navegação completa não faz parte desta etapa.
- **TBD:** páginas aprovadas, labels, URLs, CTA, comportamento do menu, idioma e recursos de logo.

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

Tokens vivem em `src/styles/tokens.css` e são importados antes de `src/styles/global.css`. A separação permite trocar valores de identidade sem reescrever componentes. Valores atuais são **Proposed** e temporários; nenhum token de branding representa aprovação final.
