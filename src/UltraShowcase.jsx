import { useMemo, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  CalendarDays,
  Check,
  ChevronDown,
  CircleUserRound,
  Clock3,
  MessageCircle,
  MousePointer2,
  RefreshCw,
  Sparkles,
  UsersRound,
  Workflow,
  Zap,
} from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

function Logo() {
  return (
    <a className="ultra-logo" href="#hero" aria-label="Korax">
      <span className="ultra-logo-mark">K</span>
      <span className="ultra-logo-word">KORAX</span>
    </a>
  )
}

function Header() {
  return (
    <header className="ultra-header">
      <div className="ultra-shell ultra-header-inner">
        <Logo />
        <nav className="ultra-nav">
          <a href="#experience">Experiência</a>
          <a href="#difference">Por que Korax</a>
          <a href="#operation">Operação</a>
        </nav>
        <a className="ultra-header-cta" href="#cta">
          Testar a Korax
          <ArrowRight size={16} />
        </a>
      </div>
    </header>
  )
}

function FloatingMetric({ className, icon: Icon, eyebrow, title }) {
  return (
    <motion.div
      className={`ultra-float-card ${className}`}
      initial={{ opacity: 0, y: 18, scale: 0.94 }}
      animate={{ opacity: 1, y: [0, -7, 0], scale: 1 }}
      transition={{
        opacity: { delay: 1.4, duration: 0.55 },
        scale: { delay: 1.4, duration: 0.55 },
        y: { delay: 2.1, duration: 5, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      <span className="ultra-float-icon"><Icon size={15} /></span>
      <div>
        <small>{eyebrow}</small>
        <strong>{title}</strong>
      </div>
    </motion.div>
  )
}

function HeroChat() {
  const messages = [
    ['client', 'Oi! Vi o procedimento de vocês. Queria entender se serve pra mim.'],
    ['korax', 'Claro. Posso te ajudar sem te jogar num roteiro pronto. O que você quer melhorar hoje?'],
    ['client', 'Na verdade antes: vocês atendem sábado?'],
    ['korax', 'Atendemos, sim. E já volto para sua dúvida inicial: se quiser, eu também posso te orientar sobre o procedimento e depois verificar um horário.'],
  ]

  return (
    <div className="ultra-stage">
      <div className="ultra-orbit ultra-orbit-one" />
      <div className="ultra-orbit ultra-orbit-two" />

      <motion.div
        className="ultra-system-panel"
        initial={{ opacity: 0, x: 38, rotateY: -10 }}
        animate={{ opacity: 1, x: 0, rotateY: -5 }}
        transition={{ duration: 0.9, delay: 0.45, ease }}
      >
        <div className="ultra-system-top">
          <div><span className="ultra-live-dot" /> OPERAÇÃO AO VIVO</div>
          <span>WhatsApp conectado</span>
        </div>
        <div className="ultra-system-grid">
          <div>
            <small>Tempo de resposta</small>
            <strong>agora</strong>
          </div>
          <div>
            <small>Status</small>
            <strong>em condução</strong>
          </div>
          <div>
            <small>Responsável</small>
            <strong>Korax IA</strong>
          </div>
          <div>
            <small>Próximo passo</small>
            <strong>Avaliação</strong>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="ultra-chat"
        initial={{ opacity: 0, y: 34, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease }}
      >
        <div className="ultra-chat-head">
          <div className="ultra-chat-avatar">K</div>
          <div>
            <strong>Korax</strong>
            <span><i /> respondendo agora</span>
          </div>
          <span className="ultra-ai-pill"><Sparkles size={14} /> IA ativa</span>
        </div>

        <div className="ultra-chat-body">
          {messages.map(([role, text], index) => (
            <div className={`ultra-msg ${role} ultra-msg-${index + 1}`} key={text}>{text}</div>
          ))}
          <div className="ultra-thinking">
            <span /><span /><span />
            <small>contexto preservado</small>
          </div>
        </div>

        <div className="ultra-chat-bottom">
          <span><Check size={12} /> contexto mantido</span>
          <span><Check size={12} /> objetivo preservado</span>
        </div>
      </motion.div>

      <FloatingMetric className="ultra-float-crm" icon={Workflow} eyebrow="CRM" title="Lead qualificado" />
      <FloatingMetric className="ultra-float-agenda" icon={CalendarDays} eyebrow="AGENDA" title="Horário sugerido" />
      <FloatingMetric className="ultra-float-team" icon={UsersRound} eyebrow="EQUIPE" title="Contexto pronto" />
    </div>
  )
}

function Hero() {
  const [pointer, setPointer] = useState({ x: 50, y: 35 })

  return (
    <section
      className="ultra-hero"
      id="hero"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        setPointer({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        })
      }}
      style={{ '--px': `${pointer.x}%`, '--py': `${pointer.y}%` }}
    >
      <div className="ultra-noise" />
      <div className="ultra-grid" />
      <div className="ultra-pointer-glow" />

      <div className="ultra-shell ultra-hero-grid">
        <motion.div
          className="ultra-hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="ultra-kicker"><span /> IA COMERCIAL PARA WHATSAPP</div>
          <h1>
            Seu cliente chamou.
            <span className="ultra-gradient-text">A operação já começou.</span>
          </h1>
          <p>
            A Korax entende, responde, qualifica, agenda e movimenta o processo comercial da sua empresa — com conversa natural e sem depender de alguém olhando para a tela.
          </p>

          <div className="ultra-actions">
            <a className="ultra-btn ultra-btn-primary" href="#cta">
              <MessageCircle size={19} />
              Conversar com a Korax
              <ArrowRight size={18} />
            </a>
            <a className="ultra-btn ultra-btn-ghost" href="#experience">
              Ver a experiência
              <ChevronDown size={18} />
            </a>
          </div>

          <div className="ultra-proof-row">
            <span><Zap size={14} /> resposta imediata</span>
            <span><Sparkles size={14} /> treinada para sua operação</span>
            <span><CircleUserRound size={14} /> humano quando precisa</span>
          </div>
        </motion.div>

        <HeroChat />
      </div>

      <div className="ultra-scroll-hint">
        <MousePointer2 size={15} />
        mova o mouse e role a página
      </div>
    </section>
  )
}

function Marquee() {
  const items = ['ATENDIMENTO 24H', 'CRM', 'AGENDA', 'FOLLOW-UP', 'QUALIFICAÇÃO', 'EQUIPE', 'WHATSAPP', 'AUTOMAÇÃO']
  return (
    <div className="ultra-marquee-wrap">
      <div className="ultra-marquee">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>{item}<i /></span>
        ))}
      </div>
    </div>
  )
}

function LostOpportunity() {
  const events = [
    ['09:12', '“Oi! Queria saber mais sobre a avaliação.”', 'Cliente chama'],
    ['09:27', 'Nenhuma resposta.', '15 min'],
    ['09:43', 'A equipe continua ocupada.', '31 min'],
    ['10:04', '“Obrigada, já consegui com outra empresa.”', 'Oportunidade perdida'],
  ]

  return (
    <section className="ultra-section ultra-lost" id="experience">
      <div className="ultra-shell">
        <div className="ultra-section-head ultra-section-head-wide">
          <span className="ultra-label">O PROBLEMA REAL</span>
          <h2>Enquanto você não responde, <em>a decisão do cliente continua.</em></h2>
        </div>

        <div className="ultra-lost-grid">
          <div className="ultra-phone-lost">
            <div className="ultra-phone-bar"><span>WhatsApp</span><Clock3 size={15} /></div>
            <div className="ultra-lost-thread">
              {events.map(([time, copy, tag], index) => (
                <motion.div
                  className={`ultra-event ultra-event-${index + 1}`}
                  key={time}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: index * 0.11, ease }}
                >
                  <span className="ultra-event-time">{time}</span>
                  <div>
                    <strong>{tag}</strong>
                    <p>{copy}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="ultra-lost-side">
            <div className="ultra-big-number">52<span>min</span></div>
            <p>Não foi falta de interesse. Foi falta de continuidade.</p>
            <div className="ultra-lost-chips">
              <span>resposta tardia</span>
              <span>follow-up manual</span>
              <span>agenda separada</span>
              <span>contexto perdido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Difference() {
  return (
    <section className="ultra-section ultra-difference" id="difference">
      <div className="ultra-shell">
        <div className="ultra-section-head centered">
          <span className="ultra-label light">O DIFERENCIAL</span>
          <h2>Já tentou usar IA e ela parecia <em>um robô?</em></h2>
          <p>Então não mostramos uma lista de features. Mostramos a mesma situação acontecendo de duas formas.</p>
        </div>

        <div className="ultra-compare">
          <motion.article
            className="ultra-compare-card ultra-generic"
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="ultra-compare-top"><Bot size={20} /> IA genérica</div>
            <div className="ultra-compare-chat">
              <div className="ultra-bubble client">Antes: vocês atendem sábado?</div>
              <div className="ultra-bubble robot">Não entendi. Selecione uma opção:<br />1. Preços<br />2. Horários<br />3. Agendamento</div>
            </div>
            <div className="ultra-compare-foot bad">contexto quebrado</div>
          </motion.article>

          <div className="ultra-vs">VS</div>

          <motion.article
            className="ultra-compare-card ultra-korax"
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="ultra-compare-top"><Sparkles size={20} /> Korax</div>
            <div className="ultra-compare-chat">
              <div className="ultra-bubble client">Antes: vocês atendem sábado?</div>
              <div className="ultra-bubble smart">Atendemos, sim. E já volto para sua dúvida inicial: posso te orientar sobre o procedimento e, se fizer sentido, verificar um horário.</div>
            </div>
            <div className="ultra-compare-foot good"><Check size={14} /> responde sem perder o objetivo</div>
          </motion.article>
        </div>

        <div className="ultra-manifesto">
          <span>Humanizada para conversar.</span>
          <strong>Treinada para conduzir.</strong>
        </div>
      </div>
    </section>
  )
}

const operationSteps = [
  { tag: '01', name: 'Intenção', text: 'A Korax entende o que o cliente realmente quer.', icon: Sparkles },
  { tag: '02', name: 'CRM', text: 'A oportunidade nasce com contexto, não como linha vazia.', icon: Workflow },
  { tag: '03', name: 'Agenda', text: 'Quando faz sentido, a conversa avança para disponibilidade.', icon: CalendarDays },
  { tag: '04', name: 'Follow-up', text: 'Se a conversa parar, o processo não precisa parar.', icon: RefreshCw },
  { tag: '05', name: 'Equipe', text: 'Humano assume quando realmente precisa, já sabendo tudo.', icon: UsersRound },
]

function OperationStory() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.3 })
  const lineScale = useTransform(smooth, [0, 1], [0.08, 1])
  const panelY = useTransform(smooth, [0, 1], ['4%', '-4%'])

  const activeRanges = useMemo(() => [0.08, 0.28, 0.48, 0.68, 0.88], [])

  return (
    <section className="ultra-operation-wrap" ref={ref} id="operation">
      <div className="ultra-operation-sticky">
        <div className="ultra-shell ultra-operation-grid">
          <div className="ultra-operation-copy">
            <span className="ultra-label light">UMA CONVERSA. UMA OPERAÇÃO.</span>
            <h2>O cliente vê uma conversa. <em>A empresa vê movimento.</em></h2>
            <p>Role a página. O fluxo comercial acontece enquanto a conversa continua.</p>

            <div className="ultra-step-list">
              {operationSteps.map(({ tag, name, text, icon: Icon }, index) => {
                const opacity = useTransform(
                  smooth,
                  [Math.max(0, activeRanges[index] - 0.16), activeRanges[index], Math.min(1, activeRanges[index] + 0.16)],
                  [0.28, 1, 0.28],
                )
                const x = useTransform(
                  smooth,
                  [Math.max(0, activeRanges[index] - 0.16), activeRanges[index], Math.min(1, activeRanges[index] + 0.16)],
                  [-8, 0, 8],
                )
                return (
                  <motion.div className="ultra-op-step" style={{ opacity, x }} key={name}>
                    <span className="ultra-step-tag">{tag}</span>
                    <span className="ultra-step-icon"><Icon size={18} /></span>
                    <div><strong>{name}</strong><small>{text}</small></div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <motion.div className="ultra-operation-visual" style={{ y: panelY }}>
            <div className="ultra-flow-line"><motion.span style={{ scaleY: lineScale }} /></div>
            <div className="ultra-dashboard-shell">
              <div className="ultra-dash-sidebar">
                <div className="ultra-dash-logo">K</div>
                <i className="active" /><i /><i /><i /><i />
              </div>
              <div className="ultra-dash-main">
                <div className="ultra-dash-top">
                  <div><small>OPERAÇÃO COMERCIAL</small><strong>Uma oportunidade em movimento</strong></div>
                  <span>● online</span>
                </div>
                <div className="ultra-dash-card hero-card">
                  <small>CLIENTE</small>
                  <strong>Mariana Souza</strong>
                  <span>Interesse: avaliação estética</span>
                </div>
                <div className="ultra-dash-row">
                  <div className="ultra-dash-card"><small>CRM</small><strong>Qualificado</strong><span>próximo passo definido</span></div>
                  <div className="ultra-dash-card"><small>AGENDA</small><strong>15:30</strong><span>sábado disponível</span></div>
                </div>
                <div className="ultra-dash-card timeline-card">
                  <div><span /> Mensagem recebida <small>agora</small></div>
                  <div><span /> Intenção identificada <small>+1s</small></div>
                  <div><span /> Oportunidade atualizada <small>+2s</small></div>
                  <div><span /> Agenda consultada <small>+3s</small></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="ultra-cta" id="cta">
      <div className="ultra-shell">
        <div className="ultra-cta-card">
          <div className="ultra-cta-glow" />
          <span className="ultra-label light">A MELHOR DEMONSTRAÇÃO É A PRÓPRIA KORAX</span>
          <h2>Antes de imaginar como seria, <em>converse com ela.</em></h2>
          <p>Faça perguntas. Mude de assunto. Questione. Tente sair do roteiro.</p>
          <div className="ultra-actions centered-actions">
            <a className="ultra-btn ultra-btn-white" href="#hero">
              <MessageCircle size={19} />
              Testar a Korax no WhatsApp
              <ArrowRight size={18} />
            </a>
            <span className="ultra-cta-note">Link oficial será conectado na versão final.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function UltraShowcase() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 })

  return (
    <div className="ultra-page">
      <motion.div className="ultra-progress" style={{ scaleX: progress }} />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <LostOpportunity />
        <Difference />
        <OperationStory />
        <CTA />
      </main>
      <footer className="ultra-footer">
        <div className="ultra-shell ultra-footer-inner">
          <Logo />
          <span>Protótipo visual • Korax 2026</span>
        </div>
      </footer>
    </div>
  )
}
