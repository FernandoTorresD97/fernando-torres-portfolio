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
}

export const projects: Project[] = [
  {
    id: 'clinicflow',
    status: 'done',
    title: 'ClinicFlow',
    tagline: {
      pt: 'Sistema full-stack de gestão de pacientes, com arquitetura de microsserviços',
      en: 'Full-stack patient management system with a microservices architecture',
    },
    description: {
      pt: 'Sistema de demonstração para gestão de pacientes construído com arquitetura de microsserviços: serviços dedicados de autenticação, gestão de pacientes, faturamento e notificações, comunicando-se entre si via REST/WebClient. Persistência com PostgreSQL no padrão database-per-service e frontend em React consumindo a API.',
      en: 'Patient management demonstration built with a microservices architecture: dedicated services for authentication, patient management, billing and notifications, communicating via REST/WebClient. PostgreSQL persistence following the database-per-service pattern, with a React frontend using JavaScript and Vite to consume the API.',
    },
    stack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'PostgreSQL',
      'JWT',
      'WebClient',
      'Docker',
      'React',
      'Vite',
      'Swagger/OpenAPI',
    ],
    highlights: {
      pt: [
        'Arquitetura de microsserviços: auth, pacientes, faturamento e notificações',
        'Banco de dados no padrão database-per-service (PostgreSQL)',
        'Autenticação e autorização com JWT entre serviços',
        'Comunicação entre serviços via REST/WebClient',
        'Modelagem de dados de pacientes e histórico clínico',
        'API REST documentada com Swagger/OpenAPI, containerizada com Docker',
        'Frontend React com JavaScript e Vite consumindo a API',
      ],
      en: [
        'Microservices architecture: auth, patient management, billing and notifications',
        'Database-per-service pattern (PostgreSQL)',
        'JWT-based authentication and authorization across services',
        'Inter-service communication via REST/WebClient',
        'Patient and clinical history data modeling',
        'REST API documented with Swagger/OpenAPI, containerized with Docker',
        'React frontend using JavaScript and Vite to consume the API',
      ],
    },
    github: 'https://github.com/FernandoTorresD97/clinicflow',
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
