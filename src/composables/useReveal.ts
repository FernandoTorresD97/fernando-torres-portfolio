import { onMounted, onUnmounted, ref } from 'vue'

export function useReveal() {
  const root = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const els = root.value?.querySelectorAll('.reveal') ?? []
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    els.forEach((el) => observer?.observe(el))
  })

  onUnmounted(() => observer?.disconnect())

  return { root }
}
