# Fernando Torres — Portfólio

Portfólio pessoal desenvolvido em **Vue 3 + TypeScript + Vite + Tailwind CSS**, com foco em Java / Spring Boot / PostgreSQL para vagas de Java Developer / Backend em Portugal.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:5173

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  components/   # Seções da página (Hero, Sobre, Stack, Projetos, Arquitetura, Contato)
  data/         # Conteúdo (projetos, tecnologias) — edite aqui para atualizar o site
  composables/  # useReveal — animação de entrada ao rolar a página
public/
  cv-fernando-torres.pdf  # Substitua por uma versão atualizada quando necessário
```

## Deploy sugerido

- **Frontend**: Vercel ou Netlify (build command `npm run build`, output `dist`)
- Basta conectar o repositório GitHub e o deploy é automático a cada push

## Editando conteúdo

- Projetos: `src/data/projects.ts`
- Tecnologias: `src/data/skills.ts`
- Textos do hero/sobre: `src/components/HeroSection.vue` e `AboutSection.vue`
- CV: substitua `public/cv-fernando-torres.pdf`
