import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  Building2,
  CalendarCheck2,
  CalendarDays,
  Check,
  ChevronDown,
  CircleUserRound,
  Clock3,
  HeartPulse,
  Home,
  Menu,
  MessageCircle,
  MessagesSquare,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Store,
  UsersRound,
  Workflow,
  X,
  Zap,
} from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const sectors = [
  {
    icon: HeartPulse,
    name: 'Clínicas e estética',
    title: 'Do primeiro “oi” até a avaliação confirmada.',
    flow: ['Interesse', 'Dúvidas', 'Qualificação', 'Avaliação', 'Agenda', 'Confirmação'],
    text: 'A Korax entende o procedimento de interesse, responde dúvidas, identifica contexto importante e conduz para o agendamento sem transformar a conversa em formulário.',
  },
  {
    icon: ShieldCheck,
    name: 'Seguros',
    title: 'Atendimento inicial sem travar o corretor.',
    flow: ['Interesse', 'Dados iniciais', 'Cotação', 'Corretor', 'Follow-up'],
    text: 'A inteligência coleta o que faz sentido, organiza a oportunidade e entrega ao corretor uma conversa pronta para avançar.',
  },
  {
    icon: Home,
    name: 'Imobiliárias',
    title: 'Lead entendido antes de chegar ao corretor.',
    flow: ['Perfil', 'Região', 'Imóvel', 'Qualificação', 'Corretor', 'Visita'],
    text: 'A Korax identifica intenção, região, momento e perfil do lead antes de encaminhar para o atendimento humano.',
  },
  {
    icon: Store,
    name: 'Serviços',
    title: 'Menos pergunta repetida. Mais próximo passo.',
    flow: ['Necessidade', 'Informação', 'Orçamento', 'Agenda', 'Retorno'],
    text: 'Empresas de serviços ganham velocidade na triagem, organização e continuidade das oportunidades que chegam pelo WhatsApp.',
  },
]

const featureCards = [
  { icon: MessageCircle, eyebrow: 'ATENDIMENTO', title: 'Responde na hora, com contexto.', text: 'Entende o que o cliente procura, conversa de forma natural e segue a lógica comercial da sua empresa.' },
  { icon: Workflow, eyebrow: 'CRM', title: 'Cada conversa vira uma oportunidade organizada.', text: 'Interesse, estágio, responsável, histórico e próximo passo ficam visíveis para a equipe.' },
  { icon: CalendarDays, eyebrow: 'AGENDA', title: 'Conduz até o horário confirmado.', text: 'Consulta disponibilidade, conduz para agendamento e reduz o vai-e-volta operacional.' },
  { icon: RefreshCw, eyebrow: 'FOLLOW-UP', title: 'Se o cliente parar, a operação não precisa parar.', text: 'A Korax retoma conversas conforme a estratégia definida, sem depender da memória de alguém.' },
  { icon: UsersRound, eyebrow: 'EQUIPE', title: 'Humano entra no momento certo.', text: 'Quando a conversa precisa de negociação, exceção ou relacionamento, a equipe assume com todo o contexto.' },
  { icon: ShieldCheck, eyebrow: 'CONTROLE', title: 'Você enxerga o que antes ficava espalhado.', text: 'Atendimento, responsáveis, oportunidades e próximos passos passam a fazer parte da mesma operação.' },
]

function Logo() {
  return (
    <a className="k4-logo" href="#inicio" aria-label="Korax - início">
      <span className="k4-logo-mark">K</span>
      <span className="k4-logo-name">KORAX</span>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="k4-header">
      <div className="k4-shell k4-header-inner">
        <Logo />
        <nav className="k4-nav" aria-label="Navegação principal">
          <a href="#problema">Por que Korax</a>
          <a href="#diferenca">A diferença</a>
          <a href="#plataforma">Plataforma</a>
          <a href="#segmentos">Segmentos</a>
          <a href="#implantacao">Implantação</a>
          <a href="#cases">Cases</a>
        </nav>
        <a className="k4-header-cta" href="#teste">Testar a Korax <ArrowRight size={16} /></a>
        <button className="k4-menu-btn" onClick={() => setOpen(!open)} aria-label="Abrir menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="k4-mobile-menu">
          {['problema','diferenca','plataforma','segmentos','implantacao','cases'].map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{id === 'problema' ? 'Por que Korax' : id[0].toUpperCase() + id.slice(1)}</a>
          ))}
          <a className="k4-mobile-menu-cta" href="#teste" onClick={() => setOpen(false)}>Testar a Korax <ArrowRight size={16} /></a>
        </div>
      )}
    </header>
  )
}

function HeroVisual() {
  return (
    <div className="k4-hero-visual" aria-label="Funcionário digital Korax operando no WhatsApp">
      <div className="k4-orbit k4-orbit-one" />
      <div className="k4-orbit k4-orbit-two" />

      <motion.div className="k4-live-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .25, ease }}>
        <span><i /> FUNCIONÁRIO DIGITAL ONLINE</span>
        <strong>Korax está atendendo</strong>
      </motion.div>

      <motion.div className="k4-chat" initial={{ opacity: 0, y: 30, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .9, delay: .35, ease }}>
        <div className="k4-chat-head">
          <div className="k4-avatar">K</div>
          <div><strong>Korax</strong><small><i /> atendendo agora</small></div>
          <span><Sparkles size={13} /> IA ativa</span>
        </div>
        <div className="k4-chat-body">
          <div className="k4-msg client">Oi! Queria saber mais sobre a avaliação. Minha pele é sensível.</div>
          <div className="k4-msg korax">Claro. Isso pode mudar a recomendação, sim. Antes de marcar, posso entender melhor sua pele e depois verificar um horário para você.</div>
          <div className="k4-msg client">Vocês atendem sábado?</div>
          <div className="k4-msg korax">Atendemos. Tenho disponibilidade às 10h e às 15h30. Qual funciona melhor?</div>
          <div className="k4-thinking"><span /><span /><span /><small>contexto preservado</small></div>
        </div>
      </motion.div>

      <motion.div className="k4-float k4-float-crm" initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }}>
        <Workflow size={17} /><div><small>CRM</small><strong>Lead qualificado</strong></div>
      </motion.div>
      <motion.div className="k4-float k4-float-calendar" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.35 }}>
        <CalendarCheck2 size={17} /><div><small>AGENDA</small><strong>15:30 reservado</strong></div>
      </motion.div>
      <motion.div className="k4-float k4-float-team" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }}>
        <UsersRound size={17} /><div><small>EQUIPE</small><strong>Sem intervenção</strong></div>
      </motion.div>
    </div>
  )
}

function Hero() {
  return (
    <section className="k4-hero" id="inicio">
      <div className="k4-grid-bg" />
      <div className="k4-hero-glow" />
      <div className="k4-shell k4-hero-grid">
        <motion.div className="k4-hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, ease }}>
          <div className="k4-kicker"><span /> FUNCIONÁRIO DIGITAL PARA O SEU WHATSAPP</div>
          <h1>Seu WhatsApp recebe oportunidades. <em>Sua empresa ainda depende de alguém estar disponível para atender?</em></h1>
          <p className="k4-hero-lead">Coloque a Korax na linha de frente do seu comercial. Ela atende na hora, entende a necessidade, qualifica, agenda, faz follow-up e atualiza o CRM — e chama sua equipe somente quando o atendimento humano realmente faz diferença.</p>
          <div className="k4-actions">
            <a className="k4-btn k4-btn-primary" href="#teste"><MessageCircle size={18} /> Ver a Korax atendendo agora <ArrowRight size={18} /></a>
            <a className="k4-btn k4-btn-secondary" href="#plataforma">Entender a operação <ChevronDown size={17} /></a>
          </div>
          <div className="k4-proof-row">
            <span><Clock3 size={14} /> 24h por dia</span>
            <span><Sparkles size={14} /> treinada para sua operação</span>
            <span><Workflow size={14} /> CRM + agenda + follow-up</span>
            <span><CircleUserRound size={14} /> humano quando necessário</span>
          </div>
          <div className="k4-hero-note"><strong>Você não precisa de mais uma ferramenta para sua equipe operar.</strong><span>Você precisa de uma operação que continue funcionando quando sua equipe está ocupada.</span></div>
        </motion.div>
        <HeroVisual />
      </div>
    </section>
  )
}

function CapabilityStrip() {
  const items = ['ATENDE', 'ENTENDE', 'QUALIFICA', 'AGENDA', 'ATUALIZA O CRM', 'FAZ FOLLOW-UP', 'TRANSFERE COM CONTEXTO']
  return <div className="k4-marquee-wrap"><div className="k4-marquee">{[...items, ...items].map((item, i) => <span key={`${item}-${i}`}>{item}<i /></span>)}</div></div>
}

function Problem() {
  return (
    <section className="k4-section k4-problem" id="problema">
      <div className="k4-shell">
        <div className="k4-section-head k4-head-wide">
          <span className="k4-label">O PROBLEMA NÃO É RECEBER MENSAGENS</span>
          <h2>É depender de alguém para transformar cada mensagem em uma oportunidade.</h2>
          <p>Enquanto sua equipe está atendendo presencialmente, em reunião, no almoço ou simplesmente ocupada, novos clientes continuam chegando ao WhatsApp.</p>
        </div>
        <div className="k4-problem-grid">
          <div className="k4-inbox-card">
            <div className="k4-inbox-top"><span>WhatsApp comercial</span><small>agora</small></div>
            <div className="k4-inbox-stat"><strong>12</strong><span>novas conversas</span></div>
            <div className="k4-inbox-list">
              <div><span className="danger">4</span><p><strong>aguardando resposta</strong><small>cliente esperando alguém ficar disponível</small></p></div>
              <div><span>3</span><p><strong>sem follow-up</strong><small>ninguém retomou a conversa</small></p></div>
              <div><span>2</span><p><strong>orçamentos parados</strong><small>próximo passo não definido</small></p></div>
            </div>
          </div>
          <div className="k4-problem-copy">
            <h3>O WhatsApp não para quando sua equipe fica ocupada.</h3>
            <p>E o cliente também não. Quem está procurando uma clínica, um seguro, um imóvel ou um serviço costuma falar com mais de uma empresa. A velocidade e a continuidade da conversa importam.</p>
            <div className="k4-problem-quote">“A oportunidade não some porque faltou interesse. Muitas vezes ela some porque faltou continuidade.”</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Frustration() {
  return (
    <section className="k4-section k4-frustration" id="diferenca">
      <div className="k4-shell">
        <div className="k4-section-head centered dark">
          <span className="k4-label light">SE VOCÊ JÁ TENTOU IA E SE FRUSTROU</span>
          <h2>Talvez o problema não tenha sido a IA. <em>Foi a experiência.</em></h2>
          <p>Robôs engessados, fluxos que quebram e respostas que parecem prontas fizeram muita empresa desistir cedo demais.</p>
        </div>
        <div className="k4-compare-grid">
          <article className="k4-compare-card generic">
            <div className="k4-compare-title"><Bot size={20} /><span>IA genérica</span></div>
            <div className="k4-bubble client">Antes: vocês atendem sábado?</div>
            <div className="k4-bubble robot">Não entendi. Escolha uma opção:<br/>1. Preços<br/>2. Horários<br/>3. Agendamento</div>
            <div className="k4-compare-result bad">Contexto perdido. Conversa artificial.</div>
          </article>
          <article className="k4-compare-card korax">
            <div className="k4-compare-title"><Sparkles size={20} /><span>Korax</span></div>
            <div className="k4-bubble client">Antes: vocês atendem sábado?</div>
            <div className="k4-bubble smart">Atendemos, sim. E eu mantenho sua dúvida inicial aqui. Posso responder isso primeiro e depois retomar o procedimento para te orientar melhor.</div>
            <div className="k4-compare-result good"><Check size={14}/> Contexto preservado. Objetivo mantido.</div>
          </article>
        </div>
        <div className="k4-manifesto"><span>Humanizada para conversar.</span><strong>Rigorosa para conduzir.</strong></div>
      </div>
    </section>
  )
}

function TestBlock() {
  return (
    <section className="k4-test" id="teste">
      <div className="k4-shell k4-test-grid">
        <div>
          <span className="k4-label light">NÃO PRECISA ACREDITAR NO QUE ESTAMOS DIZENDO</span>
          <h2>Converse com a própria Korax. <em>Tente tirar ela do roteiro.</em></h2>
          <p>Faça perguntas. Mude de assunto. Peça para falar com alguém. Questione preço, horário ou processo. A melhor forma de entender a Korax é experimentar a própria inteligência atendendo você.</p>
          <a className="k4-btn k4-btn-white" href="#"><MessageCircle size={18}/> Abrir conversa no WhatsApp <ArrowRight size={18}/></a>
          <small className="k4-test-note">O link oficial do agente será conectado aqui na publicação final.</small>
        </div>
        <div className="k4-phone-demo">
          <div className="k4-phone-notch" />
          <div className="k4-phone-logo">K</div>
          <h3>Você está falando com a própria Korax.</h3>
          <p>Em vez de explicar tudo o que faço, posso demonstrar conversando com você.</p>
          <div className="k4-phone-prompt">Qual tipo de empresa você tem?</div>
          <div className="k4-phone-actions"><span>mude de assunto</span><span>teste um agendamento</span><span>peça um humano</span></div>
        </div>
      </div>
    </section>
  )
}

function Platform() {
  return (
    <section className="k4-section k4-platform" id="plataforma">
      <div className="k4-shell">
        <div className="k4-section-head centered">
          <span className="k4-label">UMA CONVERSA MOVIMENTA A OPERAÇÃO</span>
          <h2>Não é só responder mensagens. <em>É conectar o próximo passo.</em></h2>
          <p>Cliente, atendimento, CRM, agenda, follow-up e equipe deixam de existir em ilhas separadas.</p>
        </div>
        <div className="k4-feature-grid">
          {featureCards.map(({icon: Icon, eyebrow, title, text}, i) => (
            <motion.article className="k4-feature-card" key={title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:.45,delay:(i%3)*.05}}>
              <span className="k4-feature-icon"><Icon size={21}/></span>
              <small>{eyebrow}</small>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
        <div className="k4-control-panel">
          <div className="k4-control-sidebar"><span>K</span><i className="active"/><i/><i/><i/></div>
          <div className="k4-control-main">
            <div className="k4-control-head"><div><small>OPERAÇÃO COMERCIAL</small><h3>Tudo conectado em um só lugar.</h3></div><span><i/> operação online</span></div>
            <div className="k4-control-cards">
              <div><small>CONVERSAS</small><strong>Atendimento centralizado</strong><p>IA e equipe no mesmo histórico.</p></div>
              <div><small>OPORTUNIDADES</small><strong>Próximo passo visível</strong><p>Contexto comercial organizado.</p></div>
              <div><small>AGENDA</small><strong>Horários conectados</strong><p>Agendamento dentro do fluxo.</p></div>
              <div><small>AUTOMAÇÃO</small><strong>Follow-up ativo</strong><p>Oportunidade não depende da memória.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HumanAI() {
  return (
    <section className="k4-section k4-human">
      <div className="k4-shell k4-human-grid">
        <div className="k4-human-copy">
          <span className="k4-label">IA ONDE VELOCIDADE IMPORTA. PESSOAS ONDE RELACIONAMENTO IMPORTA.</span>
          <h2>Sua equipe não deveria passar o dia respondendo as mesmas perguntas.</h2>
          <p>A Korax assume o repetitivo e operacional. Sua equipe entra em negociação, exceções, relacionamento e fechamento.</p>
        </div>
        <div className="k4-handoff">
          <div className="k4-handoff-side ai"><Sparkles size={20}/><strong>Korax</strong><span>perguntas iniciais</span><span>qualificação</span><span>agenda</span><span>confirmações</span><span>follow-up</span></div>
          <div className="k4-handoff-arrow"><ArrowRight/></div>
          <div className="k4-handoff-side human"><CircleUserRound size={20}/><strong>Equipe</strong><span>negociação</span><span>exceções</span><span>relacionamento</span><span>decisão</span><span>fechamento</span></div>
        </div>
      </div>
    </section>
  )
}

function Segments() {
  const [active, setActive] = useState(0)
  const current = sectors[active]
  const Icon = current.icon
  return (
    <section className="k4-section k4-segments" id="segmentos">
      <div className="k4-shell">
        <div className="k4-section-head centered">
          <span className="k4-label">A KORAX SE ADAPTA AO PROCESSO</span>
          <h2>Não importa apenas o segmento. <em>Importa como sua empresa vende e atende.</em></h2>
          <p>A inteligência é treinada para produtos, serviços, linguagem, regras, agenda e fluxo comercial de cada operação.</p>
        </div>
        <div className="k4-tabs">
          {sectors.map((sector, i) => <button key={sector.name} className={i===active?'active':''} onClick={()=>setActive(i)}>{sector.name}</button>)}
        </div>
        <motion.div className="k4-segment-panel" key={current.name} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.35}}>
          <div className="k4-segment-copy"><span className="k4-segment-icon"><Icon size={24}/></span><small>{current.name}</small><h3>{current.title}</h3><p>{current.text}</p></div>
          <div className="k4-segment-flow">{current.flow.map((item,i)=><div key={item}><span>{item}</span>{i<current.flow.length-1&&<ArrowRight size={15}/>}</div>)}</div>
        </motion.div>
      </div>
    </section>
  )
}

function Implementation() {
  const steps = [
    ['01','Diagnóstico','Entendemos como sua empresa atende hoje, onde estão os gargalos e o que precisa continuar humano.'],
    ['02','Treinamento','Produtos, serviços, regras, objeções, linguagem, horários, agenda e critérios entram no contexto da Korax.'],
    ['03','Estruturação','Organizamos setores, responsáveis, CRM, follow-ups e lógica de transferência.'],
    ['04','Simulação','Testamos situações reais, inclusive perguntas inesperadas e caminhos fora do fluxo ideal.'],
    ['05','Implantação','Conectamos a operação e colocamos a Korax para atender no cenário real.'],
    ['06','Otimização','Ajustamos a inteligência a partir das conversas reais para evoluir a operação.'],
  ]
  return (
    <section className="k4-section k4-implementation" id="implantacao">
      <div className="k4-shell">
        <div className="k4-section-head k4-head-wide">
          <span className="k4-label">NÃO É “LIBERAR UM LOGIN”</span>
          <h2>Implantamos a Korax junto com a sua operação.</h2>
          <p>A inteligência precisa aprender como sua empresa atende e vende. Por isso, a implantação faz parte do produto.</p>
        </div>
        <div className="k4-implementation-grid">{steps.map(([n,title,text])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        <div className="k4-implementation-banner"><Sparkles size={22}/><div><strong>A IA se adapta à sua empresa.</strong><span>Não o contrário.</span></div></div>
      </div>
    </section>
  )
}

function Cases() {
  return (
    <section className="k4-section k4-cases" id="cases">
      <div className="k4-shell">
        <div className="k4-section-head centered dark">
          <span className="k4-label light">OPERAÇÕES REAIS</span>
          <h2>Cases entram para provar processo, não para decorar a página.</h2>
          <p>Sem número inventado. Cada case será construído com cenário, implantação, evidências visuais e mudança real na rotina.</p>
        </div>
        <div className="k4-case-grid">
          <article className="k4-case-card featured">
            <div className="k4-case-top"><span>CASE 01</span><small>implantação em andamento</small></div>
            <div className="k4-case-brand">PENSOU SEGUROS</div>
            <h3>Organização comercial e atendimento conectado ao processo de cotação.</h3>
            <div className="k4-case-flow"><span>atendimento</span><ArrowRight size={15}/><span>qualificação</span><ArrowRight size={15}/><span>cotação</span><ArrowRight size={15}/><span>corretor</span></div>
            <p>Área preparada para entrar com telas, fluxo real, depoimento e evidências da implantação conforme o material for consolidado.</p>
          </article>
          <article className="k4-case-placeholder"><span>CASE 02</span><h3>Próxima operação real.</h3><p>Espaço reservado para um case com material visual e resultado verificável.</p><div>prints • contexto • implantação • mudança</div></article>
          <article className="k4-case-placeholder"><span>CASE 03</span><h3>Outro segmento, mesma lógica.</h3><p>Mostraremos como a Korax se adapta a processos comerciais diferentes sem virar um template genérico.</p><div>processo • conversa • CRM • próximo passo</div></article>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const items = [
    ['A Korax substitui minha equipe?','Não. Ela reduz o volume repetitivo e operacional e chama uma pessoa quando negociação, decisão, exceção ou relacionamento realmente precisam de atendimento humano.'],
    ['Ela funciona como aqueles chatbots de menu?','A proposta é justamente o contrário. A Korax é treinada para conversar com contexto, lidar com desvios e conduzir o processo sem obrigar o cliente a seguir um menu rígido.'],
    ['Preciso mudar meu processo para usar a Korax?','A implantação parte do processo que já existe e do processo que você quer construir. A inteligência é configurada para trabalhar dentro dessa lógica.'],
    ['Ela consegue agendar e fazer follow-up?','A arquitetura da Korax foi pensada para conectar conversa, agenda, CRM e automações de acompanhamento dentro da mesma operação.'],
    ['Como começo?','Primeiro entendemos sua operação. Depois configuramos, treinamos, simulamos cenários e colocamos a Korax para atender em produção com acompanhamento.'],
  ]
  const [open,setOpen]=useState(0)
  return (
    <section className="k4-section k4-faq">
      <div className="k4-shell k4-faq-grid">
        <div><span className="k4-label">DÚVIDAS COMUNS</span><h2>Antes de colocar uma IA na frente do seu cliente, você precisa saber como ela vai trabalhar.</h2></div>
        <div className="k4-faq-list">{items.map(([q,a],i)=><button key={q} className={open===i?'open':''} onClick={()=>setOpen(open===i?-1:i)}><div><strong>{q}</strong><ChevronDown size={18}/></div>{open===i&&<p>{a}</p>}</button>)}</div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="k4-final">
      <div className="k4-shell k4-final-inner">
        <span className="k4-label light">ANTES DE IMAGINAR COMO SERIA</span>
        <h2>Veja uma inteligência treinada <em>atendendo de verdade.</em></h2>
        <p>Converse com a Korax. Depois, se fizer sentido, mostramos como ela pode ser implantada dentro do processo comercial da sua empresa.</p>
        <div className="k4-actions center"><a className="k4-btn k4-btn-primary" href="#teste"><MessageCircle size={18}/> Testar a Korax no WhatsApp <ArrowRight size={18}/></a><a className="k4-btn k4-btn-dark" href="#implantacao">Falar sobre minha operação</a></div>
      </div>
    </section>
  )
}

function Footer(){return <footer className="k4-footer"><div className="k4-shell k4-footer-inner"><div><Logo/><p>Atendimento inteligente e operação comercial para WhatsApp.</p></div><div><strong>Korax</strong><a href="#diferenca">A diferença</a><a href="#plataforma">Plataforma</a><a href="#implantacao">Implantação</a></div><div><strong>Contato</strong><span>contato@usekorax.com</span><span>usekorax.com</span></div></div></footer>}

export default function KoraxLandingV4(){return <main className="k4-page"><div className="k4-progress"/><Header/><Hero/><CapabilityStrip/><Problem/><Frustration/><TestBlock/><Platform/><HumanAI/><Segments/><Implementation/><Cases/><FAQ/><FinalCTA/><Footer/></main>}
