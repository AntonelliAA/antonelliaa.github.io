# Checklist técnico: performance, acessibilidade, SEO, i18n

Tudo aqui é verificável rodando uma ferramenta. Onde o site atual falha, está
apontado com arquivo e linha.

## Bugs encontrados na auditoria

### 1. A imagem de Open Graph está quebrada

```
$ file public/og-image.png
public/og-image.png: JPEG image data, 1024x1024, 300 DPI, 417 KB
```

Três problemas em um arquivo:

- É JPEG com extensão `.png`
- É 1024×1024, mas [`Layout.astro:34-35`](../src/layouts/Layout.astro#L34-L35) declara
  `og:image:width 1200` e `og:image:height 630`. Quem consumir o metadado vai
  cortar errado
- 300 DPI e 417 KB para uma imagem que só existe para virar thumbnail

**Correção:** exportar 1200×630 real, PNG ou JPEG com a extensão certa, 72 DPI,
abaixo de 150 KB. Testar em [opengraph.dev](https://opengraph.dev) ou no
validador de card do X.

Vale uma OG por idioma, já que existem duas páginas.

### 2. Conteúdo depende de JavaScript para ficar visível

[`global.css:190-199`](../src/styles/global.css#L190-L199) define `.reveal { opacity: 0 }`, e
só o `IntersectionObserver` em [`Layout.astro:62-76`](../src/layouts/Layout.astro#L62-L76)
adiciona `.visible`. Se o JS falhar, for bloqueado, ou o crawler não executar
script, a página inteira fica invisível abaixo do hero.

**Correção:** inverter a lógica. Adicionar a classe `js` no `<html>` via script
inline no `<head>`, e aplicar `opacity: 0` só sob `.js .reveal`. Sem JS, o
conteúdo aparece.

### 3. `prefers-reduced-motion` não é respeitado

`grep -rn "prefers-reduced-motion" src/` não retorna nada. O site tem fade-in em
scroll, `translateY` e um `@keyframes pulse` infinito no ponto de status
([`Hero.astro:83-86`](../src/components/Hero.astro#L83-L86)). Animação infinita sem
respeitar essa preferência é um problema real de acessibilidade, não detalhe.

**Correção:**

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .reveal { opacity: 1; transform: none; }
}
```

Note que `html { scroll-behavior: smooth }` em [`global.css:18`](../src/styles/global.css#L18)
também precisa ser desligado aí.

### 4. Faltam links `hreflang`

Existem `/` (en) e `/pt-br/`, e nenhuma das duas declara a outra. Buscador
trata como páginas concorrentes em vez de traduções.

**Correção**, no `<head>` das duas:

```html
<link rel="alternate" hreflang="en" href="https://antonelliaa.github.io/" />
<link rel="alternate" hreflang="pt-BR" href="https://antonelliaa.github.io/pt-br/" />
<link rel="alternate" hreflang="x-default" href="https://antonelliaa.github.io/" />
```

O `@astrojs/sitemap` também aceita config de i18n e passa a emitir as
anotações no sitemap. Hoje [`astro.config.mjs`](../astro.config.mjs) chama
`sitemap()` sem argumento.

### 5. `og:url` e `canonical`

[`Layout.astro:32`](../src/layouts/Layout.astro#L32) fixa `og:url` na raiz. A página
pt-br anuncia a URL errada. E não existe `<link rel="canonical">` em lugar
nenhum.

**Correção:** derivar de `Astro.url` em vez de escrever à mão.

### 6. Código morto

[`Layout.astro:94-97`](../src/layouts/Layout.astro#L94-L97) escuta `astro:page-load`,
evento que só dispara com o `<ClientRouter />` do Astro. Ele não está importado
em lugar nenhum do projeto. O listener nunca roda.

Ou adiciona view transitions, ou apaga as quatro linhas.

### 7. `@import` de Google Fonts

[`global.css:6`](../src/styles/global.css#L6) importa Inter e Fira Code via
`@import url(...)`. Três problemas:

- `@import` dentro de CSS é render-blocking em série: o browser precisa baixar
  o CSS, ler a primeira linha, e só então começar a buscar a fonte
- Adiciona uma origem externa (`fonts.googleapis.com` e `fonts.gstatic.com`)
- No Mac, `-apple-system` vem antes na cascata do corpo, então Inter é baixada
  e praticamente nunca usada

**Correção:** self-host os arquivos `.woff2` em `public/fonts/`, com
`@font-face` e `font-display: swap`, e um `<link rel="preload">` só para a fonte
que aparece acima da dobra. Elimina a origem externa e o encadeamento.

---

## Acessibilidade

Rode `axe DevTools` ou a aba Accessibility do Lighthouse. Verificado
manualmente:

| Item | Status |
|---|---|
| Contraste de corpo | **passa.** `#8895A7` sobre `#0C1120` = 6.2:1 (AA precisa 4.5) |
| Contraste do acento | **passa raspando.** `#F72C25` sobre `#0C1120` = 4.8:1 |
| Hierarquia de heading | **ok.** um `h1`, `h2` por seção, `h3` nos itens |
| `aria-label` nos links de ícone | **ok.** presente em Contact e no back-to-top |
| `prefers-reduced-motion` | **falha.** ver acima |
| Foco visível de teclado | **verificar.** nenhum `:focus-visible` customizado no CSS; o outline padrão do browser pode sumir em fundo escuro |
| Alvo de toque ≥ 44px | **verificar** nos links do header no mobile |
| `lang` no `<html>` | **ok.** [`Layout.astro:21`](../src/layouts/Layout.astro#L21) |
| Skip link | **ausente.** navegação por teclado obriga passar por todo o header |

Dois itens a adicionar:

```css
:focus-visible {
  outline: 2px solid var(--signal);
  outline-offset: 3px;
}
```

E um skip link como primeiro elemento do `<body>`, visível ao receber foco.

## SEO

| Item | Status |
|---|---|
| `<title>` único por página | parcial — as duas usam o mesmo default |
| meta description | ok, mas idêntica nas duas línguas |
| Open Graph | quebrado, ver bug 1 |
| `robots.txt` + sitemap | **ok**, já aponta para `sitemap-index.xml` |
| canonical | ausente |
| hreflang | ausente |
| JSON-LD `Person` | **ausente** |

O JSON-LD é o que falta que dá retorno real: é como o Google entende que o site
é sobre uma pessoa específica, com cargo, empregador e perfis vinculados.

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Anthony Antonelli Andrade",
  "url": "https://antonelliaa.github.io",
  "jobTitle": "iOS Developer",
  "email": "antonellia.dev@gmail.com",
  "alumniOf": { "@type": "CollegeOrUniversity", "name": "PUCRS" },
  "knowsAbout": ["Swift", "SwiftUI", "iOS Development", "React Native"],
  "sameAs": [
    "https://github.com/AntonelliAA",
    "https://linkedin.com/in/anthony-antonelli-andrade"
  ]
}
```

Um bloco `<script type="application/ld+json">` no `<head>`. Validar no
[Rich Results Test](https://search.google.com/test/rich-results) do Google.

## Performance

O site é Astro com zero JS de framework, então o piso já é bom. Os pontos que
sobram:

- Google Fonts render-blocking (bug 7)
- `og-image.png` de 417 KB fica em `public/`, então é servido, mas não é
  carregado pela página. Não afeta LCP, afeta só quem baixa o arquivo direto
- Quando entrarem as capturas de tela dos apps, usar `<Image />` do
  `astro:assets`: gera AVIF/WebP, dimensiona, e adiciona width/height (evita
  layout shift). Não usar `<img>` cru
- `loading="lazy"` em tudo abaixo da dobra, e `fetchpriority="high"` na imagem
  do hero, se houver

Meta: Lighthouse 100/100/100/100 em mobile. Com Astro e sem imagem mal
configurada, é atingível.

## Comando de verificação

```bash
npm run build && npm run preview
# noutro terminal
npx lighthouse http://localhost:4321 \
  --preset=desktop --view
npx lighthouse http://localhost:4321/pt-br/ --view
```

Rodar antes e depois de cada mudança do plano, e guardar o número.

## Fontes

- [WCAG 2.2 — Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [MDN — prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [Google — Introduction to structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Google — Localized versions of your pages (hreflang)](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Astro — Images](https://docs.astro.build/en/guides/images/)
- [Astro — Sitemap integration](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- Shipixen — [SEO Checklist for Developer Portfolios](https://shipixen.com/blog/seo-checklist-for-developer-portfolios-and-landing-pages)
