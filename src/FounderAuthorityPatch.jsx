import { useEffect } from 'react'

export default function FounderAuthorityPatch() {
  useEffect(() => {
    const section = document.querySelector('.v5plus-founder')
    if (!section) return

    section.classList.add('v5plus-founder-authority-v2')

    const eyebrow = section.querySelector('.v5plus-eyebrow')
    if (eyebrow) eyebrow.textContent = 'ESTRATÉGIA, VENDAS E OPERAÇÃO'

    const title = section.querySelector('.v5plus-founder-copy h2')
    if (title) {
      title.innerHTML = '<span>Diego Nogueira.</span><em>Marketing, estratégia comercial e tecnologia aplicada à operação.</em>'
    }

    const intro = section.querySelector('.v5plus-founder-intro')
    if (intro) {
      intro.textContent = 'Há mais de 7 anos, Diego atua transformando conversas em vendas — conectando marketing, atendimento e comercial para que cada oportunidade tenha direção, responsável e próximo passo.'
    }

    const paragraphs = [...section.querySelectorAll('.v5plus-founder-copy > p:not(.v5plus-founder-intro)')]
    if (paragraphs[0]) {
      paragraphs[0].textContent = 'Na Korax, leva essa experiência para a operação: centraliza o WhatsApp, organiza processos, estrutura CRM e follow-up e aplica inteligência artificial onde ela realmente gera eficiência.'
    }
    if (paragraphs[1]) paragraphs[1].style.display = 'none'

    const copy = section.querySelector('.v5plus-founder-copy')
    if (copy && !copy.querySelector('.v5plus-founder-authority')) {
      const authority = document.createElement('div')
      authority.className = 'v5plus-founder-authority'
      authority.innerHTML = `
        <div><strong>+7 anos</strong><span>marketing, vendas e operação</span></div>
        <div><strong>WhatsApp comercial</strong><span>jornada, CRM e follow-up</span></div>
        <div><strong>Cofundador da Korax</strong><span>estratégia e implantação</span></div>
      `
      const thesis = copy.querySelector('.v5plus-founder-thesis')
      copy.insertBefore(authority, thesis || null)
    }

    const thesisLabel = section.querySelector('.v5plus-founder-thesis small')
    if (thesisLabel) thesisLabel.textContent = 'A VISÃO POR TRÁS DA KORAX'
    const thesis = section.querySelector('.v5plus-founder-thesis strong')
    if (thesis) {
      thesis.textContent = 'Tecnologia sem processo só automatiza bagunça. Primeiro organizamos a operação. Depois usamos tecnologia para dar escala ao que funciona.'
    }

    const pills = section.querySelector('.v5plus-founder-pills')
    if (pills) pills.style.display = 'none'

    const pillarCopies = [
      ['Marketing e aquisição', 'Entender de onde vem o lead e transformar atenção em oportunidade comercial.'],
      ['Operação comercial', 'Estruturar processo, responsáveis, pipeline, follow-up e próximos passos.'],
      ['IA aplicada ao processo', 'Automatizar o que faz sentido sem perder contexto, controle e experiência humana.'],
    ]

    const pillars = [...section.querySelectorAll('.v5plus-founder-pillars article')]
    pillars.forEach((pillar, index) => {
      const content = pillarCopies[index]
      if (!content) return
      const strong = pillar.querySelector('strong')
      const p = pillar.querySelector('p')
      if (strong) strong.textContent = content[0]
      if (p) p.textContent = content[1]
    })

    const fallback = section.querySelector('.v5plus-founder-fallback')
    if (fallback) {
      const small = fallback.querySelector('small')
      const strong = fallback.querySelector('strong')
      if (small) small.textContent = 'COFUNDADOR DA KORAX'
      if (strong) strong.textContent = 'Diego Nogueira'
    }
  }, [])

  return null
}
