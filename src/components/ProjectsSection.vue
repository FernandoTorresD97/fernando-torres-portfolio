<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { projects, statusLabel } from '../data/projects'
import { useReveal } from '../composables/useReveal'
import { useI18n } from '../i18n'

const { root } = useReveal()
const { t, locale } = useI18n()
const baseUrl = import.meta.env.BASE_URL
const track = ref<HTMLDivElement | null>(null)
const activePage = ref(0)
const pageSize = ref(2)
const orderedProjects = computed(() => {
  const priority = ['catalogo-vagas-api', 'notification-api', 'automatizacao-artpizza', 'fiolaser']
  return [...projects].sort((a, b) => priority.indexOf(a.id) - priority.indexOf(b.id))
})
const projectPages = computed(() => {
  const pages: typeof orderedProjects.value[] = []
  for (let index = 0; index < orderedProjects.value.length; index += pageSize.value) {
    pages.push(orderedProjects.value.slice(index, index + pageSize.value))
  }
  return pages
})

function goToPage(index: number) {
  const nextIndex = Math.max(0, Math.min(index, projectPages.value.length - 1))
  const slide = track.value?.children[nextIndex] as HTMLElement | undefined
  const container = track.value
  if (!slide || !container) return

  activePage.value = nextIndex
  const left = slide.getBoundingClientRect().left - container.getBoundingClientRect().left + container.scrollLeft
  container.scrollTo({ left, behavior: 'smooth' })
}

function updateActivePage() {
  const container = track.value
  if (!container) return

  const slides = Array.from(container.children) as HTMLElement[]
  const currentLeft = container.scrollLeft
  activePage.value = slides.reduce((closest, slide, index) => {
    const closestLeft = slides[closest].getBoundingClientRect().left - container.getBoundingClientRect().left + currentLeft
    const slideLeft = slide.getBoundingClientRect().left - container.getBoundingClientRect().left + currentLeft
    const closestDistance = Math.abs(closestLeft - currentLeft)
    const distance = Math.abs(slideLeft - currentLeft)
    return distance < closestDistance ? index : closest
  }, 0)
}

let mobileQuery: MediaQueryList | null = null
function updatePageSize() {
  if (!mobileQuery) return
  const nextSize = mobileQuery.matches ? 1 : 2
  if (pageSize.value === nextSize) return
  pageSize.value = nextSize
  activePage.value = 0
  track.value?.scrollTo({ left: 0 })
}

onMounted(() => {
  mobileQuery = window.matchMedia('(max-width: 767px)')
  updatePageSize()
  mobileQuery.addEventListener('change', updatePageSize)
  track.value?.addEventListener('scroll', updateActivePage, { passive: true })
})
onUnmounted(() => {
  mobileQuery?.removeEventListener('change', updatePageSize)
  track.value?.removeEventListener('scroll', updateActivePage)
})
</script>

<template>
  <section id="projetos" ref="root" class="container-px py-20 sm:py-28 border-b border-base-line">
    <div class="reveal max-w-2xl">
      <p class="section-eyebrow">{{ t('projects.eyebrow') }}</p>
      <h2 class="section-heading">{{ t('projects.heading') }}</h2>
      <p class="mt-4 text-ink-muted">{{ t('projects.subheading') }}</p>
    </div>

    <div
      ref="track"
      class="project-carousel-track mt-12"
      role="region"
      :aria-label="locale === 'pt' ? 'Projetos do portfólio' : 'Portfolio projects'"
      aria-roledescription="carousel"
      tabindex="0"
      @keydown.left.prevent="goToPage(activePage - 1)"
      @keydown.right.prevent="goToPage(activePage + 1)"
    >
      <div
        v-for="(page, index) in projectPages"
        :key="index"
        class="project-carousel-page"
        role="group"
        aria-roledescription="slide"
        :aria-label="locale === 'pt' ? `Página ${index + 1} de ${projectPages.length}` : `Page ${index + 1} of ${projectPages.length}`"
      >
        <article
          v-for="project in page"
          :key="project.id"
          class="project-carousel-card reveal card p-6 flex flex-col"
          :class="project.featured ? 'ring-1 ring-signal-blue/30' : ''"
        >
        <a v-if="project.image && project.details" :href="`${baseUrl}${project.details}`" class="block -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-2xl border-b border-base-line focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal-blue">
          <img :src="`${baseUrl}${project.image}`" :alt="project.imageAlt?.[locale] || project.title" class="w-full aspect-[16/10] object-cover object-top transition-transform duration-300 hover:scale-[1.025]" loading="lazy" width="1265" height="712">
        </a>
        <div class="flex items-center justify-between">
          <span
            class="font-mono text-[11px] uppercase tracking-wider px-2 py-1 rounded"
            :class="project.status === 'done' ? 'bg-signal-green/10 text-signal-green' : 'bg-signal-amber/10 text-signal-amber'"
          >
            {{ statusLabel(project.status, locale) }}
          </span>
          <span v-if="project.featured" class="font-mono text-[11px] text-signal-blue">{{ t('projects.mainProject') }}</span>
        </div>

        <h3 class="font-display text-xl font-semibold text-ink mt-4">{{ project.title }}</h3>
        <p class="text-signal-blue text-sm mt-1">{{ project.tagline[locale] }}</p>
        <p class="text-ink-muted text-sm mt-4 leading-relaxed">{{ project.description[locale] }}</p>

        <ul class="mt-5 space-y-2">
          <li v-for="h in project.highlights[locale]" :key="h" class="text-ink-muted text-sm flex gap-2">
            <span class="text-signal-blue mt-0.5">▹</span><span>{{ h }}</span>
          </li>
        </ul>

        <div class="mt-5 flex flex-wrap gap-2">
          <span v-for="tech in project.stack" :key="tech" class="tag">{{ tech }}</span>
        </div>

        <div class="mt-auto pt-5 border-t border-base-line flex flex-wrap items-center gap-4">
          <a v-if="project.details" :href="`${baseUrl}${project.details}`" class="btn-primary">
            {{ locale === 'pt' ? 'Conhecer o projeto ↗' : 'Explore the project ↗' }}
          </a>
          <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener" class="btn-primary">
            {{ locale === 'pt' ? 'Abrir demonstração ↗' : 'Open demo ↗' }}
          </a>
          <a v-if="project.docs" :href="project.docs" target="_blank" rel="noopener" class="btn-primary">
            {{ locale === 'pt' ? 'Abrir Swagger ↗' : 'Open Swagger ↗' }}
          </a>
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener"
            class="font-mono text-xs text-ink hover:text-signal-blue transition-colors inline-flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.03 3.26 9.29 7.79 10.8.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.17.69-3.84-1.53-3.84-1.53-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.17.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.18-1.48 3.13-1.17 3.13-1.17.63 1.57.24 2.73.12 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.66 5.34-5.2 5.62.41.36.77 1.06.77 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.2.66.79.55C20.24 21.3 23.5 17.05 23.5 12.02 23.5 5.74 18.27.5 12 .5Z"
              />
            </svg>
            {{ t('projects.code') }}
          </a>
        </div>
        </article>
      </div>
    </div>

    <p class="sr-only" aria-live="polite">
      {{ locale === 'pt' ? `Página ${activePage + 1} de ${projectPages.length}` : `Page ${activePage + 1} of ${projectPages.length}` }}
    </p>
    <div class="project-carousel-navigation mt-5" role="group" :aria-label="locale === 'pt' ? 'Navegação dos projetos' : 'Project navigation'">
      <button
        type="button"
        class="project-carousel-control"
        :aria-label="locale === 'pt' ? 'Página anterior' : 'Previous page'"
        :disabled="activePage === 0"
        @click="goToPage(activePage - 1)"
      >
        <span aria-hidden="true">←</span>
      </button>
      <div class="flex items-center gap-2" role="group" :aria-label="locale === 'pt' ? 'Selecionar projeto' : 'Select project'">
      <button
        v-for="(page, index) in projectPages"
        :key="index"
        type="button"
        class="project-carousel-dot"
        :class="activePage === index ? 'is-active' : ''"
        :aria-label="locale === 'pt' ? `Ir para página ${index + 1}: ${page.map(project => project.title).join(' e ')}` : `Go to page ${index + 1}: ${page.map(project => project.title).join(' and ')}`"
        :aria-current="activePage === index ? 'step' : undefined"
        @click="goToPage(index)"
      />
      </div>
      <span class="font-mono text-[11px] text-ink-muted tabular-nums">{{ activePage + 1 }} / {{ projectPages.length }}</span>
      <button
        type="button"
        class="project-carousel-control"
        :aria-label="locale === 'pt' ? 'Próxima página' : 'Next page'"
        :disabled="activePage === projectPages.length - 1"
        @click="goToPage(activePage + 1)"
      >
        <span aria-hidden="true">→</span>
      </button>
    </div>
  </section>
</template>
