import { useEffect } from 'react'

const WHATSAPP_URL = 'https://wa.me/5511958689822'

function applyHeroWhatsAppFix() {
  const actions = document.querySelector('.v6-actions')
  if (!actions) return

  const current = actions.querySelectorAll('.v6-btn')[1]
  if (!current) return

  let whatsapp = current
  if (current.tagName !== 'A') {
    whatsapp = document.createElement('a')
    whatsapp.className = current.className
    whatsapp.innerHTML = current.innerHTML
    current.replaceWith(whatsapp)
  }

  whatsapp.setAttribute('href', WHATSAPP_URL)
  whatsapp.setAttribute('target', '_blank')
  whatsapp.setAttribute('rel', 'noreferrer')
  whatsapp.dataset.koraxAction = 'whatsapp'

  const textNode = [...whatsapp.childNodes].find(
    node => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
  )
  if (textNode) textNode.textContent = ' Falar com a equipe no WhatsApp '
}

export default function HeroWhatsAppFix() {
  useEffect(() => {
    applyHeroWhatsAppFix()
    const timers = [120, 520, 900, 1700, 2300, 2700].map(delay =>
      window.setTimeout(applyHeroWhatsAppFix, delay),
    )
    return () => timers.forEach(window.clearTimeout)
  }, [])

  return null
}
