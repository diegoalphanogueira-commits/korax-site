import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Building2,
  CalendarCheck2,
  Check,
  ChevronDown,
  CircleUserRound,
  Clock3,
  Headphones,
  HeartPulse,
  House,
  Image as ImageIcon,
  Layers3,
  MessageCircle,
  MessagesSquare,
  RefreshCw,
  Route,
  ShieldCheck,
  Sparkles,
  Store,
  UsersRound,
  Workflow,
  Zap,
} from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]
const WHATSAPP_URL = '#whatsapp-demo'

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease },
}

function Logo() {
  return (
    <a className="v5-logo" href="#inicio" aria-label="Korax - início">
      <span className="v5-logo-mark">K</span>
      <span>KORAX</span>
    </a>
  )
}

function Header() {
  return (
    <header className="v5-header">
      <div className="v5-shell v5-header-inner">
        <Logo />
        <nav className="v5-nav" aria-label="Navegação principal">
          <a href="#como-funciona">Como funciona</a>
          <a href="#diferencial">Diferencial</a>
          <a href="#segmentos">Segmentos</a>
          <a href="#cases">Cases</a>
        </nav>
        <a className="v5-header-cta" href={WHATSAPP_URL}>
          Testar a Korax <ArrowRight size={16} />
        </a>
      </div>
    </header>
  )
}

function ImageSlot({ src, eyebrow, title, className = '', ratio = 'wide', children }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`v5-image-slot ${ratio} ${className}`}>
      {!failed ? (
        <img src={src} alt={title} onError={() => setFailed(true)} />
      ) : (
        <div className="v5-image-fallback">
          <span className="v5-image-icon"><ImageIcon size={24} /></span>
          <small>{eyebrow}</small>
          <strong>{title}</strong>
          {children}
        </div>
      )}
    </div>
  )
}

function LiveOperation() {
  const steps = [
    ['Mensagem recebida', 'agora', MessageCircle],
    ['Necessidade entendida', 'contexto preservado', Sparkles],
    ['Lead qualificado', 'CRM atualizado', Workflow],
    ['Horário sugerido', 'agenda consultada', CalendarCheck2],
  ]

  return (
    <div className="v5-live-operation">
      <div className="v5-live-top">
        <span><i /> FUNCIONÁRIO DIGITAL EM OPERAÇÃO</span>
        <em>24/7</em>
      </div>
      <div className="v5-live-client">
        <div className="v5-avatar">M</div>
        <div><small>NOVA CONVERSA</small><strong>Mariana · WhatsApp</strong></div>
        <span>agora</span>
      </div>
      <div className="v5-live-message">“Oi! Queria entender melhor o procedimento e saber se vocês atendem sábado.”</div>
      <div className="v5-live-answer">
        <span className="v5-k-avatar">K</span>
        <p>Atendemos, sim. Posso te explicar o procedimento primeiro e, se fizer sentido para você, já verifico os horários disponíveis.</p>
      </div>
      <div className="v5-live-steps">
        {steps.map(([title, meta, Icon], index) => (
          <motion.div
            key={title}
            className="v5-live-step"
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.22, duration: 0.45, ease }}
          >
            <span><Icon size={15} /></span>
            <div><strong>{title}</strong><small>{meta}</small></div>
            <Check size={14} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="v5-hero" id="inicio">
      <div className="v5-hero-grid-bg" />
      <div className="v5-hero-glow one" />
      <div className="v5-hero-glow two" />
      <div className="v5-shell v5-hero-grid">
        <motion.div className="v5-hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>
          <div className="v5-kicker"><span /> FUNCIONÁRIO DIGITAL PARA O SEU WHATSAPP</div>
          <h1>
            Seu cliente chamou no WhatsApp.
            <em>Quanto tempo ele espera até alguém responder?</em>
          </h1>
          <p className="v5-hero-lead">
            Coloque a Korax na linha de frente do seu comercial. Ela atende na hora, entende a necessidade, tira dúvidas, qualifica, agenda, confirma, faz follow-up e organiza o CRM — enquanto sua equipe entra somente quando realmente precisa.
          </p>
          <div className="v5-actions">
            <a className="v5-btn primary" href={WHATSAPP_URL}><MessageCircle size={18} /> Ver a Korax atendendo agora <ArrowRight size={18} /></a>
            <a className="v5-btn secondary" href="#como-funciona">Ver como funciona <ChevronDown size={17} /></a>
          </div>
          <div className="v5-proof-row">
            <span><Zap size={14} /> atendimento 24h</span>
            <span><ShieldCheck size={14} /> treinada para sua operação</span>
            <span><Workflow size={14} /> CRM + agenda + follow-up</span>
          </div>
          <div className="v5-hero-note">
            <strong>Você não precisa de mais alguém olhando para a tela.</strong>
            <span>Precisa de uma operação que continue mesmo quando sua equipe está ocupada.</span>
          </div>
        </motion.div>
        <motion.div className="v5-hero-visual" initial={{ opacity: 0, scale: 0.96, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.18, ease }}>
          <LiveOperation />
          <div className="v5-floating-chip crm"><Workflow size={15} /><span><small>CRM</small>Lead qualificado</span></div>
          <div className="v5-floating-chip agenda"><CalendarCheck2 size={15} /><span><small>AGENDA</small>15:30 disponível</span></div>
          <div className="v5-floating-chip team"><UsersRound size={15} /><span><small>EQUIPE</small>Humano quando precisa</span></div>
        </motion.div>
      </div>
    </section>
  )
}

function Marquee() {
  const items = ['ATENDE', 'ENTENDE', 'QUALIFICA', 'TIRA DÚVIDAS', 'AGENDA', 'CONFIRMA', 'FAZ FOLLOW-UP', 'ATUALIZA O CRM', 'TRANSFERE COM CONTEXTO']
  return (
    <div className="v5-marquee-wrap" aria-hidden="true">
      <div className="v5-marquee">{[...items, ...items].map((item, i) => <span key={`${item}-${i}`}>{item}<i /></span>)}</div>
    </div>
  )
}

function Pain() {
  const pains = [
    ['Cliente chama', 'Sua equipe está atendendo, em reunião ou resolvendo outra coisa.'],
    ['Resposta demora', 'Enquanto isso, o mesmo cliente pode estar falando com outras empresas.'],
    ['Follow-up depende da memória', 'Leads quentes ficam parados porque ninguém lembrou de retornar.'],
    ['Você perde visibilidade', 'Fica difícil saber quem respondeu, em que etapa está e qual é o próximo passo.'],
  ]
  return (
    <section className="v5-section v5-pain" id="como-funciona">
      <div className="v5-shell">
        <motion.div className="v5-section-head" {...reveal}>
          <span className="v5-label">O GARGALO QUE TODO MUNDO NORMALIZA</span>
          <h2>Se alguém precisa parar o que está fazendo para responder o WhatsApp, <em>seu atendimento depende de disponibilidade.</em></h2>
          <p>O problema não é receber mensagens. É depender de alguém para transformar cada conversa em próximo passo.</p>
        </motion.div>
        <div className="v5-pain-grid">
          <div className="v5-pain-list">
            {pains.map(([title, text], i) => (
              <motion.article key={title} className="v5-pain-item" {...reveal} transition={{ ...reveal.transition, delay: i * 0.05 }}>
                <span>0{i + 1}</span><div><strong>{title}</strong><p>{text}</p></div>
              </motion.article>
            ))}
          </div>
          <motion.div className="v5-pain-visual" {...reveal}>
            <div className="v5-phone-time"><Clock3 size={16} /> 09:12</div>
            <div className="v5-phone-message">Oi! Vocês fazem avaliação? Queria saber valor e disponibilidade.</div>
            <div className="v5-wait-line"><span>15 min</span><i /></div>
            <div className="v5-wait-line"><span>31 min</span><i /></div>
            <div className="v5-lost-message">Obrigada, já consegui com outra empresa.</div>
            <div className="v5-pain-caption"><strong>O interesse existia.</strong><span>A continuidade não.</span></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function DigitalEmployee() {
  const capabilities = [
    ['Atende na hora', 'Sem depender de fila ou horário comercial.', MessagesSquare],
    ['Entende e qualifica', 'Faz as perguntas certas conforme sua operação.', Sparkles],
    ['Agenda e confirma', 'Conduz para disponibilidade e confirma o próximo passo.', CalendarCheck2],
    ['Retoma conversas', 'Follow-up quando o cliente para de responder.', RefreshCw],
    ['Organiza o CRM', 'Contexto, interesse, estágio e histórico em um só lugar.', Workflow],
    ['Chama sua equipe', 'Humano entra quando negociação ou exceção realmente exige.', CircleUserRound],
  ]
  return (
    <section className="v5-section v5-employee">
      <div className="v5-shell">
        <motion.div className="v5-section-head centered" {...reveal}>
          <span className="v5-label">UM FUNCIONÁRIO DIGITAL NA LINHA DE FRENTE</span>
          <h2>Imagine ter alguém no WhatsApp da sua empresa <em>24 horas por dia.</em></h2>
          <p>Alguém que conhece seus serviços, sabe o que perguntar, entende quando conduzir, quando agendar e quando chamar sua equipe.</p>
        </motion.div>
        <div className="v5-capability-grid">
          {capabilities.map(([title, text, Icon], i) => (
            <motion.article className="v5-capability" key={title} {...reveal} transition={{ ...reveal.transition, delay: (i % 3) * 0.05 }}>
              <span><Icon size={20} /></span><strong>{title}</strong><p>{text}</p>
            </motion.article>
          ))}
        </div>
        <motion.div className="v5-employee-quote" {...reveal}>
          <p>Sua equipe não deveria passar o dia respondendo WhatsApp.</p>
          <strong>Deveria entrar na conversa quando realmente faz diferença.</strong>
        </motion.div>
      </div>
    </section>
  )
}

function Frustration() {
  return (
    <section className="v5-section v5-frustration" id="diferencial">
      <div className="v5-shell">
        <div className="v5-frustration-grid">
          <motion.div className="v5-frustration-copy" {...reveal}>
            <span className="v5-label light">JÁ TENTOU COLOCAR IA NO WHATSAPP?</span>
            <h2>Se parecia um robô, esquecia contexto ou quebrava quando o cliente saía do roteiro, <em>você não precisa desistir de IA.</em></h2>
            <p>Precisa experimentar uma implantação diferente. A Korax é treinada para conversar com naturalidade sem perder o objetivo comercial da conversa.</p>
            <a className="v5-inline-link" href={WHATSAPP_URL}>Coloque a Korax à prova <ArrowRight size={16} /></a>
          </motion.div>
          <motion.div className="v5-compare" {...reveal}>
            <article className="v5-compare-card generic">
              <header><Bot size={18} /> IA genérica</header>
              <div className="v5-bubble client">Antes: vocês atendem sábado?</div>
              <div className="v5-bubble robot">Não entendi. Selecione uma opção: 1. Preços 2. Horários 3. Agendamento</div>
              <footer>contexto quebrado</footer>
            </article>
            <article className="v5-compare-card korax">
              <header><Sparkles size={18} /> Korax</header>
              <div className="v5-bubble client">Antes: vocês atendem sábado?</div>
              <div className="v5-bubble smart">Atendemos, sim. E eu mantenho sua dúvida inicial aqui. Posso te explicar o procedimento e depois verificar um horário.</div>
              <footer><Check size={13} /> contexto preservado · objetivo mantido</footer>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Training() {
  const journey = [
    ['01', 'Entendemos sua operação', 'Serviços, dúvidas, equipe, regras, agenda, objeções e processo comercial.'],
    ['02', 'Desenhamos a jornada', 'O que perguntar, como qualificar, quais objetivos e quais próximos passos.'],
    ['03', 'Treinamos comportamento e conhecimento', 'Linguagem, contexto, limites, critérios e como agir fora do roteiro.'],
    ['04', 'Testamos cenários reais', 'Mudança de assunto, objeções, dúvidas inesperadas, negociação e transferência.'],
    ['05', 'Conectamos a operação', 'CRM, agenda, setores, responsáveis, confirmações e automações.'],
    ['06', 'Colocamos no ar e refinamos', 'Ajustes usando situações reais para deixar a operação cada vez mais alinhada.'],
  ]
  return (
    <section className="v5-section v5-training">
      <div className="v5-shell">
        <div className="v5-training-grid">
          <motion.div className="v5-training-copy" {...reveal}>
            <span className="v5-label">NOSSO MODELO DE TREINAMENTO</span>
            <h2>Não treinamos apenas respostas. <em>Treinamos uma jornada comercial.</em></h2>
            <p>A Korax não aprende só o que sua empresa sabe. Ela aprende como sua empresa conduz um cliente — da primeira mensagem até o próximo passo.</p>
            <ImageSlot src="/media/training/implantacao-korax.webp" eyebrow="IMAGEM DE IMPLANTAÇÃO" title="Treinamento e implantação da operação Korax" ratio="landscape" />
          </motion.div>
          <div className="v5-journey-list">
            {journey.map(([num, title, text], i) => (
              <motion.article key={title} className="v5-journey-item" {...reveal} transition={{ ...reveal.transition, delay: (i % 3) * 0.04 }}>
                <span>{num}</span><div><strong>{title}</strong><p>{text}</p></div>
              </motion.article>
            ))}
          </div>
        </div>
        <motion.div className="v5-training-manifesto" {...reveal}>
          <span>Sua empresa não precisa se adaptar à IA.</span>
          <strong>A IA é que precisa aprender sua operação.</strong>
        </motion.div>
      </div>
    </section>
  )
}

function Product() {
  const modules = [
    ['Conversas', 'IA e equipe trabalham no mesmo histórico, sem perder contexto.', '/media/product/conversas.webp', MessagesSquare],
    ['CRM e oportunidades', 'Cada conversa vira oportunidade, estágio, responsável e próximo passo.', '/media/product/crm.webp', Workflow],
    ['Agenda', 'Disponibilidade, agendamento, confirmação e contexto conectados.', '/media/product/agenda.webp', CalendarCheck2],
    ['Follow-up', 'A conversa não morre porque alguém esqueceu de voltar.', '/media/product/follow-up.webp', RefreshCw],
  ]
  return (
    <section className="v5-section v5-product">
      <div className="v5-shell">
        <motion.div className="v5-section-head centered" {...reveal}>
          <span className="v5-label">POR TRÁS DA CONVERSA</span>
          <h2>O cliente vê WhatsApp. <em>Você vê a operação inteira.</em></h2>
          <p>Atendimento, histórico, oportunidade, agenda, automações e equipe trabalham conectados para você ter controle do que está acontecendo.</p>
        </motion.div>
        <div className="v5-product-grid">
          {modules.map(([title, text, src, Icon], i) => (
            <motion.article className="v5-product-card" key={title} {...reveal} transition={{ ...reveal.transition, delay: (i % 2) * 0.05 }}>
              <div className="v5-product-copy"><span><Icon size={18} /></span><strong>{title}</strong><p>{text}</p></div>
              <ImageSlot src={src} eyebrow="TELA REAL DA KORAX" title={title} ratio="product" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

const segmentData = {
  clinicas: {
    label: 'Clínicas e estética', icon: HeartPulse,
    headline: 'Do primeiro “quanto custa?” até a avaliação confirmada.',
    flow: ['Dúvida sobre procedimento', 'Entendimento da necessidade', 'Qualificação', 'Agenda', 'Confirmação', 'CRM'],
    example: 'Cliente pergunta às 22h sobre um procedimento. A Korax explica dentro do que foi treinado, entende a necessidade, conduz para avaliação, agenda e confirma.'
  },
  seguros: {
    label: 'Seguros', icon: ShieldCheck,
    headline: 'Da intenção de cotar até o corretor receber contexto pronto.',
    flow: ['Tipo de seguro', 'Coleta inicial', 'Qualificação', 'Oportunidade', 'Corretor', 'Follow-up'],
    example: 'O lead quer cotação. A Korax identifica o produto, coleta dados iniciais, organiza a oportunidade e entrega ao corretor sabendo exatamente o que já foi conversado.'
  },
  imobiliaria: {
    label: 'Imobiliárias', icon: House,
    headline: 'Mais contexto antes do corretor entrar na conversa.',
    flow: ['Imóvel', 'Região', 'Faixa de valor', 'Perfil', 'Agendamento', 'Corretor'],
    example: 'A Korax entende o que o lead procura, organiza perfil e intenção, agenda atendimento e transfere ao corretor com histórico e contexto.'
  },
  servicos: {
    label: 'Serviços', icon: Store,
    headline: 'Menos pergunta repetitiva. Mais oportunidade organizada.',
    flow: ['Demanda', 'Detalhes', 'Dúvidas', 'Orçamento', 'Próximo passo', 'Follow-up'],
    example: 'Cliente pede orçamento. A Korax entende a demanda, coleta o necessário, responde dúvidas e conduz para o próximo passo sem deixar o lead parado.'
  },
}

function Segments() {
  const [active, setActive] = useState('clinicas')
  const data = segmentData[active]
  const ActiveIcon = data.icon
  return (
    <section className="v5-section v5-segments" id="segmentos">
      <div className="v5-shell">
        <motion.div className="v5-section-head" {...reveal}>
          <span className="v5-label">CASOS DE USO</span>
          <h2>A lógica é a mesma. <em>A jornada muda conforme o seu negócio.</em></h2>
          <p>A implantação adapta perguntas, critérios, próximos passos, agenda, setores e automações à realidade de cada empresa.</p>
        </motion.div>
        <div className="v5-segment-tabs">
          {Object.entries(segmentData).map(([key, item]) => {
            const Icon = item.icon
            return <button key={key} className={active === key ? 'active' : ''} onClick={() => setActive(key)}><Icon size={16} /> {item.label}</button>
          })}
        </div>
        <motion.div className="v5-segment-panel" key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease }}>
          <div className="v5-segment-copy">
            <span className="v5-segment-icon"><ActiveIcon size={22} /></span>
            <h3>{data.headline}</h3>
            <p>{data.example}</p>
            <div className="v5-segment-flow">{data.flow.map((item, i) => <span key={item}>{item}{i < data.flow.length - 1 && <ArrowRight size={13} />}</span>)}</div>
          </div>
          <ImageSlot src={`/media/segments/${active}.webp`} eyebrow="IMAGEM DO SEGMENTO" title={data.label} ratio="segment" />
        </motion.div>
      </div>
    </section>
  )
}

function Cases() {
  const cases = [
    {
      tag: 'CASE 01 · SEGUROS',
      name: 'Pensou Seguros',
      problem: 'Estruturar atendimento, coleta inicial, oportunidades e acompanhamento dentro de uma operação comercial conectada.',
      work: ['Jornada de atendimento', 'Qualificação', 'CRM e oportunidades', 'Follow-up', 'Transferência com contexto'],
      image: '/media/cases/pensou-seguros.webp',
      status: 'material real será inserido aqui'
    },
    {
      tag: 'CASE 02 · EM PREPARAÇÃO',
      name: 'Próxima operação',
      problem: 'Espaço reservado para documentar problema, implantação, telas reais e mudança na rotina do cliente.',
      work: ['Antes', 'Implantação', 'Depois', 'Evidências reais'],
      image: '/media/cases/case-02.webp',
      status: 'case real sem números inventados'
    },
  ]
  return (
    <section className="v5-section v5-cases" id="cases">
      <div className="v5-shell">
        <motion.div className="v5-section-head centered" {...reveal}>
          <span className="v5-label light">OPERAÇÕES REAIS</span>
          <h2>Case bom não é frase bonita. <em>É mostrar o que foi implantado.</em></h2>
          <p>Vamos usar prints, jornadas, depoimentos e evidências reais. Sem números inventados e sem prova genérica.</p>
        </motion.div>
        <div className="v5-case-grid">
          {cases.map((item, i) => (
            <motion.article className="v5-case-card" key={item.name} {...reveal} transition={{ ...reveal.transition, delay: i * 0.06 }}>
              <ImageSlot src={item.image} eyebrow="EVIDÊNCIA DO CASE" title={item.name} ratio="case" />
              <div className="v5-case-copy">
                <small>{item.tag}</small>
                <h3>{item.name}</h3>
                <p>{item.problem}</p>
                <div className="v5-case-tags">{item.work.map(t => <span key={t}><Check size={12} /> {t}</span>)}</div>
                <em>{item.status}</em>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestSection() {
  return (
    <section className="v5-section v5-test" id="whatsapp-demo">
      <div className="v5-shell v5-test-grid">
        <motion.div className="v5-test-copy" {...reveal}>
          <span className="v5-label light">NÃO PRECISA ACREDITAR NA COPY</span>
          <h2>Faça perguntas. Mude de assunto. <em>Tente tirar a Korax do roteiro.</em></h2>
          <p>Se você já teve uma experiência ruim com chatbot ou IA engessada, a melhor forma de entender a diferença é conversar com a própria Korax.</p>
          <div className="v5-test-prompts"><span>“Vocês atendem sábado?”</span><span>“Esquece isso, queria perguntar outra coisa.”</span><span>“Volta para o que eu tinha perguntado antes.”</span></div>
          <a className="v5-btn white" href="#">Abrir conversa no WhatsApp <ArrowRight size={18} /></a>
          <small>O link oficial do agente será conectado aqui.</small>
        </motion.div>
        <motion.div className="v5-test-phone" {...reveal}>
          <div className="v5-test-k">K</div>
          <span>Você está falando com a própria Korax.</span>
          <strong>Em vez de explicar tudo o que faço, posso demonstrar conversando com você.</strong>
          <div className="v5-test-input">Qual tipo de empresa você tem? <MessageCircle size={17} /></div>
        </motion.div>
      </div>
    </section>
  )
}

function Implementation() {
  const stages = ['Diagnóstico da operação', 'Desenho da jornada', 'Treinamento', 'Testes reais', 'Conexão e implantação', 'Acompanhamento e refinamento']
  return (
    <section className="v5-section v5-implementation">
      <div className="v5-shell">
        <motion.div className="v5-section-head centered" {...reveal}>
          <span className="v5-label">IMPLANTAÇÃO ACOMPANHADA</span>
          <h2>Não liberamos um software e deixamos você descobrir como usar.</h2>
          <p>Implantamos a Korax junto com sua operação, estruturando o que ela precisa saber, perguntar, registrar e fazer.</p>
        </motion.div>
        <div className="v5-implementation-line">
          {stages.map((stage, i) => <motion.div key={stage} className="v5-implementation-step" {...reveal} transition={{ ...reveal.transition, delay: i * 0.04 }}><span>{String(i + 1).padStart(2, '0')}</span><strong>{stage}</strong></motion.div>)}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState(0)
  const questions = [
    ['A Korax substitui minha equipe?', 'Não. Ela assume grande parte do atendimento operacional e repetitivo e chama a equipe quando negociação, exceção ou relacionamento humano realmente fazem diferença.'],
    ['Ela funciona como chatbot de menu?', 'Não é essa a proposta. A Korax conversa em linguagem natural, preserva contexto e é treinada para conduzir o processo comercial da empresa.'],
    ['Dá para adaptar ao meu processo?', 'Sim. A implantação existe justamente para mapear serviços, critérios, perguntas, agenda, responsáveis, etapas e automações da sua operação.'],
    ['Ela agenda e confirma?', 'A jornada pode incluir consulta de disponibilidade, agendamento, confirmação, remarcação e acompanhamento, conforme a configuração e integrações da operação.'],
    ['E quando precisa de uma pessoa?', 'A conversa pode ser direcionada para a pessoa ou setor correto, levando junto o histórico e o contexto coletado até aquele momento.'],
  ]
  return (
    <section className="v5-section v5-faq">
      <div className="v5-shell v5-faq-grid">
        <motion.div className="v5-faq-title" {...reveal}><span className="v5-label">DÚVIDAS IMPORTANTES</span><h2>Antes de colocar um funcionário digital na linha de frente.</h2></motion.div>
        <div className="v5-faq-list">{questions.map(([q, a], i) => <button key={q} className={open === i ? 'open' : ''} onClick={() => setOpen(open === i ? -1 : i)}><span><strong>{q}</strong><ChevronDown size={18} /></span>{open === i && <p>{a}</p>}</button>)}</div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="v5-final">
      <div className="v5-final-glow" />
      <div className="v5-shell v5-final-inner">
        <motion.div {...reveal}>
          <span className="v5-label light">SEU PRÓXIMO CLIENTE PODE CHAMAR AGORA</span>
          <h2>Quem vai atender?</h2>
          <p>Veja a Korax funcionando primeiro. Se fizer sentido, mostramos como ela pode aprender e operar dentro da sua empresa.</p>
          <div className="v5-actions centered-actions"><a className="v5-btn primary" href={WHATSAPP_URL}><MessageCircle size={18} /> Colocar a Korax à prova <ArrowRight size={18} /></a><a className="v5-btn dark-outline" href="#treinamento">Entender a implantação</a></div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return <footer className="v5-footer"><div className="v5-shell v5-footer-inner"><Logo /><p>Funcionário digital e operação comercial para WhatsApp.</p><span>contato@usekorax.com</span></div></footer>
}

export default function KoraxLandingV5() {
  return (
    <main className="v5-page">
      <Header />
      <Hero />
      <Marquee />
      <Pain />
      <DigitalEmployee />
      <Frustration />
      <div id="treinamento"><Training /></div>
      <Product />
      <Segments />
      <Cases />
      <TestSection />
      <Implementation />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
