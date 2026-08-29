<script setup lang="ts">
import { useReveal } from '../composables/useReveal'
import { useI18n } from '../i18n'

const { root } = useReveal()
const { t, messages } = useI18n()
</script>

<template>
  <section id="arquitetura" ref="root" class="container-px py-20 sm:py-28 border-b border-base-line">
    <div class="reveal max-w-2xl">
      <p class="section-eyebrow">{{ t('architecture.eyebrow') }}</p>
      <h2 class="section-heading">{{ t('architecture.heading') }}</h2>
      <p class="mt-4 text-ink-muted">{{ t('architecture.subheading') }}</p>
    </div>

    <div class="reveal mt-12 max-w-md mx-auto lg:mx-0">
      <div v-for="(layer, i) in messages.architecture.layers" :key="layer.name">
        <div class="card px-5 py-4 flex items-center justify-between">
          <div>
            <p class="font-mono text-sm text-ink">{{ layer.name }}</p>
            <p class="text-xs text-ink-faint mt-0.5">{{ layer.desc }}</p>
          </div>
          <span class="font-mono text-xs text-signal-blue">{{ String(i + 1).padStart(2, '0') }}</span>
        </div>
        <div v-if="i < messages.architecture.layers.length - 1" class="flex justify-center py-1.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="text-base-line">
            <path d="M12 4v16m0 0l-5-5m5 5l5-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </div>

    <div class="mt-10 grid sm:grid-cols-3 gap-4">
      <div class="card p-4">
        <p class="font-mono text-xs uppercase text-signal-blue">{{ messages.architecture.infraTitle }}</p>
        <p class="text-ink-muted text-sm mt-1.5">{{ messages.architecture.infraDesc }}</p>
      </div>
      <div class="card p-4">
        <p class="font-mono text-xs uppercase text-signal-blue">{{ messages.architecture.ciTitle }}</p>
        <p class="text-ink-muted text-sm mt-1.5">{{ messages.architecture.ciDesc }}</p>
      </div>
      <div class="card p-4">
        <p class="font-mono text-xs uppercase text-signal-blue">{{ messages.architecture.deployTitle }}</p>
        <p class="text-ink-muted text-sm mt-1.5">{{ messages.architecture.deployDesc }}</p>
      </div>
    </div>
  </section>
</template>
