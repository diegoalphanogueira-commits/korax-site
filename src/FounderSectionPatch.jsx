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
      paragraphs[0].textContent = 'Atuo na interseção entre vendas, atendimento e tecnologia, estruturando jornadas comerciais que transformam conversas no WhatsApp em próximos passos claros.'
    }

    if (paragraphs[1]) {
      paragraphs[1].textContent = 'A Korax nasceu dessa prática: entender onde o atendimento trava, organizar o processo e treinar a IA para conduzir cada cliente com contexto, velocidade e direção comercial.'
    }

    const thesis = section.querySelector('.v5plus-founder-thesis strong')
    if (thesis) {
      thesis.textContent = 'Tecnologia sem processo só automatiza bagunça. Primeiro organizamos a operação. Depois treinamos a IA para trabalhar dentro dela.'
    }
  }, [])

  return null
}
