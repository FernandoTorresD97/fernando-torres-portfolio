<script setup lang="ts">
import { useReveal } from '../composables/useReveal'
import { useI18n } from '../i18n'

const { root } = useReveal()
const { t, messages } = useI18n()
</script>

<template>
  <section id="sobre" ref="root" class="container-px py-20 sm:py-28 border-b border-base-line">
    <div class="grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
      <div class="reveal">
        <p class="section-eyebrow">{{ t('about.eyebrow') }}</p>
        <h2 class="section-heading">{{ t('about.heading') }}</h2>
      </div>

      <div class="reveal space-y-8">
        <p class="text-ink-muted text-base sm:text-lg leading-relaxed">
          {{ t('about.p1_before') }} <span class="text-ink">{{ t('about.p1_mid') }}</span
          >{{ t('about.p1_after') }} <span class="text-ink">{{ t('about.p1_mid2') }}</span
          >{{ t('about.p1_end') }}
        </p>
        <p class="text-ink-muted text-base sm:text-lg leading-relaxed">
          {{ t('about.p2_before') }} <span class="text-ink">{{ t('about.p2_mid') }}</span> {{ t('about.p2_after') }}
        </p>

        <dl class="grid sm:grid-cols-2 gap-4 pt-2">
          <div class="card p-4">
            <dt class="font-mono text-xs uppercase tracking-wider text-signal-blue">{{ messages.about.facts.experience }}</dt>
            <dd class="mt-1.5 text-ink text-sm">{{ messages.about.facts.experienceValue }}</dd>
          </div>
          <div class="card p-4">
            <dt class="font-mono text-xs uppercase tracking-wider text-signal-blue">{{ messages.about.facts.focus }}</dt>
            <dd class="mt-1.5 text-ink text-sm">{{ messages.about.facts.focusValue }}</dd>
          </div>
          <div class="card p-4">
            <dt class="font-mono text-xs uppercase tracking-wider text-signal-blue">{{ messages.about.facts.education }}</dt>
            <dd class="mt-1.5 text-ink text-sm">{{ messages.about.facts.educationValue }}</dd>
          </div>
          <div class="card p-4">
            <dt class="font-mono text-xs uppercase tracking-wider text-signal-blue">{{ messages.about.facts.languages }}</dt>
            <dd class="mt-1.5 text-ink text-sm">{{ messages.about.facts.languagesValue }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
