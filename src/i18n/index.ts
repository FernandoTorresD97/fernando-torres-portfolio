import { computed, ref } from 'vue'
import { pt } from './locales/pt'
import { en } from './locales/en'

export type Locale = 'pt' | 'en'

const STORAGE_KEY = 'portfolio-locale'

function detectInitialLocale(): Locale {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'pt' || saved === 'en') return saved

  const browserLang = navigator.language?.toLowerCase() ?? ''
  if (browserLang.startsWith('pt')) return 'pt'
  return 'en'
}

// Singleton reactive state shared across every component that imports this module
const locale = ref<Locale>('pt')
let initialized = false

const dictionaries = { pt, en }

function ensureInitialized() {
  if (initialized) return
  locale.value = detectInitialLocale()
  document.documentElement.lang = locale.value === 'pt' ? 'pt-PT' : 'en'
  initialized = true
}

export function useI18n() {
  ensureInitialized()

  const messages = computed(() => dictionaries[locale.value])

  function t(path: string): string {
    const parts = path.split('.')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = messages.value
    for (const part of parts) {
      value = value?.[part]
    }
    return typeof value === 'string' ? value : path
  }

  function setLocale(next: Locale) {
    locale.value = next
    localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next === 'pt' ? 'pt-PT' : 'en'
  }

  return { locale, t, setLocale, messages }
}
