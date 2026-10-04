import { useEffect } from 'react'

function applyFaqStructure() {
  const section = document.querySelector('.v5-faq')
  if (!section) return

  const label = section.querySelector('.v5-label')
  if (label) label.textContent = 'PERGUNTAS SOBRE A OPERAÇÃO'

  const title = section.querySelector('.v5-faq-title h2')
  if (title) title.textContent = 'O que você precisa saber antes de estruturar sua operação na Korax.'

  const subtitle = section.querySelector('.v5-faq-title p')
  if (subtitle) subtitle.textContent = 'Atendimento, equipe, CRM, histórico, follow-up, agenda, automações e inteligência artificial trabalhando dentro da mesma estrutura comercial.'

  const faq = section.querySelector('.v5-faq-list')
  if (!faq) return

  faq.dataset.commercialFaq = 'structure-v2'
  faq.innerHTML = `
    <details open>
      <summary>O que exatamente é a Korax?</summary>
      <p>A Korax é uma infraestrutura comercial inteligente para empresas que atendem e vendem pelo WhatsApp. Ela centraliza conversas, equipe, setores, unidades, histórico, CRM, oportunidades, follow-ups, agenda, automações e inteligência artificial em uma única operação.</p>
    </details>
    <details>
      <summary>A Korax é só um chatbot com inteligência artificial?</summary>
      <p>Não. A inteligência artificial é uma das camadas da plataforma. A base da Korax é organizar a operação comercial: quem atende, quem é responsável, em qual etapa está a oportunidade, qual é o próximo passo e o que precisa acontecer depois.</p>
    </details>
    <details>
      <summary>Posso centralizar mais de um WhatsApp na mesma operação?</summary>
      <p>Sim. A proposta da Korax é reunir os números utilizados pela empresa em um ambiente centralizado, mantendo atendimento, equipe, histórico e oportunidades conectados à mesma estrutura.</p>
    </details>
    <details>
      <summary>Como funciona para equipes, setores e unidades?</summary>
      <p>Os atendimentos podem ser organizados por responsáveis, setores e unidades. A conversa pode ser encaminhada para a pessoa certa sem perder o contexto, permitindo que cada equipe trabalhe dentro da sua responsabilidade e que a gestão continue enxergando a operação.</p>
    </details>
    <details>
      <summary>O histórico se perde se um funcionário sair ou trocar de aparelho?</summary>
      <p>Não. O histórico fica centralizado na operação da empresa. Assim, o contexto do cliente não depende da memória, do celular ou da permanência de uma pessoa específica na equipe.</p>
    </details>
    <details>
      <summary>A Korax tem CRM e pipeline de oportunidades?</summary>
      <p>Sim. Uma conversa pode virar uma oportunidade comercial com etapa, responsável, valor, origem, observações e próximo passo. A gestão passa a acompanhar o que está aberto, parado, avançando ou aguardando retorno.</p>
    </details>
    <details>
      <summary>Consigo programar follow-ups e retornos?</summary>
      <p>Sim. Follow-ups e próximos contatos podem ser programados para que oportunidades não dependam da memória do atendente. A operação ganha continuidade mesmo quando o cliente não responde na primeira conversa.</p>
    </details>
    <details>
      <summary>A agenda fica conectada ao atendimento?</summary>
      <p>Sim. A Korax pode organizar serviços, profissionais, disponibilidade, horários e confirmações dentro da jornada comercial, mantendo o agendamento conectado ao histórico do cliente.</p>
    </details>
    <details>
      <summary>Onde entra a inteligência artificial?</summary>
      <p>A IA trabalha dentro da estrutura que foi organizada. Ela pode atender, entender contexto, qualificar, fazer perguntas, consultar informações, atualizar dados, conduzir próximos passos, agendar e transferir para uma pessoa quando necessário.</p>
    </details>
    <details>
      <summary>A IA pode trabalhar junto com atendentes humanos?</summary>
      <p>Sim. A operação é híbrida. A IA pode assumir etapas repetitivas e de velocidade, enquanto a equipe entra em negociações, exceções, relacionamento e fechamento. Quando a conversa precisa de uma pessoa, ela pode ser transferida com contexto.</p>
    </details>
    <details>
      <summary>Como a implantação da Korax funciona?</summary>
      <p>Primeiro entendemos como sua empresa atende e vende. Depois estruturamos setores, responsáveis, CRM, jornadas, automações e regras. A IA é treinada dentro desse processo, os cenários são testados e a operação é ajustada com base nas conversas reais.</p>
    </details>
    <details>
      <summary>Para que tipo de empresa a Korax faz mais sentido?</summary>
      <p>Principalmente para empresas que usam o WhatsApp como parte importante do comercial e precisam organizar volume de conversas, equipe, oportunidades, retornos e acompanhamento. Quanto mais o atendimento influencia vendas, agenda ou relacionamento, maior tende a ser o ganho de estrutura.</p>
    </details>
  `
}

export default function FaqStructurePatch() {
  useEffect(() => {
    applyFaqStructure()

    // CommercialNarrativePatch reaplica o FAQ até 1,5s após o mount.
    // Estes timers mantêm a versão estrutural como a versão final visível.
    const timers = [100, 500, 1000, 1700, 2300].map(delay =>
      setTimeout(applyFaqStructure, delay),
    )

    return () => timers.forEach(clearTimeout)
  }, [])

  return null
}
