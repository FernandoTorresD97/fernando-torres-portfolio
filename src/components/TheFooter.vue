<script setup lang="ts">
import { useI18n } from '../i18n'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="container-px py-8 border-t border-base-line">
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-ink-faint">
      <p>© {{ year }} Fernando Torres</p>
      <p>{{ t('footer.madeWith') }}</p>
    </div>
  </footer>
</template>
