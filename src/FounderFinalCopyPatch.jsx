import { useEffect } from 'react'

function applyFounderFinalCopy() {
  const section = document.querySelector('.v5plus-founder')
  if (!section) return

  const eyebrow = section.querySelector('.v5plus-founder-copy .v5plus-eyebrow')
  if (eyebrow) eyebrow.textContent = 'QUEM ESTÁ POR TRÁS DA ESTRATÉGIA'

  const title = section.querySelector('.v5plus-founder-copy h2')
  if (title) {
    title.innerHTML = '<span>Diego Nogueira</span><em>+7 anos transformando conversas em vendas.</em>'
  }
}

export default function FounderFinalCopyPatch() {
  useEffect(() => {
    applyFounderFinalCopy()

    // CommercialNarrativePatch reaplica textos até 1,5s após o mount.
    // Estes timers garantem que a versão final do bloco do Diego permaneça por último.
    const timers = [100, 500, 1000, 1700, 2300].map(delay =>
      setTimeout(applyFounderFinalCopy, delay),
    )

    return () => timers.forEach(clearTimeout)
  }, [])

  return null
}
