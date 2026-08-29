export interface SkillGroup {
  category: string
  icon: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    icon: '☕',
    items: ['Java 21', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'REST API', 'SOAP', 'JWT'],
  },
  {
    category: 'Frontend',
    icon: '🖥️',
    items: ['Vue.js', 'Vue 3', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Dados',
    icon: '🐘',
    items: ['PostgreSQL', 'MongoDB', 'SQL', 'Modelagem de Dados'],
  },
  {
    category: 'DevOps & Deploy',
    icon: '🐳',
    items: ['Docker', 'GitHub Actions', 'CI/CD', 'Render', 'Vercel', 'Netlify', 'Linux'],
  },
  {
    category: 'Qualidade & Ferramentas',
    icon: '🧪',
    items: ['JUnit', 'Mockito', 'Maven', 'Swagger/OpenAPI', 'Postman', 'Git', 'GitHub', 'IntelliJ IDEA'],
  },
]
