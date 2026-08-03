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
    'header.theme': 'Toggle light and dark theme',

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
    'hero.description': 'I build native iOS apps with Swift and SwiftUI. Three of them are live on the App Store and Google Play. I have been doing mobile and fullstack work for over two years, and took third place at the PUCRS hackathon.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.cv': 'Download CV',
    'hero.location': 'Porto Alegre, Brazil',

    // About
    'about.label': 'About Me',
    'about.title': 'Building software that ships',
    'about.p1': "I'm a Software Engineer and iOS Developer in Porto Alegre, Brazil. Most of my work is native iOS with Swift, SwiftUI and UIKit. I've also built with React Native and Expo, and on the web with TypeScript, React, Node.js and AWS.",
    'about.p2': "I'm studying Software Engineering at PUCRS, graduating in 2027, and developing at the Apple Developer Academy | PUCRS. Three of my products reached production before I finished the degree.",
    'about.highlight.appstore': '3 live products',
    'about.highlight.appstore.desc': 'Rise of the Lich King, Boraa and odinPedidos, all in production.',
    'about.highlight.hackathon': 'Hackathon podium',
    'about.highlight.hackathon.desc': '3rd of 10 teams at the PUCRS Hackathon, and the first there to use native iOS.',
    'about.highlight.experience': '2+ years experience',
    'about.highlight.experience.desc': 'iOS, React Native, web, and enterprise systems.',
    'about.highlight.international': 'International',
    'about.highlight.international.desc': 'Studied at Bayswater College in London. English at upper intermediate (B2).',

    // Experience
    'exp.label': 'Experience',
    'exp.title': 'Where I\'ve worked',

    'exp.1.role': 'iOS Developer',
    'exp.1.company': 'Apple Developer Academy | PUCRS',
    'exp.1.period': 'Feb 2025 — Present',
    'exp.1.b1': 'Shipped 2 apps to the App Store: Rise of the Lich King (iOS game, 100 downloads in its first week) and Boraa (social event check-in app, team of 5).',
    'exp.1.b2': 'Took both apps through the full release path: Core Data and SwiftData persistence, StoreKit 2 in-app purchases, MapKit location features, TestFlight builds and App Store review.',
    'exp.1.b3': 'Placed 3rd of 10 teams at the PUCRS Hackathon with myRates, the first team in the event\'s history to use native iOS (Swift/UIKit + Go), shipped to TestFlight before judging.',

    'exp.2.role': 'Software Engineering Intern',
    'exp.2.company': 'GPSET Engenharia',
    'exp.2.period': 'Jan 2024 — Feb 2025',
    'exp.2.b1': 'Built a Power BI dashboard integrating elevator equipment data via Python pipelines and SAP systems, cutting cost analysis from weeks to a single day.',
    'exp.2.b2': 'Developed and maintained the company\'s fullstack web applications in TypeScript, React and Node.js, and kept the CI/CD pipeline and deploy workflow running.',

    'exp.3.role': 'Software Development Intern',
    'exp.3.company': 'Plugways Digital',
    'exp.3.period': 'Jul 2023 — Jan 2024',
    'exp.3.b1': 'Built odinPedidos end to end as the only mobile developer. It is a B2B ERP for sales rep order management, live on the App Store and Google Play, serving 50+ paying clients.',
    'exp.3.b2': 'Set up the app\'s iOS capabilities, permissions and push notifications from scratch, with no prior iOS setup in the company to build on.',
    'exp.3.b3': 'Built web interfaces with Angular and backend services with PHP, Node.js and MySQL, and managed the cloud deployments on AWS.',

    // Projects
    'proj.label': 'Projects',
    'proj.title': 'Things I\'ve built',
    'proj.subtitle': 'What shipped, and what I did on each one.',
    'proj.academic': 'Academic projects',
    'proj.screenshot.alt': 'app screenshot',

    'proj.1.name': 'Rise of the Lich King',
    'proj.1.desc': 'iOS game I took from concept to the App Store: UI/UX, game logic, StoreKit 2 and the submission itself. 100 downloads in the first week.',
    'proj.1.stack': 'Swift, SwiftUI, SpriteKit, StoreKit 2',
    'proj.1.link.label': 'App Store',

    'proj.2.name': 'odinPedidos',
    'proj.2.desc': 'B2B ERP for sales rep order management. I was the only mobile developer on it: architecture, every screen, the CRUD flows, REST API integration and both store deployments. 50+ paying clients.',
    'proj.2.stack': 'React Native, Expo, TypeScript',
    'proj.2.link.label': 'App Store',

    'proj.3.name': 'Boraa',
    'proj.3.desc': 'Social event check-in app, built by a team of 5 at the Apple Developer Academy. I handled the backend routes, the deployment and the MapKit integration, and worked on frontend screens.',
    'proj.3.stack': 'Swift, SwiftUI, MapKit, CloudKit',
    'proj.3.link.label': 'App Store',

    'proj.4.name': 'Bah Inovação',
    'proj.4.desc': 'Civic innovation platform connecting entrepreneurs, investors and government. I led the UX/UI design in Figma, about 90% of the screens, designed the database schema and built backend API endpoints.',
    'proj.4.stack': 'Figma, PostgreSQL, Node.js, REST API',
    'proj.4.link.label': 'Wiki',

    'proj.5.name': 'Ludo Pets',
    'proj.5.desc': 'Core developer on the founding team of a multi-semester academic project with 19 contributors. I led the iOS adaptation, being the only one on the team with a Mac, and set up capabilities, permissions and push notifications so it could go to the App Store.',
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
    'skills.ctx.uikit': 'myRates (PUCRS Hackathon, 3rd place)',
    'skills.ctx.storekit': 'In-app purchases running in production',
    'skills.ctx.persistence': 'Local persistence across Academy projects',
    'skills.ctx.mapkit': 'Location and check-in features in Boraa',

    'skills.ctx.reactnative': 'odinPedidos, 50+ paying clients',
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
    'contact.desc': "I'm open to Junior and Mid-Level roles in iOS, mobile and fullstack.",
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
    'header.theme': 'Alternar tema claro e escuro',

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
    'hero.description': 'Construo apps iOS nativos com Swift e SwiftUI. Três deles estão publicados na App Store e no Google Play. Trabalho com mobile e fullstack há mais de dois anos, e fiquei em terceiro lugar no hackathon da PUCRS.',
    'hero.cta.projects': 'Ver Projetos',
    'hero.cta.cv': 'Download CV',
    'hero.location': 'Porto Alegre, Brasil',

    // About
    'about.label': 'Sobre Mim',
    'about.title': 'Construindo software que chega em produção',
    'about.p1': 'Sou Engenheiro de Software e Desenvolvedor iOS em Porto Alegre. A maior parte do meu trabalho é iOS nativo com Swift, SwiftUI e UIKit. Também construí com React Native e Expo, e na web com TypeScript, React, Node.js e AWS.',
    'about.p2': 'Curso Engenharia de Software na PUCRS, com formatura em 2027, e desenvolvo na Apple Developer Academy | PUCRS. Três dos meus produtos chegaram a produção antes de eu terminar a graduação.',
    'about.highlight.appstore': '3 produtos em produção',
    'about.highlight.appstore.desc': 'Rise of the Lich King, Boraa e odinPedidos, todos em produção.',
    'about.highlight.hackathon': 'Pódio em hackathon',
    'about.highlight.hackathon.desc': '3º lugar entre 10 times no Hackathon da PUCRS, e o primeiro de lá a usar iOS nativo.',
    'about.highlight.experience': '2+ anos de experiência',
    'about.highlight.experience.desc': 'iOS, React Native, web e sistemas empresariais.',
    'about.highlight.international': 'Internacional',
    'about.highlight.international.desc': 'Estudei na Bayswater College, em Londres. Inglês upper intermediate (B2).',

    // Experience
    'exp.label': 'Experiência',
    'exp.title': 'Onde trabalhei',

    'exp.1.role': 'Desenvolvedor iOS',
    'exp.1.company': 'Apple Developer Academy | PUCRS',
    'exp.1.period': 'Fev 2025 — Presente',
    'exp.1.b1': 'Publiquei 2 apps na App Store: Rise of the Lich King (jogo iOS, 100 downloads na primeira semana) e Boraa (app de check-in social, time de 5).',
    'exp.1.b2': 'Levei os dois apps pelo caminho completo de release: persistência com Core Data e SwiftData, compras in-app com StoreKit 2, localização com MapKit, builds no TestFlight e revisão da App Store.',
    'exp.1.b3': '3º lugar entre 10 times no Hackathon da PUCRS com myRates, o primeiro time na história do evento a usar iOS nativo (Swift/UIKit + Go), entregue no TestFlight antes do julgamento.',

    'exp.2.role': 'Estagiário de Engenharia de Software',
    'exp.2.company': 'GPSET Engenharia',
    'exp.2.period': 'Jan 2024 — Fev 2025',
    'exp.2.b1': 'Construí um dashboard Power BI integrando dados de equipamentos via pipelines Python e SAP, reduzindo a análise de custos de semanas para um único dia.',
    'exp.2.b2': 'Desenvolvi e mantive as aplicações web fullstack da empresa em TypeScript, React e Node.js, e mantive o pipeline de CI/CD e o fluxo de deploy rodando.',

    'exp.3.role': 'Estagiário de Desenvolvimento de Software',
    'exp.3.company': 'Plugways Digital',
    'exp.3.period': 'Jul 2023 — Jan 2024',
    'exp.3.b1': 'Construí o odinPedidos do início ao fim como único desenvolvedor mobile. É um ERP B2B para gestão de pedidos, publicado na App Store e no Google Play, atendendo 50+ clientes pagantes.',
    'exp.3.b2': 'Configurei as capabilities iOS, permissões e push notifications do app do zero, sem nenhuma configuração iOS prévia na empresa para partir.',
    'exp.3.b3': 'Construí interfaces web com Angular e serviços backend com PHP, Node.js e MySQL, e gerenciei os deploys cloud na AWS.',

    // Projects
    'proj.label': 'Projetos',
    'proj.title': 'O que eu construí',
    'proj.subtitle': 'O que foi publicado, e o que eu fiz em cada um.',
    'proj.academic': 'Projetos acadêmicos',
    'proj.screenshot.alt': 'captura de tela do app',

    'proj.1.name': 'Rise of the Lich King',
    'proj.1.desc': 'Jogo iOS que levei do conceito até a App Store: UI/UX, lógica de jogo, StoreKit 2 e a submissão. 100 downloads na primeira semana.',
    'proj.1.stack': 'Swift, SwiftUI, SpriteKit, StoreKit 2',
    'proj.1.link.label': 'App Store',

    'proj.2.name': 'odinPedidos',
    'proj.2.desc': 'ERP B2B para gestão de pedidos. Fui o único desenvolvedor mobile nele: arquitetura, todas as telas, os fluxos CRUD, integração com a REST API e o deploy nas duas lojas. 50+ clientes pagantes.',
    'proj.2.stack': 'React Native, Expo, TypeScript',
    'proj.2.link.label': 'App Store',

    'proj.3.name': 'Boraa',
    'proj.3.desc': 'App de check-in para eventos sociais, feito por um time de 5 na Apple Developer Academy. Cuidei das rotas backend, do deploy e da integração com MapKit, e trabalhei em telas do frontend.',
    'proj.3.stack': 'Swift, SwiftUI, MapKit, CloudKit',
    'proj.3.link.label': 'App Store',

    'proj.4.name': 'Bah Inovação',
    'proj.4.desc': 'Plataforma de inovação cívica conectando empreendedores, investidores e governo. Liderei o design UX/UI no Figma, cerca de 90% das telas, projetei o schema do banco e construí endpoints da API.',
    'proj.4.stack': 'Figma, PostgreSQL, Node.js, REST API',
    'proj.4.link.label': 'Wiki',

    'proj.5.name': 'Ludo Pets',
    'proj.5.desc': 'Desenvolvedor core no time fundador de um projeto acadêmico multi-semestre com 19 contribuidores. Liderei a adaptação para iOS, por ser o único do time com Mac, e configurei capabilities, permissões e push notifications para o app poder ir à App Store.',
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
    'skills.ctx.uikit': 'myRates (Hackathon PUCRS, 3º lugar)',
    'skills.ctx.storekit': 'Compras in-app rodando em produção',
    'skills.ctx.persistence': 'Persistência local nos projetos da Academy',
    'skills.ctx.mapkit': 'Localização e check-in no Boraa',

    'skills.ctx.reactnative': 'odinPedidos, 50+ clientes pagantes',
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
    'contact.desc': 'Estou aberto a vagas Júnior e Pleno em iOS, mobile e fullstack.',
    'contact.cta': 'Enviar Email',
    'contact.remote': 'Aberto a Remoto',

    // Footer
    'footer.built': 'Feito com',
    'footer.by': 'por Anthony Antonelli Andrade',
  },
} as const;
