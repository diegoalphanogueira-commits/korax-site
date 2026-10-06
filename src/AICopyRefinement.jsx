import { useLayoutEffect } from 'react'

export default function AICopyRefinement() {
  useLayoutEffect(() => {
    const section = document.querySelector('.v5-frustration')
    if (!section) return

    const label = section.querySelector('.v5-label')
    const title = section.querySelector('.v5-frustration-copy h2')
    const paragraph = section.querySelector('.v5-frustration-copy p')

    if (label) label.textContent = 'IA QUE TRABALHA DENTRO DO PROCESSO'

    if (title) {
      title.innerHTML = 'Chatbot responde perguntas. <em>A Korax conduz oportunidades.</em>'
    }

    if (paragraph) {
      paragraph.textContent = 'Sua IA aprende como sua empresa atende, entende o contexto da conversa, qualifica o cliente e conduz cada oportunidade até o próximo passo.'
    }
  }, [])

  return null
}
