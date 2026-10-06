import { useEffect } from 'react'

const replaceTextNode = (element, text) => {
  if (!element) return
  const node = [...element.childNodes].find(
    item => item.nodeType === Node.TEXT_NODE && item.textContent.trim(),
  )
  if (node) node.textContent = ` ${text} `
  else element.append(document.createTextNode(` ${text} `))
}

const setText = (selector, text, root = document) => {
  const element = root.querySelector(selector)
  if (element && element.textContent.trim() !== text) element.textContent = text
}

const setHTML = (selector, html, root = document) => {
  const element = root.querySelector(selector)
  if (element && element.innerHTML !== html) element.innerHTML = html
}

const setCards = (selector, copies) => {
  const cards = [...document.querySelectorAll(selector)]
  cards.forEach((card, index) => {
    const copy = copies[index]
    if (!copy) return
    const title = card.querySelector('strong')
    const body = card.querySelector('p')
    if (title) title.textContent = copy[0]
    if (body) body.textContent = copy[1]
  })
}

function applyFinalCopyV2() {
  document.body.classList.add('korax-copy-v2-final')

  // HERO
  setHTML(
    '.v6-kicker',
    '<span></span> INFRAESTRUTURA COMERCIAL INTELIGENTE PARA EMPRESAS QUE VENDEM PELO WHATSAPP',
  )
  setHTML(
    '.v6-hero h1',
    '<span>Seu WhatsApp não precisa de mais mensagens.</span><em>Precisa de uma operação comercial.</em>',
  )
  setText(
    '.v6-hero-copy > p',
    'A Korax transforma seus WhatsApps em uma operação organizada e inteligente para sua empresa atender, acompanhar e vender melhor. Centralize números e atendentes, organize equipes e setores, acompanhe oportunidades no CRM e coloque inteligência artificial para atender, qualificar, fazer follow-up, agendar e executar tarefas dentro do seu processo comercial.',
  )

  const heroButtons = [...document.querySelectorAll('.v6-actions .v6-btn')]
  replaceTextNode(heroButtons[0], 'Agendar uma demonstração')
  replaceTextNode(heroButtons[1], 'Falar com a equipe no WhatsApp')

  const proof = document.querySelector('.v6-proof')
  if (proof) {
    proof.innerHTML = '<span>Atendimento centralizado</span><span>CRM e Pipeline</span><span>Follow-up + Agenda</span><span>IA treinada para sua operação</span>'
  }

  const vslLabel = document.querySelector('.v6-vsl-topline span')
  replaceTextNode(vslLabel, 'CONHEÇA A KORAX')
  setText('.v6-vsl-topline em', 'Veja a operação funcionando na prática')

  // DOR
  setText('.v5-pain .v5-label', 'O PROBLEMA NÃO É O WHATSAPP')
  setHTML(
    '.v5-pain .v5-section-head h2',
    'O problema é tudo o que sua empresa ainda precisa lembrar <em>depois que uma mensagem chega.</em>',
  )
  setText(
    '.v5-pain .v5-section-head p',
    'O WhatsApp recebe o cliente. Mas ele não define quem precisa responder, não acompanha oportunidades, não lembra sua equipe de fazer follow-up, não atualiza seu CRM e não mostra o que está parado. Quando tudo isso depende das pessoas, o comercial começa a depender da memória.',
  )
  setCards('.v5-pain-item:not(.v5-pain-item-paid)', [
    ['O cliente chama', 'Uma nova oportunidade entra pelo WhatsApp.'],
    ['Alguém precisa perceber', 'É preciso identificar quem deve assumir e o que precisa ser feito.'],
    ['A conversa acontece', 'Mas informações, histórico e próximos passos podem continuar apenas dentro daquele atendimento.'],
    ['O próximo passo depende de alguém lembrar', 'Retorno, proposta, confirmação, negociação ou follow-up ficam para depois.'],
  ])
  const paid = document.querySelector('.v5-pain-item-paid')
  if (paid) {
    const strong = paid.querySelector('strong')
    const p = paid.querySelector('p')
    if (strong) strong.textContent = 'A oportunidade esfria'
    if (p) p.textContent = 'Você gerou o lead. Outra empresa fechou.'
  }
  setText('.pw-result strong', 'O interesse existia. A oportunidade também.')
  setText('.pw-result span', 'Faltou uma operação preparada para continuar a conversa no momento certo.')

  // SOLUÇÃO / OPERAÇÃO
  setText('.v5-employee .v5-label', 'É AQUI QUE A KORAX ENTRA')
  setHTML(
    '.v5-employee .v5-section-head h2',
    'Da primeira mensagem ao próximo passo, <em>tudo conectado.</em>',
  )
  setText(
    '.v5-employee .v5-section-head p',
    'A Korax transforma conversas espalhadas no WhatsApp em uma operação comercial que sua empresa consegue visualizar, organizar e acompanhar.',
  )
  setCards('.v5-capability', [
    ['Centralize seus WhatsApps', 'Diferentes números, atendentes, setores e unidades trabalhando dentro do mesmo ambiente.'],
    ['Organize equipes e responsáveis', 'Cada conversa pode ser direcionada para a pessoa ou setor certo, com histórico e contexto preservados.'],
    ['Transforme conversas em oportunidades', 'Uma conversa importante deixa de ser apenas uma mensagem e passa a ser acompanhada dentro do CRM.'],
    ['Saiba exatamente o que acontece depois', 'Etapa, responsável, valor, origem, negociação e próximo passo ficam visíveis para sua equipe.'],
    ['Automatize seus retornos', 'Follow-ups, confirmações e tarefas podem acontecer de acordo com a jornada definida pela sua empresa.'],
    ['Coloque IA dentro da operação', 'A inteligência artificial pode atender, entender, qualificar, conduzir jornadas e executar tarefas seguindo as regras da sua empresa.'],
  ])
  setText('.v5-employee-quote p', 'Sua equipe deixa de administrar conversas.')
  setText('.v5-employee-quote strong', 'E passa a administrar oportunidades.')

  // IA
  setText('.v5-frustration .v5-label', 'IA QUE TRABALHA DENTRO DO PROCESSO')
  setHTML(
    '.v5-frustration-copy h2',
    'Não colocamos um chatbot na frente do seu cliente. <em>Treinamos uma IA para entender como sua empresa atende.</em>',
  )
  setText(
    '.v5-frustration-copy p',
    'A IA da Korax recebe contexto, conhecimento, objetivos, regras, limites e próximos passos. Por isso, ela não precisa ficar presa a menus ou respostas engessadas: ela entende o que está acontecendo na conversa e continua trabalhando em direção ao objetivo definido pela sua empresa.',
  )
  replaceTextNode(
    document.querySelector('.v5-frustration .v5-inline-link'),
    'Agendar uma demonstração',
  )

  // TREINAMENTO
  setText('.v5-training .v5-label', 'A IA NÃO APRENDE APENAS O QUE RESPONDER')
  setHTML('.v5-training-copy h2', 'Ela aprende <em>como conduzir.</em>')
  setText(
    '.v5-training-copy > p',
    'Antes da implantação, entendemos como sua empresa realmente funciona: serviços, produtos, perguntas frequentes, objeções, setores, responsáveis, critérios de qualificação, agenda, limites, transferências, etapas comerciais e próximos passos. A partir disso, estruturamos a jornada que a IA deverá seguir.',
  )

  // VISÃO DA OPERAÇÃO
  setText('.v5-product .v5-label', 'POR TRÁS DE CADA CONVERSA EXISTE UMA OPERAÇÃO')
  setHTML(
    '.v5-product .v5-section-head h2',
    'O cliente vê uma conversa. <em>Sua empresa vê tudo o que acontece por trás dela.</em>',
  )
  setText(
    '.v5-product .v5-section-head p',
    'Cada atendimento pode carregar responsável, histórico, oportunidade, etapa comercial, agenda e próximo passo dentro da mesma estrutura.',
  )
  setCards('.v5-product-card .v5-product-copy', [
    ['Conversas', 'Todos os atendimentos em um único ambiente, com humanos e IA compartilhando histórico e contexto.'],
    ['CRM e oportunidades', 'Etapa, responsável, origem, valor, histórico e próximo passo de cada oportunidade.'],
    ['Agenda', 'Disponibilidade, agendamentos e confirmações conectados ao atendimento.'],
    ['Follow-up', 'Retornos programados para que oportunidades não dependam da memória da equipe.'],
  ])

  // SEGMENTOS
  setText('.v5-segments .v5-label', 'UMA ESTRUTURA. DIFERENTES OPERAÇÕES.')
  setHTML(
    '.v5-segments .v5-section-head h2',
    'A Korax se adapta ao processo da sua empresa — <em>e não o contrário.</em>',
  )
  setText(
    '.v5-segments .v5-section-head p',
    'Setores, responsáveis, etapas, perguntas, qualificações, oportunidades, agenda, follow-ups e automações são configurados conforme a realidade de cada negócio.',
  )

  // CASES
  setText('.v5-cases .v5-label', 'OPERAÇÕES REAIS')
  setHTML(
    '.v5-cases .v5-section-head h2',
    'Empresas já estão estruturando suas operações comerciais <em>com a Korax.</em>',
  )
  setText(
    '.v5-cases .v5-section-head p',
    'Não é sobre colocar mais tecnologia dentro da empresa. É sobre usar tecnologia para criar uma operação que continue funcionando depois que o lead chega.',
  )
  ;[...document.querySelectorAll('.v5-case-card')].forEach(card => {
    const name = card.querySelector('h3')?.textContent.trim()
    const paragraph = card.querySelector('.v5-case-copy > p')
    if (!paragraph) return
    if (name === 'Pensou Seguros') paragraph.textContent = 'Estruturação da entrada de clientes, responsáveis, oportunidades, CRM, follow-up e acompanhamento comercial dentro de uma operação conectada.'
    if (name === 'Gold Alianças') paragraph.textContent = 'Jornada comercial estruturada para transformar leads vindos de tráfego pago em oportunidades acompanháveis.'
    if (name === 'Transpox') paragraph.textContent = 'Estruturação da entrada de solicitações de frete, coleta das informações necessárias e acompanhamento da oportunidade comercial.'
  })

  // DEMONSTRAÇÃO
  const testSection = document.querySelector('.v5-test')
  if (testSection) {
    setText('.v5-test .v5-label', 'QUER ENTENDER COMO ISSO FUNCIONARIA NA SUA EMPRESA?')
    setHTML('.v5-test-copy h2', 'Veja como a Korax pode funcionar <em>na sua operação.</em>')
    setText(
      '.v5-test-copy > p',
      'Não mostramos apenas uma demonstração genérica do sistema. Entendemos como seus clientes chegam, quem atende, como sua equipe trabalha e onde oportunidades podem estar ficando pelo caminho. A partir disso, mostramos como a Korax pode ser aplicada à sua operação.',
    )
    setText('.v5-test-copy > small', 'Demonstração orientada ao cenário real da sua empresa.')
  }

  // IMPLANTAÇÃO
  setText('.v5-implementation .v5-label', 'NÃO ENTREGAMOS APENAS UM LOGIN')
  setText(
    '.v5-implementation .v5-section-head h2',
    'E esperamos que sua equipe descubra o resto.',
  )
  setText(
    '.v5-implementation .v5-section-head p',
    'A implantação da Korax é acompanhada. Antes de colocar a operação no ar, entendemos como sua empresa trabalha e estruturamos a tecnologia ao redor desse processo.',
  )
  const stageCopy = [
    'Diagnóstico',
    'Estruturação',
    'Configuração',
    'Treinamento da IA',
    'Testes',
    'Implantação e refinamento',
  ]
  ;[...document.querySelectorAll('.v5-implementation-step strong')].forEach((item, index) => {
    if (stageCopy[index]) item.textContent = stageCopy[index]
  })

  // FUNDADOR / AUTORIDADE
  const founder = document.querySelector('.v5plus-founder')
  if (founder) {
    setText('.v5plus-founder-copy .v5plus-eyebrow', 'A TECNOLOGIA SOZINHA NÃO ORGANIZA UMA EMPRESA')
    setHTML(
      '.v5plus-founder-copy h2',
      '<span>Diego Nogueira</span><em>Primeiro estruturamos o processo. Depois usamos tecnologia para dar escala.</em>',
    )
    setText(
      '.v5plus-founder-intro',
      'Há mais de 7 anos atuo entre marketing, vendas, atendimento e tecnologia.',
    )
    const story = founder.querySelector('.founder-v3-story')
    if (story) {
      story.textContent = 'A Korax nasceu da experiência de observar um problema recorrente dentro das empresas: o lead chega, a conversa acontece, mas entre atendimento, responsável, CRM, retorno e próximo passo existem pontos demais dependendo de alguém lembrar. Criamos a Korax para conectar essas partes dentro de uma única operação.'
    }
    const journey = founder.querySelector('.founder-v3-journey')
    if (journey) journey.style.display = 'none'
    const thesisSmall = founder.querySelector('.founder-v3-thesis small')
    const thesisStrong = founder.querySelector('.founder-v3-thesis strong')
    if (thesisSmall) thesisSmall.textContent = 'PRINCÍPIO'
    if (thesisStrong) thesisStrong.textContent = 'Tecnologia não conserta uma operação desorganizada. Primeiro estruturamos o processo. Depois usamos tecnologia para dar escala.'
  }

  // CTA FINAL
  setText('.v5-final .v5-label', 'PRÓXIMO PASSO')
  setHTML(
    '.v5-final h2',
    'O próximo lead vai chegar pelo WhatsApp. <em>A pergunta é o que acontece depois.</em>',
  )
  setText(
    '.v5-final p',
    'Se sua empresa já usa o WhatsApp para atender ou vender, podemos mostrar como transformar essas conversas em uma operação comercial organizada, acompanhável e inteligente.',
  )

  // FOOTER
  setText(
    '.v5plus-footer-brand h3',
    'Seu WhatsApp deixa de ser apenas um conjunto de conversas e passa a fazer parte de uma operação comercial.',
  )
  setText(
    '.v5plus-footer-brand p',
    'Atendimento, equipe, CRM, oportunidades, follow-up, agenda, automações e inteligência artificial trabalhando no mesmo ambiente.',
  )
}

export default function FinalCopyV2Patch() {
  useEffect(() => {
    applyFinalCopyV2()

    // Os patches legados reaplicam copy em diferentes momentos do mount.
    // Repetimos nos mesmos marcos e fechamos depois deles para manter a V2 como versão final.
    const timers = [120, 520, 900, 1700, 2300, 2600].map(delay =>
      window.setTimeout(applyFinalCopyV2, delay),
    )

    return () => timers.forEach(window.clearTimeout)
  }, [])

  return null
}
