import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { BrainCircuit, Image as ImageIcon, MessageSquareText } from 'lucide-react'

const extraModules = [
  {
    title: 'Respostas rápidas',
    text: 'Padronize respostas frequentes e dê mais velocidade ao atendimento sem perder consistência.',
    src: './media/product/respostas-rapidas.webp',
    Icon: MessageSquareText,
  },
  {
    title: 'Treinar IA',
    text: 'Organize conhecimento, regras, comportamento e contexto para a IA atuar do jeito da sua operação.',
    src: './media/product/treinar-ia.webp',
    Icon: BrainCircuit,
  },
]

function ExtraProductImage({ src, title }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="v5-image-slot product">
      {!failed ? (
        <img src={src} alt={`${title} na Korax`} onError={() => setFailed(true)} />
      ) : (
        <div className="v5-image-fallback">
          <span className="v5-image-icon"><ImageIcon size={24} /></span>
          <small>TELA DA KORAX</small>
          <strong>{title}</strong>
        </div>
      )}
    </div>
  )
}

export default function ProductExtraCards() {
  const [grid, setGrid] = useState(null)

  useEffect(() => {
    const productGrid = document.querySelector('.v5-product-grid')
    if (productGrid) setGrid(productGrid)
  }, [])

  if (!grid) return null

  return createPortal(
    <>
      {extraModules.map(({ title, text, src, Icon }) => (
        <article className="v5-product-card korax-extra-product-card" key={title}>
          <div className="v5-product-copy">
            <span><Icon size={18} /></span>
            <strong>{title}</strong>
            <p>{text}</p>
          </div>

          <ExtraProductImage src={src} title={title} />
        </article>
      ))}
    </>,
    grid,
  )
}
