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
      image: '/media/cases/pensou-seguros.webp',
      status: 'operação real implantada e em evolução contínua',
    },
    {
      tag: 'CASE 02 · JOIAS E VAREJO',
      name: 'Gold Alianças',
      problem: 'Receber os leads gerados pelo tráfego pago e conduzir a conversa comercial até uma decisão de compra sem deixar o cliente parado no WhatsApp.',
      work: ['Atendimento imediato', 'Envio de catálogo', 'Identificação da compra', 'Consulta de frete', 'Condução para fechamento', 'Follow-up'],
      image: '/media/cases/gold-aliancas.webp',
      status: 'jornada comercial treinada para leads de tráfego pago',
    },
    {
      tag: 'CASE 03 · TRANSPORTADORA',
      name: 'Transpox',
      problem: 'Atender empresas que chegam para cotar frete, coletar as informações necessárias e transformar a solicitação em uma oportunidade organizada para o comercial.',
      work: ['Origem e destino', 'Tipo de carga', 'Volume e prazo', 'Dados para cotação', 'CRM e oportunidade', 'Follow-up'],
      image: '/media/cases/transpox.webp',
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
    <div className="v5plus-founder-photo">
      {!failed ? (
        <img
          src="/media/founder/diego-nogueira.webp"
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
      <div className="v5plus-founder-badge">
        <BadgeCheck size={16} />
        <span><small>COFUNDADOR</small>Korax</span>
      </div>
    </div>
  )
}

function FounderSection() {
  const pillars = [
    [MessageCircle, 'Vendas pelo WhatsApp', 'Experiência prática em atendimento, prospecção, condução e follow-up de oportunidades.'],
    [Route, 'Estruturação comercial', 'Desenho de jornadas, processos, responsabilidades e próximos passos para o lead não ficar perdido.'],
    [BrainCircuit, 'IA aplicada à operação', 'Treinamento de comportamento, contexto e automações para a tecnologia trabalhar dentro do processo real da empresa.'],
  ]

  return (
    <section className="v5plus-founder" id="especialista">
      <div className="v5-shell">
        <div className="v5plus-founder-grid">
          <motion.div className="v5plus-founder-media" {...reveal}>
            <FounderPhoto />
          </motion.div>

          <motion.div className="v5plus-founder-copy" {...reveal}>
            <span className="v5plus-eyebrow">QUEM ESTÁ POR TRÁS DA ESTRATÉGIA</span>
            <h2>
              Diego Nogueira.
              <em>Estruturação digital e operação comercial pelo WhatsApp.</em>
            </h2>
            <p className="v5plus-founder-intro">
              Diego atua na interseção entre vendas, atendimento e tecnologia. Sua trajetória passa por vendas consultivas, prospecção, condução de oportunidades pelo WhatsApp, estruturação de processos comerciais e implantação de soluções digitais.
            </p>
            <p>
              Foi acompanhando na prática o que acontece entre a primeira mensagem e o próximo passo que ele identificou um padrão: muitas empresas não perdem oportunidades por falta de procura — perdem porque a resposta demora, o follow-up depende da memória, o contexto se espalha e o comercial fica dependente demais da disponibilidade da equipe.
            </p>
            <p>
              A Korax nasce dessa experiência. Como cofundador e responsável pela estratégia comercial e implantação da solução, Diego transforma o processo real de cada empresa em uma jornada treinável, conectando atendimento humanizado, qualificação, CRM, agenda, follow-up e transferência inteligente para o time.
            </p>

            <div className="v5plus-founder-thesis">
              <Sparkles size={18} />
              <div>
                <small>A VISÃO POR TRÁS DA KORAX</small>
                <strong>Tecnologia sem processo só automatiza bagunça. Primeiro entendemos a operação. Depois treinamos a IA para trabalhar dentro dela.</strong>
              </div>
            </div>

            <div className="v5plus-founder-pills">
              <span><Check size={13} /> vendas consultivas</span>
              <span><Check size={13} /> WhatsApp comercial</span>
              <span><Check size={13} /> CRM e processos</span>
              <span><Check size={13} /> IA e automação</span>
            </div>
          </motion.div>
        </div>

        <div className="v5plus-founder-pillars">
          {pillars.map(([Icon, title, text], index) => (
            <motion.article key={title} {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }}>
              <span><Icon size={19} /></span>
              <strong>{title}</strong>
              <p>{text}</p>
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
