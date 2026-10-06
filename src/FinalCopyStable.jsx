import { useLayoutEffect } from 'react'

const normalizeHTML = (html) => {
  const template = document.createElement('template')
  template.innerHTML = html.trim()
  return template.innerHTML
}

const replaceTextNode = (element, text) => {
  if (!element) return
  const node = [...element.childNodes].find(
    item => item.nodeType === Node.TEXT_NODE && item.textContent.trim(),
  )
  const next = ` ${text} `
  if (node) {
    if (node.textContent !== next) node.textContent = next
  } else {
    element.append(document.createTextNode(next))
  }
}

const setText = (selector, text, root = document) => {
  const element = root.querySelector(selector)
  if (element && element.textContent.trim() !== text) element.textContent = text
}

const setHTML = (selector, html, root = document) => {
  const element = root.querySelector(selector)
  if (!element) return
  const normalized = normalizeHTML(html)
  if (element.innerHTML !== normalized) element.innerHTML = normalized
}

const setCards = (selector, copies) => {
  const cards = [...document.querySelectorAll(selector)]
  cards.forEach((card, index) => {
    const copy = copies[index]
    if (!copy) return
    const title = card.querySelector('strong')
    const body = card.querySelector('p')
    if (title && title.textContent.trim() !== copy[0]) title.textContent = copy[0]
    if (body && body.textContent.trim() !== copy[1]) body.textContent = copy[1]
  })
}

const ensurePainBridge = () => {
  const visual = document.querySelector('.v5-pain-visual')
  if (!visual || visual.querySelector('.korax-pain-bridge')) return

  const bridge = document.createElement('div')
  bridge.className = 'korax-pain-bridge'
  bridge.innerHTML = '<small>NA PRÁTICA</small><strong>O cliente chama, espera e fecha com quem respondeu primeiro.</strong>'
  visual.prepend(bridge)
}

const removeLongDashes = () => {
  if (!document.body) return
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
  let node = walker.nextNode()

  while (node) {
    const parent = node.parentElement
    if (parent && !['SCRIPT', 'STYLE', 'CODE'].includes(parent.tagName)) {
      const next = node.textContent
        .replace(/\s+[—–]\s+/g, '. ')
        .replace(/\s*[—–]\s*/g, ', ')
      if (next !== node.textContent) node.textContent = next
    }
    node = walker.nextNode()
  }
}

function applyFinalCopy() {
  document.body.classList.add('korax-copy-stable')

  // HERO
  setHTML('.v6-kicker', '<span></span> INFRAESTRUTURA COMERCIAL INTELIGENTE PARA WHATSAPP')
  setHTML(
    '.v6-hero h1',
    '<span>Seu WhatsApp não precisa de mais mensagens.</span> <em>Precisa de uma operação comercial.</em>',
  )
  setText(
    '.v6-hero-copy > p',
    'Seu cliente chama. A Korax organiza resposta, responsáveis e follow-up para a oportunidade não se perder no caminho.',
  )

  const heroButtons = [...document.querySelectorAll('.v6-actions .v6-btn')]
  replaceTextNode(heroButtons[0], 'Agendar uma demonstração')
  replaceTextNode(heroButtons[1], 'Falar com a equipe no WhatsApp')

  setHTML(
    '.v6-proof',
    '<span>Atendimento centralizado</span><span>CRM e Pipeline</span><span>Follow-up + Agenda</span><span>IA treinada para sua operação</span>',
  )

  const vslLabel = document.querySelector('.v6-vsl-topline span')
  replaceTextNode(vslLabel, 'CONHEÇA A KORAX')
  setText('.v6-vsl-topline em', 'Veja a operação funcionando na prática')

  // DOR
  setText('.v5-pain .v5-label', 'ONDE AS OPORTUNIDADES SE PERDEM')
  setHTML(
    '.v5-pain .v5-section-head h2',
    'O cliente chama. <em>A venda começa a se perder quando a resposta demora.</em>',
  )
  setText(
    '.v5-pain .v5-section-head p',
    'Enquanto o cliente espera, informações ficam espalhadas, ninguém sabe quem deve assumir e o follow-up depende da memória. É assim que uma oportunidade quente esfria.',
  )
  setCards('.v5-pain-item:not(.v5-pain-item-paid)', [
    ['O cliente chama', 'Ele quer preço, disponibilidade, orçamento ou um próximo passo.'],
    ['A resposta demora', 'A equipe está ocupada e o cliente continua esperando enquanto fala com outras empresas.'],
    ['As informações se espalham', 'Histórico, contexto e responsável ficam divididos entre números, pessoas e conversas.'],
    ['O retorno fica para depois', 'Proposta, confirmação e follow-up dependem de alguém lembrar de voltar.'],
  ])

  const paid = document.querySelector('.v5-pain-item-paid')
  if (paid) {
    const strong = paid.querySelector('strong')
    const p = paid.querySelector('p')
    if (strong && strong.textContent.trim() !== 'Outro responde primeiro') strong.textContent = 'Outro responde primeiro'
    if (p && p.textContent.trim() !== 'O interesse existia. A oportunidade também. Faltou velocidade e continuidade.') {
      p.textContent = 'O interesse existia. A oportunidade também. Faltou velocidade e continuidade.'
    }
  }

  setText('.pw-result strong', 'O interesse existia.')
  setText('.pw-result span', 'A resposta chegou tarde demais.')
  ensurePainBridge()

  // SOLUÇÃO
  setText('.v5-employee .v5-label', 'É AQUI QUE A KORAX ENTRA')
  setHTML(
    '.v5-employee .v5-section-head h2',
    'Do primeiro contato ao fechamento, <em>sua operação inteira conectada.</em>',
  )
  setText(
    '.v5-employee .v5-section-head p',
    'Atendimento, equipe, CRM, follow-up, agenda e IA trabalhando dentro do mesmo processo comercial.',
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
    'A IA da Korax recebe contexto, conhecimento, objetivos, regras, limites e próximos passos. Ela entende o que está acontecendo na conversa e continua trabalhando em direção ao objetivo definido pela sua empresa.',
  )
  replaceTextNode(document.querySelector('.v5-frustration .v5-inline-link'), 'Agendar uma demonstração')

  // TREINAMENTO
  setText('.v5-training .v5-label', 'A IA NÃO APRENDE APENAS O QUE RESPONDER')
  setHTML('.v5-training-copy h2', 'Ela aprende <em>como conduzir.</em>')
  setText(
    '.v5-training-copy > p',
    'Antes da implantação, entendemos serviços, produtos, objeções, responsáveis, agenda, critérios, limites e próximos passos. A partir disso, estruturamos a jornada que a IA deve seguir.',
  )

  // PRODUTO
  setText('.v5-product .v5-label', 'POR TRÁS DE CADA CONVERSA EXISTE UMA OPERAÇÃO')
  setHTML(
    '.v5-product .v5-section-head h2',
    'O cliente vê uma conversa. <em>Sua empresa vê a operação inteira.</em>',
  )
  setText(
    '.v5-product .v5-section-head p',
    'Responsável, histórico, oportunidade, etapa comercial, agenda e próximo passo dentro da mesma estrutura.',
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
    'A Korax se adapta ao processo da sua empresa. <em>Não o contrário.</em>',
  )
  setText(
    '.v5-segments .v5-section-head p',
    'Setores, responsáveis, etapas, perguntas, oportunidades, agenda, follow-ups e automações são configurados conforme a realidade de cada negócio.',
  )

  // CASES
  setText('.v5-cases .v5-label', 'OPERAÇÕES REAIS')
  setHTML(
    '.v5-cases .v5-section-head h2',
    'Empresas já estão estruturando suas operações comerciais <em>com a Korax.</em>',
  )
  setText(
    '.v5-cases .v5-section-head p',
    'Não é sobre colocar mais tecnologia na empresa. É sobre criar uma operação que continua funcionando depois que o lead chega.',
  )

  const caseCopies = {
    'Pensou Seguros': 'Estruturação da entrada de clientes, responsáveis, oportunidades, CRM, follow-up e acompanhamento comercial dentro de uma operação conectada.',
    'Gold Alianças': 'Jornada comercial estruturada para transformar leads vindos de tráfego pago em oportunidades acompanháveis.',
    'Transpox': 'Estruturação da entrada de solicitações de frete, coleta das informações necessárias e acompanhamento da oportunidade comercial.',
  }

  ;[...document.querySelectorAll('.v5-case-card')].forEach(card => {
    const name = card.querySelector('h3')?.textContent.trim()
    const paragraph = card.querySelector('.v5-case-copy > p')
    const next = caseCopies[name]
    if (paragraph && next && paragraph.textContent.trim() !== next) paragraph.textContent = next
  })

  // DEMONSTRAÇÃO
  setText('.v5-test .v5-label', 'QUER ENTENDER COMO ISSO FUNCIONARIA NA SUA EMPRESA?')
  setHTML('.v5-test-copy h2', 'Veja como a Korax pode funcionar <em>na sua operação.</em>')
  setText(
    '.v5-test-copy > p',
    'Entendemos como seus clientes chegam, quem atende e onde as oportunidades podem estar ficando pelo caminho. Depois mostramos a Korax aplicada ao seu cenário.',
  )
  setText('.v5-test-copy > small', 'Demonstração orientada ao cenário real da sua empresa.')

  // IMPLANTAÇÃO
  setText('.v5-implementation .v5-label', 'NÃO ENTREGAMOS APENAS UM LOGIN')
  setText('.v5-implementation .v5-section-head h2', 'E esperamos que sua equipe descubra o resto.')
  setText(
    '.v5-implementation .v5-section-head p',
    'A implantação da Korax é acompanhada. Entendemos como sua empresa trabalha e estruturamos a tecnologia ao redor desse processo.',
  )
  const stages = ['Diagnóstico', 'Estruturação', 'Configuração', 'Treinamento da IA', 'Testes', 'Implantação e refinamento']
  ;[...document.querySelectorAll('.v5-implementation-step strong')].forEach((item, index) => {
    const next = stages[index]
    if (next && item.textContent.trim() !== next) item.textContent = next
  })

  // FUNDADOR
  const founder = document.querySelector('.v5plus-founder')
  if (founder) {
    setText('.v5plus-founder-copy .v5plus-eyebrow', 'QUEM ESTÁ POR TRÁS DA KORAX')
    setHTML(
      '.v5plus-founder-copy h2',
      '<span>Diego Nogueira</span><em>Processo antes da tecnologia.</em>',
    )
    setText('.v5plus-founder-intro', 'Há mais de 7 anos atuo entre marketing, vendas, atendimento e tecnologia.')

    const story = founder.querySelector('.founder-v3-story')
    const storyCopy = 'A Korax nasceu de um problema recorrente: o lead chega, a conversa acontece, mas atendimento, responsável, CRM, retorno e próximo passo continuam dependendo de alguém lembrar. A Korax conecta essas partes dentro da mesma operação.'
    if (story && story.textContent.trim() !== storyCopy) story.textContent = storyCopy

    const journey = founder.querySelector('.founder-v3-journey')
    if (journey && journey.style.display !== 'none') journey.style.display = 'none'
  }

  // FAQ
  setText('.v5-faq .v5-label', 'PERGUNTAS FREQUENTES')
  setText('.v5-faq-title h2', 'Dúvidas antes de colocar a Korax na sua operação.')
  setText(
    '.v5-faq-title p',
    'Respostas diretas sobre atendimento, equipe, CRM, follow-up, agenda, automações e inteligência artificial.',
  )
  setHTML(
    '.v5-faq-list',
    `<details open><summary>O que exatamente é a Korax?</summary><p>A Korax é uma infraestrutura comercial inteligente para empresas que atendem e vendem pelo WhatsApp. Ela centraliza conversas, equipe, setores, histórico, CRM, oportunidades, follow-ups, agenda, automações e inteligência artificial em uma única operação.</p></details>
    <details><summary>A Korax é só um chatbot com inteligência artificial?</summary><p>Não. A IA é uma das camadas da plataforma. A base da Korax é organizar a operação comercial e garantir continuidade para cada oportunidade.</p></details>
    <details><summary>Posso centralizar mais de um WhatsApp?</summary><p>Sim. A empresa pode reunir diferentes números dentro do mesmo ambiente, com equipe, histórico e oportunidades conectados.</p></details>
    <details><summary>Como funciona para equipes, setores e unidades?</summary><p>Os atendimentos podem ser organizados por responsáveis, setores e unidades, preservando o contexto da conversa.</p></details>
    <details><summary>O histórico se perde se um funcionário sair?</summary><p>Não. O histórico fica centralizado na operação da empresa, sem depender do aparelho ou da memória de uma única pessoa.</p></details>
    <details><summary>A Korax tem CRM e pipeline?</summary><p>Sim. Uma conversa pode virar uma oportunidade com etapa, responsável, valor, origem e próximo passo.</p></details>
    <details><summary>Consigo programar follow-ups?</summary><p>Sim. Retornos podem ser programados para que oportunidades não dependam da memória do atendente.</p></details>
    <details><summary>A agenda fica conectada ao atendimento?</summary><p>Sim. Disponibilidade, horários, agendamentos e confirmações podem fazer parte da mesma jornada.</p></details>
    <details><summary>Onde entra a inteligência artificial?</summary><p>A IA trabalha dentro da operação: atende, entende contexto, qualifica, conduz próximos passos, agenda e transfere quando necessário.</p></details>
    <details><summary>A IA pode trabalhar junto com atendentes humanos?</summary><p>Sim. A operação pode ser híbrida, com IA e equipe compartilhando histórico e contexto.</p></details>
    <details><summary>Como funciona a implantação?</summary><p>Primeiro entendemos sua operação. Depois estruturamos responsáveis, CRM, jornadas, automações e regras, treinamos a IA e testamos os cenários.</p></details>
    <details><summary>Para que tipo de empresa a Korax faz mais sentido?</summary><p>Para empresas que usam o WhatsApp no comercial e precisam organizar volume de conversas, equipe, oportunidades, retornos e acompanhamento.</p></details>`,
  )

  // CTA FINAL
  setText('.v5-final .v5-label', 'PRÓXIMO PASSO')
  setHTML(
    '.v5-final h2',
    'O próximo lead vai chegar pelo WhatsApp. <em>A pergunta é o que acontece depois.</em>',
  )
  setText(
    '.v5-final p',
    'Se sua empresa atende ou vende pelo WhatsApp, podemos mostrar como transformar essas conversas em uma operação comercial organizada e inteligente.',
  )

  // FOOTER
  setText(
    '.v5plus-footer-brand h3',
    'Seu WhatsApp deixa de ser um conjunto de conversas e passa a fazer parte de uma operação comercial.',
  )
  setText(
    '.v5plus-footer-brand p',
    'Atendimento, equipe, CRM, oportunidades, follow-up, agenda, automações e inteligência artificial no mesmo ambiente.',
  )

  removeLongDashes()
}

export default function FinalCopyStable() {
  useLayoutEffect(() => {
    applyFinalCopy()

    const observer = new MutationObserver(() => {
      applyFinalCopy()
    })

    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  return null
}
