import { useEffect } from 'react'

export default function FounderSectionPatch() {
  useEffect(() => {
    const section = document.querySelector('.v5plus-founder')
    if (!section) return

    const title = section.querySelector('.v5plus-founder-copy h2')
    if (title) {
      title.innerHTML = 'Diego Nogueira.<em>Estruturação digital e operação comercial.</em>'
    }

    const paragraphs = section.querySelectorAll('.v5plus-founder-copy > p')

    if (paragraphs[0]) {
      paragraphs[0].textContent = 'Atuo na interseção entre vendas, atendimento e tecnologia. Estruturo jornadas comerciais para transformar conversas no WhatsApp em atendimento, oportunidades e próximos passos claros.'
    }

    if (paragraphs[1]) {
      paragraphs[1].textContent = 'A Korax nasceu dessa experiência: entender onde a operação trava, organizar o processo e treinar a IA para atender com contexto, velocidade e direção comercial.'
    }

    const thesis = section.querySelector('.v5plus-founder-thesis strong')
    if (thesis) {
      thesis.textContent = 'Tecnologia sem processo só automatiza bagunça. Primeiro organizamos a operação. Depois a IA aprende a trabalhar dentro dela.'
    }
  }, [])

  return null
}
