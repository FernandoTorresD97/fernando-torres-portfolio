<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useI18n } from '../i18n'

const { t, locale, messages } = useI18n()

const roleIndex = ref(0)
const displayed = ref('')
let charIndex = 0
let deleting = false
let timer: ReturnType<typeof setTimeout> | null = null

function tick() {
  const roles = messages.value.hero.roles
  const current = roles[roleIndex.value % roles.length]
  if (!deleting) {
    displayed.value = current.slice(0, charIndex + 1)
    charIndex++
    if (charIndex === current.length) {
      deleting = true
      timer = setTimeout(tick, 1400)
      return
    }
  } else {
    displayed.value = current.slice(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      deleting = false
      roleIndex.value = (roleIndex.value + 1) % roles.length
    }
  }
  timer = setTimeout(tick, deleting ? 35 : 65)
}

function restart() {
  if (timer) clearTimeout(timer)
  charIndex = 0
  deleting = false
  roleIndex.value = 0
  displayed.value = ''
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) {
    displayed.value = messages.value.hero.roles[0]
    return
  }
  timer = setTimeout(tick, 400)
}

onMounted(restart)
watch(locale, restart)
</script>

<template>
  <section id="top" class="relative overflow-hidden border-b border-base-line">
    <div
      class="absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,black,transparent)]"
    ></div>

    <div class="container-px relative py-20 sm:py-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
      <div>
        <p class="font-mono text-xs tracking-[0.2em] uppercase text-signal-blue">
          <span class="text-signal-green">●</span> {{ t('hero.availability') }}
        </p>

        <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink mt-4 leading-[1.1]">
          Fernando Torres
        </h1>

        <p class="mt-4 font-mono text-lg sm:text-xl text-signal-blue h-8">
          {{ displayed }}<span class="animate-blink">▌</span>
        </p>

        <p class="mt-6 text-ink-muted text-base sm:text-lg max-w-xl leading-relaxed">
          {{ t('hero.intro') }}
        </p>

        <div class="mt-8 flex flex-wrap gap-4">
          <a href="#projetos" class="btn-primary">{{ t('hero.viewProjects') }}</a>
          <a href="/cv-fernando-torres.pdf" download class="btn-ghost">
            {{ t('hero.downloadCv') }}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
          <a href="https://github.com/FernandoTorresD97" target="_blank" rel="noopener" class="btn-ghost">GitHub</a>
        </div>
      </div>

      <div class="reveal is-visible">
        <div class="card font-mono text-xs sm:text-sm shadow-2xl shadow-black/40">
          <div class="flex items-center gap-2 px-4 py-3 border-b border-base-line">
            <span class="w-2.5 h-2.5 rounded-full bg-signal-amber/70"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-signal-blue/70"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-signal-green/70"></span>
            <span class="ml-2 text-ink-faint">request.http</span>
          </div>
          <div class="p-5 space-y-3">
            <p><span class="text-signal-amber">POST</span> <span class="text-ink">/api/v1/notifications</span></p>
            <p class="text-ink-faint">Content-Type: application/json</p>
            <pre class="text-ink-muted whitespace-pre-wrap">{
  "channel": "EMAIL",
  "recipient": "recruiter@company.pt",
  "message": "{{ t('hero.terminalRequest') }}"
}</pre>
            <div class="pt-3 border-t border-base-line">
              <p><span class="text-signal-green">200 OK</span> <span class="text-ink-faint">· 42ms</span></p>
              <pre class="text-ink-muted whitespace-pre-wrap">{
  "status": "{{ t('hero.terminalStatus') }}",
  "candidate": "Fernando Torres",
  "stack": ["Java", "Spring Boot", "PostgreSQL"],
  "available": true
}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
