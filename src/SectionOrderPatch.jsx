import { useEffect } from 'react'

function reorderFinalSections() {
  const founder = document.querySelector('.v5plus-founder')
  const faq = document.querySelector('.v5-faq')

  if (!founder || !faq || !faq.parentNode) return

  // A seção do Diego deve aparecer imediatamente antes do FAQ.
  if (founder.nextElementSibling !== faq) {
    faq.parentNode.insertBefore(founder, faq)
  }
}

export default function SectionOrderPatch() {
  useEffect(() => {
    reorderFinalSections()

    // Garante a ordem final mesmo após patches que rodam alguns ms depois do mount.
    const timers = [100, 500, 1200, 2200].map(delay =>
      setTimeout(reorderFinalSections, delay),
    )

    return () => timers.forEach(clearTimeout)
  }, [])

  return null
}
