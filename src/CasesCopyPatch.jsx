import { useEffect } from 'react'

export default function CasesCopyPatch() {
  useEffect(() => {
    const section = document.querySelector('.v5-cases .v5-section-head')
    if (!section) return

    const title = section.querySelector('h2')
    const description = section.querySelector('p')

    if (title) {
      title.innerHTML = 'Não é promessa. <em>É a Korax dentro da operação.</em>'
    }

    if (description) {
      description.textContent = 'Veja como empresas de diferentes segmentos aplicam a Korax para atender, qualificar, organizar oportunidades e conduzir clientes ao próximo passo.'
    }
  }, [])

  return null
}
