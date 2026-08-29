<script setup lang="ts">
import { skillGroups } from '../data/skills'
import { useReveal } from '../composables/useReveal'
import { useI18n } from '../i18n'

const { root } = useReveal()
const { t } = useI18n()
</script>

<template>
  <section id="stack" ref="root" class="container-px py-20 sm:py-28 border-b border-base-line">
    <div class="reveal max-w-2xl">
      <p class="section-eyebrow">{{ t('skills.eyebrow') }}</p>
      <h2 class="section-heading">{{ t('skills.heading') }}</h2>
      <p class="mt-4 text-ink-muted">{{ t('skills.subheading') }}</p>
    </div>

    <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <div v-for="group in skillGroups" :key="group.category" class="reveal card p-5">
        <p class="font-display font-semibold text-ink flex items-center gap-2">
          <span>{{ group.icon }}</span>{{ t(`skills.categories.${group.category}`) }}
        </p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span v-for="item in group.items" :key="item" class="tag">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
