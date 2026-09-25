import { motion } from 'framer-motion'
import {
  ArrowRight,
  CalendarCheck2,
  Check,
  ChevronDown,
  Clock3,
  MessageCircle,
  Sparkles,
  UsersRound,
} from 'lucide-react'
import App from './App.jsx'

const ease = [0.22, 1, 0.36, 1]

function HeaderV2() {
  return (
    <header className="v2-header">
      <div className="v2-container v2-header-inner">
        <a className="v2-brand" href="#top-v2" aria-label="Korax - início">
          <span className="v2-brand-mark">K</span>
          <span className="v2-brand-name">KORAX</span>
        </a>

        <nav className="v2-nav" aria-label="Navegação principal">
          <a href="#diferencial">Por que Korax</a>
          <a href="#operacao">Plataforma</a>
          <a href="#implantacao">Implantação</a>
        </nav>

        <a className="v2-header-cta" href="#demo">
          <MessageCircle size={16} />
          <span>Conversar com a Korax</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </header>
  )
}

function LiveConversation() {
  return (
    <div className="v2-product-stage" aria-label="Demonstração visual da operação Korax">
      <motion.div
        className="v2-console-card"
        initial={{ opacity: 0, x: 28, y: 18 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.45, ease }}
      >
        <div className="v2-console-head">
          <div>
            <span className="v2-live-dot" />
            OPERAÇÃO AO VIVO
          </div>
          <span>WhatsApp conectado</span>
        </div>
        <div className="v2-console-metrics">
          <div>
            <small>Tempo de resposta</small>
            <strong>agora</strong>
          </div>
          <div>
            <small>Atendimento</small>
            <strong>IA + equipe</strong>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="v2-chat-card"
        initial={{ opacity: 0, y: 36, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.95, delay: 0.25, ease }}
      >
        <div className="v2-chat-head">
          <div className="v2-chat-avatar">K</div>
          <div className="v2-chat-person">
            <strong>Korax</strong>
            <span><i /> atendendo agora</span>
          </div>
          <div className="v2-ai-badge"><Sparkles size={16} /> IA ativa</div>
        </div>

        <div className="v2-chat-body">
          <div className="v2-message v2-client v2-message-1">
            Oi! Queria saber sobre botox, mas nunca fiz e tenho algumas dúvidas.
          </div>

          <div className="v2-message v2-korax v2-message-2">
            Claro. Antes de falar em agenda, posso entender sua principal dúvida para te orientar melhor?
          </div>

          <div className="v2-message v2-client v2-message-3">
            Minha pele é sensível. Isso muda alguma coisa?
          </div>

          <div className="v2-typing v2-message-4" aria-label="Korax está digitando">
            <span /><span /><span />
            <small>Korax está entendendo o contexto…</small>
          </div>

          <div className="v2-message v2-korax v2-message-5">
            Pode mudar a recomendação, sim. Nesse caso, o ideal é começar por uma avaliação. Quer que eu veja os horários disponíveis?
          </div>
        </div>

        <div className="v2-chat-statusbar">
          <span><Check size={13} /> contexto mantido</span>
          <span><Check size={13} /> próximo passo conduzido</span>
        </div>
      </motion.div>

      <motion.div
        className="v2-signal v2-signal-lead"
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
        transition={{ opacity: { delay: 1.7, duration: 0.5 }, scale: { delay: 1.7, duration: 0.5 }, y: { delay: 2.2, duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <span className="v2-signal-icon"><Check size={14} /></span>
        <div><small>CRM</small><strong>Lead qualificado</strong></div>
      </motion.div>

      <motion.div
        className="v2-signal v2-signal-agenda"
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{ opacity: 1, scale: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 2.15, duration: 0.5 }, scale: { delay: 2.15, duration: 0.5 }, y: { delay: 2.6, duration: 4.5, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <span className="v2-signal-icon"><CalendarCheck2 size={14} /></span>
        <div><small>AGENDA</small><strong>Próximo passo pronto</strong></div>
      </motion.div>

      <motion.div
        className="v2-signal v2-signal-human"
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{ opacity: 1, scale: 1, x: [0, 5, 0] }}
        transition={{ opacity: { delay: 2.55, duration: 0.5 }, scale: { delay: 2.55, duration: 0.5 }, x: { delay: 3, duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <span className="v2-signal-icon"><UsersRound size={14} /></span>
        <div><small>EQUIPE</small><strong>Humano quando precisa</strong></div>
      </motion.div>
    </div>
  )
}

function HeroV2() {
  return (
    <section className="v2-hero" id="top-v2">
      <div className="v2-grid-bg" aria-hidden="true" />
      <div className="v2-orb v2-orb-one" aria-hidden="true" />
      <div className="v2-orb v2-orb-two" aria-hidden="true" />

      <div className="v2-container v2-hero-grid">
        <motion.div
          className="v2-hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="v2-eyebrow">
            <span className="v2-eyebrow-dot" />
            IA + OPERAÇÃO COMERCIAL PARA WHATSAPP
          </div>

          <h1>
            Seu cliente chamou no WhatsApp.
            <span>Ele vai ser atendido agora?</span>
          </h1>

          <p className="v2-hero-lead">
            A Korax atende, qualifica, agenda e acompanha seus clientes seguindo o processo comercial da sua empresa — com conversa natural e sem depender de alguém olhando para a tela.
          </p>

          <div className="v2-hero-actions">
            <a className="v2-btn v2-btn-primary" href="#demo">
              <MessageCircle size={19} />
              Conversar com a Korax
              <ArrowRight size={18} />
            </a>
            <a className="v2-btn v2-btn-secondary" href="#operacao">
              Ver como funciona
              <ChevronDown size={18} />
            </a>
          </div>

          <div className="v2-proof-row">
            <span><Clock3 size={15} /> Responde na hora</span>
            <span><Sparkles size={15} /> Treinada para sua operação</span>
            <span><UsersRound size={15} /> Humano quando necessário</span>
          </div>
        </motion.div>

        <LiveConversation />
      </div>

      <div className="v2-scroll-cue">
        <span>Veja a operação em movimento</span>
        <ChevronDown size={16} />
      </div>
    </section>
  )
}

export default function AppV2() {
  return (
    <>
      <HeaderV2 />
      <HeroV2 />
      <div className="legacy-page">
        <App />
      </div>
    </>
  )
}
