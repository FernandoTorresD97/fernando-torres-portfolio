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
    github: 'https://github.com/FernandoTorresD97/notification-api',
    featured: true,
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
  {
    id: 'clinic-flow',
    status: 'done',
    title: 'Clinic Flow',
    tagline: {
      pt: 'Sistema de gestão de pacientes',
      en: 'Patient management system',
    },
    description: {
      pt: 'Sistema backend voltado para a gestão de pacientes, cobrindo cadastro, histórico e organização de dados clínicos com foco em integridade e segurança da informação.',
      en: 'Backend system for patient management, covering registration, history and clinical data organization with a focus on data integrity and security.',
    },
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Spring Data JPA', 'Spring Security', 'Maven', 'WebClient', 'JWT', 'Vite', 'JavaScript', "React", 'Docker', 'Swagger/OpenAPI' ],
    highlights: {
      pt: [
        'Modelagem de dados de pacientes e histórico clínico',
        'Estruturação de camadas Controller / Service / Repository',
        'Validações e regras de negócio no domínio de saúde',
        'Tratamento de exceções e respostas padronizadas da API',
        'Implementação de API REST para operações de cadastro e consulta',
        'Persistência e gerenciamento de dados com JPA / Hibernate',
      ],
      en: [
        'Patient and clinical history data modeling',
        'Controller / Service / Repository layer structuring',
        'Validations and business rules in the healthcare domain',
        'Exception handling and standardized API responses',
        'REST API implementation for registration and data retrieval operations',
        'Data persistence and management using JPA / Hibernate',
      ],
    },
    github: 'https://github.com/FernandoTorresD97/clinicflow',
  },
]

export function statusLabel(status: Project['status'], locale: Locale): string {
  const map = {
    done: { pt: 'Concluído', en: 'Completed' },
    'in-progress': { pt: 'Em desenvolvimento', en: 'In progress' },
  }
  return map[status][locale]
}
