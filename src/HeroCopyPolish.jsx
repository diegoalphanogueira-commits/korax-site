import { useEffect } from 'react'

function applyHeroCopyPolish() {
  const kicker = document.querySelector('.v6-kicker')
  if (kicker) {
    kicker.innerHTML = '<span></span> INFRAESTRUTURA COMERCIAL INTELIGENTE PARA WHATSAPP'
  }

  const title = document.querySelector('.v6-hero h1')
  if (title) {
    title.innerHTML = '<span>Seu WhatsApp não precisa de mais mensagens.</span> <em>Precisa de uma operação comercial.</em>'
  }

  const lead = document.querySelector('.v6-hero-copy > p')
  if (lead) {
    lead.textContent = 'A Korax centraliza atendimento, equipe, CRM, follow-up, agenda e IA em uma única operação comercial.'
  }
}

export default function HeroCopyPolish() {
  useEffect(() => {
    applyHeroCopyPolish()
    const timers = [100, 500, 1000, 1700, 2400].map(delay =>
      window.setTimeout(applyHeroCopyPolish, delay),
    )
    return () => timers.forEach(window.clearTimeout)
  }, [])

  return null
}
