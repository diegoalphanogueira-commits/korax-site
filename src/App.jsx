import {
  ArrowRight,
  Bot,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock3,
  Headphones,
  MessagesSquare,
  RefreshCw,
  Route,
  Sparkles,
  UsersRound,
  Workflow,
} from 'lucide-react'

const painPoints = [
  'Cliente esperando porque ninguém viu a mensagem',
  'Equipe interrompida por perguntas repetitivas',
  'Follow-up dependendo da memória de alguém',
  'Agendamentos e oportunidades espalhados',
]

const operationCards = [
  {
    icon: MessagesSquare,
    eyebrow: 'Atendimento',
    title: 'Responde na hora, com contexto.',
    text: 'A Korax entende o que o cliente procura, responde de forma natural e conduz a conversa de acordo com a sua operação.',
  },
  {
    icon: CalendarCheck,
    eyebrow: 'Agenda',
    title: 'Conduz até o próximo passo.',
    text: 'Quando o objetivo é agendar, a conversa avança até a disponibilidade, confirmação e organização do atendimento.',
  },
  {
    icon: RefreshCw,
    eyebrow: 'Follow-up',
    title: 'Não deixa oportunidade esfriar.',
    text: 'Se a conversa parar, a operação pode retomar o contato no momento definido pelo seu processo comercial.',
  },
  {
    icon: UsersRound,
    eyebrow: 'Equipe',
    title: 'Humano entra quando realmente precisa.',
    text: 'A conversa pode ser direcionada para a pessoa ou setor correto, já com histórico e contexto do atendimento.',
  },
]

const niches = [
  ['Clínicas e estética', 'Qualificação, avaliação, agenda e confirmação.'],
  ['Seguros', 'Interesse, coleta inicial, cotação e acompanhamento.'],
  ['Imobiliárias', 'Perfil, interesse, imóvel, visita e corretor.'],
  ['Academias', 'Objetivo, plano, unidade, visita e avaliação.'],
  ['Serviços', 'Orçamento, informações, agenda e retorno.'],
  ['Vendas consultivas', 'Dúvidas, qualificação, oportunidade e follow-up.'],
]

const steps = [
  ['01', 'Entendemos sua operação', 'Mapeamos como seus clientes chegam, como sua equipe atende e qual é o objetivo de cada conversa.'],
  ['02', 'Treinamos a Korax', 'Produtos, serviços, regras, linguagem, objeções, limites e informações importantes entram no treinamento.'],
  ['03', 'Estruturamos o processo', 'Atendimento, agenda, follow-up, responsáveis, setores e oportunidades passam a trabalhar juntos.'],
  ['04', 'Testamos com situações reais', 'Simulamos conversas do seu dia a dia, inclusive quando o cliente muda de assunto ou sai do roteiro.'],
  ['05', 'Entramos em operação', 'Conectamos o WhatsApp, preparamos a equipe e acompanhamos os primeiros atendimentos.'],
  ['06', 'Ajustamos e evoluímos', 'A operação ganha contexto com o uso e pode ser refinada conforme novas situações aparecem.'],
]

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Korax - início">
          <span className="brand-mark">K</span>
          <span>KORAX</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#diferencial">Por que Korax</a>
          <a href="#operacao">Como funciona</a>
          <a href="#implantacao">Implantação</a>
        </nav>

        <a className="button button-small button-outline" href="#demo">
          Testar a Korax
          <ArrowRight size={16} />
        </a>
      </div>
    </header>
  )
}

function ChatDemo() {
  return (
    <div className="chat-window" aria-label="Demonstração visual de uma conversa com a Korax">
      <div className="chat-topbar">
        <div className="chat-avatar">K</div>
        <div>
          <strong>Korax</strong>
          <span><i /> atendendo agora</span>
        </div>
        <Sparkles size={18} />
      </div>

      <div className="chat-body">
        <div className="message client">Oi! Queria saber mais sobre o procedimento, mas nunca fiz e tenho algumas dúvidas.</div>
        <div className="message korax">Claro. Posso te explicar sem problema. Antes de falar em agenda, me conta: qual é a sua principal dúvida sobre o procedimento?</div>
        <div className="message client">Minha pele é sensível. Isso muda alguma coisa?</div>
        <div className="message korax">Pode mudar a recomendação, sim. Nesse caso, o ideal é começar por uma avaliação para entender sua pele com segurança. Quer que eu veja os horários disponíveis para você?</div>
      </div>

      <div className="chat-footer">
        <span>Conversa natural</span>
        <span>Objetivo mantido</span>
        <span>Próximo passo conduzido</span>
      </div>
    </div>
  )
}

function App() {
  return (
    <div id="top">
      <Header />

      <main>
        <section className="hero section-dark">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow-pill"><span /> IA + operação comercial para WhatsApp</div>
              <h1>Seu cliente chamou no WhatsApp. <em>Ele vai ser atendido agora?</em></h1>
              <p className="hero-lead">
                A Korax atende, qualifica, agenda e acompanha seus clientes seguindo o processo comercial da sua empresa — com conversas naturais e sem depender de alguém olhando para a tela.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#demo">
                  Conversar com a Korax
                  <ArrowRight size={18} />
                </a>
                <a className="button button-ghost" href="#implantacao">
                  Ver como implantamos
                  <ChevronRight size={18} />
                </a>
              </div>

              <div className="hero-proofline">
                <span><Check size={15} /> Atendimento 24h</span>
                <span><Check size={15} /> IA treinada para sua operação</span>
                <span><Check size={15} /> Equipe humana quando necessário</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="floating-label label-one"><Clock3 size={15} /> resposta imediata</div>
              <div className="floating-label label-two"><Route size={15} /> processo comercial</div>
              <ChatDemo />
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            <span>Atendimento inteligente</span>
            <span>CRM e oportunidades</span>
            <span>Agenda e confirmação</span>
            <span>Follow-up automático</span>
            <span>Equipe e setores</span>
          </div>
        </section>

        <section className="section problem-section">
          <div className="container two-column">
            <div className="section-copy sticky-copy">
              <span className="section-kicker">O gargalo não é o WhatsApp</span>
              <h2>É tudo depender de alguém estar disponível para fazer a próxima coisa.</h2>
              <p>
                Quando resposta, agenda, retorno e contexto dependem da memória e do tempo da equipe, boas oportunidades podem simplesmente parar no meio do caminho.
              </p>
            </div>

            <div className="pain-list">
              {painPoints.map((item, index) => (
                <div className="pain-item" key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section ai-section" id="diferencial">
          <div className="container ai-grid">
            <div className="ai-card bad-ai-card">
              <span className="section-kicker muted">Se você já tentou IA...</span>
              <h3>Talvez o problema não tenha sido a ideia. Foi a experiência.</h3>
              <ul>
                <li>Respostas que parecem prontas</li>
                <li>Perde o contexto quando o cliente muda de assunto</li>
                <li>Foge do processo comercial da empresa</li>
                <li>Obriga sua equipe a se adaptar à ferramenta</li>
              </ul>
            </div>

            <div className="ai-card korax-ai-card">
              <div className="spark-icon"><Sparkles size={24} /></div>
              <span className="section-kicker">A diferença Korax</span>
              <h3>Humanizada na conversa. Rigorosa no processo.</h3>
              <p>
                A Korax é treinada para entender sua empresa, conversar com naturalidade e lidar com caminhos inesperados sem esquecer o objetivo daquela conversa.
              </p>
              <div className="mini-flow">
                <span>Cliente muda o assunto</span>
                <ArrowRight size={16} />
                <span>Korax entende</span>
                <ArrowRight size={16} />
                <span>Conduz de volta</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section demo-section" id="demo">
          <div className="container demo-grid">
            <div className="demo-copy">
              <span className="section-kicker light">Teste de verdade</span>
              <h2>Não precisa acreditar no que estamos dizendo. Converse com ela.</h2>
              <p>
                Faça perguntas, mude de assunto e coloque a conversa à prova. A melhor forma de entender a Korax é experimentar a própria inteligência atendendo você.
              </p>
              <a className="button button-white" href="#contato">
                Abrir conversa no WhatsApp
                <ArrowRight size={18} />
              </a>
              <span className="demo-note">O link do agente oficial será conectado nesta etapa.</span>
            </div>

            <div className="demo-phone">
              <div className="phone-top" />
              <div className="phone-content">
                <div className="phone-brand">K</div>
                <strong>Você está falando com a própria Korax.</strong>
                <p>Em vez de eu explicar tudo que faço, posso demonstrar conversando com você.</p>
                <div className="phone-question">Qual tipo de empresa você tem?</div>
                <div className="typing"><span /><span /><span /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section operation-section" id="operacao">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-kicker">Uma conversa movimenta a operação</span>
              <h2>Não é só responder mensagens.</h2>
              <p>Enquanto o cliente conversa, diferentes partes do processo podem acontecer juntas.</p>
            </div>

            <div className="operation-grid">
              {operationCards.map(({ icon: Icon, eyebrow, title, text }) => (
                <article className="operation-card" key={title}>
                  <div className="icon-box"><Icon size={23} /></div>
                  <span>{eyebrow}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="system-preview">
              <div className="preview-sidebar">
                <div className="preview-logo">K</div>
                <span className="active" />
                <span />
                <span />
                <span />
              </div>
              <div className="preview-main">
                <div className="preview-heading">
                  <div>
                    <small>OPERAÇÃO COMERCIAL</small>
                    <strong>Tudo conectado em um só lugar.</strong>
                  </div>
                  <div className="online-pill">● operação online</div>
                </div>
                <div className="preview-widgets">
                  <div><small>CONVERSAS</small><strong>Atendimento centralizado</strong><span>IA e equipe no mesmo histórico.</span></div>
                  <div><small>OPORTUNIDADES</small><strong>Próximo passo visível</strong><span>Contexto comercial organizado.</span></div>
                  <div><small>AGENDA</small><strong>Horários conectados</strong><span>Agendamento dentro do fluxo.</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section human-section">
          <div className="container human-grid">
            <div className="section-copy">
              <span className="section-kicker">IA + equipe</span>
              <h2>Sua equipe não precisa competir com a IA.</h2>
              <p>Ela precisa receber dela o trabalho certo, no momento certo e já com contexto.</p>
            </div>

            <div className="roles-grid">
              <div className="role-card">
                <Bot size={28} />
                <strong>Korax cuida do operacional</strong>
                <span>Perguntas iniciais</span>
                <span>Qualificação</span>
                <span>Coleta de informações</span>
                <span>Agenda e confirmação</span>
                <span>Follow-up</span>
              </div>
              <div className="role-card human-role">
                <Headphones size={28} />
                <strong>Sua equipe entra no que importa</strong>
                <span>Negociação</span>
                <span>Exceções</span>
                <span>Relacionamento</span>
                <span>Decisão</span>
                <span>Fechamento</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section niches-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Diferentes operações</span>
              <h2>Seu processo vem antes do nicho.</h2>
              <p>A Korax não recebe um atendimento genérico. Ela é preparada para a rotina real da empresa.</p>
            </div>
            <div className="niches-grid">
              {niches.map(([title, text]) => (
                <article className="niche-card" key={title}>
                  <Workflow size={20} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section implementation-section section-dark" id="implantacao">
          <div className="container implementation-grid">
            <div className="section-copy implementation-copy">
              <span className="section-kicker light">Implantação acompanhada</span>
              <h2>Nós não liberamos um software e deixamos você descobrir como usar.</h2>
              <p>
                A Korax é preparada junto com sua operação. Entendemos seu processo, treinamos a inteligência, testamos situações reais e colocamos a equipe para operar com contexto.
              </p>
            </div>

            <div className="steps-list">
              {steps.map(([number, title, text]) => (
                <div className="step" key={number}>
                  <span className="step-number">{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section proof-section">
          <div className="container proof-card">
            <div>
              <span className="section-kicker">Próxima camada da página</span>
              <h2>Resultados e operações reais entram aqui.</h2>
              <p>
                Esta área foi reservada para cases reais, prints da plataforma, depoimentos e histórias de implantação. Vamos preenchê-la apenas com material que aumente confiança — sem números inventados ou provas genéricas.
              </p>
            </div>
            <div className="proof-placeholder">
              <span>CASE 01</span>
              <strong>Problema → implantação → mudança na rotina</strong>
              <span>Imagens e evidências reais</span>
            </div>
          </div>
        </section>

        <section className="final-cta section-dark" id="contato">
          <div className="container final-cta-inner">
            <div>
              <span className="section-kicker light">Veja funcionando</span>
              <h2>Antes de imaginar como seria, converse com a Korax.</h2>
              <p>Depois da experiência, se fizer sentido, mostramos como ela pode ser implantada dentro da sua operação.</p>
            </div>
            <div className="final-actions">
              <a className="button button-primary" href="#demo">Testar a Korax no WhatsApp <ArrowRight size={18} /></a>
              <a className="button button-ghost" href="mailto:contato@usekorax.com">Falar sobre minha operação</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand"><span className="brand-mark">K</span><span>KORAX</span></div>
          <p>Atendimento inteligente e operação comercial para WhatsApp.</p>
          <span>contato@usekorax.com</span>
        </div>
      </footer>
    </div>
  )
}

export default App
