<script setup lang="ts">
import { projects, statusLabel } from '../data/projects'
import { useReveal } from '../composables/useReveal'
import { useI18n } from '../i18n'

const { root } = useReveal()
const { t, locale } = useI18n()
</script>

<template>
  <section id="projetos" ref="root" class="container-px py-20 sm:py-28 border-b border-base-line">
    <div class="reveal max-w-2xl">
      <p class="section-eyebrow">{{ t('projects.eyebrow') }}</p>
      <h2 class="section-heading">{{ t('projects.heading') }}</h2>
      <p class="mt-4 text-ink-muted">{{ t('projects.subheading') }}</p>
    </div>

    <div class="mt-12 grid lg:grid-cols-3 gap-6">
      <article
        v-for="project in projects"
        :key="project.id"
        class="reveal card p-6 flex flex-col"
        :class="project.featured ? 'lg:col-span-1 ring-1 ring-signal-blue/30' : ''"
      >
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

        <div class="mt-6 pt-5 border-t border-base-line flex gap-4">
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
  </section>
</template>
