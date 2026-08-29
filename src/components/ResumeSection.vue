```vue
<script setup lang="ts">
import { useI18n } from '../i18n'

const { t } = useI18n()

const cvPortuguese = '/cv/Fernando_torres_dev.pdf'
const cvEnglish = '/cv/Fernando_torres_dev_en.pdf'
</script>

<template>
  <section
      id="resume"
      class="container-px py-20 sm:py-28 border-b border-base-line"
  >
    <div class="grid lg:grid-cols-[0.9fr_1.1fr] gap-12">

      <!-- Título -->
      <div>
        <p class="section-eyebrow">
          {{ t('resume.eyebrow') }}
        </p>

        <h2 class="section-heading">
          {{ t('resume.heading') }}
        </h2>
      </div>

      <!-- Currículos -->
      <div class="grid sm:grid-cols-2 gap-4">

        <!-- Português -->
        <div class="card p-6 flex flex-col justify-between">
          <div>
            <div class="text-3xl mb-4">
              🇵🇹
            </div>

            <h3 class="text-ink text-lg font-semibold">
              {{ t('resume.portuguese.title') }}
            </h3>

            <p class="text-ink-muted text-sm mt-2 leading-relaxed">
              {{ t('resume.portuguese.description') }}
            </p>
          </div>

          <div class="flex flex-wrap gap-3 mt-6">
            <a
                :href="cvPortuguese"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center px-4 py-2 border border-base-line text-sm text-ink hover:border-signal-blue hover:text-signal-blue transition-colors"
            >
              {{ t('resume.view') }}
            </a>

            <a
                :href="cvPortuguese"
                download
                class="inline-flex items-center justify-center px-4 py-2 text-sm text-ink-muted hover:text-ink transition-colors"
            >
              {{ t('resume.download') }}
            </a>
          </div>
        </div>

        <!-- Inglês -->
        <div class="card p-6 flex flex-col justify-between">
          <div>
            <div class="text-3xl mb-4">
              🇺🇸
            </div>

            <h3 class="text-ink text-lg font-semibold">
              {{ t('resume.english.title') }}
            </h3>

            <p class="text-ink-muted text-sm mt-2 leading-relaxed">
              {{ t('resume.english.description') }}
            </p>
          </div>

          <div class="flex flex-wrap gap-3 mt-6">
            <a
                :href="cvEnglish"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center px-4 py-2 border border-base-line text-sm text-ink hover:border-signal-blue hover:text-signal-blue transition-colors"
            >
              {{ t('resume.view') }}
            </a>

            <a
                :href="cvEnglish"
                download
                class="inline-flex items-center justify-center px-4 py-2 text-sm text-ink-muted hover:text-ink transition-colors"
            >
              {{ t('resume.download') }}
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
```
