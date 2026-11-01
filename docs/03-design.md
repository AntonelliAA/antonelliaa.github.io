# Direção de rebranding do portfólio

> Atualizado em 29 de outubro de 2026. As pesquisas e propostas de agosto ficam em [05-auditoria-e-plano.md](05-auditoria-e-plano.md) como histórico, não como descrição do site atual.

## Tese

Este é o portfólio de Anthony Antonelli Andrade, desenvolvedor que participou de quatro apps lançados na App Store e desenvolveu mais dois com páginas de pré-venda. O visitante precisa reconhecer uma pessoa, ver os apps reais, entender o papel de Anthony em cada um e chegar ao currículo ou contato sem esforço.

As imagens finais precisam mostrar o produto com legibilidade e fidelidade. Até Anthony selecionar essas capturas, cada área visual tem um espaço reservado com nome próprio. A apresentação continua apoiada em decisões técnicas e resultados verificáveis.

## Conteúdo e hierarquia

1. **Nome e proposta:** o que Anthony fez, com uma prova concreta e acesso rápido aos produtos.
2. **Produtos:** Palco, os dois Freela onTap, Rise of the Lich King e odinPedidos aparecem em capítulos próprios, com espaço para a imagem final, papel de Anthony e decisão ou resultado verificável. No Palco, o processo de desenvolvimento também faz parte da história. O par Freela é apresentado como dois lados do mesmo serviço, marcado como pré-venda.
3. **Outros trabalhos e experiência:** Boraa, projetos acadêmicos e passagens pela Academy, GPSET e Plugways com realizações específicas. Boraa é um produto lançado, feito em equipe de cinco pessoas; Anthony trabalhou no backend, no deploy, na integração com MapKit e em telas. Palco é um projeto solo; não atribuí-lo à Academy sem confirmação.
4. **Competências, formação e contato:** conteúdo curto e subordinado aos produtos.

Fatos já registrados: Palco foi lançado na App Store e é projeto solo; Rise teve 100 downloads na primeira semana; odinPedidos tem mais de 50 clientes pagantes e foi desenvolvido por Anthony como único dev mobile. A página atual do [Boraa na App Store](https://apps.apple.com/br/app/boraa/id6752790553) o mostra disponível e credita Anthony entre cinco desenvolvedores. Anthony confirmou que começou na Plugways em janeiro de 2023, onde atuou em mobile e backend, e em Engenharia de Software na PUCRS em 2024. Não afirmar implementação de fila offline ou resolução de conflito no odinPedidos sem evidência adicional.

## Processo de desenvolvimento com IA

Anthony confirmou que desenvolveu o Palco de ponta a ponta com **spec-driven development** (desenvolvimento guiado por especificações) e **human-in-the-loop (HITL)**. Codex, Claude, skills e MCPs foram ferramentas de apoio. Ele também usa IA no dia a dia: cria rotinas e fluxos de trabalho, usa skills e MCPs para orientar e conectar ferramentas, delega tarefas a agentes auxiliares (workers/subagentes) e coordena os resultados. As decisões e a revisão final permanecem com Anthony.

## Direção visual

- Identidade de **portfólio pessoal de produto**, não réplica da Apple nem catálogo de cartões SaaS. A Apple HIG é usada para propósito, clareza, hierarquia, legibilidade, acessibilidade e cuidado no detalhe; controles iOS e Liquid Glass nativos não pertencem ao conteúdo web.
- Composição editorial: mudanças de escala e ritmo dependem do conteúdo. Os espaços reservados mantêm a proporção prevista para as capturas finais.
- Cor com origem: usar as cores documentadas de cada produto ou uma paleta pessoal deliberada. O Palco usa laranja como cor de marca em `Orator/docs/DESIGN-BRIEF.md`; não inventar outra identidade para ele.
- Tipografia com hierarquia clara e linhas legíveis. Botões e links com verbos específicos; bom foco, alvos de toque, contraste entre as seções claras e escuras e `prefers-reduced-motion`.
- Evitar glows radiais, pilhas de badges, ícones fictícios de app, gradientes sem função, sombras idênticas e a mesma borda arredondada em todas as seções.

## Materiais e proveniência

Os 17 arquivos em `src/assets/projects/` vieram das páginas oficiais da App Store em 29 de outubro de 2026, com autorização de Anthony. Eles permanecem arquivados e não são exibidos no site. A origem está em [src/assets/projects/README.md](../src/assets/projects/README.md). O site usa nove nomes de imagem em [src/assets/portfolio-visuals/README.md](../src/assets/portfolio-visuals/README.md); ao adicionar os arquivos finais, os espaços reservados são substituídos na próxima geração. A mesma pasta aceita duas imagens opcionais de compartilhamento, `og-pt` e `og-en`, em 1200 × 630 px. Os antigos `public/og-image*.jpg` não são referenciados. O Orator contém peças promocionais adicionais do Palco em `podium-report-screen/store-assets/`. Uma foto real de Anthony pode ser adicionada depois, se ele quiser.

## Verificação antes de publicar

- Abrir e inspecionar as versões em português e inglês no desktop e no celular.
- Conferir links da App Store e, após a importação, alt text e correspondência de cada imagem com o app real.
- Conferir o currículo atualizado e os nomes dos nove arquivos de imagem antes da publicação.
- Verificar contraste, navegação por teclado, redução de movimento e build Astro.
- Fazer uma revisão de 20 segundos com alguém que não conhece Anthony: a pessoa deve entender que ele publica apps iOS e saber qual projeto abrir primeiro.

As páginas da App Store de [Freela onTap: Empresas](https://apps.apple.com/br/app/freela-ontap-empresas/id6818285624) e [Freela onTap: Vagas e Turnos](https://apps.apple.com/br/app/freela-ontap-vagas-e-turnos/id6818288726) registravam, em 29 de outubro de 2026, disponibilidade prevista para 16 de novembro. O usuário confirmou que desenvolveu ambos. O repositório local `Frella/freela-ontap-ios` confirma dois targets iPhone em um projeto nativo Swift 6/SwiftUI, com MVVM e Supabase. Commits do repositório documentam contribuições de Anthony em mapa, busca por distância, onboarding e notificações. O vínculo contratual ainda não está documentado.
