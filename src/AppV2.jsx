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
import './v3-sections.css'

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
          <a href="#diferencial-v3">Por que Korax</a>
          <a href="#operacao-v3">Plataforma</a>
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
            Seu cliente chamou.
            <span>A operação já começou.</span>
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
            <a className="v2-btn v2-btn-secondary" href="#dor-v3">
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

function PainStoryV3() {
  const events = [
    ['09:12', 'Mensagem recebida', '“Oi, queria saber valores e se tem horário hoje.”', 'message'],
    ['09:27', 'Ainda sem resposta', 'A equipe está ocupada e a conversa continua parada.', 'text'],
    ['09:43', 'Atendimento interrompido', 'Perguntas repetidas e confirmações consomem o tempo da equipe.', 'text'],
    ['10:04', 'A decisão aconteceu', '“Obrigada, já consegui com outra empresa.”', 'lost'],
  ]

  return (
    <section className="v3-section v3-pain" id="dor-v3">
      <div className="v3-inner v3-pain-grid">
        <motion.div
          className="v3-pain-copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .3 }}
          transition={{ duration: .7, ease }}
        >
          <div className="v3-kicker">O problema não é o WhatsApp</div>
          <h2 className="v3-title">Enquanto você não responde, a decisão do cliente continua.</h2>
          <p className="v3-sub">A oportunidade não fica congelada esperando sua equipe ter tempo. O cliente continua pesquisando, comparando e escolhendo.</p>
        </motion.div>

        <motion.div
          className="v3-timeline-card"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .22 }}
          transition={{ duration: .8, ease }}
        >
          <div className="v3-timeline-head">
            <strong>Uma oportunidade comum</strong>
            <span><i /> esperando atendimento</span>
          </div>

          {events.map(([time, title, body, kind], index) => (
            <motion.div
              className="v3-event"
              key={time}
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: .6 }}
              transition={{ delay: index * .08, duration: .5, ease }}
            >
              <div className="v3-time">{time}</div>
              <div className="v3-event-content">
                <strong>{title}</strong>
                {kind === 'message' && <div className="v3-event-message">{body}</div>}
                {kind === 'lost' && <div className="v3-event-message lost">{body}</div>}
                {kind === 'text' && <p>{body}</p>}
              </div>
            </motion.div>
          ))}

          <div className="v3-side-stats">
            <div className="v3-side-stat"><b>3</b><span>follow-ups que ainda dependem de alguém lembrar</span></div>
            <div className="v3-side-stat"><b>2</b><span>confirmações pendentes no meio da rotina</span></div>
            <div className="v3-side-stat"><b>1</b><span>lead esperando enquanto a equipe faz outra coisa</span></div>
            <div className="v3-side-stat"><b>?</b><span>quem está atendendo qual cliente agora?</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function AiComparisonV3() {
  return (
    <section className="v3-section v3-compare" id="diferencial-v3">
      <div className="v3-inner">
        <div className="v3-compare-head">
          <div className="v3-kicker">Se você já tentou IA e pareceu um robô</div>
          <h2 className="v3-title">O diferencial precisa ser visto, não explicado.</h2>
          <p className="v3-sub">A mesma mudança inesperada de assunto. Duas experiências completamente diferentes.</p>
        </div>

        <div className="v3-compare-grid">
          <motion.article
            className="v3-ai-panel generic"
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: .25 }}
            transition={{ duration: .7, ease }}
          >
            <div className="v3-panel-label">IA genérica</div>
            <div className="v3-chat-stack">
              <div className="v3-bubble user">Na verdade minha dúvida é outra…</div>
              <div className="v3-bubble bot">Não entendi. Escolha uma opção:<br />1. Preços<br />2. Horários<br />3. Agendamento</div>
            </div>
            <div className="v3-compare-result">
              <strong>Perde o contexto.</strong>
              <p>A conversa obriga o cliente a voltar para o roteiro da ferramenta.</p>
            </div>
          </motion.article>

          <motion.article
            className="v3-ai-panel korax"
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: .25 }}
            transition={{ duration: .7, delay: .08, ease }}
          >
            <div className="v3-panel-label">Korax</div>
            <div className="v3-chat-stack">
              <div className="v3-bubble user">Na verdade minha dúvida é outra…</div>
              <div className="v3-bubble bot">Sem problema. Posso responder isso primeiro. Depois, se fizer sentido, retomamos o agendamento de onde paramos.</div>
            </div>
            <div className="v3-compare-result">
              <strong>Entende e conduz.</strong>
              <p>Responde o inesperado sem esquecer o objetivo comercial da conversa.</p>
            </div>
          </motion.article>
        </div>

        <motion.div
          className="v3-manifesto"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .25 }}
          transition={{ duration: .75, ease }}
        >
          <small>A diferença Korax</small>
          <strong>Humanizada na conversa. Rigorosa no processo.</strong>
          <div className="v3-flowline" />
        </motion.div>
      </div>
    </section>
  )
}

function OperationStoryV3() {
  const stages = [
    ['01', 'INTENÇÃO', 'Cliente quer uma avaliação', 'A necessidade é identificada durante a conversa.'],
    ['02', 'CRM', 'Oportunidade criada', 'O atendimento deixa de ser só uma mensagem solta.'],
    ['03', 'AGENDA', 'Horário confirmado', 'A disponibilidade entra na mesma jornada.'],
    ['04', 'FOLLOW-UP', 'Próximo passo preparado', 'A operação continua mesmo depois da conversa.'],
    ['05', 'EQUIPE', 'Contexto disponível', 'Se uma pessoa entrar, ela já sabe o que aconteceu.'],
  ]

  return (
    <section className="v3-section v3-story" id="operacao-v3">
      <div className="v3-inner">
        <div className="v3-story-head">
          <div className="v3-kicker">Uma conversa movimenta a operação</div>
          <h2 className="v3-title">Uma conversa. Uma operação inteira acontecendo.</h2>
          <p className="v3-sub">Enquanto o cliente conversa, atendimento, CRM, agenda, follow-up e equipe podem avançar juntos.</p>
        </div>

        <div className="v3-story-stage">
          <motion.div
            className="v3-phone"
            initial={{ opacity: 0, y: 28, rotate: -1.2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: .2 }}
            transition={{ duration: .8, ease }}
          >
            <div className="v3-phone-screen">
              <div className="v3-phone-head">
                <div className="v3-phone-avatar">K</div>
                <div><strong>Korax</strong><span>● online agora</span></div>
              </div>
              <div className="v3-chat-stack">
                <div className="v3-bubble user">Quero marcar uma avaliação amanhã à tarde.</div>
                <div className="v3-bubble bot">Tenho 15h e 17h. Qual funciona melhor?</div>
                <div className="v3-bubble user">15h.</div>
                <div className="v3-bubble bot">Perfeito. Deixei confirmado para amanhã às 15h.</div>
              </div>
            </div>
          </motion.div>

          <div className="v3-stage-list">
            {stages.map(([num, eyebrow, title, text], index) => (
              <motion.div
                className="v3-stage-item"
                key={num}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: .65 }}
                transition={{ delay: index * .08, duration: .5, ease }}
              >
                <div className="v3-stage-dot">{num}</div>
                <div className="v3-stage-copy">
                  <small>{eyebrow}</small>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function AppV2() {
  return (
    <>
      <HeaderV2 />
      <HeroV2 />
      <PainStoryV3 />
      <AiComparisonV3 />
      <OperationStoryV3 />
      <div className="legacy-page">
        <App />
      </div>
    </>
  )
}
