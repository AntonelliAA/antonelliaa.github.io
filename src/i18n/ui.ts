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
    'a11y.home': 'Anthony Antonelli, home',
    'a11y.nav': 'Main navigation',
    'a11y.menu.open': 'Open menu',
    'a11y.menu.close': 'Close menu',
    'a11y.language': 'Português',
    'a11y.placeholder': 'Placeholder for',
    'meta.og.alt': 'Anthony Antonelli portfolio',

    // Nav
    'nav.projects': 'Projects',
    'nav.ai': 'AI',
    'nav.backend': 'Backend',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.language': 'PT',

    // Hero
    'hero.title': "I design, build and ship iPhone apps.",
    'hero.description': "Palco, Rise of the Lich King, odinPedidos and Boraa are on the App Store. Both Freela onTap apps arrive in November. When a product needs a backend, I write that too.",
    'hero.cta.contact': 'Get in touch',
    'hero.cta.projects': 'See the apps',
    'hero.cta.cv': 'Download CV',
    'hero.agents': 'How I build with Claude Code and Codex',

    // Projects
    'proj.label': 'Projects',
    'proj.title': "Apps I built.",
    'proj.subtitle': "Four apps on the App Store, two more on pre-order.",
    'proj.academic': 'Other projects',
    'proj.store': 'View on the App Store',
    'proj.view': 'View project',

    'proj.1.lead': 'An iOS game, from first screen to App Store.',
    'proj.1.desc': "It reached 100 downloads in its first week. I worked on the interface, the game logic and the StoreKit 2 purchases, then submitted it to the App Store.",
    'proj.1.scene.a': 'Title screen',
    'proj.1.scene.b': 'Gameplay',

    'proj.2.name': 'odinPedidos',
    'proj.2.lead': 'Orders for sales reps in the field.',
    'proj.2.desc': "More than 50 paying clients use it today. I was the only mobile developer: I built the screens, integrated the REST API and released the app on both stores.",
    'proj.2.stack': 'React Native, Expo and TypeScript.',
    'proj.2.scene.a': 'Customers',
    'proj.2.scene.b': 'Customer details',

    'proj.3.lead': 'Practice a talk and see what to improve.',
    'proj.3.desc': "Record a rehearsal on your iPhone. Palco measures pace, pauses and filler words, and the audio never leaves the device. I built it alone.",
    'proj.3.stack': 'Swift 6, SwiftUI and on-device speech recognition.',
    'proj.3.scene.home': 'Home, with the focus for the next rehearsal',
    'proj.3.scene.history': 'History of rehearsals and progress',

    'proj.4.name': 'Bah Inovação',
    'proj.4.desc': "For this civic innovation platform, I designed about 90% of the interface in Figma, modeled the PostgreSQL schema and built REST endpoints.",

    'proj.5.name': 'Ludo Pets',
    'proj.5.desc': "Built by a team of 19. I led the iOS adaptation and configured capabilities, permissions and push notifications.",

    'proj.freela.name': 'Freela onTap',
    'proj.freela.lead': 'Two apps for the same shift.',
    'proj.freela.desc': 'Businesses post short hospitality shifts and professionals pick them up. I built both native apps on one shared SwiftUI codebase, including the distance search map, onboarding and notifications.',
    'proj.6.name': "Freela onTap: Empresas",
    'proj.6.desc': "The business app for posting shifts and following applications.",
    'proj.6.status': "Expected 16 November 2026",
    'proj.6.scene': 'Posting a shift',
    'proj.7.name': "Freela onTap: Vagas e Turnos",
    'proj.7.desc': "The app where hospitality professionals find shifts nearby, apply and track their applications.",
    'proj.7.status': "Expected 16 November 2026",
    'proj.7.scene': 'Nearby shifts',

    'proj.8.name': 'Boraa',
    'proj.8.desc': "Boraa helps people discover events with friends. In a team of five, I wrote backend routes, handled deployment and built screens with MapKit.",
    'proj.8.scene': 'App icon',

    // Backend
    'backend.label': 'Backend',
    'backend.title': 'What runs behind the screens.',
    'backend.intro': "Besides the apps, I write APIs, model databases and run deployments.",
    'backend.retro.name': 'Real-time voting',
    'backend.retro.desc': "A REST API and WebSockets in Vapor for voting on retrospective cards. Votes use atomic PostgreSQL operations, so none are lost when many people vote at once.",
    'backend.retro.where': 'Apple Developer Academy, 2025',
    'backend.caronas.name': 'Caronas',
    'backend.caronas.desc': "A ride counter on PostgreSQL. Access rules live in the database with row-level security: passengers mark absences from their own link, and only the driver can add charges. The monthly math has tests, and nothing deploys unless they pass.",
    'backend.caronas.where': 'Personal project, in daily use',
    'backend.gpset.name': 'Cost pipeline',
    'backend.gpset.desc': "A Python and Flask pipeline that joins SAP and equipment data into Power BI dashboards. Cost analysis went from a week to a day.",
    'backend.gpset.where': 'GPSET Engenharia, 2024',
    'backend.plugways.name': 'Services on AWS',
    'backend.plugways.desc': "PHP, Node.js and MySQL services for Plugways clients, one with more than 100 weekly users. Deployed on AWS with EC2, RDS, S3 and SQS, behind Nginx.",
    'backend.plugways.where': 'Plugways Digital, 2023',

    // Built with agents
    'ai.label': 'AI',
    'ai.claude.role': 'Follows the CLAUDE.md rules I write for each project.',
    'ai.codex.role': 'Follows the AGENTS.md rules, with the same build and tests.',
    'ai.projects': 'What we built together',
    'ai.title': 'Built with agents.',
    'ai.intro': "Claude Code and Codex work as part of the team. I write the spec and the rules for each project, the agents implement, and I review every change. Nothing ships until tests and the build pass.",
    'ai.code': 'Source code',
    'ai.palco.desc': "Rehearsals with feedback on pace and pauses.",
    'ai.palco.status': 'On the App Store',
    'ai.palco.link': 'See Palco',
    'proj.3.case': 'How the on-device AI works',
    'ai.caronas.desc': "Counts carpool rides from each person's weekly schedule and skips national holidays on its own.",
    'ai.caronas.status': 'In daily use',
    'ai.inshelf.desc': "The pantry at home, the shopping list, and recipes from what is in stock.",
    'ai.inshelf.status': 'In development',

    // About
    'about.label': "About",
    'about.title': "From the first screen to the App Store.",
    'about.facts': "Four apps on the App Store. Two on pre-order. More than 50 paying clients on odinPedidos.",
    'about.p1': "I work on iOS interfaces, app architecture and releases, and on the backend when the product needs one. I built Palco alone in Swift 6: it analyzes speech on the iPhone and keeps measured results apart from qualitative feedback.",
    'about.p2': "At the Apple Developer Academy | PUCRS, I released Rise of the Lich King and worked on Boraa with four other developers. My team placed third of ten at the PUCRS software engineering hackathon. I built both Freela onTap apps on one shared SwiftUI codebase.",
    'about.p3': "I use AI agents every day, with written rules for each project and a review of every change.",

    // Experience
    'exp.title': "Experience",

    'exp.1.role': 'iOS Developer',
    'exp.1.company': 'Apple Developer Academy | PUCRS',
    'exp.1.period': 'Feb 2025 – present',
    'exp.1.b1': "I designed and developed Rise of the Lich King through its App Store release. The game reached 100 downloads in its first week.",
    'exp.1.b2': "On Boraa, I worked with four other developers. I built backend routes, handled deployment, integrated MapKit and implemented screens.",
    'exp.1.b3': "My team placed third of ten at the PUCRS Software Engineering Hackathon with myRates. We were the first team there to use native iOS and delivered the app through TestFlight during the event.",

    'exp.2.role': "Software Engineer",
    'exp.2.company': 'GPSET Engenharia',
    'exp.2.period': 'Jan 2024 – Feb 2025',
    'exp.2.b1': "I built a Python pipeline that connected SAP and equipment data to Power BI. It cut cost analysis from a week to a day.",
    'exp.2.b2': "I built and maintained React and Node.js apps that more than 25 people used to plan their work.",

    'exp.3.role': "Mobile & Backend Developer",
    'exp.3.company': 'Plugways Digital',
    'exp.3.period': 'Jan 2023 – Jan 2024',
    'exp.3.b1': "I was the sole mobile developer on odinPedidos. The order management app is on the App Store and Google Play and serves 50+ paying clients.",
    'exp.3.b2': "I built its screens and REST integration, set up iOS capabilities and push notifications, and handled both store submissions.",
    'exp.3.b3': 'I also built Angular web interfaces and backend services using PHP, Node.js and MySQL, and managed deployments on AWS.',

    // Skills
    'skills.title': "Skills",
    'skills.subtitle': "Where I used each one.",
    'skills.group.apple': 'Apple platforms',
    'skills.group.cross': 'Backend, web and cross-platform',

    'skills.ctx.swift': "Swift 6 in Palco and both Freela onTap apps",
    'skills.ctx.swiftui': "Interfaces in Palco, Rise and both Freela apps",
    'skills.ctx.uikit': 'myRates (PUCRS Hackathon, 3rd place)',
    'skills.ctx.storekit': "In-app purchases in Rise of the Lich King",
    'skills.ctx.persistence': "Local persistence in Academy projects",
    'skills.ctx.mapkit': "Boraa event map and Freela shift map",

    'skills.ctx.vapor': 'Real-time voting with WebSockets',
    'skills.ctx.node': "Boraa backend and Plugways services",
    'skills.ctx.sql': 'Schemas for Bah Inovação and Caronas',
    'skills.ctx.python': 'SAP to Power BI pipeline at GPSET',
    'skills.ctx.aws': 'EC2, RDS, S3 and SQS at Plugways Digital',
    'skills.ctx.reactnative': 'odinPedidos, 50+ paying clients',
    'skills.ctx.react': 'Fullstack web apps at GPSET',

    // Education
    'edu.label': 'Education',
    'edu.1.degree': 'B.Sc. Software Engineering',
    'edu.1.school': 'PUCRS',
    'edu.1.period': "2024 – 2028",
    'edu.2.degree': 'Apple Developer Academy',
    'edu.2.school': 'PUCRS',
    'edu.2.period': "2025 – 2027",
    'edu.3.degree': "English, B2",
    'edu.3.school': 'Bayswater College, London',
    'edu.3.period': '2022',

    // Contact
    'contact.label': 'Contact',
    'contact.title': "Let's talk.",
    'contact.desc': "I am looking for iOS, mobile and AI engineering roles, remotely or in Porto Alegre.",
    'cv.label': 'Your email',
    'cv.submit': 'Download',
    'cv.note': 'I keep the address only to know who downloaded the CV. No newsletter.',
    'cv.sending': 'Checking the address…',
    'cv.done': 'The download has started.',
    'cv.error.invalid': 'That does not look like an email address.',
    'cv.error.domain': 'That domain does not receive email. Check for a typo.',
    'cv.error.disposable': 'Please use an address that is not a temporary inbox.',
    'cv.error.server': 'Something went wrong on my side. Try again, or ask me by email.',

    // Footer
    'footer.made': 'Made in Porto Alegre, Brazil',
  },

  'pt-br': {
    // Accessibility
    'a11y.skip': 'Pular para o conteúdo',
    'a11y.home': 'Anthony Antonelli, início',
    'a11y.nav': 'Navegação principal',
    'a11y.menu.open': 'Abrir menu',
    'a11y.menu.close': 'Fechar menu',
    'a11y.language': 'English',
    'a11y.placeholder': 'Espaço reservado para',
    'meta.og.alt': 'Portfólio de Anthony Antonelli',

    // Nav
    'nav.projects': 'Projetos',
    'nav.ai': 'IA',
    'nav.backend': 'Backend',
    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.contact': 'Contato',
    'nav.language': 'EN',

    // Hero
    'hero.title': "Desenho, desenvolvo e publico apps para iPhone.",
    'hero.description': "Palco, Rise of the Lich King, odinPedidos e Boraa estão na App Store. Os dois apps Freela onTap chegam em novembro. Quando o produto precisa de backend, eu escrevo também.",
    'hero.cta.contact': 'Entrar em contato',
    'hero.cta.projects': 'Ver os apps',
    'hero.cta.cv': "Baixar currículo",
    'hero.agents': 'Como construo com o Claude Code e o Codex',

    // Projects
    'proj.label': 'Projetos',
    'proj.title': "Apps que construí.",
    'proj.subtitle': "Quatro apps na App Store e mais dois em pré-venda.",
    'proj.academic': 'Outros projetos',
    'proj.store': 'Ver na App Store',
    'proj.view': 'Ver projeto',

    'proj.1.lead': 'Um jogo iOS, da primeira tela à App Store.',
    'proj.1.desc': "Foram 100 downloads na primeira semana. Cuidei da interface, da lógica do jogo e das compras com StoreKit 2, e enviei o jogo à App Store.",
    'proj.1.scene.a': 'Tela inicial',
    'proj.1.scene.b': 'Cena do jogo',

    'proj.2.name': 'odinPedidos',
    'proj.2.lead': 'Pedidos para representantes em campo.',
    'proj.2.desc': "Mais de 50 clientes pagantes usam o app hoje. Fui o único dev mobile: fiz as telas, integrei a API REST e publiquei o app nas duas lojas.",
    'proj.2.stack': 'React Native, Expo e TypeScript.',
    'proj.2.scene.a': 'Lista de clientes',
    'proj.2.scene.b': 'Detalhes do cliente',

    'proj.3.lead': 'Treine uma apresentação e veja onde melhorar.',
    'proj.3.desc': "Grave o ensaio no iPhone. O Palco mede ritmo, pausas e vícios de linguagem, e o áudio nunca sai do aparelho. Construí o app sozinho.",
    'proj.3.stack': 'Swift 6, SwiftUI e reconhecimento de fala no próprio aparelho.',
    'proj.3.scene.home': 'Início, com o foco do próximo ensaio',
    'proj.3.scene.history': 'Histórico de ensaios e evolução',

    'proj.4.name': 'Bah Inovação',
    'proj.4.desc': "Nessa plataforma de inovação cívica, desenhei cerca de 90% da interface no Figma, modelei o schema PostgreSQL e construí endpoints REST.",

    'proj.5.name': 'Ludo Pets',
    'proj.5.desc': "Feito por 19 colaboradores. Liderei a adaptação para iOS e configurei capabilities, permissões e notificações push.",

    'proj.freela.name': 'Freela onTap',
    'proj.freela.lead': 'Dois apps para um mesmo turno.',
    'proj.freela.desc': 'Empresas publicam turnos avulsos de hospitalidade e profissionais pegam esses turnos. Fiz os dois apps nativos em uma base SwiftUI compartilhada, com mapa e busca por distância, onboarding e notificações.',
    'proj.6.name': "Freela onTap: Empresas",
    'proj.6.desc': "O app em que empresas publicam turnos e acompanham candidaturas.",
    'proj.6.status': "Previsão: 16 de novembro de 2026",
    'proj.6.scene': 'Publicação de vaga',
    'proj.7.name': "Freela onTap: Vagas e Turnos",
    'proj.7.desc': "O app em que profissionais de hospitalidade encontram turnos perto deles, se candidatam e acompanham as candidaturas.",
    'proj.7.status': "Previsão: 16 de novembro de 2026",
    'proj.7.scene': 'Vagas próximas',

    'proj.8.name': 'Boraa',
    'proj.8.desc': "O Boraa ajuda a descobrir eventos com amigos. Num time de cinco, escrevi rotas de backend, cuidei do deploy e fiz telas com MapKit.",
    'proj.8.scene': 'Ícone do app',

    // Backend
    'backend.label': 'Backend',
    'backend.title': 'O que roda por trás das telas.',
    'backend.intro': "Além dos apps, escrevo APIs, modelo bancos de dados e cuido do deploy.",
    'backend.retro.name': 'Votação em tempo real',
    'backend.retro.desc': "API REST e WebSockets em Vapor para votar cards de retrospectiva. Os votos usam operações atômicas no PostgreSQL, então nenhum se perde quando muita gente vota ao mesmo tempo.",
    'backend.retro.where': 'Apple Developer Academy, 2025',
    'backend.caronas.name': 'Caronas',
    'backend.caronas.desc': "Contador de caronas sobre PostgreSQL. As regras de acesso ficam no banco, com row-level security: o passageiro marca falta pelo próprio link e só o motorista lança cobranças. O cálculo do mês tem testes, e nada vai ao ar se eles não passarem.",
    'backend.caronas.where': 'Projeto pessoal, em uso todo dia',
    'backend.gpset.name': 'Pipeline de custos',
    'backend.gpset.desc': "Pipeline em Python e Flask que junta dados do SAP e dos equipamentos em dashboards no Power BI. A análise de custos caiu de uma semana para um dia.",
    'backend.gpset.where': 'GPSET Engenharia, 2024',
    'backend.plugways.name': 'Serviços na AWS',
    'backend.plugways.desc': "Serviços em PHP, Node.js e MySQL para clientes da Plugways, um deles com mais de 100 usuários por semana. Deploy na AWS com EC2, RDS, S3 e SQS, atrás de Nginx.",
    'backend.plugways.where': 'Plugways Digital, 2023',

    // Built with agents
    'ai.label': 'IA',
    'ai.claude.role': 'Segue as regras do CLAUDE.md que escrevo para cada projeto.',
    'ai.codex.role': 'Segue as regras do AGENTS.md, com o mesmo build e os mesmos testes.',
    'ai.projects': 'O que construímos juntos',
    'ai.title': 'Feitos com agentes.',
    'ai.intro': "O Claude Code e o Codex trabalham como parte do time. Eu escrevo a especificação e as regras de cada projeto, os agentes implementam, e reviso cada mudança. Nada vai ao ar antes de testes e build passarem.",
    'ai.code': 'Código-fonte',
    'ai.palco.desc': "Ensaios com retorno sobre ritmo e pausas.",
    'ai.palco.status': 'Na App Store',
    'ai.palco.link': 'Ver o Palco',
    'proj.3.case': 'Como funciona a IA no aparelho',
    'ai.caronas.desc': "Conta as caronas pela agenda semanal de cada pessoa e pula os feriados nacionais sozinho.",
    'ai.caronas.status': 'Em uso todo dia',
    'ai.inshelf.desc': "A despensa de casa, a lista de compras e receitas com o que tem em estoque.",
    'ai.inshelf.status': 'Em desenvolvimento',

    // About
    'about.label': "Sobre",
    'about.title': "Da primeira tela à App Store.",
    'about.facts': "Quatro apps na App Store. Dois em pré-venda. Mais de 50 clientes pagantes no odinPedidos.",
    'about.p1': "Trabalho com interfaces iOS, arquitetura de apps e publicação, e com o backend quando o produto precisa. Fiz o Palco sozinho em Swift 6: ele analisa a fala no próprio iPhone e mantém os resultados medidos separados do feedback qualitativo.",
    'about.p2': "Na Apple Developer Academy | PUCRS, publiquei Rise of the Lich King e trabalhei no Boraa com outras quatro pessoas. Meu time ficou em terceiro entre dez no hackathon de engenharia de software da PUCRS. Fiz os dois apps Freela onTap em uma base SwiftUI compartilhada.",
    'about.p3': "Uso agentes de IA todos os dias, com regras escritas para cada projeto e revisão de cada mudança.",

    // Experience
    'exp.title': "Experiência",

    'exp.1.role': 'Desenvolvedor iOS',
    'exp.1.company': 'Apple Developer Academy | PUCRS',
    'exp.1.period': 'Fev 2025 – atual',
    'exp.1.b1': "Desenhei e desenvolvi Rise of the Lich King até a publicação na App Store. O jogo teve 100 downloads na primeira semana.",
    'exp.1.b2': "No Boraa, trabalhei com outras quatro pessoas. Criei rotas no backend, cuidei do deploy, integrei MapKit e implementei telas.",
    'exp.1.b3': "Com o myRates, meu time ficou em terceiro entre dez no Hackathon de Engenharia de Software da PUCRS. Fomos a primeira equipe do evento a usar iOS nativo e entregamos o app pelo TestFlight durante a maratona.",

    'exp.2.role': "Engenheiro de Software",
    'exp.2.company': 'GPSET Engenharia',
    'exp.2.period': 'Jan 2024 – Fev 2025',
    'exp.2.b1': "Criei um pipeline em Python que levava dados do SAP e dos equipamentos ao Power BI. A análise de custos caiu de uma semana para um dia.",
    'exp.2.b2': "Desenvolvi e mantive aplicações em React e Node.js usadas por mais de 25 pessoas no planejamento do trabalho.",

    'exp.3.role': "Desenvolvedor Mobile e Backend",
    'exp.3.company': 'Plugways Digital',
    'exp.3.period': 'Jan 2023 – Jan 2024',
    'exp.3.b1': "Fui o único desenvolvedor mobile do odinPedidos. O app está na App Store e no Google Play e atende mais de 50 clientes pagantes.",
    'exp.3.b2': "Implementei as telas e a integração REST, configurei capabilities e notificações push no iOS e cuidei das duas submissões às lojas.",
    'exp.3.b3': 'Também desenvolvi interfaces web em Angular e serviços de backend com PHP, Node.js e MySQL, além de cuidar dos deploys na AWS.',

    // Skills
    'skills.title': "Tecnologias",
    'skills.subtitle': "Onde usei cada uma.",
    'skills.group.apple': 'Plataformas Apple',
    'skills.group.cross': 'Backend, web e cross-platform',

    'skills.ctx.swift': "Swift 6 no Palco e nos dois apps Freela onTap",
    'skills.ctx.swiftui': "Interfaces do Palco, Rise e dos dois apps Freela",
    'skills.ctx.uikit': 'myRates (Hackathon PUCRS, 3º lugar)',
    'skills.ctx.storekit': "Compras no Rise of the Lich King",
    'skills.ctx.persistence': "Persistência local em projetos da Academy",
    'skills.ctx.mapkit': "Mapa de eventos do Boraa e mapa de vagas do Freela",

    'skills.ctx.vapor': 'Votação em tempo real com WebSockets',
    'skills.ctx.node': "Backend do Boraa e serviços da Plugways",
    'skills.ctx.sql': 'Schemas do Bah Inovação e do Caronas',
    'skills.ctx.python': 'Pipeline do SAP ao Power BI na GPSET',
    'skills.ctx.aws': 'EC2, RDS, S3 e SQS na Plugways Digital',
    'skills.ctx.reactnative': 'odinPedidos, 50+ clientes pagantes',
    'skills.ctx.react': 'Aplicações web fullstack na GPSET',

    // Education
    'edu.label': 'Formação',
    'edu.1.degree': 'Bacharelado em Engenharia de Software',
    'edu.1.school': 'PUCRS',
    'edu.1.period': "2024 – 2028",
    'edu.2.degree': 'Apple Developer Academy',
    'edu.2.school': 'PUCRS',
    'edu.2.period': "2025 – 2027",
    'edu.3.degree': "Inglês, B2",
    'edu.3.school': 'Bayswater College, Londres',
    'edu.3.period': '2022',

    // Contact
    'contact.label': 'Contato',
    'contact.title': "Vamos conversar.",
    'contact.desc': "Busco vagas em engenharia iOS, mobile e de IA, remotas ou em Porto Alegre.",
    'cv.label': 'Seu e-mail',
    'cv.submit': 'Baixar',
    'cv.note': 'Guardo o endereço só para saber quem baixou o currículo. Sem newsletter.',
    'cv.sending': 'Conferindo o endereço…',
    'cv.done': 'O download começou.',
    'cv.error.invalid': 'Isso não parece um endereço de e-mail.',
    'cv.error.domain': 'Esse domínio não recebe e-mail. Veja se há erro de digitação.',
    'cv.error.disposable': 'Use um endereço que não seja de caixa temporária.',
    'cv.error.server': 'Algo deu errado do meu lado. Tente de novo, ou me peça por e-mail.',

    // Footer
    'footer.made': 'Feito em Porto Alegre, Brasil',
  },
} as const;
