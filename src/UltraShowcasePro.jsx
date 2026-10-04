import { useState } from 'react'
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
  RefreshCw,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
  Zap,
} from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

function Logo() {
  return (
    <a className="pro-logo" href="#inicio" aria-label="Korax - início">
      <span className="pro-logo-mark">K</span>
      <span className="pro-logo-name">KORAX</span>
    </a>
  )
}

function Header() {
  return (
    <header className="pro-header">
      <div className="pro-shell pro-header-inner">
        <Logo />
        <nav className="pro-nav" aria-label="Navegação principal">
          <a href="#problema">Por que Korax</a>
          <a href="#diferenca">A diferença</a>
          <a href="#operacao">Como funciona</a>
        </nav>
        <a className="pro-header-cta" href="#teste">
          <span>Testar a Korax</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </header>
  )
}

function FlowNode({ icon: Icon, label, active }) {
  return (
    <div className={`pro-flow-node ${active ? 'active' : ''}`}>
      <span><Icon size={15} /></span>
      <small>{label}</small>
    </div>
  )
}

function HeroVisual() {
  const messages = [
    ['client', 'Oi! Queria saber se esse procedimento serve para mim.'],
    ['korax', 'Claro. Antes de te jogar num roteiro, me conta o que você quer melhorar hoje?'],
    ['client', 'Antes disso: vocês atendem sábado?'],
    ['korax', 'Atendemos, sim. E eu mantenho sua dúvida anterior aqui. Se quiser, te explico o procedimento e já verifico um horário.'],
  ]

  return (
    <div className="pro-hero-visual" aria-label="Demonstração visual da operação Korax">
      <div className="pro-visual-glow" />
      <div className="pro-flow-rail">
        <FlowNode icon={MessageCircle} label="WhatsApp" active />
        <i />
        <FlowNode icon={Sparkles} label="Korax IA" active />
        <i />
        <FlowNode icon={Workflow} label="CRM" />
        <i />
        <FlowNode icon={CalendarDays} label="Agenda" />
      </div>

      <motion.div
        className="pro-console"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease }}
      >
        <div className="pro-console-top">
          <div>
            <span className="pro-live-dot" />
            OPERAÇÃO AO VIVO
          </div>
          <span>WhatsApp conectado</span>
        </div>
        <div className="pro-console-grid">
          <div><small>RESPOSTA</small><strong>imediata</strong></div>
          <div><small>CONTEXTO</small><strong>preservado</strong></div>
          <div><small>OBJETIVO</small><strong>qualificar</strong></div>
          <div><small>PRÓXIMO PASSO</small><strong>avaliação</strong></div>
        </div>
      </motion.div>

      <motion.div
        className="pro-chat-card"
        initial={{ opacity: 0, y: 36, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease }}
      >
        <div className="pro-chat-head">
          <div className="pro-avatar">K</div>
          <div className="pro-chat-person">
            <strong>Korax</strong>
            <span><i /> atendendo agora</span>
          </div>
          <span className="pro-ai-pill"><Sparkles size={13} /> IA ativa</span>
        </div>

        <div className="pro-chat-body">
          {messages.map(([role, text], index) => (
            <div className={`pro-message ${role} delay-${index + 1}`} key={text}>{text}</div>
          ))}
          <div className="pro-thinking"><span /><span /><span /><small>contexto preservado</small></div>
        </div>

        <div className="pro-chat-foot">
          <span><Check size={12} /> entende</span>
          <span><Check size={12} /> conduz</span>
          <span><Check size={12} /> registra</span>
        </div>
      </motion.div>

      <motion.div className="pro-metric metric-crm" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.35, duration: 0.5 }}>
        <span><Workflow size={15} /></span><div><small>CRM</small><strong>Lead qualificado</strong></div>
      </motion.div>
      <motion.div className="pro-metric metric-agenda" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.55, duration: 0.5 }}>
        <span><CalendarDays size={15} /></span><div><small>AGENDA</small><strong>Horário sugerido</strong></div>
      </motion.div>
      <motion.div className="pro-metric metric-team" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.75, duration: 0.5 }}>
        <span><UsersRound size={15} /></span><div><small>EQUIPE</small><strong>Contexto pronto</strong></div>
      </motion.div>
    </div>
  )
}

function Hero() {
  const [pointer, setPointer] = useState({ x: 68, y: 30 })

  return (
    <section
      className="pro-hero"
      id="inicio"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        setPointer({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        })
      }}
      style={{ '--mx': `${pointer.x}%`, '--my': `${pointer.y}%` }}
    >
      <div className="pro-grid-bg" />
      <div className="pro-pointer-light" />
      <div className="pro-shell pro-hero-grid">
        <motion.div className="pro-hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>
          <div className="pro-kicker"><span /> OPERAÇÃO COMERCIAL INTELIGENTE PARA WHATSAPP</div>
          <h1>
            Seu cliente chamou.
            <em>A Korax faz a operação avançar.</em>
          </h1>
          <p className="pro-hero-lead">
            Da primeira resposta ao agendamento, CRM, follow-up e transferência para a equipe: a Korax conduz o WhatsApp seguindo o processo comercial da sua empresa — 24 horas por dia, com contexto e linguagem natural.
          </p>

          <div className="pro-actions">
            <a className="pro-btn pro-btn-primary" href="#teste">
              <MessageCircle size={18} />
              Conversar com a Korax ao vivo
              <ArrowRight size={18} />
            </a>
            <a className="pro-btn pro-btn-secondary" href="#operacao">
              Ver a operação acontecendo
              <ChevronDown size={17} />
            </a>
          </div>

          <div className="pro-assurance">
            <span><Zap size={14} /> Resposta imediata</span>
            <span><ShieldCheck size={14} /> Treinada para sua empresa</span>
            <span><CircleUserRound size={14} /> Humano no momento certo</span>
          </div>

          <div className="pro-positioning-note">
            <strong>Não é um chatbot genérico.</strong>
            <span>É uma camada comercial implantada dentro da sua operação.</span>
          </div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  )
}

function CapabilityStrip() {
  const items = ['ATENDE', 'ENTENDE', 'QUALIFICA', 'AGENDA', 'ATUALIZA O CRM', 'FAZ FOLLOW-UP', 'TRANSFERE COM CONTEXTO']
  return (
    <div className="pro-marquee-wrap" aria-hidden="true">
      <div className="pro-marquee">
        {[...items, ...items].map((item, index) => <span key={`${item}-${index}`}>{item}<i /></span>)}
      </div>
    </div>
  )
}

function Problem() {
  const events = [
    ['09:12', 'Cliente chama', '“Oi! Queria saber mais sobre a avaliação.”'],
    ['09:27', '15 minutos', 'Ainda sem resposta.'],
    ['09:43', '31 minutos', 'A equipe segue ocupada com outras tarefas.'],
    ['10:04', 'Oportunidade perdida', '“Obrigada, já consegui com outra empresa.”'],
  ]

  return (
    <section className="pro-section pro-problem" id="problema">
      <div className="pro-shell">
        <div className="pro-section-head wide">
          <span className="pro-label">O CUSTO DA ESPERA</span>
          <h2>Cada minuto sem resposta é espaço para o concorrente responder primeiro.</h2>
          <p>A Korax não existe para simplesmente “responder mensagens”. Ela mantém a oportunidade em movimento até o próximo passo.</p>
        </div>

        <div className="pro-problem-grid">
          <div className="pro-timeline-card">
            <div className="pro-timeline-head"><span>WhatsApp</span><Clock3 size={16} /></div>
            {events.map(([time, tag, text], index) => (
              <motion.div className={`pro-event event-${index + 1}`} key={time} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.45, delay: index * 0.08 }}>
                <span>{time}</span>
                <div><small>{tag}</small><p>{text}</p></div>
              </motion.div>
            ))}
          </div>
          <div className="pro-problem-side">
            <div className="pro-time-stat">52<span>min</span></div>
            <h3>O interesse existia. A continuidade não.</h3>
            <p>Quando atendimento, agenda e follow-up dependem da disponibilidade ou da memória de alguém, a operação fica vulnerável.</p>
            <div className="pro-chips"><span>resposta tardia</span><span>follow-up manual</span><span>contexto perdido</span><span>agenda separada</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Difference() {
  return (
    <section className="pro-section pro-difference" id="diferenca">
      <div className="pro-shell">
        <div className="pro-section-head centered dark-head">
          <span className="pro-label light">NÃO É SÓ “TER IA”</span>
          <h2>IA genérica responde. <em>A Korax conduz.</em></h2>
          <p>O diferencial aparece quando a conversa sai do roteiro. A Korax responde ao contexto sem abandonar o objetivo comercial.</p>
        </div>

        <div className="pro-compare">
          <article className="pro-compare-card generic">
            <div className="pro-compare-title"><Bot size={20} /><span>IA genérica</span></div>
            <div className="pro-compare-chat">
              <div className="pro-bubble client">Antes: vocês atendem sábado?</div>
              <div className="pro-bubble robot">Não entendi. Selecione uma opção:<br />1. Preços<br />2. Horários<br />3. Agendamento</div>
            </div>
            <div className="pro-result bad">contexto quebrado</div>
          </article>

          <div className="pro-vs">VS</div>

          <article className="pro-compare-card korax">
            <div className="pro-compare-title"><Sparkles size={20} /><span>Korax</span></div>
            <div className="pro-compare-chat">
              <div className="pro-bubble client">Antes: vocês atendem sábado?</div>
              <div className="pro-bubble smart">Atendemos, sim. E eu mantenho sua dúvida inicial aqui. Posso te explicar o procedimento e depois verificar um horário.</div>
            </div>
            <div className="pro-result good"><Check size={14} /> contexto preservado • objetivo mantido</div>
          </article>
        </div>

        <div className="pro-manifesto">
          <span>Humanizada para conversar.</span>
          <strong>Rigorosa para conduzir.</strong>
        </div>
      </div>
    </section>
  )
}

function Operation() {
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.35 })
  const flow = useTransform(smooth, [0.42, 0.78], [0.1, 1])

  const steps = [
    [Sparkles, 'Intenção', 'Entende o que o cliente realmente quer.'],
    [Workflow, 'CRM', 'Cria e atualiza a oportunidade com contexto.'],
    [CalendarDays, 'Agenda', 'Conduz para disponibilidade e confirmação.'],
    [RefreshCw, 'Follow-up', 'Retoma quando a conversa para.'],
    [UsersRound, 'Equipe', 'Transfere para o humano certo, com histórico.'],
  ]

  return (
    <section className="pro-operation" id="operacao">
      <div className="pro-shell pro-operation-grid">
        <div className="pro-operation-copy">
          <span className="pro-label light">UMA CONVERSA. UMA OPERAÇÃO.</span>
          <h2>O cliente vê uma conversa. <em>Sua empresa vê movimento.</em></h2>
          <p>Atendimento, CRM, agenda, follow-up e equipe trabalham conectados para que a oportunidade não dependa de improviso.</p>
          <div className="pro-step-list">
            {steps.map(([Icon, title, text], index) => (
              <motion.div className="pro-step" key={title} initial={{ opacity: 0.35, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.7 }} transition={{ duration: 0.35 }}>
                <span className="pro-step-number">0{index + 1}</span>
                <span className="pro-step-icon"><Icon size={17} /></span>
                <div><strong>{title}</strong><small>{text}</small></div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="pro-operation-visual">
          <div className="pro-flow-line"><motion.span style={{ scaleY: flow }} /></div>
          <div className="pro-dashboard">
            <aside className="pro-dash-side"><div>K</div><i className="active" /><i /><i /><i /></aside>
            <div className="pro-dash-main">
              <div className="pro-dash-head">
                <div><small>OPERAÇÃO COMERCIAL</small><strong>Uma oportunidade em movimento</strong></div>
                <span>● online</span>
              </div>
              <div className="pro-dash-card customer"><small>CLIENTE</small><strong>Mariana Souza</strong><span>Interesse: avaliação estética</span></div>
              <div className="pro-dash-row">
                <div className="pro-dash-card"><small>CRM</small><strong>Qualificado</strong><span>próximo passo definido</span></div>
                <div className="pro-dash-card"><small>AGENDA</small><strong>15:30</strong><span>sábado disponível</span></div>
              </div>
              <div className="pro-dash-timeline">
                <div><i /> Mensagem recebida <small>agora</small></div>
                <div><i /> Intenção identificada <small>+1s</small></div>
                <div><i /> Oportunidade atualizada <small>+2s</small></div>
                <div><i /> Agenda consultada <small>+3s</small></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="pro-cta" id="teste">
      <div className="pro-shell">
        <div className="pro-cta-card">
          <div className="pro-cta-glow" />
          <span className="pro-label light">COLOQUE A KORAX À PROVA</span>
          <h2>Antes de imaginar como seria, <em>converse com ela.</em></h2>
          <p>Faça perguntas. Mude de assunto. Questione. Tente sair do roteiro. A melhor demonstração é a própria Korax atendendo você.</p>
          <div className="pro-actions centered-actions">
            <a className="pro-btn pro-btn-white" href="#inicio"><MessageCircle size={18} /> Testar a Korax no WhatsApp <ArrowRight size={18} /></a>
            <span className="pro-cta-note">O link oficial será conectado na versão final.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function UltraShowcasePro() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 })

  return (
    <div className="pro-page">
      <motion.div className="pro-progress" style={{ scaleX: progress }} />
      <Header />
      <main>
        <Hero />
        <CapabilityStrip />
        <Problem />
        <Difference />
        <Operation />
        <CTA />
      </main>
      <footer className="pro-footer"><div className="pro-shell pro-footer-inner"><Logo /><span>Korax • Operação comercial inteligente para WhatsApp</span></div></footer>
    </div>
  )
}
