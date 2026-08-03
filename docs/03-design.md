# Design: direção visual e como não parecer feito por IA

## Parte 1 — O problema

Existe hoje um sotaque visual reconhecível de site gerado por IA, porque
modelos convergem para o padrão mais comum do treino. Vários levantamentos
independentes chegam à mesma lista. Vale conhecer a lista inteira, porque o
site atual acerta em algumas coisas e cai em outras.

### Os três clusters mais reconhecíveis

1. Fundo creme quente (~`#F4F1EA`), serifada display de alto contraste, acento
   terracota.
2. **Fundo quase preto com um único acento vermelho ou verde-ácido brilhante.**
3. Layout de jornal: fios de 1px, `border-radius: 0`, colunas densas.

Nenhum é feio. O problema é que aparecem independentemente do assunto do site,
o que os torna default em vez de escolha.

**O site atual é o cluster 2.** `#0C1120` de fundo, `#F72C25` de acento. Isso
não significa que está errado — significa que a escolha precisa ser defendida
ou trocada, não herdada.

### Lista de sinais (checklist de auditoria)

Compilada de três levantamentos independentes que chegaram em listas quase
idênticas.

**Tipografia**
- [ ] Inter em tudo, com fallback de sans do sistema e nenhuma outra decisão
- [ ] Combos repetidos: Space Grotesk, Instrument Serif, Geist
- [ ] Uma palavra em serifada itálica no meio de um título sans

**Cor**
- [ ] Roxo/lavanda ("vibe code purple"), gradiente roxo→azul
- [ ] Dark mode permanente, sem alternativa
- [ ] Texto de corpo cinza-médio que reprova em contraste WCAG AA
- [ ] Gradiente em toda parte, inclusive em texto
- [ ] Glow colorido e `box-shadow` grande e colorido

**Layout**
- [ ] Hero centralizado, headline em sans genérica
- [ ] Pílula/badge flutuando logo acima do H1
- [ ] Card com borda colorida em uma aresta (o sinal mais confiável de todos)
- [ ] Cards de feature com ícone em cima, todos idênticos
- [ ] Sequência numerada 01 / 02 / 03 sem que o conteúdo seja uma sequência
- [ ] Faixa horizontal de estatística
- [ ] Emoji no lugar de ícone desenhado
- [ ] Rótulo de seção em caixa alta
- [ ] `border-radius: 16px` uniforme em absolutamente tudo
- [ ] Glassmorphism (card de vidro fosco)

**Movimento**
- [ ] Fade-in genérico com timing idêntico em tudo, ou nenhuma micro-interação

**Texto**
- [ ] Headline aspiracional vaga ("Build the future", "Construindo o futuro")
- [ ] Afirmação não verificável em vez de fato específico
- [ ] Foto de banco de imagem de gente diversa sorrindo em frente a notebook

### Como o site atual pontua

| Sinal | Presente? | Onde |
|---|---|---|
| Dark mode permanente | **sim** | `global.css` — não existe light mode |
| Gradiente em texto | **sim** | `Hero.astro:99` — `hero__name` com `background-clip: text` |
| Badge acima do H1 | **sim** | `Hero.astro:16-23` — três badges antes do nome |
| Rótulo de seção em caixa alta | **sim** | `.section-label`, `text-transform: uppercase` |
| Emoji no lugar de ícone | **sim** | `Skills.astro:17,22,27,33,39,45` — 📱📲🌐🗄️🏗️🔧 |
| `border-radius` uniforme | parcial | tudo é 12px ou pill |
| Inter | parcial | importado, mas SF Pro vem antes na cascata |
| Roxo / gradiente roxo | não | vermelho, escolha própria |
| Card com borda colorida numa aresta | não | — |
| Faixa de estatística | não | — |
| Contraste reprovando | não | `#8895A7` sobre `#0C1120` dá 6.2:1, passa AA |
| Glassmorphism | não | — |
| Headline vaga | não | o hero cita apps e números reais |

**Sete sinais presentes, cinco ausentes.** O conteúdo é honesto e específico —
esse é o ponto forte. A casca visual é que é genérica.

---

## Parte 2 — Direção proposta

### O argumento

O assunto do site é uma pessoa que publica app na App Store. O material desse
mundo — captura de tela de dispositivo, ícone de app, histórico de versão,
tipografia da Apple, o gesto do TestFlight — é onde estão as escolhas
distintivas. Nada disso aparece no site hoje. Hoje ele poderia ser o portfolio
de qualquer desenvolvedor de qualquer stack.

**Tese: as telas dos apps carregam a página. Todo o resto fica quieto.**

Isso resolve dois problemas de uma vez. Passa a mostrar o produto (a lacuna
número um do conteúdo) e tira o site do cluster 2, porque a cor forte deixa de
vir de um acento decorativo e passa a vir das próprias telas.

### Tokens

**Cor** — light mode como padrão, dark mode de verdade via
`prefers-color-scheme`, com toggle.

```
--ink            #14161A   texto principal      17.4:1 sobre paper  AAA
--ink-muted      #4E545F   texto secundário      7.3:1 sobre paper  AAA
--paper          #FBFAF8   fundo, branco levemente quente
--paper-sunk     #F2F0EC   fundo de card/seção
--rule           #E2DFD9   fios e bordas
--signal         #C1121F   acento único          6.0:1 sobre paper  AA
```

Os três valores de contraste foram calculados, não estimados. `--signal` passa
AA para texto normal, então pode ser usado em link de corpo sem ressalva.

Regra que faz a coisa funcionar: **`--signal` nunca é decorativo.** Ele aparece
em link, foco, e no ponto de status "aberto a propostas". Não aparece em
gradiente, em glow, nem em fundo de card. A saturação da página vem das
capturas de tela dos apps.

**Tipografia**

| Papel | Fonte | Por quê |
|---|---|---|
| Display (h1, h2) | **Cabinet Grotesk** ou **Zodiak** (Fontshare, gratuita, self-hosted) | Tem personalidade, não está na lista de default de IA, e é hospedável localmente |
| Corpo e UI | **SF Pro** via `-apple-system` | Para um desenvolvedor iOS isso é uma declaração de plataforma, não preguiça. Zero requisição de rede |
| Mono | **SF Mono**, fallback **JetBrains Mono** | Metadado: versão, data, stack |

Sai o `@import` de Google Fonts do topo do `global.css`. Ele é
render-blocking, adiciona uma origem externa, e hoje carrega Inter e Fira Code
que em Mac nem chegam a ser usadas na cascata do corpo.

Escala de tipo — quatro tamanhos, não sete. `clamp()` só no h1.

**Opção mais conservadora:** SF Pro para tudo, incluindo display, em tamanho
grande com `letter-spacing: -0.03em`. Fica coerente e caro. Risco: parecer uma
página de marketing da Apple em vez de sua.

### Layout

Hero alinhado à esquerda com a foto e um dispositivo à direita. Não centralizado.

```
┌──────────────────────────────────────────────────────────┐
│  ANTHONY ANTONELLI              [en] [pt]     ● aberto   │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  Desenvolvedor iOS.                     ┌────────┐       │
│  Três apps em produção                  │        │       │
│  antes de me formar.                    │  tela  │       │
│                                         │  real  │       │
│  Swift · SwiftUI · React Native         │  do    │       │
│                                         │  app   │       │
│  [ Ver projetos ]  [ CV ]               └────────┘       │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  PUBLICADO                                               │
│                                                          │
│  x.y.z  Rise of the Lich King    <data>     App Store →  │
│  x.y.z  odinPedidos              <data>     App Store →  │
│  x.y.z  Boraa                    <data>     App Store →  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

Versão e data reais saem do App Store Connect, em *App Information →
Version History*. Não invente — o número só tem valor porque é verificável
clicando no link ao lado.

Uma primitiva de layout repetida na página inteira: linha com fio embaixo,
sem card, sem sombra. Card só onde tem imagem dentro.

### Elemento assinatura

**O log de releases.**

Em vez de "3 Live Products" numa faixa de estatística (que é sinal de IA
número 14), a seção de projetos abre como o histórico de versão da App Store:
número de versão, nome do app, data real de publicação, link. Ordem
cronológica reversa, como um `git log`.

Funciona porque:
- É dado real do seu mundo, não decoração
- A ordem carrega informação verdadeira (você entregou três apps em três meses)
- Nenhum outro portfolio de estudante consegue copiar isso, porque exige apps
  publicados de verdade
- Substitui a faixa de estatística por algo que diz a mesma coisa com mais
  credibilidade

O único lugar onde vale gastar ousadia. Todo o resto da página fica disciplinado.

### Movimento

Cortar quase tudo. O que fica:

- Uma sequência de entrada no hero, uma vez só, no carregamento
- Hover em link e card: mudança de estado, 120ms, sem transformação
- `@media (prefers-reduced-motion: reduce)` desligando tudo — hoje isso não
  existe e o `.reveal` viola a preferência do usuário

Sai o fade-in em todo elemento com delay escalonado. É exatamente o
"fade-in genérico com timing idêntico" da lista.

---

## Parte 3 — Se preferir manter o dark

Decisão sua. Se o vermelho sobre marinho for identidade que você quer manter,
dá para tirar do genérico sem trocar a paleta:

1. Matar o gradiente no nome. Vermelho chapado.
2. Trocar os seis emoji por ícones SF Symbols exportados como SVG — coerente
   com iOS e não é emoji.
3. Tirar as badges de cima do H1. Status "aberto a propostas" vai para o header.
4. Rótulo de seção em caixa baixa, com o fio ficando como divisor.
5. Adicionar light mode. Dark permanente é sinal por si só, e há gente que lê
   melhor em claro.
6. Adicionar as capturas de tela dos apps. Esse item é obrigatório nas duas
   direções.

Só os itens 1, 2, 3 e 6 já derrubam quatro dos sete sinais.

## Fontes

- Developers Digest — [AI Design Slop: 16 Patterns That Out Your App as Vibe-Coded](https://www.developersdigest.tech/blog/ai-design-slop-and-how-to-spot-it)
- 925 Studios — [AI Slop Web Design: Complete Guide to Spotting and Fixing Generic Websites](https://www.925studios.co/blog/ai-slop-web-design-guide)
- Sikora Software — [Top 10 Signs a Website Was Built by AI](https://sikora.software/blog/ai-website-design)
- Fireart — [Web Design Trends 2026: Tactile Brutalism & Invisible Architecture](https://fireart.studio/blog/the-best-web-design-trends/)
- [Swiss Design Principles for Web Designers](https://swissthemes.design/insights/swiss-design-for-web-designers)
- [Apple Design Resources](https://developer.apple.com/design/resources/) — molduras oficiais de dispositivo
- [Fontshare](https://www.fontshare.com/) — Cabinet Grotesk, Zodiak, Switzer (gratuitas para uso comercial)
