<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '../i18n'
const { t, locale } = useI18n()
const cvPath = computed(() => locale.value === 'pt' ? '/cv/Fernando_torres_dev.pdf' : '/cv/Fernando_torres_dev_en.pdf')
const stack = ['Java', 'Spring Boot', 'Vue.js', 'TypeScript', 'PostgreSQL', 'Docker']
</script>

<template>
  <section id="top" class="space-hero border-b border-base-line">
    <div class="container-px hero-layout">
      <div class="hero-copy">
        <p class="section-eyebrow">{{ locale === 'pt' ? 'OLÁ, EU SOU' : 'HELLO, I AM' }}</p>
        <h1>Fernando Torres<span>Software Developer<span class="hero-dot">.</span></span></h1>
        <p class="hero-description">{{ locale === 'pt' ? 'Transformando ideias em sistemas que funcionam.' : 'Turning ideas into systems that work.' }}</p>
        <p class="text-ink-muted leading-relaxed max-w-xl">{{ t('hero.intro') }}</p>
        <div class="hero-tags"><span v-for="tech in stack" :key="tech" class="tag">{{ tech }}</span></div>
        <div class="flex flex-wrap gap-3 mt-8">
          <a href="#projetos" class="btn-primary">{{ t('hero.viewProjects') }} <span aria-hidden="true">↗</span></a>
          <a href="#contato" class="btn-ghost">{{ locale === 'pt' ? 'Entre em contato' : 'Get in touch' }}</a>
        </div>
        <div class="hero-socials">
          <a href="https://github.com/FernandoTorresD97" target="_blank" rel="noopener">GitHub ↗</a>
          <a href="https://linkedin.com/in/fernandotorresdias/" target="_blank" rel="noopener">LinkedIn ↗</a>
          <a :href="cvPath" download>{{ t('hero.downloadCv') }} ↓</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="portrait-frame">
          <img src="/images/fernando.png" alt="Fernando Torres" width="471" height="836" fetchpriority="high" />
          <span class="portrait-caption">&lt; developer /&gt;</span>
        </div>
        <div class="code-window">
          <div class="code-title"><i></i><i></i><i></i><span>developer.ts</span><span class="code-language">TypeScript</span></div>
          <pre><span class="code-purple">const</span> developer = {
  name: <span class="code-green">'Fernando Torres'</span>,
  frontend: [<span class="code-green">'Vue.js', 'TypeScript'</span>],
  backend: [<span class="code-green">'Java', 'Spring Boot'</span>],
  database: <span class="code-green">'PostgreSQL'</span>,
  available: <span class="code-purple">true</span>
};</pre>
        </div>
      </div>
    </div>
    <a href="#sobre" class="scroll-cue">{{ locale === 'pt' ? 'EXPLORE O PORTFÓLIO' : 'EXPLORE MY WORK' }} <span>↓</span></a>
  </section>
</template>
