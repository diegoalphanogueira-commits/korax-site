import { useEffect } from 'react'

export default function PainCopyPatch() {
  useEffect(() => {
    const section = document.querySelector('.v5-pain')
    if (!section) return

    const title = section.querySelector('.v5-section-head h2')
    const paragraph = section.querySelector('.v5-section-head p')

    if (title) {
      title.innerHTML = 'Se o WhatsApp só anda quando alguém para tudo para responder, <em>seu atendimento não é um processo. É uma dependência.</em>'
    }

    if (paragraph) {
      paragraph.textContent = 'Cada conversa fica refém da disponibilidade da equipe. Enquanto isso, oportunidades esfriam, clientes esperam e o comercial perde ritmo.'
    }
  }, [])

  return null
}
