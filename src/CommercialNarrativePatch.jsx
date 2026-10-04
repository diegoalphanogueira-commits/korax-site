import { useEffect } from 'react'

const replaceTextNode = (element, text) => {
  if (!element) return
  const node = [...element.childNodes].find(item => item.nodeType === Node.TEXT_NODE && item.textContent.trim())
  if (node) node.textContent = ` ${text} `
  else element.append(document.createTextNode(text))
}

const setText = (selector, text, root = document) => {
  const element = root.querySelector(selector)
  if (element && element.textContent.trim() !== text) element.textContent = text
}

const setHTML = (selector, html, root = document) => {
  const element = root.querySelector(selector)
  if (element && element.innerHTML !== html) element.innerHTML = html
}

const setCardCopy = (selector, copies) => {
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

function applyCommercialNarrative() {
  document.body.classList.add('korax-commercial-v2')

  // Header + hero
  const navLinks = [...document.querySelectorAll('.v6-nav a')]
  if (navLinks[1]) navLinks[1].textContent = 'Operação'
  const headerCta = document.querySelector('.v6-header-cta')
  replaceTextNode(headerCta, 'Conhecer a Korax')

  setHTML('.v6-kicker', '<span></span> INFRAESTRUTURA COMERCIAL INTELIGENTE PARA O WHATSAPP')
  setHTML('.v6-hero h1', '<span>Seu WhatsApp já faz parte do seu comercial.</span><em>A Korax transforma isso em uma operação.</em>')
  setText('.v6-hero-copy > p', 'Centralize seus WhatsApps, organize equipes, setores e unidades, acompanhe cada oportunidade e coloque inteligência artificial para trabalhar dentro do processo comercial da sua empresa.')
  const heroButtons = [...document.querySelectorAll('.v6-actions .v6-btn')]
  if (heroButtons[0]) replaceTextNode(heroButtons[0], 'Ver a Korax por dentro')
  if (heroButtons[1]) replaceTextNode(heroButtons[1], 'Assistir apresentação')
  const proof = [...document.querySelectorAll('.v6-proof span')]
  const proofCopy = ['Atendimento centralizado', 'CRM + Pipeline + Follow-up', 'IA treinada no seu processo']
  proof.forEach((item, index) => { if (proofCopy[index]) item.textContent = proofCopy[index] })

  const vslLabel = document.querySelector('.v6-vsl-topline span')
  replaceTextNode(vslLabel, 'CONHEÇA A KORAX')
  setText('.v6-vsl-topline em', 'Veja a operação na prática')

  // Marquee
  const marquee = ['CENTRALIZA', 'DISTRIBUI', 'REGISTRA', 'ORGANIZA', 'ACOMPANHA', 'FAZ FOLLOW-UP', 'ATUALIZA O CRM', 'AGENDA', 'AUTOMATIZA', 'ATENDE COM IA']
  ;[...document.querySelectorAll('.v5-marquee span')].forEach((item, index) => replaceTextNode(item, marquee[index % marquee.length]))

  // Pain / commercial chaos
  setText('.v5-pain .v5-label', 'O PROBLEMA NÃO É O WHATSAPP')
  setHTML('.v5-pain .v5-section-head h2', 'O WhatsApp recebe as conversas. <em>Mas não gerencia sua operação comercial.</em>')
  setText('.v5-pain .v5-section-head p', 'Quando atendimento, responsáveis, histórico, oportunidades e próximos passos ficam espalhados, o comercial passa a depender da memória e da disponibilidade da equipe.')
  setCardCopy('.v5-pain-item:not(.v5-pain-item-paid)', [
    ['O cliente chega', 'A conversa entra, mas nem sempre está claro quem deve assumir.'],
    ['O atendimento se espalha', 'Pessoas, números, setores e unidades trabalham sem uma visão única.'],
    ['O próximo passo depende da memória', 'Retornos e oportunidades ficam parados porque ninguém acompanhou.'],
    ['Você perde visibilidade', 'Fica difícil saber quem atendeu, o que foi combinado e em que etapa o cliente está.'],
  ])
  const paid = document.querySelector('.v5-pain-item-paid')
  if (paid) {
    const strong = paid.querySelector('strong')
    const p = paid.querySelector('p')
    if (strong) strong.textContent = 'Você traz. Outro fecha.'
    if (p) p.textContent = 'O lead chegou até sua empresa, mas falta de processo transforma oportunidade em perda.'
  }

  // Operation section
  setText('.v5-employee .v5-label', 'UMA OPERAÇÃO COMERCIAL EM UM SÓ LUGAR')
  setHTML('.v5-employee .v5-section-head h2', 'Tudo o que acontece no WhatsApp deixa de ficar solto. <em>Passa a fazer parte de uma operação.</em>')
  setText('.v5-employee .v5-section-head p', 'Conversas, equipe, responsáveis, setores, histórico, oportunidades e próximos passos ficam conectados dentro da Korax.')
  setCardCopy('.v5-capability', [
    ['Centralize seus WhatsApps', 'Atendimentos em um único ambiente, sem depender de aparelhos ou pessoas.'],
    ['Organize equipes e setores', 'Direcione cada conversa para quem realmente precisa assumir.'],
    ['Preserve o histórico', 'A conversa pertence à empresa, não ao celular ou ao funcionário.'],
    ['Crie oportunidades', 'Transforme atendimento em negociação acompanhável pelo CRM.'],
    ['Controle próximos passos', 'Follow-up, agenda e retornos deixam de depender da memória.'],
    ['Adicione inteligência', 'A IA atua dentro da operação para atender, qualificar e executar tarefas.'],
  ])
  setText('.v5-employee-quote p', 'Sua equipe deixa de administrar conversas.')
  setText('.v5-employee-quote strong', 'Passa a administrar oportunidades.')

  // AI as a layer, not the product
  setText('.v5-frustration .v5-label', 'INTELIGÊNCIA DENTRO DA OPERAÇÃO')
  setHTML('.v5-frustration-copy h2', 'A IA não substitui o processo. <em>Ela trabalha dentro dele.</em>')
  setText('.v5-frustration-copy p', 'Na Korax, a inteligência artificial recebe contexto, objetivos, regras e próximos passos. Assim, ela pode atender sem transformar sua operação em um chatbot engessado.')
  replaceTextNode(document.querySelector('.v5-frustration .v5-inline-link'), 'Ver como a Korax conduz uma conversa')

  // Training
  setText('.v5-training .v5-label', 'IA TREINADA PARA A SUA OPERAÇÃO')
  setHTML('.v5-training-copy h2', 'Não treinamos apenas respostas. <em>Treinamos uma jornada comercial.</em>')
  setText('.v5-training-copy > p', 'A Korax aprende o que sua empresa vende, mas também como sua equipe conduz um cliente: o que perguntar, quando qualificar, quando avançar, quando fazer follow-up e quando chamar uma pessoa.')

  // Product / operation visibility
  setText('.v5-product .v5-label', 'POR TRÁS DE CADA CONVERSA')
  setHTML('.v5-product .v5-section-head h2', 'O cliente vê uma conversa. <em>Você vê a operação inteira.</em>')
  setText('.v5-product .v5-section-head p', 'Cada atendimento pode carregar responsável, histórico, oportunidade, etapa comercial, agenda e próximo passo.')
  setCardCopy('.v5-product-card .v5-product-copy', [
    ['Conversas', 'Todos os atendimentos em um só ambiente, com equipe e IA compartilhando histórico e contexto.'],
    ['CRM e oportunidades', 'Etapa, responsável, valor, origem e próximo passo de cada oportunidade.'],
    ['Agenda', 'Disponibilidade, confirmação e histórico conectados ao atendimento.'],
    ['Follow-up', 'Retornos programados para que nenhuma oportunidade dependa da memória.'],
  ])

  // Segments
  setText('.v5-segments .v5-label', 'UMA ESTRUTURA. DIFERENTES OPERAÇÕES.')
  setHTML('.v5-segments .v5-section-head h2', 'A Korax se adapta <em>ao processo da sua empresa.</em>')
  setText('.v5-segments .v5-section-head p', 'Setores, responsáveis, etapas, perguntas, oportunidades, agenda, follow-ups e automações são configurados conforme a realidade de cada negócio.')

  // Cases
  setText('.v5-cases .v5-label', 'OPERAÇÕES REAIS')
  setHTML('.v5-cases .v5-section-head h2', 'Não é sobre ter mais tecnologia. <em>É sobre organizar melhor a operação.</em>')
  setText('.v5-cases .v5-section-head p', 'Veja como empresas de diferentes segmentos usam a Korax para centralizar atendimento, acompanhar oportunidades e automatizar partes do processo comercial.')
  ;[...document.querySelectorAll('.v5-case-card')].forEach(card => {
    const name = card.querySelector('h3')?.textContent.trim()
    const paragraph = card.querySelector('.v5-case-copy > p')
    if (!paragraph) return
    if (name === 'Pensou Seguros') paragraph.textContent = 'Estruturar entrada de clientes, responsáveis, oportunidades, follow-up e acompanhamento comercial dentro de uma operação conectada.'
    if (name === 'Gold Alianças') paragraph.textContent = 'Transformar leads de tráfego pago em uma jornada acompanhável, do primeiro atendimento ao fechamento.'
    if (name === 'Transpox') paragraph.textContent = 'Organizar solicitações de cotação, coleta de informações, oportunidades e acompanhamento comercial no WhatsApp.'
  })

  // Live demo
  setText('.v5-test .v5-label', 'VEJA A OPERAÇÃO EM AÇÃO')
  setHTML('.v5-test-copy h2', 'A melhor forma de entender a Korax <em>é entrar na operação.</em>')
  setText('.v5-test-copy > p', 'Converse com a Korax e veja como uma IA treinada dentro de um processo comercial entende contexto, conduz perguntas e mantém um próximo passo claro.')
  const prompts = [...document.querySelectorAll('.v5-test-prompts span')]
  const promptCopy = ['“Vocês atendem sábado?”', '“Quero saber preço e disponibilidade.”', '“Antes disso, tenho outra dúvida.”']
  prompts.forEach((item, index) => { if (promptCopy[index]) item.textContent = promptCopy[index] })
  replaceTextNode(document.querySelector('.v5-test .v5-btn.white'), 'Conversar com a Korax')
  setText('.v5-test-copy > small', 'Demonstração da operação no WhatsApp.')
  setText('.v5-test-phone > span', 'Você está falando com a própria Korax.')
  setText('.v5-test-phone > strong', 'Veja como a IA trabalha dentro de uma jornada comercial, preservando contexto e próximo passo.')

  // Implementation
  setText('.v5-implementation .v5-label', 'IMPLANTAÇÃO ACOMPANHADA')
  setText('.v5-implementation .v5-section-head h2', 'Não entregamos uma ferramenta e deixamos sua equipe descobrir o resto.')
  setText('.v5-implementation .v5-section-head p', 'Entendemos sua operação, estruturamos setores, responsáveis, CRM, jornadas e automações e configuramos a Korax para trabalhar dentro desse processo.')
  const stageCopy = ['Diagnóstico da operação', 'Estruturação comercial', 'Configuração da Korax', 'Treinamento da IA', 'Testes e implantação', 'Acompanhamento e refinamento']
  ;[...document.querySelectorAll('.v5-implementation-step strong')].forEach((item, index) => { if (stageCopy[index]) item.textContent = stageCopy[index] })

  // FAQ — replace AI-centric accordion with operation-first FAQ
  setText('.v5-faq .v5-label', 'DÚVIDAS IMPORTANTES')
  setText('.v5-faq-title h2', 'Antes de colocar sua operação comercial dentro da Korax.')
  const faq = document.querySelector('.v5-faq-list')
  if (faq && !faq.dataset.commercialFaq) {
    faq.dataset.commercialFaq = 'true'
    faq.innerHTML = `
      <details open><summary>A Korax é só um chatbot com IA?</summary><p>Não. A IA é uma das camadas da plataforma. A Korax também centraliza atendimento, equipe, histórico, oportunidades, CRM, agenda, follow-up e automações.</p></details>
      <details><summary>Posso colocar vários atendentes?</summary><p>Sim. Sua equipe pode trabalhar dentro da mesma operação, com responsáveis, setores e distribuição dos atendimentos.</p></details>
      <details><summary>O histórico fica preso ao funcionário?</summary><p>Não. O histórico fica centralizado na operação da empresa, preservando contexto mesmo quando pessoas ou aparelhos mudam.</p></details>
      <details><summary>A Korax tem CRM?</summary><p>Sim. Conversas podem virar oportunidades com etapa, responsável, valor e próximo passo acompanhados pelo time.</p></details>
      <details><summary>Posso programar follow-up?</summary><p>Sim. Retornos podem ser programados para que oportunidades não dependam da memória do atendente.</p></details>
      <details><summary>Onde entra a inteligência artificial?</summary><p>A IA trabalha dentro da estrutura: atende, entende contexto, qualifica, atualiza informações, agenda e conduz conforme a jornada treinada.</p></details>`
  }

  // Final CTA
  setText('.v5-final .v5-label', 'SUA OPERAÇÃO COMERCIAL JÁ ACONTECE NO WHATSAPP')
  setHTML('.v5-final h2', 'A pergunta é: <em>ela está organizada para crescer?</em>')
  setText('.v5-final p', 'Centralize atendimento, equipe, oportunidades, follow-up e inteligência artificial em uma única operação comercial.')
  const finalButtons = [...document.querySelectorAll('.v5-final .v5-btn')]
  if (finalButtons[0]) replaceTextNode(finalButtons[0], 'Conhecer a Korax')
  if (finalButtons[1]) replaceTextNode(finalButtons[1], 'Entender a implantação')

  // Founder positioning
  setText('.v5plus-founder-copy .v5plus-eyebrow', 'QUEM ESTÁ POR TRÁS DA ESTRATÉGIA')
  setHTML('.v5plus-founder-copy h2', '<span>Diego Nogueira.</span><em>Estruturação comercial e tecnologia aplicada à operação.</em>')
  setText('.v5plus-founder-intro', 'Atuo na interseção entre vendas, atendimento e tecnologia, estruturando processos comerciais para empresas que usam o WhatsApp como canal de relacionamento e vendas.')
  const founderParagraphs = [...document.querySelectorAll('.v5plus-founder-copy > p:not(.v5plus-founder-intro)')]
  if (founderParagraphs[0]) founderParagraphs[0].textContent = 'A Korax nasceu dessa experiência: entender onde o atendimento trava, organizar responsabilidades e próximos passos e usar tecnologia para dar continuidade à operação.'
  const thesis = document.querySelector('.v5plus-founder-thesis strong')
  if (thesis) thesis.textContent = 'Tecnologia sem processo só automatiza bagunça. Primeiro organizamos a operação. Depois colocamos a tecnologia para trabalhar dentro dela.'
  const founderPillars = [...document.querySelectorAll('.v5plus-founder-pillars article')]
  if (founderPillars[2]) {
    const title = founderPillars[2].querySelector('strong')
    const p = founderPillars[2].querySelector('p')
    if (title) title.textContent = 'Tecnologia aplicada à operação'
    if (p) p.textContent = 'IA, automações e integrações trabalhando dentro do processo comercial real da empresa.'
  }

  // Footer
  setText('.v5plus-footer-brand h3', 'Seu WhatsApp deixa de ser um conjunto de conversas e passa a fazer parte de uma operação comercial.')
  setText('.v5plus-footer-brand > p', 'Atendimento, equipe, CRM, oportunidades, follow-up, agenda, automações e inteligência artificial trabalhando no mesmo ambiente.')
  replaceTextNode(document.querySelector('.v5plus-footer-cta'), 'Conhecer a Korax')
  const footerCols = [...document.querySelectorAll('.v5plus-footer-col')]
  const solutionCol = footerCols.find(col => col.querySelector('small')?.textContent.trim() === 'SOLUÇÃO')
  if (solutionCol) {
    const items = [...solutionCol.querySelectorAll('span')]
    const labels = ['Atendimento centralizado', 'Equipe e setores', 'CRM e oportunidades', 'Agenda e confirmações', 'Follow-up e automações', 'Inteligência artificial']
    items.forEach((item, index) => { if (labels[index]) item.textContent = labels[index] })
  }
  setText('.v5-footer p', 'Infraestrutura comercial inteligente para WhatsApp.')
}

export default function CommercialNarrativePatch() {
  useEffect(() => {
    applyCommercialNarrative()
    const timers = [80, 250, 700, 1500].map(delay => setTimeout(applyCommercialNarrative, delay))
    return () => {
      timers.forEach(clearTimeout)
      document.body.classList.remove('korax-commercial-v2')
    }
  }, [])

  return null
}
