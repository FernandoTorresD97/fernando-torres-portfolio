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
    featured: true,
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
      pt: 'Projeto pessoal com Java 21, Spring Boot e PostgreSQL para cadastro, agendamento e processamento de notificações com envio simulado. Inclui testes unitários, Docker Compose, Swagger/OpenAPI e integração contínua.',
      en: 'Personal project with Java 21, Spring Boot and PostgreSQL for creating, scheduling and processing notifications with simulated delivery. Includes unit tests, Docker Compose, Swagger/OpenAPI and continuous integration.',
    },
    stack: ['Java 21', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Maven', 'Docker', 'Swagger/OpenAPI'],
    highlights: {
      pt: [
        'Modelagem de relacionamentos entre Notification, Channel e Status',
        'Processamento agendado com entrega simulada',
        'Tratamento global de exceções e validação de DTOs',
        'Testes unitários e documentação via Swagger/OpenAPI',
        'Empacotado com Docker Compose',
      ],
      en: [
        'Data modeling for Notification, Channel and Status relationships',
        'Scheduled processing with simulated delivery',
        'Global exception handling and DTO validation',
        'Unit tests and Swagger/OpenAPI documentation',
        'Packaged with Docker Compose',
      ],
    },
    github: 'https://github.com/FernandoTorresD97/notification-api',
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
      pt: 'Projeto pessoal em desenvolvimento e demonstração local, com API Java/Spring Boot e painel Vue. Inclui cardápio, pedidos, frete e resumo de vendas. Atendimento demonstrado por simulador; integrações reais de WhatsApp e pagamentos e o ambiente de produção ainda precisam de configuração e homologação.',
      en: 'Personal project in development and local demonstration, with a Java/Spring Boot API and Vue dashboard. Includes menu, orders, delivery fees and sales summaries. Customer conversations use a simulator; real WhatsApp/payment integrations and production setup require configuration and validation.',
    },
    stack: ['Java 21', 'Spring Boot', 'Spring Data JPA', 'Spring Security', 'Vue 3', 'Maven', 'Flyway'],
    highlights: {
      pt: ['Cardápio e criação de pedidos', 'Cálculo de frete e acompanhamento por status', 'Confirmação administrativa de PIX', 'Resumo diário de vendas', 'Simulador de atendimento conversacional'],
      en: ['Menu and order creation', 'Delivery fee calculation and status tracking', 'Administrative PIX confirmation', 'Daily sales summaries', 'Customer conversation simulator'],
    },
    github: 'https://github.com/FernandoTorresD97/automatizacao-artpizza',
  },
]

export function statusLabel(status: Project['status'], locale: Locale): string {
  const map = {
    done: { pt: 'Concluído', en: 'Completed' },
    'in-progress': { pt: 'Em desenvolvimento', en: 'In progress' },
  }
  return map[status][locale]
}
