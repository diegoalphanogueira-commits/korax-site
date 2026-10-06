import { useEffect } from 'react'

export default function PainConversationPatch() {
  useEffect(() => {
    const card = document.querySelector('.v5-pain-visual')
    if (!card) return

    const originalHTML = card.innerHTML

    card.classList.add('pain-whatsapp-live')
    card.innerHTML = `
      <div class="pw-chat-shell" aria-label="Simulação de atendimento demorado pelo WhatsApp">
        <div class="pw-chat-header">
          <div class="pw-avatar">A</div>
          <div class="pw-chat-person">
            <strong>Atendimento</strong>
            <span>WhatsApp</span>
          </div>
          <div class="pw-status-wrap">
            <span class="pw-status pw-status-waiting"><i></i> aguardando resposta</span>
            <span class="pw-status pw-status-late">1h03 depois</span>
          </div>
        </div>

        <div class="pw-chat-body">
          <div class="pw-day">Hoje</div>

          <div class="pw-message incoming pw-first">
            <p>Oi! Vocês fazem avaliação? Queria saber valor e disponibilidade.</p>
            <small>09:12</small>
          </div>

          <div class="pw-message incoming pw-second pw-seq">
            <p>Oi, consegue me responder?</p>
            <small>09:18</small>
          </div>

          <div class="pw-wait pw-seq pw-wait-1">
            <span>15 min</span><div><i></i></div>
          </div>
          <div class="pw-wait pw-seq pw-wait-2">
            <span>37 min</span><div><i></i></div>
          </div>
          <div class="pw-wait pw-seq pw-wait-3">
            <span>1h03</span><div><i></i></div>
          </div>

          <div class="pw-message outgoing pw-company pw-seq">
            <p>Olá! Desculpe a demora. Fazemos avaliação sim. Posso verificar um horário para você?</p>
            <small>10:15 <b>✓✓</b></small>
          </div>

          <div class="pw-message incoming pw-lost pw-seq">
            <p>Poxa, obrigado. Já fechei com outra empresa.</p>
            <small>10:17</small>
          </div>
        </div>

        <div class="pw-result pw-seq">
          <strong>O interesse existia.</strong>
          <span>A resposta chegou tarde demais.</span>
        </div>
      </div>
    `

    const timers = []
    const mobile = window.matchMedia('(max-width: 680px)').matches

    const later = (fn, delay) => {
      const id = window.setTimeout(fn, delay)
      timers.push(id)
    }

    const important = (element, property, value) => {
      if (element) element.style.setProperty(property, value, 'important')
    }

    const resetMobile = () => {
      if (!mobile) return

      card.querySelectorAll('.pw-seq').forEach((element) => {
        important(element, 'opacity', '0')
        important(element, 'transform', 'translateY(8px)')
        important(element, 'max-height', '0px')
        important(element, 'overflow', 'hidden')
      })

      card.querySelectorAll('.pw-message.pw-seq').forEach((element) => {
        important(element, 'padding-top', '0px')
        important(element, 'padding-bottom', '0px')
        important(element, 'border-width', '0px')
      })

      card.querySelectorAll('.pw-wait.pw-seq').forEach((element) => {
        important(element, 'padding-top', '0px')
        important(element, 'padding-bottom', '0px')
      })

      const result = card.querySelector('.pw-result')
      important(result, 'padding-top', '0px')
      important(result, 'border-top-color', 'transparent')

      const waiting = card.querySelector('.pw-status-waiting')
      const late = card.querySelector('.pw-status-late')
      important(waiting, 'display', 'inline-flex')
      important(waiting, 'opacity', '1')
      important(waiting, 'transform', 'translateY(0)')
      important(late, 'display', 'inline-flex')
      important(late, 'opacity', '0')
      important(late, 'transform', 'translateY(4px)')

      card.querySelectorAll('.pw-wait i').forEach((bar) => {
        important(bar, 'width', '0%')
        bar.style.transition = 'width .55s ease'
      })
    }

    const revealMessage = (selector) => {
      const element = card.querySelector(selector)
      if (!element) return
      element.style.transition = 'opacity .34s ease, transform .38s cubic-bezier(.22,1,.36,1), max-height .42s ease, padding .32s ease'
      important(element, 'max-height', '170px')
      important(element, 'padding-top', '10px')
      important(element, 'padding-bottom', '15px')
      important(element, 'border-width', '1px')
      important(element, 'opacity', '1')
      important(element, 'transform', 'translateY(0)')
    }

    const revealWait = (selector, width) => {
      const element = card.querySelector(selector)
      if (!element) return
      element.style.transition = 'opacity .28s ease, transform .3s ease, max-height .3s ease, padding .25s ease'
      important(element, 'max-height', '22px')
      important(element, 'padding-top', '2px')
      important(element, 'padding-bottom', '2px')
      important(element, 'opacity', '1')
      important(element, 'transform', 'translateY(0)')
      later(() => important(element.querySelector('i'), 'width', width), 90)
    }

    const revealResult = () => {
      const element = card.querySelector('.pw-result')
      if (!element) return
      element.style.transition = 'opacity .34s ease, transform .38s ease, max-height .4s ease, padding .3s ease'
      important(element, 'max-height', '100px')
      important(element, 'padding-top', '15px')
      important(element, 'border-top-color', 'rgba(255,255,255,.09)')
      important(element, 'opacity', '1')
      important(element, 'transform', 'translateY(0)')
    }

    const playMobileSequence = () => {
      resetMobile()
      later(() => revealMessage('.pw-second'), 550)
      later(() => revealWait('.pw-wait-1', '28%'), 1150)
      later(() => revealWait('.pw-wait-2', '58%'), 1850)
      later(() => revealWait('.pw-wait-3', '94%'), 2550)
      later(() => {
        important(card.querySelector('.pw-status-waiting'), 'opacity', '0')
        important(card.querySelector('.pw-status-waiting'), 'transform', 'translateY(-4px)')
      }, 3200)
      later(() => {
        important(card.querySelector('.pw-status-late'), 'opacity', '1')
        important(card.querySelector('.pw-status-late'), 'transform', 'translateY(0)')
      }, 3450)
      later(() => revealMessage('.pw-company'), 3500)
      later(() => revealMessage('.pw-lost'), 4500)
      later(revealResult, 5300)
    }

    const clearTimers = () => {
      while (timers.length) window.clearTimeout(timers.pop())
    }

    const play = () => {
      clearTimers()
      card.classList.remove('is-running')
      void card.offsetWidth
      card.classList.add('is-running')
      if (mobile) playMobileSequence()
    }

    resetMobile()

    let observer
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) play()
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
      observer.observe(card)
    }

    // Fallback for Instagram/iOS webviews where IntersectionObserver can be unreliable.
    later(() => {
      const rect = card.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) play()
    }, 900)

    return () => {
      clearTimers()
      observer?.disconnect()
      card.classList.remove('pain-whatsapp-live', 'is-running')
      card.innerHTML = originalHTML
    }
  }, [])

  return null
}
