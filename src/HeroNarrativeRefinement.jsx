import { useEffect } from 'react'

export default function HeroNarrativeRefinement() {
  useEffect(() => {
    const apply = () => {
      const kicker = document.querySelector('.v6-kicker')
      if (kicker) kicker.innerHTML = '<span></span> OPERAÇÃO COMERCIAL INTELIGENTE NO WHATSAPP'

      const title = document.querySelector('.v6-hero h1')
      if (title) {
        title.innerHTML = '<span>Seu WhatsApp já faz parte do comercial.</span> <em>A Korax organiza a operação.</em>'
      }

      const lead = document.querySelector('.v6-hero-copy > p')
      if (lead) {
        lead.textContent = 'Centralize atendimento, equipe, CRM, oportunidades, follow-up, agenda e IA em um único ambiente comercial.'
      }

      const proof = document.querySelector('.v6-proof')
      if (proof) {
        proof.innerHTML = '<span>Atendimento</span><span>CRM + pipeline</span><span>Follow-up + agenda</span><span>IA na operação</span>'
      }
    }

    const frame = requestAnimationFrame(apply)
    return () => cancelAnimationFrame(frame)
  }, [])

  return null
}
