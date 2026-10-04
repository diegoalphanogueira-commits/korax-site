import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  Check,
  Image as ImageIcon,
  Mail,
  MessageCircle,
  Route,
  Sparkles,
} from 'lucide-react'
import KoraxLandingV5 from './KoraxLandingV5.jsx'

const ease = [0.22, 1, 0.36, 1]
const WHATSAPP_URL = '#whatsapp-demo'

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease },
}

function CaseImage({ src, title }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="v5-image-slot case">
      {!failed ? (
        <img src={src} alt={title} onError={() => setFailed(true)} />
      ) : (
        <div className="v5-image-fallback">
          <span className="v5-image-icon"><ImageIcon size={24} /></span>
          <small>EVIDÊNCIA DO CASE</small>
          <strong>{title}</strong>
        </div>
      )}
    </div>
  )
}

function SiteContentUpgrade() {
  const [caseGrid, setCaseGrid] = useState(null)

  useEffect(() => {
    const transportButton = [...document.querySelectorAll('.v5-segment-tabs button')]
      .find(button => button.textContent?.includes('Transportadoras'))

    const previousTransportDisplay = transportButton?.style.display || ''
    if (transportButton) transportButton.style.display = 'none'

    const grid = document.querySelector('.v5-case-grid')
    if (!grid) return () => {
      if (transportButton) transportButton.style.display = previousTransportDisplay
    }

    const originalChildren = [...grid.children]
    originalChildren.forEach(child => { child.style.display = 'none' })

    const previousGridTemplate = grid.style.gridTemplateColumns
    const syncCaseGrid = () => {
      grid.style.gridTemplateColumns = window.innerWidth <= 1020
        ? '1fr'
        : 'repeat(3, minmax(0, 1fr))'
    }

    syncCaseGrid()
    window.addEventListener('resize', syncCaseGrid)
    setCaseGrid(grid)

    return () => {
      window.removeEventListener('resize', syncCaseGrid)
      grid.style.gridTemplateColumns = previousGridTemplate
      originalChildren.forEach(child => { child.style.display = '' })
      if (transportButton) transportButton.style.display = previousTransportDisplay
    }
  }, [])

  if (!caseGrid) return null

  const cases = [
    {
      tag: 'CASE 01 · SEGUROS',
      name: 'Pensou Seguros',
      problem: 'Estruturar atendimento, coleta inicial, oportunidades e acompanhamento dentro de uma operação comercial conectada.',
      work: ['Jornada de atendimento', 'Qualificação', 'CRM e oportunidades', 'Follow-up', 'Transferência com contexto'],
      image: './media/cases/pensou-seguros.webp',
      status: 'operação real implantada e em evolução contínua',
    },
    {
      tag: 'CASE 02 · JOIAS E VAREJO',
      name: 'Gold Alianças',
      problem: 'Receber os leads gerados pelo tráfego pago e conduzir a conversa comercial até uma decisão de compra sem deixar o cliente parado no WhatsApp.',
      work: ['Atendimento imediato', 'Envio de catálogo', 'Identificação da compra', 'Consulta de frete', 'Condução para fechamento', 'Follow-up'],
      image: './media/cases/gold-aliancas.webp',
      status: 'jornada comercial treinada para leads de tráfego pago',
    },
    {
      tag: 'CASE 03 · TRANSPORTADORA',
      name: 'Transpox',
      problem: 'Atender empresas que chegam para cotar frete, coletar as informações necessárias e transformar a solicitação em uma oportunidade organizada para o comercial.',
      work: ['Origem e destino', 'Tipo de carga', 'Volume e prazo', 'Dados para cotação', 'CRM e oportunidade', 'Follow-up'],
      image: './media/cases/transpox.webp',
      status: 'triagem e cotação de frete estruturadas no WhatsApp',
    },
  ]

  return createPortal(
    <>
      {cases.map((item, index) => (
        <motion.article
          className="v5-case-card"
          key={item.name}
          {...reveal}
          transition={{ ...reveal.transition, delay: index * 0.06 }}
        >
          <CaseImage src={item.image} title={item.name} />
          <div className="v5-case-copy">
            <small>{item.tag}</small>
            <h3>{item.name}</h3>
            <p>{item.problem}</p>
            <div className="v5-case-tags">
              {item.work.map(tag => <span key={tag}><Check size={12} /> {tag}</span>)}
            </div>
            <em>{item.status}</em>
          </div>
        </motion.article>
      ))}
    </>,
    caseGrid,
  )
}

function FounderPhoto() {
  const [failed, setFailed] = useState(false)

  return (
    <div className="v5plus-founder-photo founder-v3-photo">
      {!failed ? (
        <img
          src="./media/founder/diego-nogueira.webp"
          alt="Diego Nogueira, cofundador da Korax"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="v5plus-founder-fallback">
          <span>DN</span>
          <small>FOTO DO ESPECIALISTA</small>
          <strong>Diego Nogueira</strong>
          <p>Adicione a imagem em<br /><code>public/media/founder/diego-nogueira.webp</code></p>
        </div>
      )}
      <div className="v5plus-founder-badge founder-v3-badge">
        <BadgeCheck size={16} />
        <span><small>COFUNDADOR</small>Korax</span>
      </div>
    </div>
  )
}

function FounderSection() {
  const journey = [
    {
      label: '01',
      title: 'Marketing e aquisição',
      text: 'Entender como a atenção vira oportunidade e como posicionamento, conteúdo e aquisição alimentam o comercial.',
    },
    {
      label: '02',
      title: 'Vendas e operação',
      text: 'Transformar conversa em processo: qualificação, responsáveis, CRM, follow-up e próximos passos claros.',
    },
    {
      label: '03',
      title: 'Tecnologia para escalar',
      text: 'Aplicar automação e IA dentro de uma operação que já tem lógica, contexto e objetivo comercial.',
    },
  ]

  return (
    <section className="v5plus-founder founder-v3" id="especialista">
      <div className="v5-shell">
        <div className="v5plus-founder-grid founder-v3-grid">
          <motion.div className="v5plus-founder-media founder-v3-media" {...reveal}>
            <FounderPhoto />
          </motion.div>

          <motion.div className="v5plus-founder-copy founder-v3-copy" {...reveal}>
            <span className="v5plus-eyebrow founder-v3-eyebrow">QUEM ESTÁ POR TRÁS DA KORAX</span>

            <h2 className="founder-v3-title">
              <span>Diego Nogueira.</span>
              <em>+7 anos transformando conversas em vendas pelo WhatsApp.</em>
            </h2>

            <p className="v5plus-founder-intro founder-v3-lead">
              Há mais de 7 anos atuo entre marketing, vendas e tecnologia. Nesse caminho, aprendi uma coisa simples: gerar atenção não basta — é preciso transformar cada conversa em um próximo passo comercial.
            </p>

            <p className="founder-v3-story">
              Hoje ajudo empresas a organizar essa jornada de ponta a ponta: posicionamento, atendimento, qualificação, CRM, follow-up, automação e inteligência artificial trabalhando dentro do mesmo processo. A Korax nasceu justamente dessa prática.
            </p>

            <div className="founder-v3-meta" aria-label="Experiência de Diego Nogueira">
              <span><strong>+7 anos</strong> em marketing e vendas</span>
              <span><strong>Operação real</strong> com empresas</span>
              <span><strong>Cofundador</strong> da Korax</span>
            </div>

            <div className="founder-v3-thesis">
              <Sparkles size={18} />
              <p><small>MINHA VISÃO</small><strong>Tecnologia não conserta uma operação desorganizada. Primeiro estruturamos o processo. Depois usamos tecnologia para dar escala.</strong></p>
            </div>
          </motion.div>
        </div>

        <div className="founder-v3-journey">
          {journey.map((item, index) => (
            <motion.article key={item.title} {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }}>
              <span>{item.label}</span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProfessionalFooter() {
  const product = [
    ['Como funciona', '#como-funciona'],
    ['Diferencial', '#diferencial'],
    ['Segmentos', '#segmentos'],
    ['Cases', '#cases'],
    ['Treinamento', '#treinamento'],
  ]

  const solution = [
    'Atendimento com IA',
    'Qualificação comercial',
    'CRM e oportunidades',
    'Agenda e confirmação',
    'Follow-up automático',
    'Transferência com contexto',
  ]

  const socials = [
    ['IG', 'Instagram', '#'],
    ['IN', 'LinkedIn', '#'],
    ['YT', 'YouTube', '#'],
  ]

  return (
    <footer className="v5plus-footer">
      <div className="v5plus-footer-glow" />
      <div className="v5-shell">
        <div className="v5plus-footer-top">
          <div className="v5plus-footer-brand">
            <a className="v5plus-logo" href="#inicio" aria-label="Korax - início">
              <span>K</span><strong>KORAX</strong>
            </a>
            <h3>Seu WhatsApp deixa de ser só conversa e passa a operar.</h3>
            <p>Funcionário digital, IA humanizada e operação comercial conectada para empresas que vendem e atendem pelo WhatsApp.</p>
            <a className="v5plus-footer-cta" href={WHATSAPP_URL}>
              Testar a Korax no WhatsApp <ArrowRight size={16} />
            </a>
          </div>

          <div className="v5plus-footer-col">
            <small>PRODUTO</small>
            {product.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          </div>

          <div className="v5plus-footer-col">
            <small>SOLUÇÃO</small>
            {solution.map(label => <span key={label}>{label}</span>)}
          </div>

          <div className="v5plus-footer-col contact">
            <small>CONTATO</small>
            <a href="mailto:contato@usekorax.com"><Mail size={15} /> contato@usekorax.com</a>
            <a href="#especialista">Diego Nogueira <ArrowUpRight size={14} /></a>
            <div className="v5plus-socials">
              {socials.map(([mark, label, href]) => (
                <a key={label} href={href} aria-label={label} title={`${label} — link será adicionado`}><span>{mark}</span></a>
              ))}
            </div>
          </div>
        </div>

        <div className="v5plus-footer-bottom">
          <span>© {new Date().getFullYear()} Korax. Todos os direitos reservados.</span>
          <div><a href="#">Política de Privacidade</a><a href="#">Termos de Uso</a></div>
        </div>
      </div>
    </footer>
  )
}

export default function KoraxLandingV5Plus() {
  return (
    <>
      <KoraxLandingV5 />
      <SiteContentUpgrade />
      <FounderSection />
      <ProfessionalFooter />
    </>
  )
}
