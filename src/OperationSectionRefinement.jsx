import { useEffect } from 'react'

export default function OperationSectionRefinement() {
  useEffect(() => {
    const apply = () => {
      const label = document.querySelector('.v5-employee .v5-label')
      if (label) label.textContent = 'OPERAÇÃO COMERCIAL CENTRALIZADA'

      const title = document.querySelector('.v5-employee .v5-section-head h2')
      if (title) {
        title.innerHTML = 'Seu WhatsApp deixa de ser conversa solta. <em>Vira uma operação comercial.</em>'
      }

      const lead = document.querySelector('.v5-employee .v5-section-head p')
      if (lead) {
        lead.textContent = 'Conversas, equipe, setores, histórico, CRM, oportunidades e próximos passos conectados em um só lugar.'
      }
    }

    const frame = requestAnimationFrame(apply)
    return () => cancelAnimationFrame(frame)
  }, [])

  return null
}
