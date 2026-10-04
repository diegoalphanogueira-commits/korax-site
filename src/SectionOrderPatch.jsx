import { useEffect } from 'react'

const CLONE_ATTR = 'data-founder-before-faq'
const ORIGINAL_ATTR = 'data-founder-original'

function clearMotionStyles(root) {
  if (!root) return

  const nodes = [root, ...root.querySelectorAll('[style]')]
  nodes.forEach(node => {
    if (!node?.style) return
    node.style.removeProperty('opacity')
    node.style.removeProperty('transform')
    node.style.removeProperty('will-change')
  })
}

function ensureFounderBeforeFaq() {
  const faq = document.querySelector('.v5-faq')
  if (!faq || !faq.parentNode) return

  const allFounders = [...document.querySelectorAll('.v5plus-founder')]
  let clone = document.querySelector(`[${CLONE_ATTR}="true"]`)
  const original = allFounders.find(section => section !== clone)

  if (!original && !clone) return

  if (!clone && original) {
    clone = original.cloneNode(true)
    clone.setAttribute(CLONE_ATTR, 'true')
    clone.removeAttribute(ORIGINAL_ATTR)
    clone.id = 'especialista'
    clearMotionStyles(clone)
  }

  // A cópia visual fica dentro do fluxo real da landing, imediatamente antes do FAQ.
  // O bloco React original permanece montado apenas para evitar conflito com o reconciliador,
  // mas fica invisível e sem o id de navegação.
  allFounders.forEach(section => {
    if (section === clone || section.getAttribute(CLONE_ATTR) === 'true') return
    section.setAttribute(ORIGINAL_ATTR, 'true')
    section.removeAttribute('id')
    section.style.display = 'none'
    section.setAttribute('aria-hidden', 'true')
  })

  if (clone) {
    clone.style.removeProperty('display')
    clone.removeAttribute('aria-hidden')
    clone.id = 'especialista'
    clearMotionStyles(clone)

    if (clone.parentNode !== faq.parentNode || clone.nextElementSibling !== faq) {
      faq.parentNode.insertBefore(clone, faq)
    }
  }
}

export default function SectionOrderPatch() {
  useEffect(() => {
    let scheduled = false

    const apply = () => {
      if (scheduled) return
      scheduled = true
      requestAnimationFrame(() => {
        scheduled = false
        ensureFounderBeforeFaq()
      })
    }

    ensureFounderBeforeFaq()

    // Alguns componentes e patches da landing renderizam novamente depois do mount.
    // O observer mantém a ordem correta sem depender de uma janela fixa de timers.
    const observer = new MutationObserver(apply)
    observer.observe(document.body, { childList: true, subtree: true })

    const timers = [100, 400, 1000, 2500, 5000, 9000].map(delay =>
      setTimeout(ensureFounderBeforeFaq, delay),
    )

    return () => {
      observer.disconnect()
      timers.forEach(clearTimeout)
    }
  }, [])

  return null
}
