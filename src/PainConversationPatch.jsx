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

    let replayTimer
    const play = () => {
      clearTimeout(replayTimer)
      card.classList.remove('is-running')
      void card.offsetWidth
      card.classList.add('is-running')
    }

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry?.isIntersecting) {
        play()
      } else {
        card.classList.remove('is-running')
      }
    }, { threshold: 0.35 })

    observer.observe(card)

    return () => {
      clearTimeout(replayTimer)
      observer.disconnect()
      card.classList.remove('pain-whatsapp-live', 'is-running')
      card.innerHTML = originalHTML
    }
  }, [])

  return null
}
