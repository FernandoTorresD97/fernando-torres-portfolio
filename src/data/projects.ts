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
      pt: 'Sistema de gestão de pacientes construído com arquitetura de microsserviços: serviços dedicados de autenticação, gestão de pacientes, faturamento e notificações, comunicando-se entre si via REST/WebClient. Persistência com PostgreSQL no padrão database-per-service e frontend em React consumindo a API.',
      en: 'Patient management system built with a microservices architecture: dedicated services for authentication, patient management, billing and notifications, communicating via REST/WebClient. PostgreSQL persistence following the database-per-service pattern, with a React frontend consuming the API.',
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
        'Frontend em React consumindo a API',
      ],
      en: [
        'Microservices architecture: auth, patient management, billing and notifications',
        'Database-per-service pattern (PostgreSQL)',
        'JWT-based authentication and authorization across services',
        'Inter-service communication via REST/WebClient',
        'Patient and clinical history data modeling',
        'REST API documented with Swagger/OpenAPI, containerized with Docker',
        'React frontend consuming the API',
      ],
    },
    github: 'https://github.com/FernandoTorresD97',
    featured: true,
  },
  {
    id: 'notification-api',
    status: 'done',
    title: 'Notification API',
    tagline: {
      pt: 'API REST para gestão e envio de notificações',
      en: 'REST API for notification management and delivery',
    },
    description: {
      pt: 'API REST construída com Spring Boot e PostgreSQL para o agendamento, processamento e envio de notificações por múltiplos canais. Baseada em experiência real de desenvolvimento de sistemas de notificação em ambiente produtivo.',
      en: 'REST API built with Spring Boot and PostgreSQL for scheduling, processing and sending notifications across multiple channels. Based on real experience developing notification systems in a production environment.',
    },
    stack: ['Java 21', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Maven', 'Docker', 'Swagger/OpenAPI'],
    highlights: {
      pt: [
        'Modelagem de relacionamentos entre Notification, Channel e Status',
        'Agendamento de envios com Scheduled Tasks',
        'Tratamento global de exceções e validação de DTOs',
        'Testes unitários e documentação via Swagger/OpenAPI',
        'Empacotado com Docker Compose',
      ],
      en: [
        'Data modeling for Notification, Channel and Status relationships',
        'Scheduled delivery with Scheduled Tasks',
        'Global exception handling and DTO validation',
        'Unit tests and Swagger/OpenAPI documentation',
        'Packaged with Docker Compose',
      ],
    },
    github: 'https://github.com/FernandoTorresD97',
  },
  {
    id: 'sistema-ordens-servico',
    status: 'in-progress',
    title: 'Sistema de Ordens de Serviço',
    tagline: {
      pt: 'Backend para gestão completa de ordens de serviço',
      en: 'Backend for full service order management',
    },
    description: {
      pt: 'Sistema backend para empresas de assistência técnica: cadastro de clientes e equipamentos, abertura e acompanhamento de ordens de serviço, histórico de atendimentos e orçamentos, com autenticação de funcionários.',
      en: 'Backend system for technical assistance companies: customer and equipment registration, service order creation and tracking, service history and quotes, with employee authentication.',
    },
    stack: ['Java 21', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'Docker', 'Swagger', 'JUnit'],
    highlights: {
      pt: [
        'Cadastro de clientes, equipamentos e ordens de serviço',
        'Controle de status e histórico de atendimento',
        'Upload de imagens e geração de orçamento',
        'Autenticação de funcionários com Spring Security + JWT',
        'API documentada com Swagger',
      ],
      en: [
        'Customer, equipment and service order registration',
        'Status tracking and service history',
        'Image upload and quote generation',
        'Employee authentication with Spring Security + JWT',
        'API documented with Swagger',
      ],
    },
    github: 'https://github.com/FernandoTorresD97',
  },
]

export function statusLabel(status: Project['status'], locale: Locale): string {
  const map = {
    done: { pt: 'Concluído', en: 'Completed' },
    'in-progress': { pt: 'Em desenvolvimento', en: 'In progress' },
  }
  return map[status][locale]
}
