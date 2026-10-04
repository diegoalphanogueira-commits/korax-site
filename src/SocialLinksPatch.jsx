import { useEffect } from 'react'

const INSTAGRAM_ICON = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/>
    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
    <circle cx="17.4" cy="6.7" r="1.1" fill="currentColor"/>
  </svg>
`

const SOCIALS = [
  {
    label: 'Instagram Diego Nogueira',
    href: 'https://www.instagram.com/diegometaforma/',
    network: 'Instagram',
    handle: '@diegometaforma',
    icon: INSTAGRAM_ICON,
    className: 'instagram',
  },
  {
    label: 'Instagram Korax',
    href: 'https://www.instagram.com/usekorax/',
    network: 'Instagram',
    handle: '@usekorax',
    icon: INSTAGRAM_ICON,
    className: 'instagram',
  },
]

const STYLE_ID = 'korax-social-buttons-style'

function ensureStyles() {
  if (document.getElementById(STYLE_ID)) return

  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = `
    .v5plus-socials{
      display:grid!important;
      grid-template-columns:1fr!important;
      gap:9px!important;
      margin-top:12px!important;
      width:100%;
      max-width:240px;
    }
    .v5plus-socials a{
      width:100%!important;
      height:auto!important;
      min-height:48px;
      display:flex!important;
      align-items:center!important;
      justify-content:flex-start!important;
      gap:10px;
      padding:9px 12px!important;
      border-radius:14px!important;
      color:#d8e2ff!important;
      background:rgba(255,255,255,.035)!important;
      border:1px solid rgba(255,255,255,.10)!important;
      text-decoration:none;
      box-sizing:border-box;
    }
    .v5plus-socials a:hover{
      transform:translateY(-2px)!important;
      border-color:rgba(104,154,255,.42)!important;
      background:rgba(255,255,255,.06)!important;
    }
    .v5plus-social-icon{
      width:30px;
      height:30px;
      border-radius:9px;
      display:grid;
      place-items:center;
      flex:0 0 auto;
      color:#fff;
    }
    .v5plus-social-icon svg{
      width:17px;
      height:17px;
      display:block;
    }
    .v5plus-socials a.social-instagram .v5plus-social-icon{
      background:linear-gradient(135deg,#833ab4,#fd1d1d 58%,#fcb045);
      box-shadow:0 7px 18px rgba(225,48,108,.18);
    }
    .v5plus-social-copy{
      min-width:0;
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      line-height:1.15;
    }
    .v5plus-social-copy strong{
      font-size:10px;
      color:#fff;
      font-weight:800;
      letter-spacing:.01em;
    }
    .v5plus-social-copy small{
      margin-top:3px;
      font-size:9px;
      color:#8392b8;
      font-weight:650;
    }
    @media(max-width:680px){
      .v5plus-socials{max-width:none;grid-template-columns:1fr 1fr!important;}
    }
  `
  document.head.appendChild(style)
}

function renderSocial(anchor, social) {
  anchor.href = social.href
  anchor.target = '_blank'
  anchor.rel = 'noopener noreferrer'
  anchor.setAttribute('aria-label', social.label)
  anchor.title = social.label
  anchor.classList.remove('social-instagram', 'social-youtube')
  anchor.classList.add(`social-${social.className}`)

  anchor.innerHTML = `
    <span class="v5plus-social-icon">${social.icon}</span>
    <span class="v5plus-social-copy">
      <strong>${social.network}</strong>
      <small>${social.handle}</small>
    </span>
  `
}

export default function SocialLinksPatch() {
  useEffect(() => {
    const apply = () => {
      ensureStyles()

      const container = document.querySelector('.v5plus-socials')
      if (!container) return

      const anchors = [...container.querySelectorAll('a')]
      SOCIALS.forEach((social, index) => {
        const anchor = anchors[index]
        if (anchor) renderSocial(anchor, social)
      })

      anchors.slice(SOCIALS.length).forEach(anchor => anchor.remove())
    }

    apply()
    const timers = [250, 1000, 2500].map(delay => setTimeout(apply, delay))

    return () => timers.forEach(clearTimeout)
  }, [])

  return null
}
