<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '../i18n'

const { t, locale, setLocale } = useI18n()
const open = ref(false)

const linkKeys = [
  { href: '#sobre', key: 'about' },
  { href: '#stack', key: 'stack' },
  { href: '#projetos', key: 'projects' },
  { href: '#arquitetura', key: 'architecture' },
  { href: '#contato', key: 'contact' },
] as const

function close() {
  open.value = false
}

function toggleLocale() {
  setLocale(locale.value === 'pt' ? 'en' : 'pt')
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-base-line/80 bg-base-bg/85 backdrop-blur">
    <nav class="container-px flex items-center justify-between h-16">
      <a href="#top" class="font-display font-semibold text-lg text-ink flex items-center gap-2">
        <span
          class="w-8 h-8 rounded-md bg-base-surface border border-base-line flex items-center justify-center font-mono text-signal-blue text-sm"
          >FT</span
        >
        <span class="hidden sm:inline">Fernando Torres</span>
      </a>

      <ul class="hidden md:flex items-center gap-8 font-mono text-sm text-ink-muted">
        <li v-for="link in linkKeys" :key="link.href">
          <a :href="link.href" class="hover:text-signal-blue transition-colors">{{ t(`nav.${link.key}`) }}</a>
        </li>
      </ul>

      <div class="hidden md:flex items-center gap-4">
        <button
          type="button"
          class="font-mono text-xs px-2.5 py-1.5 rounded-md border border-base-line text-ink-muted hover:text-signal-blue hover:border-signal-blue transition-colors"
          :aria-label="locale === 'pt' ? 'Switch to English' : 'Mudar para Português'"
          @click="toggleLocale"
        >
          {{ locale === 'pt' ? 'PT / EN' : 'EN / PT' }}
        </button>
        <a href="#contato" class="btn-primary">{{ t('nav.contactCta') }}</a>
      </div>

      <div class="md:hidden flex items-center gap-2">
        <button
          type="button"
          class="font-mono text-xs px-2 py-1.5 rounded-md border border-base-line text-ink-muted"
          @click="toggleLocale"
        >
          {{ locale.toUpperCase() }}
        </button>
        <button class="text-ink p-2" aria-label="Abrir menu" @click="open = !open">
          <svg v-if="!open" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M3 6h18M3 12h18M3 18h18" stroke-linecap="round" />
          </svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M6 6l12 12M18 6l-12 12" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </nav>

    <div v-if="open" class="md:hidden border-t border-base-line bg-base-bg">
      <ul class="container-px py-4 flex flex-col gap-4 font-mono text-sm text-ink-muted">
        <li v-for="link in linkKeys" :key="link.href">
          <a :href="link.href" class="block hover:text-signal-blue" @click="close">{{ t(`nav.${link.key}`) }}</a>
        </li>
        <li>
          <a href="#contato" class="btn-primary w-full justify-center" @click="close">{{ t('nav.contactCta') }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>
