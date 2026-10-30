# Portfólio de Anthony Antonelli Andrade

Site pessoal em Astro, disponível em português e inglês. Apresenta apps que Anthony desenvolveu para iPhone por meio de histórias curtas e links para suas páginas na App Store. Os espaços reservados marcam onde entrarão as imagens finais dos produtos.

## Projetos em destaque

- **Palco: Oratória e Apresentação:** app lançado na App Store, criado por Anthony de ponta a ponta em Swift 6. O desenvolvimento foi guiado por especificações (*spec-driven development*) e revisão humana (*human-in-the-loop*, HITL), com apoio de Codex, Claude, skills e MCPs.
- **Freela onTap:** dois apps iPhone desenvolvidos por Anthony em uma base SwiftUI compartilhada. As páginas de pré-venda de Empresas e Vagas e Turnos indicavam lançamento previsto para 16 de novembro de 2026 na verificação de 29 de outubro de 2026.
- **Rise of the Lich King:** jogo iOS lançado na App Store e desenvolvido na Apple Developer Academy | PUCRS.
- **odinPedidos:** app de gestão de pedidos lançado na App Store e no Google Play; Anthony foi o único desenvolvedor mobile.
- **Boraa:** app de descoberta de eventos lançado na App Store. Anthony trabalhou em rotas do backend, deploy, MapKit e telas com um time de cinco pessoas.

## Direção do site

As páginas de produtos da Apple inspiram a escala da tipografia e o ritmo de leitura. A [skill de design da Apple](.agents/skills/apple-design/SKILL.md), trazida do projeto Orator, orienta clareza, acessibilidade e cuidado visual. Cada produto mantém sua própria identidade. Os arquivos antes importados da App Store estão arquivados e documentados em [src/assets/projects/README.md](src/assets/projects/README.md); eles não aparecem no site atual.

Para trocar os espaços reservados, coloque as capturas finais com os nomes indicados em [src/assets/portfolio-visuals/README.md](src/assets/portfolio-visuals/README.md). O site encontra esses arquivos na próxima geração. Há também dois arquivos opcionais, `og-pt` e `og-en`, em 1200 × 630 px, para as prévias de compartilhamento nos dois idiomas. Os antigos JPGs de compartilhamento em `public/` não são mais usados. O currículo atualizado fica em `public/resume/cv.pdf`; seu arquivo fonte editável está em `scripts/portfolio_cv.py`.

A direção completa, os fatos e as pendências editoriais estão em [docs/03-design.md](docs/03-design.md). O inventário das imagens antigas está em [docs/2026-10-29-assets-to-import.md](docs/2026-10-29-assets-to-import.md).

## Rodar localmente

Requer Node.js 22.12 ou superior.

```sh
npm install
npm run dev
```

O servidor local abre em `http://localhost:4321/`. Para gerar a versão de produção:

```sh
npm run build
```

O conteúdo bilíngue fica em `src/i18n/ui.ts`. As páginas ficam em `src/pages/`, os componentes em `src/components/` e os estilos em `src/styles/global.css`.
