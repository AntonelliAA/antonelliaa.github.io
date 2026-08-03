# Auditoria do site atual e plano de melhoria

Estado avaliado: commit `cc50a20`, branch `main`.

> **Status em 3 de agosto de 2026.** P0, P1 e P2 executados, exceto os itens
> que dependem de arquivo que só você tem (screenshots, foto) ou de terceiro
> (recomendação). Lighthouse desktop: **100 / 100 / 100 / 100** nas duas
> páginas. O que falta está na seção [O que sobrou](#o-que-sobrou) no fim.

## Veredito curto

O site está acima da média de portfolio de estudante. A base técnica é boa
(Astro, zero JS de framework, bilíngue de verdade com rotas separadas, sitemap,
CV baixável) e **o conteúdo é específico e verificável**, que é a parte mais
difícil e a que a maioria erra. Três apps na App Store com link direto é um
ativo que quase ninguém no seu nível tem.

Os dois problemas são:

1. **Um portfolio de desenvolvedor iOS sem uma única imagem de app.** É a
   lacuna número um. Você tem o produto mais visual possível e ele está
   descrito em texto.
2. **A casca visual é genérica.** Sete dos treze sinais de "site gerado por IA"
   estão presentes, detalhados em [03-design.md](03-design.md). O conteúdo é
   honesto, a embalagem não parece.

Mais seis defeitos técnicos concretos, um deles quebrando o preview de link
compartilhado. Estão em [04-tecnico.md](04-tecnico.md).

## O que está certo e não deve ser mexido

- Projetos aparecem cedo na página, antes do "sobre"
- Bullets citam número real: 50+ clientes pagantes, 100 downloads na primeira
  semana, 3º lugar entre 10 times, análise de custo de semanas para um dia
- Nenhuma barra de porcentagem de skill
- O portfolio não está listado como um dos projetos
- Bilíngue com URL própria por idioma, não toggle client-side
- CV baixável direto do hero
- Contraste do texto passa em WCAG AA
- Astro sem framework: peso de JS praticamente zero

## Plano

### P0 — quebrado ou custo desproporcional ao ganho

| # | O quê | Onde | Esforço |
|---|---|---|---|
| 1 | Consertar `og-image` (é JPEG chamado `.png`, 1024×1024 anunciado como 1200×630, 417 KB) | `public/og-image.png`, `Layout.astro:33-41` | 30 min |
| 2 | Adicionar `prefers-reduced-motion` | `global.css` | 15 min |
| 3 | Fazer `.reveal` funcionar sem JS | `global.css:190`, `Layout.astro` | 20 min |
| 4 | `canonical` + `hreflang` + `og:url` derivado de `Astro.url` | `Layout.astro` | 30 min |
| 5 | JSON-LD `Person` | `Layout.astro` | 20 min |
| 6 | `:focus-visible` e skip link | `global.css`, `Layout.astro` | 20 min |
| 7 | Apagar o listener morto de `astro:page-load` | `Layout.astro:94-97` | 2 min |

Meio dia de trabalho. Nada disso muda o visual e tudo é verificável no
Lighthouse.

### P1 — o que realmente muda o resultado

| # | O quê | Por quê | Esforço |
|---|---|---|---|
| 8 | **Screenshots dos três apps publicados**, em moldura oficial de iPhone | A lacuna número um. Assets já existem na App Store Connect | 3–4 h |
| 9 | Sua foto no hero ou no "sobre" | Prova que uma pessoa fez o site. Ver [02-conteudo.md](02-conteudo.md#foto-sim-ou-não) | 1 h |
| 10 | Trocar os seis emoji por SVG (SF Symbols) | Sinal de IA e incoerente com uma página sobre iOS | 1 h |
| 11 | Tirar o gradiente do nome no hero; vermelho chapado | Sinal de IA, e é onde a página começa | 10 min |
| 12 | Tirar as três badges de cima do H1; status vai para o header | Sinal de IA | 30 min |
| 13 | Encolher Skills de 40+ tags para ~12 com contexto de uso | "Word salad" atrapalha. Ver [02-conteudo.md](02-conteudo.md#skills-encolher) | 1 h |
| 14 | Reescrever os bullets fracos de Experiência em X-Y-Z | Três bullets hoje descrevem a vaga, não o que você fez | 2 h |
| 15 | Self-host das fontes, tirar o `@import` do Google | Render-blocking + origem externa | 1 h |

Dois a três dias. Depois disso o site sustenta uma entrevista.

### P2 — diferenciação

| # | O quê | Por quê | Esforço |
|---|---|---|---|
| 16 | **Case study do odinPedidos** em página própria | O item que mais separa você de outro candidato júnior. Estrutura em [02-conteudo.md](02-conteudo.md#case-study-quando-vale-a-pena) | 1–2 dias |
| 17 | Seção "Publicado" como log de release (versão, app, data, link) | Elemento assinatura. Ver [03-design.md](03-design.md#elemento-assinatura) | 4 h |
| 18 | Light mode + toggle | Dark permanente é sinal por si só | 3 h |
| 19 | Reordenar projetos: três publicados em destaque, dois acadêmicos num bloco menor | Três bem feitos superam dez rasos | 2 h |
| 20 | Página 404 | Hoje o GitHub Pages devolve a genérica | 30 min |
| 21 | Uma recomendação nomeada (mentor da Academy ou gestor da Plugways) | Prova social vale mais que "sobre mim" | depende de terceiro |

### P3 — só se a manutenção for real

| # | O quê | Ressalva |
|---|---|---|
| 22 | Redesign completo para a direção clara em [03-design.md](03-design.md#parte-2--direção-proposta) | Só vale se você quiser. A opção de manter o dark corrigido está na Parte 3 daquele doc |
| 23 | Notas técnicas / blog | Um post de 2025 parado é pior que nenhum post |
| 24 | Vídeo curto do fluxo dos apps | Depois dos screenshots, não antes |

## O que sobrou

Tudo que não foi feito, e por quê.

| # | Item | Por que não foi feito |
|---|---|---|
| 8 | Screenshots dos apps | Preciso dos arquivos. O código já aceita: jogue `rise-of-the-lich-king.png`, `odinpedidos.png` e `boraa.png` em `src/assets/projects/` e eles aparecem sem tocar em código. Instruções em [src/assets/projects/README.md](../src/assets/projects/README.md) |
| 9 | Sua foto | Mesma coisa — preciso do arquivo |
| 16 | Case study do odinPedidos | Depende de informação que só você tem: qual era a operação antes, por que React Native e não nativo, o que se perdeu nessa escolha |
| 17 | Log de releases | Precisa de número de versão e data reais do App Store Connect. Inventar destruiria o único valor que a seção teria |
| 21 | Recomendação nomeada | Depende de terceiro |
| 22 | Redesign completo (direção clara) | Decisão sua. A rota alternativa da [Parte 3 do doc de design](03-design.md#parte-3--se-preferir-manter-o-dark) foi executada: o dark ficou, sem os sinais genéricos |
| 23 | Blog / notas técnicas | Só começa se for manter |

Três bullets de Experiência foram adensados sem número porque não havia número
no material. Se você tiver, valem mais que qualquer mudança visual restante:

- GPSET: quantas aplicações web, quantos usuários, quanto caiu o tempo de deploy
- Boraa: quantos check-ins, quantos usuários no evento
- Rise of the Lich King: downloads acumulados hoje, não só a primeira semana

## Ordem sugerida

1. ~~P0 inteiro~~ — feito.
2. **Item 8 (screenshots).** Agora é o único item que ainda muda o resultado
   de forma grande, e virou trabalho de arrastar arquivo.
3. Item 9 (foto).
4. Item 16 (case study) quando tiver um fim de semana.
5. Decidir sobre o item 22 só depois de ver o site com screenshots dentro.

## Como medir

Antes e depois:

```bash
npm run build && npm run preview
npx lighthouse http://localhost:4321 --preset=desktop --view
```

Resultado em 3 de agosto de 2026, nas duas páginas:

| | Performance | Acessibilidade | Boas práticas | SEO |
|---|---|---|---|---|
| `/` | 100 | 100 | 100 | 100 |
| `/pt-br/` | 100 | 100 | 100 | 100 |

O Lighthouse pegou dois problemas de contraste que a inspeção manual não tinha
pego: branco no botão primário dava 3.93:1, e o link do Astro no rodapé se
distinguia só por cor. Vale rodar depois de qualquer mudança de cor.

E o teste que importa mais que o Lighthouse: abra o site num celular, dê 20
segundos para alguém que não te conhece, e pergunte o que a pessoa entendeu.
Se ela não souber dizer que você publica app iOS, o hero falhou.
