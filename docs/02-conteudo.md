# Conteúdo: o que colocar e como escrever

## Foto: sim ou não

Depende de onde.

| Onde | Recomendação | Por quê |
|---|---|---|
| **Site (portfolio)** | **Sim.** Uma foto real, sua, boa. | É um site pessoal. Foto real é a prova mais barata de que uma pessoa fez isso, e não um gerador de template. Nenhuma preocupação de viés de ATS se aplica aqui. |
| **LinkedIn** | Sim, obviamente. | Perfil sem foto tem menos visualização. |
| **CV em PDF para EUA / Reino Unido** | **Não.** | Empresa americana descarta currículo com foto por risco jurídico (Title VII, ADEA, ADA). Não é preferência estética, é compliance. |
| **CV em PDF para Brasil** | Neutro, tanto faz. | Praxe local aceita, mas não ajuda. Se você mantém um só PDF para os dois mercados, tire. |

Como a vaga-alvo inclui remoto internacional, a regra que sobra é: **foto no
site e no LinkedIn, nunca no `public/resume/cv.pdf`.**

Requisitos da foto, se for usar: fundo neutro, luz frontal, enquadramento do
peito para cima, expressão natural. Foto tirada com celular e boa luz de janela
funciona. O que não funciona é foto recortada de festa, avatar gerado, ou
ilustração estilizada — as três leem como "não tinha foto".

## As seções, em ordem de valor

O acerto estrutural do site atual é que projeto aparece cedo. Mantém.

1. **Hero** — nome, o que você faz, três provas concretas, dois botões (ver
   projetos, baixar CV). Está bom hoje.
2. **Projetos** — a seção mais importante. Precisa de imagem (ver abaixo).
3. **Experiência** — bullets em X-Y-Z.
4. **Sobre** — curto. Ninguém contrata por causa do "sobre".
5. **Skills** — encolher. Ver abaixo.
6. **Formação** — três linhas.
7. **Contato** — email clicável e links, no header e no footer.

## Projetos: o que falta hoje

Hoje cada projeto é um card de texto. Para um desenvolvedor iOS, isso deixa na
mesa o ativo mais forte que existe: **o app é visual e está publicado.**

Todo material sobre portfolio de iOS converge em um ponto: coloque screenshot
de verdade, de dispositivo de verdade, com moldura oficial da Apple. Comece
pela tela mais impressionante.

Para cada projeto publicado, o mínimo:

- 2–3 screenshots reais em moldura de iPhone (as molduras oficiais estão em
  [developer.apple.com/design/resources](https://developer.apple.com/design/resources/))
- Um GIF ou vídeo curto do fluxo principal, se houver movimento que valha
- Link para App Store (já tem) e para o repositório quando for público
- Uma linha de resultado com número

**Regra de quantidade:** três projetos bem feitos superam dez rasos. Você tem
cinco. Rise of the Lich King, odinPedidos e Boraa são apps publicados e
sustentam a tese. Bah Inovação e Ludo Pets são acadêmicos e ficam abaixo da
dobra, num bloco secundário menor. Não os apague — eles mostram trabalho em
equipe grande e liderança de UX, que os outros três não mostram.

## Case study: quando vale a pena

Card curto não cabe raciocínio de engenharia. Para **um** projeto — sugiro
odinPedidos, porque tem cliente pagante e você foi o único dev mobile — vale
uma página de case study.

Estrutura de quatro blocos, que é o que a literatura de case study de
engenharia converge:

1. **Problema e restrição.** Não "construí um ERP". Sim: qual era a operação
   antes, quantos representantes, o que quebrava, qual era o prazo e o
   orçamento.
2. **Decisões e trade-offs.** Por que React Native e não nativo. O que você
   perdeu nessa escolha. Como resolveu push notification e capabilities do zero.
3. **O que foi construído.** Arquitetura em um diagrama simples, telas
   principais.
4. **Resultado.** 50+ clientes pagantes, publicado nas duas lojas. O que você
   faria diferente hoje.

O bloco 2 é o que separa case study de release notes, e é a parte que um
engineering manager lê. É também a parte que quase ninguém escreve.

## Como escrever os bullets de experiência

Fórmula X-Y-Z, atribuída a Laszlo Bock (ex-SVP de People Ops do Google):

> Accomplished **[X]** as measured by **[Y]** by doing **[Z]**.

Aplicado nos seus bullets atuais:

| Hoje | Problema | Reescrito |
|---|---|---|
| "Built a Power BI dashboard integrating elevator equipment data via Python pipelines and SAP, reducing cost analysis from weeks to a single day." | Nenhum. Esse já é X-Y-Z. | Manter como está. É o melhor bullet do site. |
| "Developed and maintained fullstack web applications using TypeScript, React, and Node.js." | Descrição de vaga. Sem X, sem Y. | Escolher **uma** aplicação, dizer o que ela fazia e para quem, e qual foi o efeito. |
| "Contributed to DevOps practices including CI/CD pipeline maintenance and deployment workflows." | "Contributed to" não diz nada. | Ou vira um fato concreto (o que o pipeline passou a fazer, quanto tempo de deploy caiu), ou sai. |
| "Built native iOS apps with Swift, SwiftUI, and UIKit, applying MVVM and MVC architectural patterns." | Lista de keyword. | Cortar. As tecnologias já aparecem nos cards de projeto e na seção de skills. |

Regra de corte: se o bullet continuaria verdadeiro para qualquer outra pessoa
do mesmo time, ele não é seu e não conta.

## Skills: encolher

Hoje são seis categorias e mais de 40 tags. Isso é o "word salad" que o
ex-recruiter do Google cita como algo que atrapalha, e as barras de progresso
seriam pior ainda (o site felizmente não tem).

Corte proposto:

- **Manter em destaque:** Swift, SwiftUI, UIKit, Core Data/SwiftData, StoreKit 2,
  React Native, TypeScript, Node.js. É o que você usaria numa vaga amanhã.
- **Mover para o CV, tirar do site:** SAP, PHP, Angular, Power BI. Ainda são
  verdade, mas diluem a mensagem "desenvolvedor iOS".
- **Cortar de vez:** "Agile/Scrum", "DevOps", "Database Modeling". Não são
  skills verificáveis, são palavras que todo currículo tem.

Alternativa mais forte que a nuvem de tags: uma linha por tecnologia central
com o **contexto** de uso ("StoreKit 2 — compras in-app em produção no Rise of
the Lich King"). Duas colunas, oito linhas. Diz mais e ocupa menos.

## O que não colocar

- Barra de porcentagem de skill.
- O próprio portfolio listado como projeto.
- Projeto de tutorial (clone de Netflix, app de to-do de curso). Você tem
  produto real; tutorial só puxa a média para baixo.
- Depoimento genérico sem nome e cargo de quem falou.
- "Apaixonado por tecnologia", "sempre em busca de novos desafios". Zero
  informação, e é a assinatura textual de conteúdo gerado.

## Adições que valem, em ordem de custo-benefício

1. **Screenshots dos apps.** Maior ganho, custo baixo. Você já tem os assets da
   App Store Connect.
2. **Foto sua.** Custo quase zero.
3. **Um case study.** Custo médio, e é o item que mais diferencia numa
   entrevista.
4. **Página `/uses` ou notas técnicas curtas.** Prova que você escreve. Só
   comece se for manter — blog com um post de 2025 é pior que blog nenhum.
5. **Recomendação nomeada.** Uma frase de um mentor da Apple Developer Academy
   ou do gestor da Plugways, com nome e cargo, vale mais que três parágrafos de
   "sobre mim".

## Fontes

- CNBC — [Ex-Google recruiter's 2 best tips](https://www.cnbc.com/2024/04/30/ex-google-recruiters-best-tips-for-writing-an-effective-resume.html)
- Medium — [Building an iOS Portfolio That Gets You Hired](https://medium.com/@chandra.welim/building-an-ios-portfolio-that-gets-you-hired-56cf4702e93b)
- Contra — [Building a Standout iOS Developer Portfolio](https://contra.com/p/r3EYQYY6-building-a-standout-i-os-developer-portfolio-a-step-by-step-guide)
- Jobscan — [Should You Include a Picture on Your Resume](https://www.jobscan.co/blog/picture-on-resume/)
- Robert Half — [Should I put a photo on my resume? Our advice – no](https://www.roberthalf.com/au/en/insights/career-development/should-i-put-my-photo-my-resume-our-advice-no)
- DEV — [Reviewing over 40 developer portfolios](https://dev.to/kethmars/what-i-learned-after-reviewing-over-40-developer-portfolios-9-tips-for-a-better-portfolio-4me7)
- [Kieran Roberts — Developer portfolio do's & don'ts](https://blog.kieranroberts.dev/developer-portfolio-dos-and-donts)
