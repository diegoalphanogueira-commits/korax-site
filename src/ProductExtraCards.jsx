import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { BrainCircuit, Image as ImageIcon, MessageSquareText } from 'lucide-react'

const extraModules = [
  {
    title: 'Respostas rápidas',
    text: 'Padronize respostas frequentes e dê mais velocidade ao atendimento sem perder consistência.',
    Icon: MessageSquareText,
  },
  {
    title: 'Treinar IA',
    text: 'Organize conhecimento, regras, comportamento e contexto para a IA atuar do jeito da sua operação.',
    Icon: BrainCircuit,
  },
]

export default function ProductExtraCards() {
  const [grid, setGrid] = useState(null)

  useEffect(() => {
    const productGrid = document.querySelector('.v5-product-grid')
    if (productGrid) setGrid(productGrid)
  }, [])

  if (!grid) return null

  return createPortal(
    <>
      {extraModules.map(({ title, text, Icon }) => (
        <article className="v5-product-card korax-extra-product-card" key={title}>
          <div className="v5-product-copy">
            <span><Icon size={18} /></span>
            <strong>{title}</strong>
            <p>{text}</p>
          </div>

          <div className="v5-image-slot product korax-product-placeholder">
            <div className="v5-image-fallback">
              <span className="v5-image-icon"><ImageIcon size={24} /></span>
              <small>PRÓXIMA IMAGEM</small>
              <strong>{title}</strong>
              <p>Print da tela será adicionado na próxima etapa.</p>
            </div>
          </div>
        </article>
      ))}
    </>,
    grid,
  )
}
