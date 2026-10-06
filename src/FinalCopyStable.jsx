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
    'A Korax centraliza atendimento, equipe, CRM, follow-up, agenda e IA em uma única operação comercial.',
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
    if (strong && strong.textContent.trim() !== 'A oportunidade esfria') strong.textContent = 'A oportunidade esfria'
    if (p && p.textContent.trim() !== 'Você gerou o lead. Outra empresa fechou.') p.textContent = 'Você gerou o lead. Outra empresa fechou.'
  }

  setText('.pw-result strong', 'O interesse existia. A oportunidade também.')
  setText('.pw-result span', 'Faltou uma operação preparada para continuar a conversa no momento certo.')

  // SOLUÇÃO
  setText('.v5-employee .v5-label', 'É AQUI QUE A KORAX ENTRA')
  setHTML('.v5-employee .v5-section-head h2', 'Da primeira mensagem ao próximo passo, <em>tudo conectado.</em>')
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
  replaceTextNode(document.querySelector('.v5-frustration .v5-inline-link'), 'Agendar uma demonstração')

  // TREINAMENTO
  setText('.v5-training .v5-label', 'A IA NÃO APRENDE APENAS O QUE RESPONDER')
  setHTML('.v5-training-copy h2', 'Ela aprende <em>como conduzir.</em>')
  setText(
    '.v5-training-copy > p',
    'Antes da implantação, entendemos como sua empresa realmente funciona: serviços, produtos, perguntas frequentes, objeções, setores, responsáveis, critérios de qualificação, agenda, limites, transferências, etapas comerciais e próximos passos. A partir disso, estruturamos a jornada que a IA deverá seguir.',
  )

  // PRODUTO / VISÃO DA OPERAÇÃO
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
  setHTML('.v5-segments .v5-section-head h2', 'A Korax se adapta ao processo da sua empresa — <em>e não o contrário.</em>')
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
    'Não mostramos apenas uma demonstração genérica do sistema. Entendemos como seus clientes chegam, quem atende, como sua equipe trabalha e onde oportunidades podem estar ficando pelo caminho. A partir disso, mostramos como a Korax pode ser aplicada à sua operação.',
  )
  setText('.v5-test-copy > small', 'Demonstração orientada ao cenário real da sua empresa.')

  // IMPLANTAÇÃO
  setText('.v5-implementation .v5-label', 'NÃO ENTREGAMOS APENAS UM LOGIN')
  setText('.v5-implementation .v5-section-head h2', 'E esperamos que sua equipe descubra o resto.')
  setText(
    '.v5-implementation .v5-section-head p',
    'A implantação da Korax é acompanhada. Antes de colocar a operação no ar, entendemos como sua empresa trabalha e estruturamos a tecnologia ao redor desse processo.',
  )
  const stages = ['Diagnóstico', 'Estruturação', 'Configuração', 'Treinamento da IA', 'Testes', 'Implantação e refinamento']
  ;[...document.querySelectorAll('.v5-implementation-step strong')].forEach((item, index) => {
    const next = stages[index]
    if (next && item.textContent.trim() !== next) item.textContent = next
  })

  // FUNDADOR
  const founder = document.querySelector('.v5plus-founder')
  if (founder) {
    setText('.v5plus-founder-copy .v5plus-eyebrow', 'A TECNOLOGIA SOZINHA NÃO ORGANIZA UMA EMPRESA')
    setHTML(
      '.v5plus-founder-copy h2',
      '<span>Diego Nogueira</span><em>Primeiro estruturamos o processo. Depois usamos tecnologia para dar escala.</em>',
    )
    setText('.v5plus-founder-intro', 'Há mais de 7 anos atuo entre marketing, vendas, atendimento e tecnologia.')

    const story = founder.querySelector('.founder-v3-story')
    const storyCopy = 'A Korax nasceu da experiência de observar um problema recorrente dentro das empresas: o lead chega, a conversa acontece, mas entre atendimento, responsável, CRM, retorno e próximo passo existem pontos demais dependendo de alguém lembrar. Criamos a Korax para conectar essas partes dentro de uma única operação.'
    if (story && story.textContent.trim() !== storyCopy) story.textContent = storyCopy

    const journey = founder.querySelector('.founder-v3-journey')
    if (journey && journey.style.display !== 'none') journey.style.display = 'none'
  }

  // FAQ
  setText('.v5-faq .v5-label', 'PERGUNTAS SOBRE A OPERAÇÃO')
  setText('.v5-faq-title h2', 'O que você precisa saber antes de estruturar sua operação na Korax.')
  setText(
    '.v5-faq-title p',
    'Atendimento, equipe, CRM, histórico, follow-up, agenda, automações e inteligência artificial trabalhando dentro da mesma estrutura comercial.',
  )
  setHTML(
    '.v5-faq-list',
    `<details open><summary>O que exatamente é a Korax?</summary><p>A Korax é uma infraestrutura comercial inteligente para empresas que atendem e vendem pelo WhatsApp. Ela centraliza conversas, equipe, setores, unidades, histórico, CRM, oportunidades, follow-ups, agenda, automações e inteligência artificial em uma única operação.</p></details>
    <details><summary>A Korax é só um chatbot com inteligência artificial?</summary><p>Não. A inteligência artificial é uma das camadas da plataforma. A base da Korax é organizar a operação comercial: quem atende, quem é responsável, em qual etapa está a oportunidade, qual é o próximo passo e o que precisa acontecer depois.</p></details>
    <details><summary>Posso centralizar mais de um WhatsApp na mesma operação?</summary><p>Sim. A proposta da Korax é reunir os números utilizados pela empresa em um ambiente centralizado, mantendo atendimento, equipe, histórico e oportunidades conectados à mesma estrutura.</p></details>
    <details><summary>Como funciona para equipes, setores e unidades?</summary><p>Os atendimentos podem ser organizados por responsáveis, setores e unidades, sem perder o contexto da conversa.</p></details>
    <details><summary>O histórico se perde se um funcionário sair ou trocar de aparelho?</summary><p>Não. O histórico fica centralizado na operação da empresa.</p></details>
    <details><summary>A Korax tem CRM e pipeline de oportunidades?</summary><p>Sim. Uma conversa pode virar uma oportunidade comercial com etapa, responsável, valor, origem, observações e próximo passo.</p></details>
    <details><summary>Consigo programar follow-ups e retornos?</summary><p>Sim. Follow-ups e próximos contatos podem ser programados para que oportunidades não dependam da memória do atendente.</p></details>
    <details><summary>A agenda fica conectada ao atendimento?</summary><p>Sim. Serviços, disponibilidade, horários e confirmações podem fazer parte da mesma jornada comercial.</p></details>
    <details><summary>Onde entra a inteligência artificial?</summary><p>A IA trabalha dentro da estrutura organizada: atende, entende contexto, qualifica, conduz próximos passos, agenda e transfere quando necessário.</p></details>
    <details><summary>A IA pode trabalhar junto com atendentes humanos?</summary><p>Sim. A operação pode ser híbrida, preservando histórico e contexto.</p></details>
    <details><summary>Como a implantação da Korax funciona?</summary><p>Primeiro entendemos sua operação. Depois estruturamos setores, responsáveis, CRM, jornadas, automações e regras, treinamos a IA e testamos os cenários.</p></details>
    <details><summary>Para que tipo de empresa a Korax faz mais sentido?</summary><p>Principalmente para empresas que usam o WhatsApp como parte importante do comercial e precisam organizar conversas, equipe, oportunidades, retornos e acompanhamento.</p></details>`,
  )

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
