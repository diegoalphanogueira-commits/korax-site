import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function PainFifthStepPatch() {
  const [target, setTarget] = useState(null)

  useEffect(() => {
    setTarget(document.querySelector('.v5-pain-list'))
  }, [])

  if (!target) return null

  return createPortal(
    <article className="v5-pain-item v5-pain-item-paid">
      <span>05</span>
      <div>
        <strong>Você paga para trazer. O concorrente fecha.</strong>
        <p>O lead chegou pelo seu anúncio, mas a demora no WhatsApp transforma seu investimento em oportunidade para outra empresa.</p>
      </div>
    </article>,
    target,
  )
}
