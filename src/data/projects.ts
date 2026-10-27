import type { Locale } from '../i18n'

export interface Project {
  id: string
  status: 'done' | 'in-progress'
  title: string
  tagline: { pt: string; en: string }
  description: { pt: string; en: string }
  stack: string[]
  highlights: { pt: string[]; en: string[] }
  github?: string
  demo?: string
  docs?: string
  featured?: boolean
  image?: string
  imageAlt?: { pt: string; en: string }
  details?: string
}

export const projects: Project[] = [
  {
    id: 'catalogo-vagas-api',
    status: 'in-progress',
    title: 'Catálogo de Vagas API',
    tagline: {
      pt: 'API e dashboard para busca de vagas com filtros e paginação estável',
      en: 'Job search API and dashboard with filters and stable pagination',
    },
    description: {
      pt: 'API Java 21 com Spring Boot, PostgreSQL e Redis para um catálogo de vagas. Inclui filtros, ordenação, paginação por deslocamento ou cursor, dashboard interativo, autenticação de candidatos, redirecionamento externo com contagem de cliques e registro autodeclarado de candidaturas. Projeto em evolução, com dados demonstrativos.',
      en: 'Java 21 API with Spring Boot, PostgreSQL and Redis for a job catalog. Includes filters, sorting, offset or cursor pagination, an interactive dashboard, candidate authentication, tracked external application redirects and candidate-reported applications. Ongoing project with sample data.',
    },
    stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Redis', 'Spring Data JPA', 'Flyway', 'Testcontainers', 'JUnit 5', 'OpenAPI', 'Docker Compose'],
    highlights: {
      pt: [
        'Testes de integração com PostgreSQL e Redis via Testcontainers',
        'Filtros combináveis, ordenação por ID ou cargo e paginação por cursor',
        'Cache Redis com invalidação direcionada após alterações em vagas',
        'Contrato OpenAPI, chave para rotas administrativas e métricas HTTP',
        'Autenticação de candidatos com senha BCrypt, sessão e proteção CSRF',
        'Redirecionamentos externos com contagem de cliques e candidaturas autodeclaradas',
        'Dashboard responsivo com busca, filtros, autenticação e indicadores de interesse',
      ],
      en: [
        'Integration tests using PostgreSQL and Redis via Testcontainers',
        'Combined filters, ID or title sorting and cursor pagination',
        'Redis cache with targeted invalidation after job changes',
        'OpenAPI contract, API key for admin routes and HTTP metrics',
        'Candidate authentication with BCrypt passwords, sessions and CSRF protection',
        'Tracked external redirects and candidate-reported applications',
        'Responsive dashboard with search, filters, authentication and engagement indicators',
      ],
    },
    github: 'https://github.com/FernandoTorresD97/catalogo-vagas-api',
    featured: true,
  },
  {
    id: 'fiolaser',
    status: 'in-progress',
    title: 'Fiolaser · Agendamentos',
    tagline: {
      pt: 'Agenda, área do cliente e gestão de uma clínica de estética',
      en: 'Scheduling, customer accounts and beauty clinic administration',
    },
    description: {
      pt: 'Projeto full-stack com Java 21, Spring Boot, PostgreSQL e interface HTML/CSS/JavaScript. Inclui catálogo de 33 procedimentos, reservas com controle de sobreposição, autenticação JWT e painel administrativo. Confirmações usam outbox e Kafka. Demo interativa com perfis fictícios e dados locais no navegador; backend, AWS e pagamentos online não estão conectados à demo.',
      en: 'Full-stack project with Java 21, Spring Boot, PostgreSQL and an HTML/CSS/JavaScript frontend. Includes 33 treatments, overlapping-booking prevention, JWT authentication and an administration panel. Confirmations use an outbox and Kafka. Interactive demo with fictional profiles and browser-local data; the backend, AWS and online payments are not connected to the demo.',
    },
    stack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'PostgreSQL',
      'JWT',
      'Kafka',
      'Docker',
      'JavaScript',
      'Flyway',
      'JUnit 5',
    ],
    highlights: {
      pt: [
        '31 testes com PostgreSQL real, sem testes ignorados',
        'Agenda considera duração e impede reservas sobrepostas',
        'JWT com revogação e limites de autenticação no PostgreSQL',
        'Área do cliente, administração e exportação CSV',
        'Outbox transacional e notificações com Kafka',
      ],
      en: [
        '31 tests using real PostgreSQL, with none skipped',
        'Duration-aware scheduling prevents overlapping bookings',
        'Revocable JWTs and database-backed authentication limits',
        'Customer accounts, administration and CSV exports',
        'Transactional outbox and Kafka notifications',
      ],
    },
    image: 'projects/fiolaser/interface.png',
    imageAlt: { pt: 'Interface da Fiolaser com os novos cartões ilustrados de tratamentos', en: 'Fiolaser interface with illustrated treatment cards' },
    demo: 'https://fernandotorresd97.github.io/fernando-torres-portfolio/demos/fiolaser/',
    github: 'https://github.com/FernandoTorresD97/fiolaser-app',
    details: 'demos/fiolaser/sobre-projeto.html',
    featured: false,
  },
  {
    id: 'notification-api',
    status: 'done',
    title: 'Notification API',
    tagline: {
      pt: 'API REST para agendamento e processamento de notificações',
      en: 'REST API for notification scheduling and processing',
    },
    description: {
      pt: 'API Java 21/Spring Boot com PostgreSQL, RabbitMQ, SMTP de teste, retentativas, fila de falhas e histórico. Autenticação com permissões separadas para administração e integração Art Pizza. Swagger público no Render; gestão exige credenciais e o envio está desativado na hospedagem pública.',
      en: 'Java 21/Spring Boot API with PostgreSQL, RabbitMQ, test SMTP, retries, a dead-letter queue and delivery history. Authentication separates administration from Art Pizza integration permissions. Public Swagger on Render; management requires credentials and hosted email delivery is disabled.',
    },
    stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'RabbitMQ', 'SMTP', 'Flyway', 'Testcontainers', 'Docker', 'Swagger/OpenAPI'],
    highlights: {
      pt: [
        '37 testes funcionais e de permissões no CI',
        'Retentativas com intervalo exponencial e fila de falhas',
        'Idempotência e histórico persistente de tentativas',
        'Teste do JAR e do Swagger no GitHub Actions',
        'Migração PostgreSQL verificada entre bases descartáveis',
      ],
      en: [
        '37 functional and authorization tests in CI',
        'Exponential retries and a dead-letter queue',
        'Idempotency and persisted delivery attempt history',
        'Packaged JAR and Swagger smoke test in GitHub Actions',
        'PostgreSQL migration verified between disposable databases',
      ],
    },
    github: 'https://github.com/FernandoTorresD97/notification-api',
    docs: 'https://notification-api-il76.onrender.com/swagger-ui.html',
    featured: true,
  },
  {
    id: 'automatizacao-artpizza',
    status: 'in-progress',
    title: 'Automatização Art Pizza',
    tagline: {
      pt: 'API e painel para atendimento e gestão de pedidos',
      en: 'API and dashboard for customer service and order management',
    },
    description: {
      pt: 'API Java/Spring Boot com PostgreSQL, Flyway e testes de pedidos e concorrência. Laboratório com pagamentos fictícios e integração autenticada com a Notification API por outbox transacional. Painel Vue com login; a demonstração pública usa dados fictícios no navegador, sem cobranças ou envio de mensagens.',
      en: 'Java/Spring Boot API with PostgreSQL, Flyway and order and concurrency tests. A local lab provides fictional payments and authenticated Notification API integration through a transactional outbox. Vue dashboard with login; the public demo uses browser-local fictional data without charges or message delivery.',
    },
    stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Spring Security', 'Vue 3', 'Flyway', 'JUnit 5', 'Docker Compose', 'GitHub Actions'],
    highlights: {
      pt: ['48 testes de backend com PostgreSQL', 'Sandbox local: aprovação, recusa e webhook assinado', 'Confirmações concorrentes e eventos idempotentes', 'Outbox com retentativas e integração Notification API', 'Demonstração Vue com pedidos e resumo de vendas'],
      en: ['48 backend tests with PostgreSQL', 'Local sandbox: approval, decline and signed webhook', 'Concurrent confirmations and idempotent events', 'Outbox with retries and Notification API integration', 'Vue demo with orders and sales summaries'],
    },
    github: 'https://github.com/FernandoTorresD97/automatizacao-artpizza',
    demo: 'https://fernandotorresd97.github.io/automatizacao-artpizza/',
    featured: true,
  },
]

export function statusLabel(status: Project['status'], locale: Locale): string {
  const map = {
    done: { pt: 'Concluído', en: 'Completed' },
    'in-progress': { pt: 'Em desenvolvimento', en: 'In progress' },
  }
  return map[status][locale]
}
