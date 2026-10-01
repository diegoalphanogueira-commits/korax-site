import { useEffect } from 'react'

const WHATSAPP_NUMBER = '5511958689822'

const replaceTextNode = (element, text) => {
  if (!element) return
  const node = [...element.childNodes].find(item => item.nodeType === Node.TEXT_NODE && item.textContent.trim())
  if (node) node.textContent = ` ${text} `
  else element.append(document.createTextNode(` ${text} `))
}

const setDemoAction = (element, label) => {
  if (!element) return
  replaceTextNode(element, label)
  element.setAttribute('href', '#agendar-demonstracao')
  element.dataset.koraxAction = 'demo'
}

const setWhatsAppAction = (element, label) => {
  if (!element) return
  replaceTextNode(element, label)
  element.setAttribute('href', `https://wa.me/${WHATSAPP_NUMBER}`)
  element.dataset.koraxAction = 'whatsapp'
}

const apply = () => {
  // Header
  setDemoAction(document.querySelector('.v6-header-cta'), 'Agendar demonstração')
  setDemoAction(document.querySelector('.v5-header-cta'), 'Agendar demonstração')

  // Hero: only the two conversion routes.
  const heroButtons = [...document.querySelectorAll('.v6-actions .v6-btn')]
  setDemoAction(heroButtons[0], 'Agendar uma demonstração')
  setWhatsAppAction(heroButtons[1], 'Falar com a equipe no WhatsApp')

  // Mid-page AI section.
  setDemoAction(document.querySelector('.v5-frustration .v5-inline-link'), 'Agendar uma demonstração')

  // Replace the old "test the Korax" section with a sales/demo section.
  const testSection = document.querySelector('.v5-test')
  if (testSection) {
    testSection.id = 'demonstracao'

    const label = testSection.querySelector('.v5-label')
    const title = testSection.querySelector('.v5-test-copy h2')
    const paragraph = testSection.querySelector('.v5-test-copy > p')
    const small = testSection.querySelector('.v5-test-copy > small')
    const prompts = testSection.querySelector('.v5-test-prompts')
    const phone = testSection.querySelector('.v5-test-phone')
    const primary = testSection.querySelector('.v5-btn.white')

    if (label) label.textContent = 'CONHEÇA A KORAX NA SUA OPERAÇÃO'
    if (title) title.innerHTML = 'Veja como a Korax pode funcionar <em>na sua empresa.</em>'
    if (paragraph) paragraph.textContent = 'Fale com nossa equipe agora no WhatsApp ou preencha algumas informações para agendar uma demonstração orientada ao cenário real da sua operação.'
    if (small) small.textContent = 'Sem teste genérico: mostramos a Korax aplicada ao seu processo comercial.'
    if (prompts) prompts.style.display = 'none'
    if (phone) phone.style.display = 'none'

    setDemoAction(primary, 'Agendar uma demonstração')

    let whatsapp = testSection.querySelector('.korax-test-whatsapp')
    if (!whatsapp && primary) {
      whatsapp = document.createElement('a')
      whatsapp.className = 'v5-btn korax-test-whatsapp'
      primary.insertAdjacentElement('afterend', whatsapp)
    }
    setWhatsAppAction(whatsapp, 'Falar com a equipe no WhatsApp')
  }

  // Final conversion block.
  const final = document.querySelector('.v5-final')
  if (final) {
    const label = final.querySelector('.v5-label')
    const title = final.querySelector('h2')
    const paragraph = final.querySelector('p')
    const buttons = [...final.querySelectorAll('.v5-btn')]

    if (label) label.textContent = 'PRÓXIMO PASSO'
    if (title) title.innerHTML = 'Quer ver a Korax aplicada <em>à sua operação?</em>'
    if (paragraph) paragraph.textContent = 'Agende uma demonstração personalizada ou fale agora com nossa equipe no WhatsApp.'
    setDemoAction(buttons[0], 'Agendar demonstração')
    setWhatsAppAction(buttons[1], 'Falar no WhatsApp')
  }

  // Footer.
  setWhatsAppAction(document.querySelector('.v5plus-footer-cta'), 'Falar com a equipe no WhatsApp')

  // Safety net for legacy labels that can be restored by older narrative patches.
  const legacy = [
    'Testar a Korax',
    'Testar a Korax no WhatsApp',
    'Ver a Korax por dentro',
    'Ver a Korax atendendo agora',
    'Conversar com a Korax',
    'Conhecer a Korax',
    'Entender a implantação',
    'Coloque a Korax à prova',
    'Ver como a Korax conduz uma conversa',
  ]

  ;[...document.querySelectorAll('a,button')].forEach(element => {
    const text = element.textContent.replace(/\s+/g, ' ').trim()
    if (!legacy.includes(text)) return

    if (element.closest('.v5plus-footer')) {
      setWhatsAppAction(element, 'Falar com a equipe no WhatsApp')
      return
    }

    if (element.closest('.v5-final')) {
      const buttons = [...element.closest('.v5-final').querySelectorAll('.v5-btn')]
      if (element === buttons[0]) setDemoAction(element, 'Agendar demonstração')
      else setWhatsAppAction(element, 'Falar no WhatsApp')
      return
    }

    setDemoAction(element, 'Agendar uma demonstração')
  })
}

export default function ConversionConsistencyPatch() {
  useEffect(() => {
    const timers = [0, 120, 520, 900, 1700, 2300].map(delay => window.setTimeout(apply, delay))
    return () => timers.forEach(window.clearTimeout)
  }, [])

  return null
}
