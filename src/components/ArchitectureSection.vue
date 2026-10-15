<script setup lang="ts">
import { computed, onUnmounted, ref } from 'vue'
import { useI18n } from '../i18n'
const { t, locale, messages } = useI18n()
const selected = ref(0)
const running = ref(false)
let timer: ReturnType<typeof setInterval> | undefined
const text = (pt: string, en: string) => locale.value === 'pt' ? pt : en
const details = computed(() => [
  { label: 'INTERFACE', icon: '01', title: 'Vue.js / TypeScript', desc: text('A interface transforma ações do usuário em requisições. Componentes organizam a experiência e apresentam os dados retornados pela API.', 'The interface turns user actions into requests. Components organize the experience and display data returned by the API.'), tags: ['Componentes', 'HTTP client', 'TypeScript'], code: 'await api.get("/patients")', result: text('Ação do usuário → requisição HTTP', 'User action → HTTP request') },
  { label: 'CONTRACT', icon: '02', title: 'REST API', desc: text('O contrato conecta frontend e backend. Endpoints, DTOs e autenticação JWT definem como cada requisição entra no sistema.', 'The contract connects frontend and backend. Endpoints, DTOs and JWT authentication define how each request enters the system.'), tags: ['REST', 'JSON', 'JWT'], code: 'GET /api/patients\nAuthorization: Bearer <token>', result: text('Requisição autenticada → endpoint', 'Authenticated request → endpoint') },
  { label: 'APPLICATION', icon: '03', title: 'Spring Boot', desc: text('Controllers recebem as requisições, validam os dados de entrada e encaminham o processamento. Exceções são traduzidas em respostas HTTP consistentes.', 'Controllers receive requests, validate input and delegate processing. Exceptions become consistent HTTP responses.'), tags: ['Controllers', 'Validation', 'DTOs'], code: '@GetMapping("/patients")\npublic List<PatientDTO> findAll()', result: text('Entrada validada → processamento', 'Validated input → processing') },
  { label: 'BUSINESS', icon: '04', title: 'Service Layer', desc: text('As regras de negócio ficam separadas da interface e da persistência. Serviços coordenam operações e delimitam transações.', 'Business rules stay separate from the interface and persistence. Services coordinate operations and define transactions.'), tags: ['Services', 'Transactions', 'Business rules'], code: '@Transactional(readOnly = true)\npatientService.findAll();', result: text('Regras de negócio → consulta', 'Business rules → query') },
  { label: 'PERSISTENCE', icon: '05', title: 'Repository / JPA', desc: text('Repositórios abstraem o acesso aos dados. O mapeamento das entidades conecta o domínio às tabelas e às consultas do banco.', 'Repositories abstract data access. Entity mapping connects the domain to database tables and queries.'), tags: ['Spring Data', 'JPA', 'Hibernate'], code: 'interface PatientRepository\n  extends JpaRepository<Patient, UUID>', result: text('Operação de domínio → consulta SQL', 'Domain operation → SQL query') },
  { label: 'DATABASE', icon: '06', title: 'PostgreSQL', desc: text('O banco relacional armazena os dados e seus relacionamentos. O resultado percorre as camadas de volta até a interface.', 'The relational database stores data and relationships. Results travel back through the layers to the interface.'), tags: ['SQL', 'Relations', 'Persistence'], code: 'SELECT * FROM patients;\n-- result → DTO → JSON → UI', result: text('Dados → resposta JSON → interface', 'Data → JSON response → interface') },
])
const active = computed(() => details.value[selected.value])
function stop() { clearInterval(timer); timer = undefined; running.value = false }
function choose(index: number) { stop(); selected.value = index }
function simulate() {
  if (running.value) { stop(); return }
  selected.value = 0; running.value = true
  timer = setInterval(() => {
    if (selected.value === details.value.length - 1) { stop(); return }
    selected.value++
  }, 1600)
}
onUnmounted(stop)
</script>

<template>
  <section id="arquitetura" class="container-px py-20 sm:py-28 border-b border-base-line">
    <div class="architecture-heading">
      <div class="max-w-2xl">
        <p class="section-eyebrow">{{ t('architecture.eyebrow') }}</p>
        <h2 class="section-heading">{{ text('Da interface ao banco de dados.', 'From interface to database.') }}</h2>
        <p class="mt-4 text-ink-muted">{{ text('Explore as responsabilidades de cada camada e acompanhe o caminho de uma requisição.', 'Explore each layer’s responsibilities and follow the path of a request.') }}</p>
      </div>
      <span class="architecture-badge">{{ text('ARQUITETURA EM CAMADAS', 'LAYERED ARCHITECTURE') }}</span>
    </div>

    <div class="architecture-console mt-10">
      <div class="architecture-toolbar">
        <div><span class="architecture-light"></span><span>{{ text('Fluxo de uma requisição', 'Request flow') }}</span><small>{{ text('Demonstração ilustrativa', 'Illustrative demonstration') }}</small></div>
        <button type="button" class="architecture-play" :aria-pressed="running" @click="simulate"><span aria-hidden="true">{{ running ? 'Ⅱ' : '▷' }}</span> {{ running ? text('Pausar', 'Pause') : text('Simular fluxo', 'Simulate flow') }}</button>
      </div>
      <div class="architecture-flow" :class="{ 'is-running': running }" role="group" :aria-label="text('Camadas da aplicação', 'Application layers')">
        <button v-for="(layer, i) in details" :key="layer.title" type="button" class="architecture-node" :class="{ 'is-active': selected === i, 'is-passed': running && selected > i }" :aria-pressed="selected === i" aria-controls="architecture-detail" @click="choose(i)">
          <span class="architecture-number">{{ layer.icon }}<span aria-hidden="true">{{ i === 5 ? '▤' : i === 0 ? '⌘' : '◇' }}</span></span>
          <span class="architecture-node-label">{{ layer.label }}</span>
          <strong>{{ layer.title }}</strong>
          <span class="architecture-node-bottom">{{ selected === i ? text('Explorando', 'Exploring') : text('Explorar camada', 'Explore layer') }} <span aria-hidden="true">↗</span></span>
        </button>
      </div>
      <div id="architecture-detail" class="architecture-detail">
        <div>
          <p class="section-eyebrow">{{ text('CAMADA', 'LAYER') }} {{ active.icon }} / 06</p>
          <h3>{{ active.title }}</h3>
          <p class="architecture-description">{{ active.desc }}</p>
          <div class="flex flex-wrap gap-2 mt-5"><span v-for="tag in active.tags" :key="tag" class="tag">{{ tag }}</span></div>
        </div>
        <div class="architecture-code">
          <div class="architecture-code-title"><span>{{ text('EXEMPLO DE FLUXO', 'FLOW EXAMPLE') }}</span><span aria-hidden="true">&lt;/&gt;</span></div>
          <pre :key="selected">{{ active.code }}</pre>
          <p><span aria-hidden="true">↳</span> {{ active.result }}</p>
        </div>
      </div>
      <div class="architecture-foundations">
        <div><span class="architecture-foundation-icon" aria-hidden="true">⬡</span><div><h4>{{ messages.architecture.infraTitle }}</h4><p>{{ messages.architecture.infraDesc }}</p></div></div>
        <div><span class="architecture-foundation-icon" aria-hidden="true">⇄</span><div><h4>{{ messages.architecture.ciTitle }}</h4><p>{{ messages.architecture.ciDesc }}</p></div></div>
        <div><span class="architecture-foundation-icon" aria-hidden="true">↗</span><div><h4>{{ messages.architecture.deployTitle }}</h4><p>{{ messages.architecture.deployDesc }}</p></div></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.architecture-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:24px}.architecture-badge{font:9px/1.6 'JetBrains Mono',monospace;letter-spacing:1.5px;color:#b5a1ce;border:1px solid #a78bfa30;padding:7px 10px;border-radius:5px;white-space:nowrap}
.architecture-console{border:1px solid #a78bfa30;border-radius:18px;overflow:hidden;background:radial-gradient(ellipse at 50% 0,#7634aa17,transparent 60%),#100b19;box-shadow:0 24px 70px #0003}.architecture-toolbar{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 26px;border-bottom:1px solid #a78bfa1c}.architecture-toolbar>div{display:flex;align-items:center;gap:10px;font-size:13px;color:#e1d6f0}.architecture-light{width:7px;height:7px;border-radius:100%;background:#b89af7;box-shadow:0 0 12px #aa74fa80}.architecture-toolbar small{font-size:10px;color:#8e7ea5;margin-left:8px}.architecture-play{display:flex;align-items:center;gap:9px;border:1px solid #aa85ed55;border-radius:7px;padding:8px 12px;font-size:11px;color:#dbc6ff;background:#a78bfa12}.architecture-play:hover{background:#a78bfa26}
.architecture-flow{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:16px;padding:32px 26px;position:relative}.architecture-node{position:relative;text-align:left;border:1px solid #a78bfa24;background:#171020;border-radius:10px;padding:15px 12px;display:flex;flex-direction:column;min-width:0;transition:border-color .25s,background .25s,box-shadow .25s}.architecture-node:not(:last-child)::after{content:'→';position:absolute;right:-15px;top:50%;color:#785a9b;font:14px monospace}.architecture-node:hover{border-color:#b78bf9a0;background:#231633}.architecture-node.is-active{border-color:#b792fa;background:linear-gradient(140deg,#38204f,#211431);box-shadow:0 0 24px #a06aff15}.architecture-number{display:flex;justify-content:space-between;align-items:center;color:#9988ae;font:10px monospace;margin-bottom:24px}.architecture-number>span{font-size:18px;color:#b99bdd}.is-active .architecture-number{color:#e5d1ff}.architecture-node-label{font:8px 'JetBrains Mono',monospace;letter-spacing:1px;color:#9d83b8;margin-bottom:8px}.architecture-node strong{font-size:12px;line-height:1.5;min-height:36px;color:#e0d7eb}.architecture-node-bottom{display:flex;justify-content:space-between;gap:4px;font-size:9px;color:#94819f;margin-top:18px}.is-active .architecture-node-bottom{color:#c8a5ff}.is-passed{border-color:#7bc5ae66}.is-running .is-active .architecture-number>span{animation:architecture-pulse 1.3s ease-in-out infinite}
.architecture-detail{display:grid;grid-template-columns:1.1fr 1fr;gap:36px;padding:30px;border-top:1px solid #a78bfa1c;background:#a78bfa04}.architecture-detail h3{font:500 24px 'Space Grotesk',sans-serif;margin:10px 0 12px;color:#f0e8fa}.architecture-description{color:#b4a8c4;font-size:13px;line-height:1.85;min-height:96px}.architecture-detail .section-eyebrow{font-size:9px}.architecture-code{border:1px solid #a78bfa20;border-radius:10px;background:#090611;align-self:center;overflow:hidden}.architecture-code-title{display:flex;justify-content:space-between;padding:12px 16px;border-bottom:1px solid #a78bfa1c;font:9px monospace;letter-spacing:1px;color:#8f7caa}.architecture-code pre{padding:24px 16px;font:11px/1.8 'JetBrains Mono',monospace;white-space:pre-wrap;overflow-wrap:anywhere;color:#d1b8f9;min-height:100px}.architecture-code>p{padding:12px 16px;color:#a1cbbb;font-size:10px;border-top:1px solid #a78bfa13}.architecture-code>p span{margin-right:6px}
.architecture-foundations{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border-top:1px solid #a78bfa1c}.architecture-foundations>div{display:flex;gap:12px;padding:23px}.architecture-foundations>div+div{border-left:1px solid #a78bfa1c}.architecture-foundation-icon{color:#b291e9;font-size:22px}.architecture-foundations h4{font:10px 'JetBrains Mono',monospace;color:#d2b7f7;text-transform:uppercase;letter-spacing:1px}.architecture-foundations p{font-size:11px;line-height:1.7;color:#a496b5;margin-top:7px}
@keyframes architecture-pulse{50%{opacity:.35;transform:scale(.85)}}
@media(max-width:1100px){.architecture-flow{grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.architecture-node:nth-child(3)::after{display:none}.architecture-number{margin-bottom:14px}.architecture-node strong{min-height:20px}.architecture-badge{display:none}}
@media(max-width:640px){.architecture-toolbar{padding:16px;align-items:flex-start}.architecture-toolbar>div{flex-wrap:wrap;font-size:11px;gap:7px;max-width:160px}.architecture-toolbar small{width:100%;margin-left:14px;font-size:9px}.architecture-play{white-space:nowrap;font-size:10px;padding:8px}.architecture-flow{grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;padding:20px 16px}.architecture-node:nth-child(3)::after{display:block}.architecture-node:nth-child(even)::after{display:none}.architecture-node:not(:last-child)::after{right:-13px}.architecture-detail{grid-template-columns:1fr;padding:24px 18px;gap:22px}.architecture-description{min-height:0}.architecture-foundations{grid-template-columns:1fr}.architecture-foundations>div{padding:18px}.architecture-foundations>div+div{border-left:0;border-top:1px solid #a78bfa1c}.architecture-code pre{font-size:10px}.architecture-heading .section-heading{font-size:30px}}
@media(prefers-reduced-motion:reduce){.architecture-node{transition:none}.is-running .is-active .architecture-number>span{animation:none}}
</style>
