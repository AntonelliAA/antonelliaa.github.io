export const languages = {
  en: 'English',
  'pt-br': 'Português',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Accessibility
    'a11y.skip': 'Skip to content',

    // Header
    'header.status': 'Open to work',

    // Nav
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': "Hi, I'm",
    'hero.name': 'Anthony Antonelli',
    'hero.title': 'iOS Developer & Software Engineer',
    'hero.description': 'Building native iOS applications with Swift & SwiftUI. 3 live products in production (App Store + Google Play), hackathon podium, and 2+ years across mobile and fullstack development.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.cv': 'Download CV',
    'hero.location': 'Porto Alegre, Brazil',

    // About
    'about.label': 'About Me',
    'about.title': 'Building software that ships',
    'about.p1': "I'm a Software Engineer and iOS Developer based in Porto Alegre, Brazil. I specialize in building native iOS applications with Swift, SwiftUI, and UIKit. I also have solid experience with React Native/Expo, TypeScript, React, Node.js, and AWS.",
    'about.p2': "Currently studying Software Engineering at PUCRS (graduating 2027) and developing at the Apple Developer Academy | PUCRS. I've shipped 3 live products to production before graduating — and I care about writing clean, maintainable code that delivers real value.",
    'about.highlight.appstore': '3 Live Products',
    'about.highlight.appstore.desc': 'Rise of the Lich King, Boraa, and odinPedidos — all in production.',
    'about.highlight.hackathon': 'Hackathon Podium',
    'about.highlight.hackathon.desc': '3rd place at PUCRS Hackathon — first team to use native iOS.',
    'about.highlight.experience': '2+ Years Experience',
    'about.highlight.experience.desc': 'Across iOS, React Native, web, and enterprise environments.',
    'about.highlight.international': 'International',
    'about.highlight.international.desc': 'Academic experience at Bayswater College, London. Advanced English (B2).',

    // Experience
    'exp.label': 'Experience',
    'exp.title': 'Where I\'ve worked',

    'exp.1.role': 'iOS Developer',
    'exp.1.company': 'Apple Developer Academy | PUCRS',
    'exp.1.period': 'Feb 2025 — Present',
    'exp.1.b1': 'Shipped 2 apps to the App Store: Rise of the Lich King (iOS game, 100 downloads in its first week) and Boraa (social event check-in app, team of 5).',
    'exp.1.b2': 'Took both apps through the full release path: Core Data and SwiftData persistence, StoreKit 2 in-app purchases, MapKit location features, TestFlight builds and App Store review.',
    'exp.1.b3': 'Placed 3rd of 10 teams at the PUCRS Hackathon with myRates — the first team in the event\'s history to use native iOS (Swift/UIKit + Go), shipped to TestFlight before judging.',

    'exp.2.role': 'Software Engineering Intern',
    'exp.2.company': 'GPSET Engenharia',
    'exp.2.period': 'Jan 2024 — Feb 2025',
    'exp.2.b1': 'Built a Power BI dashboard integrating elevator equipment data via Python pipelines and SAP systems, cutting cost analysis from weeks to a single day.',
    'exp.2.b2': 'Developed and maintained the company\'s fullstack web applications in TypeScript, React and Node.js, and kept the CI/CD pipeline and deploy workflow running.',

    'exp.3.role': 'Software Development Intern',
    'exp.3.company': 'Plugways Digital',
    'exp.3.period': 'Jul 2023 — Jan 2024',
    'exp.3.b1': 'Built odinPedidos end-to-end as sole mobile developer — a B2B ERP for sales rep order management, live on the App Store and Google Play and serving 50+ paying clients.',
    'exp.3.b2': 'Set up the app\'s iOS capabilities, permissions and push notifications from scratch, with no prior iOS setup in the company to build on.',
    'exp.3.b3': 'Built web interfaces with Angular and backend services with PHP, Node.js and MySQL, and managed the cloud deployments on AWS.',

    // Projects
    'proj.label': 'Projects',
    'proj.title': 'Things I\'ve built',
    'proj.subtitle': 'Focused on shipping real products and solving real problems.',
    'proj.academic': 'Academic projects',
    'proj.screenshot.alt': 'app screenshot',

    'proj.1.name': 'Rise of the Lich King',
    'proj.1.desc': 'iOS game built end-to-end — concept, UI/UX, game logic, StoreKit 2, and App Store submission. 100 downloads in the first week. Full product lifecycle ownership.',
    'proj.1.stack': 'Swift, SwiftUI, SpriteKit, StoreKit 2',
    'proj.1.link.label': 'App Store',

    'proj.2.name': 'odinPedidos',
    'proj.2.desc': 'B2B ERP for sales rep order management. Sole mobile developer: architecture, all screens, CRUD flows, REST API integration, and both store deployments. Serving 50+ paying clients.',
    'proj.2.stack': 'React Native, Expo, TypeScript',
    'proj.2.link.label': 'App Store',

    'proj.3.name': 'Boraa',
    'proj.3.desc': 'Social event check-in app built in a team of 5 at the Apple Developer Academy. Responsible for backend routes, deployment, MapKit integration, and contributed to frontend screens.',
    'proj.3.stack': 'Swift, SwiftUI, MapKit, CloudKit',
    'proj.3.link.label': 'App Store',

    'proj.4.name': 'Bah Inovação',
    'proj.4.desc': 'Civic innovation platform connecting entrepreneurs, investors, and government. Led UX/UI design in Figma (~90% of screens), designed the database schema, and built backend API endpoints.',
    'proj.4.stack': 'Figma, PostgreSQL, Node.js, REST API',
    'proj.4.link.label': 'Wiki',

    'proj.5.name': 'Ludo Pets',
    'proj.5.desc': 'Core developer in the founding team of a multi-semester academic project (19 contributors). Led iOS adaptation — the only team member with a Mac — configuring capabilities, permissions, and push notifications for App Store compatibility.',
    'proj.5.stack': 'React Native, Node.js, REST API',
    'proj.5.link.label': 'Wiki',

    // Skills
    'skills.label': 'Skills',
    'skills.title': 'Tech stack',
    'skills.subtitle': 'What I use, and where I used it.',

    'skills.group.apple': 'Apple platforms',
    'skills.group.cross': 'Cross-platform & backend',

    'skills.ctx.swift': '3 apps shipped to the App Store',
    'skills.ctx.swiftui': 'Rise of the Lich King, Boraa',
    'skills.ctx.uikit': 'myRates — PUCRS Hackathon, 3rd place',
    'skills.ctx.storekit': 'In-app purchases running in production',
    'skills.ctx.persistence': 'Local persistence across Academy projects',
    'skills.ctx.mapkit': 'Location and check-in features in Boraa',

    'skills.ctx.reactnative': 'odinPedidos — 50+ paying clients',
    'skills.ctx.typescript': 'Mobile and web, 2+ years',
    'skills.ctx.node': 'Backend routes for Boraa and Bah Inovação',
    'skills.ctx.react': 'Fullstack web apps at GPSET',
    'skills.ctx.sql': 'Schema design for Bah Inovação',
    'skills.ctx.aws': 'Cloud deployments at Plugways Digital',

    // Education
    'edu.label': 'Education',
    'edu.1.degree': 'B.Sc. Software Engineering',
    'edu.1.school': 'PUCRS',
    'edu.1.period': '2023 — 2027',
    'edu.2.degree': 'Apple Developer Academy',
    'edu.2.school': 'PUCRS',
    'edu.2.period': '2025',
    'edu.3.degree': 'English — Upper Intermediate (B2)',
    'edu.3.school': 'Bayswater College, London',
    'edu.3.period': '2022',

    // Contact
    'contact.label': 'Contact',
    'contact.title': "Let's work together",
    'contact.desc': "I'm currently open to Junior and Mid-Level iOS, Mobile, and Fullstack developer roles. Feel free to reach out!",
    'contact.cta': 'Send Email',
    'contact.remote': 'Open to Remote',

    // Footer
    'footer.built': 'Built with',
    'footer.by': 'by Anthony Antonelli Andrade',
  },

  'pt-br': {
    // Accessibility
    'a11y.skip': 'Pular para o conteúdo',

    // Header
    'header.status': 'Aberto a propostas',

    // Nav
    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.skills': 'Skills',
    'nav.contact': 'Contato',

    // Hero
    'hero.greeting': 'Olá, eu sou',
    'hero.name': 'Anthony Antonelli',
    'hero.title': 'Desenvolvedor iOS & Engenheiro de Software',
    'hero.description': 'Construindo aplicações iOS nativas com Swift & SwiftUI. 3 produtos em produção (App Store + Google Play), pódio em hackathon, e 2+ anos de experiência em desenvolvimento mobile e fullstack.',
    'hero.cta.projects': 'Ver Projetos',
    'hero.cta.cv': 'Download CV',
    'hero.location': 'Porto Alegre, Brasil',

    // About
    'about.label': 'Sobre Mim',
    'about.title': 'Construindo software que entrega',
    'about.p1': 'Sou Engenheiro de Software e Desenvolvedor iOS baseado em Porto Alegre, Brasil. Sou especialista em construir aplicações iOS nativas com Swift, SwiftUI e UIKit. Também tenho experiência sólida com React Native/Expo, TypeScript, React, Node.js e AWS.',
    'about.p2': 'Atualmente cursando Engenharia de Software na PUCRS (formatura em 2027) e desenvolvendo na Apple Developer Academy | PUCRS. Lancei 3 produtos em produção antes de me formar — e me importo com escrever código limpo e manutenível que entrega valor real.',
    'about.highlight.appstore': '3 Produtos em Produção',
    'about.highlight.appstore.desc': 'Rise of the Lich King, Boraa e odinPedidos — todos em produção.',
    'about.highlight.hackathon': 'Pódio em Hackathon',
    'about.highlight.hackathon.desc': '3° lugar no Hackathon da PUCRS — primeiro time a usar iOS nativo.',
    'about.highlight.experience': '2+ Anos de Experiência',
    'about.highlight.experience.desc': 'Em iOS, React Native, web e ambientes empresariais.',
    'about.highlight.international': 'Internacional',
    'about.highlight.international.desc': 'Experiência acadêmica na Bayswater College, Londres. Inglês avançado (B2).',

    // Experience
    'exp.label': 'Experiência',
    'exp.title': 'Onde trabalhei',

    'exp.1.role': 'Desenvolvedor iOS',
    'exp.1.company': 'Apple Developer Academy | PUCRS',
    'exp.1.period': 'Fev 2025 — Presente',
    'exp.1.b1': 'Publiquei 2 apps na App Store: Rise of the Lich King (jogo iOS, 100 downloads na primeira semana) e Boraa (app de check-in social, time de 5).',
    'exp.1.b2': 'Levei os dois apps pelo caminho completo de release: persistência com Core Data e SwiftData, compras in-app com StoreKit 2, localização com MapKit, builds no TestFlight e revisão da App Store.',
    'exp.1.b3': '3º lugar entre 10 times no Hackathon da PUCRS com myRates — primeiro time na história do evento a usar iOS nativo (Swift/UIKit + Go), entregue no TestFlight antes do julgamento.',

    'exp.2.role': 'Estagiário de Engenharia de Software',
    'exp.2.company': 'GPSET Engenharia',
    'exp.2.period': 'Jan 2024 — Fev 2025',
    'exp.2.b1': 'Construí um dashboard Power BI integrando dados de equipamentos via pipelines Python e SAP, reduzindo a análise de custos de semanas para um único dia.',
    'exp.2.b2': 'Desenvolvi e mantive as aplicações web fullstack da empresa em TypeScript, React e Node.js, e mantive o pipeline de CI/CD e o fluxo de deploy rodando.',

    'exp.3.role': 'Estagiário de Desenvolvimento de Software',
    'exp.3.company': 'Plugways Digital',
    'exp.3.period': 'Jul 2023 — Jan 2024',
    'exp.3.b1': 'Construí o odinPedidos do zero como único desenvolvedor mobile — ERP B2B para gestão de pedidos, publicado na App Store e Google Play e atendendo 50+ clientes pagantes.',
    'exp.3.b2': 'Configurei as capabilities iOS, permissões e push notifications do app do zero, sem nenhuma configuração iOS prévia na empresa para partir.',
    'exp.3.b3': 'Construí interfaces web com Angular e serviços backend com PHP, Node.js e MySQL, e gerenciei os deploys cloud na AWS.',

    // Projects
    'proj.label': 'Projetos',
    'proj.title': 'O que eu construí',
    'proj.subtitle': 'Focado em lançar produtos reais e resolver problemas reais.',
    'proj.academic': 'Projetos acadêmicos',
    'proj.screenshot.alt': 'captura de tela do app',

    'proj.1.name': 'Rise of the Lich King',
    'proj.1.desc': 'Jogo iOS construído do zero — conceito, UI/UX, lógica de jogo, StoreKit 2 e submissão à App Store. 100 downloads na primeira semana. Domínio completo do ciclo de vida do produto.',
    'proj.1.stack': 'Swift, SwiftUI, SpriteKit, StoreKit 2',
    'proj.1.link.label': 'App Store',

    'proj.2.name': 'odinPedidos',
    'proj.2.desc': 'ERP B2B para gestão de pedidos. Único desenvolvedor mobile: arquitetura, todas as telas, fluxos CRUD, integração REST API e deploy em ambas as lojas. Atendendo 50+ clientes pagantes.',
    'proj.2.stack': 'React Native, Expo, TypeScript',
    'proj.2.link.label': 'App Store',

    'proj.3.name': 'Boraa',
    'proj.3.desc': 'App de check-in para eventos sociais construído em time de 5 na Apple Developer Academy. Responsável pelas rotas backend, deploy, integração MapKit e contribui para telas frontend.',
    'proj.3.stack': 'Swift, SwiftUI, MapKit, CloudKit',
    'proj.3.link.label': 'App Store',

    'proj.4.name': 'Bah Inovação',
    'proj.4.desc': 'Plataforma de inovação cívica conectando empreendedores, investidores e governo. Liderei o design UX/UI no Figma (~90% das telas), projetei o schema do banco de dados e construí endpoints da API backend.',
    'proj.4.stack': 'Figma, PostgreSQL, Node.js, REST API',
    'proj.4.link.label': 'Wiki',

    'proj.5.name': 'Ludo Pets',
    'proj.5.desc': 'Desenvolvedor core no time fundador de um projeto acadêmico multi-semestre (19 contribuidores). Liderei a adaptação iOS — único membro do time com Mac — configurando capabilities, permissões e push notifications para compatibilidade com a App Store.',
    'proj.5.stack': 'React Native, Node.js, REST API',
    'proj.5.link.label': 'Wiki',

    // Skills
    'skills.label': 'Skills',
    'skills.title': 'Stack técnica',
    'skills.subtitle': 'O que eu uso, e onde eu usei.',

    'skills.group.apple': 'Plataformas Apple',
    'skills.group.cross': 'Cross-platform & backend',

    'skills.ctx.swift': '3 apps publicados na App Store',
    'skills.ctx.swiftui': 'Rise of the Lich King, Boraa',
    'skills.ctx.uikit': 'myRates — Hackathon PUCRS, 3º lugar',
    'skills.ctx.storekit': 'Compras in-app rodando em produção',
    'skills.ctx.persistence': 'Persistência local nos projetos da Academy',
    'skills.ctx.mapkit': 'Localização e check-in no Boraa',

    'skills.ctx.reactnative': 'odinPedidos — 50+ clientes pagantes',
    'skills.ctx.typescript': 'Mobile e web, 2+ anos',
    'skills.ctx.node': 'Rotas backend do Boraa e Bah Inovação',
    'skills.ctx.react': 'Aplicações web fullstack na GPSET',
    'skills.ctx.sql': 'Modelagem de schema no Bah Inovação',
    'skills.ctx.aws': 'Deploys cloud na Plugways Digital',

    // Education
    'edu.label': 'Educação',
    'edu.1.degree': 'Bacharelado em Engenharia de Software',
    'edu.1.school': 'PUCRS',
    'edu.1.period': '2023 — 2027',
    'edu.2.degree': 'Apple Developer Academy',
    'edu.2.school': 'PUCRS',
    'edu.2.period': '2025',
    'edu.3.degree': 'Inglês — Upper Intermediate (B2)',
    'edu.3.school': 'Bayswater College, Londres',
    'edu.3.period': '2022',

    // Contact
    'contact.label': 'Contato',
    'contact.title': 'Vamos trabalhar juntos',
    'contact.desc': 'Estou aberto a oportunidades Júnior e Pleno como Desenvolvedor iOS, Mobile e Fullstack. Fique à vontade para entrar em contato!',
    'contact.cta': 'Enviar Email',
    'contact.remote': 'Aberto a Remoto',

    // Footer
    'footer.built': 'Feito com',
    'footer.by': 'por Anthony Antonelli Andrade',
  },
} as const;
