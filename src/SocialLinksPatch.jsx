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
        anchor.href = social.href
        anchor.target = '_blank'
        anchor.rel = 'noopener noreferrer'
        anchor.setAttribute('aria-label', social.label)
        anchor.title = social.label
        const mark = anchor.querySelector('span')
        if (mark) mark.textContent = social.mark
      })

      anchors.slice(SOCIALS.length).forEach(anchor => anchor.remove())
    }

    apply()
    const observer = new MutationObserver(apply)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  return null
}
