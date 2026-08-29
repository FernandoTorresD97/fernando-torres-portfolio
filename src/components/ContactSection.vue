<script setup lang="ts">
import { useReveal } from '../composables/useReveal'
import { useI18n } from '../i18n'

const { root } = useReveal()
const { t, messages } = useI18n()

const contacts = [
  { key: 'email', value: 'Nando.torres1997@gmail.com', href: 'mailto:Nando.torres1997@gmail.com' },
  { key: 'linkedin', value: 'linkedin.com/in/fernandotorresdias', href: 'https://linkedin.com/in/fernandotorresdias/' },
  { key: 'github', value: 'github.com/FernandoTorresD97', href: 'https://github.com/FernandoTorresD97' },
] as const
</script>

<template>
  <section id="contato" ref="root" class="container-px py-20 sm:py-28">
    <div class="reveal card p-8 sm:p-14 relative overflow-hidden">
      <div class="absolute inset-0 bg-grid opacity-[0.15] pointer-events-none"></div>
      <div class="relative">
        <p class="section-eyebrow">{{ t('contact.eyebrow') }}</p>
        <h2 class="section-heading">{{ t('contact.heading') }}</h2>
        <p class="mt-4 text-ink-muted max-w-xl">{{ t('contact.body') }}</p>

        <div class="mt-8 grid sm:grid-cols-3 gap-4">
          <a
            v-for="c in contacts"
            :key="c.key"
            :href="c.href"
            target="_blank"
            rel="noopener"
            class="border border-base-line rounded-lg p-4 hover:border-signal-blue transition-colors group"
          >
            <p class="font-mono text-xs uppercase tracking-wider text-signal-blue">{{ messages.contact.labels[c.key] }}</p>
            <p class="text-ink text-sm mt-1.5 truncate group-hover:text-signal-blue transition-colors">
              {{ c.value }}
            </p>
          </a>
        </div>

        <a href="/cv-fernando-torres.pdf" download class="btn-primary mt-8">
          {{ t('contact.downloadCv') }}
        </a>
      </div>
    </div>
  </section>
</template>
