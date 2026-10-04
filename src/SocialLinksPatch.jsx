import { useEffect } from 'react'

const SOCIALS = [
  {
    label: 'Instagram Diego Nogueira',
    href: 'https://www.instagram.com/diegometaforma/',
    mark: 'IG',
  },
  {
    label: 'Instagram Korax',
    href: 'https://www.instagram.com/usekorax/',
    mark: 'IG',
  },
  {
    label: 'YouTube Korax',
    href: 'https://www.youtube.com/@usekorax',
    mark: 'YT',
  },
]

export default function SocialLinksPatch() {
  useEffect(() => {
    const apply = () => {
      const container = document.querySelector('.v5plus-socials')
      if (!container) return

      const anchors = [...container.querySelectorAll('a')]

      SOCIALS.forEach((social, index) => {
        const anchor = anchors[index]
        if (!anchor) return

        if (anchor.href !== social.href) anchor.href = social.href
        if (anchor.target !== '_blank') anchor.target = '_blank'
        if (anchor.rel !== 'noopener noreferrer') anchor.rel = 'noopener noreferrer'
        if (anchor.getAttribute('aria-label') !== social.label) {
          anchor.setAttribute('aria-label', social.label)
        }
        if (anchor.title !== social.label) anchor.title = social.label

        const mark = anchor.querySelector('span')
        if (mark && mark.textContent !== social.mark) mark.textContent = social.mark
      })

      anchors.slice(SOCIALS.length).forEach(anchor => anchor.remove())
    }

    // O rodapé já é renderizado junto com a página. Aplicamos uma vez e
    // repetimos em janelas curtas apenas para cobrir patches assíncronos.
    // Não usamos MutationObserver aqui para evitar um loop de mutações no DOM.
    apply()
    const timers = [250, 1000, 2500].map(delay => setTimeout(apply, delay))

    return () => timers.forEach(clearTimeout)
  }, [])

  return null
}
