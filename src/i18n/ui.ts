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
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.language': 'PT',

    // Hero
    'hero.eyebrow': 'iOS DEVELOPER · PORTO ALEGRE',
    'hero.title': "I design, build and ship iPhone apps.",
    'hero.description': "Palco, Rise of the Lich King, odinPedidos and Boraa are on the App Store. I also developed both Freela onTap apps, expected in November.",
    'hero.cta.projects': "See the apps",
    'hero.cta.cv': 'Download CV',
    'hero.caption': 'Independent app on the App Store',

    // About
    'about.label': "About",
    'about.title': "From the first screen to the App Store.",
    'about.p1': "I work on iOS interfaces, app architecture and release. I built Palco on my own in Swift 6. It analyzes speech on the iPhone and keeps measured results separate from qualitative feedback.",
    'about.p2': "At the Apple Developer Academy | PUCRS, I released Rise of the Lich King and worked on Boraa with four other developers. My team placed third of ten at a PUCRS software engineering hackathon. I developed both Freela onTap apps in one shared SwiftUI codebase.",
    'about.p3': "I use AI in my daily work to build workflows: I set up routines, connect tools through MCP and coordinate subagents. I review the results myself.",
    'about.highlight.appstore': "Released apps",
    'about.highlight.appstore.desc': "Palco, Rise of the Lich King, odinPedidos and Boraa.",
    'about.highlight.preorder': 'Apps available to pre-order',
    'about.highlight.preorder.desc': 'Freela onTap for businesses and workers, expected in November.',
    'about.highlight.clients': 'Paying clients',
    'about.highlight.clients.desc': 'Using odinPedidos.',

    // Experience
    'exp.label': 'Experience',
    'exp.title': "Where I have worked",

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

    // Projects
    'proj.label': 'Projects',
    'proj.title': "Apps I built.",
    'proj.subtitle': "Four apps on the App Store. Both Freela onTap apps are expected in November.",
    'proj.academic': 'Other projects',
    'proj.store': 'View on the App Store',
    'proj.view': 'View project',

    'proj.1.kind': 'Mobile game',
    'proj.1.lead': 'An iOS game built through its App Store release.',
    'proj.1.desc': "I worked on the interface, game logic and StoreKit 2 integration, then submitted Rise to the App Store. It reached 100 downloads in its first week.",
    'proj.1.scene.a': 'Title screen',
    'proj.1.scene.b': 'Gameplay',

    'proj.2.kind': 'Business product',
    'proj.2.name': 'odinPedidos',
    'proj.2.lead': 'Order management for sales reps in the field.',
    'proj.2.desc': "odinPedidos helps sales representatives manage orders. I was its sole mobile developer: I built the screens, integrated the REST API and released it on both stores. It serves 50+ paying clients.",
    'proj.2.stack': 'React Native, Expo, TypeScript',
    'proj.2.scene.a': 'Customers',
    'proj.2.scene.b': 'Customer details',

    'proj.3.kind': 'Independent project',
    'proj.3.lead': 'Practice a talk and see what to improve.',
    'proj.3.desc': "I built Palco alone in Swift 6 so people can rehearse their speech in private. Audio and transcription stay on the iPhone; measured speaking metrics give context to the qualitative feedback.",
    'proj.3.ai.label': "How I built it",
    'proj.3.ai.desc': "I built Palco from specifications (spec-driven development) with help from Codex, Claude, skills and MCPs. I made the decisions and reviewed the results throughout the process (HITL).",
    'proj.3.stack': "Swift 6, SwiftUI, on-device speech recognition",
    'proj.3.scene.recording': 'Recording a rehearsal',
    'proj.3.scene.analysis': 'Speech analysis',
    'proj.3.scene.transcript': 'Transcript with filler words',

    'proj.4.name': 'Bah Inovação',
    'proj.4.desc': "For this civic innovation platform, I designed about 90% of the interface in Figma, modeled the PostgreSQL schema and built REST endpoints.",

    'proj.5.name': 'Ludo Pets',
    'proj.5.desc': "Ludo Pets was built by a team of 19. I led the iOS adaptation and configured capabilities, permissions and push notifications.",

    'proj.freela.kind': 'Two apps, one service',
    'proj.freela.lead': 'Two apps for the same shift.',
    'proj.freela.desc': 'I developed both native apps on a shared SwiftUI foundation. My work included maps with distance search, onboarding, and notifications.',
    'proj.6.name': "Freela onTap: Empresas",
    'proj.6.desc': "I developed the business app for posting short hospitality shifts and tracking applications. It shares a SwiftUI codebase with the worker app.",
    'proj.6.status': "Expected 16 November 2026",
    'proj.6.link.label': "View App Store listing",
    'proj.6.scene': 'Posting a shift',
    'proj.7.name': "Freela onTap: Vagas e Turnos",
    'proj.7.desc': "I developed the companion app so hospitality professionals can find shifts, apply and track their applications.",
    'proj.7.status': "Expected 16 November 2026",
    'proj.7.link.label': "View App Store listing",
    'proj.7.scene': 'Nearby shifts',

    'proj.8.name': 'Boraa',
    'proj.8.desc': "Boraa helps people discover events with friends. I worked with four other developers on backend routes, deployment, MapKit integration and screens.",
    'proj.8.link.label': 'App Store',
    'proj.8.scene': 'App icon',

    // Built with agents
    'ai.label': 'Built with Claude and Codex',
    'ai.title': "Personal projects, built with agents.",
    'ai.intro': "I write the spec and the project rules, Claude Code and Codex implement, and I review every change before it ships. Tests and the build have to pass first.",
    'ai.marks': 'Tools',
    'ai.code': 'Source code',
    'ai.palco.kind': 'iOS · App Store',
    'ai.palco.desc': "Rehearse a presentation and get feedback on pace, filler words and pauses.",
    'ai.palco.link': 'See Palco',
    'ai.caronas.kind': 'Web · In daily use',
    'ai.caronas.desc': "Counts carpool rides from each person's weekly schedule. Only absences are marked, and Brazilian holidays are skipped on their own.",
    'ai.inshelf.kind': 'iOS · In development',
    'ai.inshelf.desc': "Keeps track of the pantry at home, builds the shopping list and turns what is in stock into recipes.",

    // Skills
    'skills.label': 'Skills',
    'skills.title': "What I use at work",
    'skills.subtitle': "SwiftUI in Palco and Freela onTap. React Native in odinPedidos.",
    'skills.ai.label': "AI in my workflow",
    'skills.ai.desc': "For Palco, I used specifications, Codex, Claude, skills and MCPs, and reviewed the decisions and results myself (HITL). I also build routines with task-specific workers and subagents, then orchestrate their tasks.",

    'skills.group.apple': 'Apple platforms',
    'skills.group.cross': 'Cross-platform & backend',

    'skills.ctx.swift': "Swift 6 in Palco and both Freela onTap apps",
    'skills.ctx.swiftui': "Interfaces in Palco, Rise and both Freela apps",
    'skills.ctx.uikit': 'myRates (PUCRS Hackathon, 3rd place)',
    'skills.ctx.storekit': "In-app purchases in Rise of the Lich King",
    'skills.ctx.persistence': "Local persistence in Academy projects",
    'skills.ctx.mapkit': "Boraa event map and Freela shift map",

    'skills.ctx.reactnative': 'odinPedidos, 50+ paying clients',
    'skills.ctx.typescript': 'Mobile and web since 2023',
    'skills.ctx.node': "Boraa backend and Bah Inovação",
    'skills.ctx.react': 'Fullstack web apps at GPSET',
    'skills.ctx.sql': 'Schema design for Bah Inovação',
    'skills.ctx.aws': 'Cloud deployments at Plugways Digital',

    // Education
    'edu.label': 'Education',
    'edu.1.degree': 'B.Sc. Software Engineering',
    'edu.1.school': 'PUCRS',
    'edu.1.period': "2024 – 2027",
    'edu.2.degree': 'Apple Developer Academy',
    'edu.2.school': 'PUCRS',
    'edu.2.period': "2025 – 2027",
    'edu.3.degree': "English · B2",
    'edu.3.school': 'Bayswater College, London',
    'edu.3.period': '2022',

    // Contact
    'contact.label': 'Contact',
    'contact.title': "Let's talk.",
    'contact.desc': "I am looking for iOS and mobile engineering roles, remotely or in Porto Alegre.",

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
    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'nav.language': 'EN',

    // Hero
    'hero.eyebrow': 'DESENVOLVEDOR iOS · PORTO ALEGRE',
    'hero.title': "Desenho, desenvolvo e publico apps para iPhone.",
    'hero.description': "Palco, Rise of the Lich King, odinPedidos e Boraa já estão na App Store. Desenvolvi também os dois apps Freela onTap, previstos para novembro.",
    'hero.cta.projects': "Ver os apps",
    'hero.cta.cv': "Baixar currículo",
    'hero.caption': 'App independente na App Store',

    // About
    'about.label': "Sobre",
    'about.title': "Da primeira tela à App Store.",
    'about.p1': "Trabalho com interfaces iOS, arquitetura de apps e publicação. Fiz o Palco sozinho em Swift 6. O app analisa a fala no próprio iPhone e mantém os resultados medidos separados do feedback qualitativo.",
    'about.p2': "Na Apple Developer Academy | PUCRS, publiquei Rise of the Lich King e trabalhei no Boraa com outras quatro pessoas. Meu time ficou em terceiro entre dez no hackathon de engenharia de software da PUCRS. Desenvolvi os dois apps Freela onTap em uma base SwiftUI compartilhada.",
    'about.p3': "Uso IA no dia a dia para montar fluxos de trabalho: crio rotinas, conecto ferramentas por MCP e coordeno subagentes. Reviso os resultados pessoalmente.",
    'about.highlight.appstore': "Apps lançados",
    'about.highlight.appstore.desc': "Palco, Rise of the Lich King, odinPedidos e Boraa.",
    'about.highlight.preorder': 'Apps em pré-venda',
    'about.highlight.preorder.desc': 'Freela onTap para empresas e profissionais, previstos para novembro.',
    'about.highlight.clients': 'Clientes pagantes',
    'about.highlight.clients.desc': 'No produto odinPedidos.',

    // Experience
    'exp.label': 'Experiência',
    'exp.title': "Onde trabalhei",

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

    // Projects
    'proj.label': 'Projetos',
    'proj.title': "Apps que construí.",
    'proj.subtitle': "Quatro apps na App Store. Os dois Freela onTap estão previstos para novembro.",
    'proj.academic': 'Outros projetos',
    'proj.store': 'Ver na App Store',
    'proj.view': 'Ver projeto',

    'proj.1.kind': 'Jogo mobile',
    'proj.1.lead': 'Jogo iOS da primeira tela à App Store.',
    'proj.1.desc': "Cuidei da interface, da lógica do jogo e da integração com StoreKit 2 antes de enviar o Rise à App Store. Foram 100 downloads na primeira semana.",
    'proj.1.scene.a': 'Tela inicial',
    'proj.1.scene.b': 'Cena do jogo',

    'proj.2.kind': 'Produto para negócios',
    'proj.2.name': 'odinPedidos',
    'proj.2.lead': 'Pedidos para representantes em campo.',
    'proj.2.desc': "O odinPedidos ajuda representantes comerciais a gerenciar pedidos. Fui o único dev mobile: fiz as telas, integrei a API REST e publiquei o app nas duas lojas. Atende mais de 50 clientes pagantes.",
    'proj.2.stack': 'React Native, Expo, TypeScript',
    'proj.2.scene.a': 'Lista de clientes',
    'proj.2.scene.b': 'Detalhes do cliente',

    'proj.3.kind': 'Projeto independente',
    'proj.3.lead': 'Treine uma apresentação e veja onde melhorar.',
    'proj.3.desc': "Criei o Palco sozinho em Swift 6 para ensaiar a fala em privado. Áudio e transcrição ficam no iPhone; as métricas medidas dão contexto ao feedback qualitativo.",
    'proj.3.ai.label': "Como construí",
    'proj.3.ai.desc': "Construí o Palco a partir de especificações (spec-driven development), com apoio de Codex, Claude, skills e MCPs. As decisões e a revisão dos resultados ficaram comigo durante todo o processo (HITL).",
    'proj.3.stack': "Swift 6, SwiftUI, reconhecimento de fala no dispositivo",
    'proj.3.scene.recording': 'Gravação de um ensaio',
    'proj.3.scene.analysis': 'Análise da fala',
    'proj.3.scene.transcript': 'Transcrição com vícios de linguagem',

    'proj.4.name': 'Bah Inovação',
    'proj.4.desc': "Nessa plataforma de inovação cívica, desenhei cerca de 90% da interface no Figma, modelei o schema PostgreSQL e construí endpoints REST.",

    'proj.5.name': 'Ludo Pets',
    'proj.5.desc': "O Ludo Pets foi feito por 19 colaboradores. Liderei a adaptação para iOS e configurei capabilities, permissões e notificações push.",

    'proj.freela.kind': 'Dois apps, um serviço',
    'proj.freela.lead': 'Dois apps para um mesmo turno.',
    'proj.freela.desc': 'Desenvolvi os dois apps nativos em uma base SwiftUI compartilhada. Entre as entregas estão mapa com busca por distância, onboarding e notificações.',
    'proj.6.name': "Freela onTap: Empresas",
    'proj.6.desc': "Desenvolvi o app para empresas publicarem turnos avulsos na área de hospitalidade e acompanharem candidaturas. Ele compartilha a base SwiftUI com o app dos profissionais.",
    'proj.6.status': "Previsão: 16 de novembro de 2026",
    'proj.6.link.label': "Ver página na App Store",
    'proj.6.scene': 'Publicação de vaga',
    'proj.7.name': "Freela onTap: Vagas e Turnos",
    'proj.7.desc': "Desenvolvi também o app em que profissionais de hospitalidade encontram turnos, se candidatam e acompanham suas candidaturas.",
    'proj.7.status': "Previsão: 16 de novembro de 2026",
    'proj.7.link.label': "Ver página na App Store",
    'proj.7.scene': 'Vagas próximas',

    'proj.8.name': 'Boraa',
    'proj.8.desc': "O Boraa ajuda a descobrir eventos com amigos. Trabalhei com outras quatro pessoas nas rotas de backend, no deploy, na integração com MapKit e nas telas.",
    'proj.8.link.label': 'App Store',
    'proj.8.scene': 'Ícone do app',

    // Built with agents
    'ai.label': 'Feito com Claude e Codex',
    'ai.title': "Projetos pessoais, feitos com agentes.",
    'ai.intro': "Eu escrevo a especificação e as regras do projeto, o Claude Code e o Codex implementam, e reviso cada mudança antes de publicar. Testes e build precisam passar antes.",
    'ai.marks': 'Ferramentas',
    'ai.code': 'Código-fonte',
    'ai.palco.kind': 'iOS · App Store',
    'ai.palco.desc': "Ensaie uma apresentação e receba retorno sobre ritmo, vícios de linguagem e pausas.",
    'ai.palco.link': 'Ver o Palco',
    'ai.caronas.kind': 'Web · Em uso diário',
    'ai.caronas.desc': "Conta as caronas pela agenda semanal de cada pessoa. Só as ausências são marcadas, e os feriados nacionais ficam de fora sozinhos.",
    'ai.inshelf.kind': 'iOS · Em desenvolvimento',
    'ai.inshelf.desc': "Organiza a despensa e os mantimentos de casa, monta a lista de compras e transforma o que tem em estoque em receitas.",

    // Skills
    'skills.label': 'Tecnologias',
    'skills.title': "O que uso no trabalho",
    'skills.subtitle': "SwiftUI no Palco e no Freela onTap. React Native no odinPedidos.",
    'skills.ai.label': "IA no meu trabalho",
    'skills.ai.desc': "No Palco, usei especificações, Codex, Claude, skills e MCPs e revisei decisões e resultados (HITL). Também crio rotinas com agentes auxiliares (workers) e subagentes e orquestro as tarefas entre eles.",

    'skills.group.apple': 'Plataformas Apple',
    'skills.group.cross': 'Cross-platform e backend',

    'skills.ctx.swift': "Swift 6 no Palco e nos dois apps Freela onTap",
    'skills.ctx.swiftui': "Interfaces do Palco, Rise e dos dois apps Freela",
    'skills.ctx.uikit': 'myRates (Hackathon PUCRS, 3º lugar)',
    'skills.ctx.storekit': "Compras no Rise of the Lich King",
    'skills.ctx.persistence': "Persistência local em projetos da Academy",
    'skills.ctx.mapkit': "Mapa de eventos do Boraa e mapa de vagas do Freela",

    'skills.ctx.reactnative': 'odinPedidos, 50+ clientes pagantes',
    'skills.ctx.typescript': 'Mobile e web desde 2023',
    'skills.ctx.node': "Backend do Boraa e Bah Inovação",
    'skills.ctx.react': 'Aplicações web fullstack na GPSET',
    'skills.ctx.sql': 'Modelagem de schema no Bah Inovação',
    'skills.ctx.aws': 'Deploys cloud na Plugways Digital',

    // Education
    'edu.label': 'Formação',
    'edu.1.degree': 'Bacharelado em Engenharia de Software',
    'edu.1.school': 'PUCRS',
    'edu.1.period': "2024 – 2027",
    'edu.2.degree': 'Apple Developer Academy',
    'edu.2.school': 'PUCRS',
    'edu.2.period': "2025 – 2027",
    'edu.3.degree': "Inglês · B2",
    'edu.3.school': 'Bayswater College, Londres',
    'edu.3.period': '2022',

    // Contact
    'contact.label': 'Contato',
    'contact.title': "Vamos conversar.",
    'contact.desc': "Busco oportunidades em engenharia iOS e mobile, remotas ou em Porto Alegre.",

    // Footer
    'footer.made': 'Feito em Porto Alegre, Brasil',
  },
} as const;
