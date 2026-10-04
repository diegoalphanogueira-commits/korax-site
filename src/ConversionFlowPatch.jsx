import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowRight, CalendarDays, CheckCircle2, MessageCircle, X } from 'lucide-react'

const WHATSAPP_NUMBER = '5511958689822'

const DIRECT_WHATSAPP_TEXT = 'Olá! Vim pelo site da Korax e quero entender como a plataforma pode organizar nossa operação comercial no WhatsApp.'

const openWhatsApp = (text = DIRECT_WHATSAPP_TEXT) => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

const replaceTextNode = (element, text) => {
  if (!element) return
  const node = [...element.childNodes].find(item => item.nodeType === Node.TEXT_NODE && item.textContent.trim())
  if (node) node.textContent = ` ${text} `
  else element.append(document.createTextNode(` ${text} `))
}

export default function ConversionFlowPatch() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    company: '',
    whatsapp: '',
    segment: '',
    whatsappRole: '',
    teamSize: '',
    whatsappNumbers: '',
    crm: '',
    challenge: '',
    period: '',
  })

  const demoMessage = useMemo(() => {
    return [
      'Olá! Quero agendar uma demonstração da Korax.',
      '',
      `Nome: ${form.name || '-'}`,
      `Empresa: ${form.company || '-'}`,
      `WhatsApp: ${form.whatsapp || '-'}`,
      `Segmento: ${form.segment || '-'}`,
      `Uso do WhatsApp: ${form.whatsappRole || '-'}`,
      `Tamanho da equipe: ${form.teamSize || '-'}`,
      `Números de WhatsApp: ${form.whatsappNumbers || '-'}`,
      `CRM atual: ${form.crm || '-'}`,
      `Principal desafio: ${form.challenge || '-'}`,
      `Melhor período para reunião: ${form.period || '-'}`,
      '',
      'Vim pelo site e gostaria de conhecer a Korax por dentro.',
    ].join('\n')
  }, [form])

  useEffect(() => {
    let cancelled = false

    const configure = () => {
      if (cancelled) return

      // Header
      const headerCta = document.querySelector('.v6-header-cta')
      if (headerCta) {
        replaceTextNode(headerCta, 'Agendar demonstração')
        headerCta.setAttribute('href', '#agendar-demonstracao')
        headerCta.dataset.koraxAction = 'demo'
      }

      const legacyHeader = document.querySelector('.v5-header-cta')
      if (legacyHeader) {
        replaceTextNode(legacyHeader, 'Agendar demonstração')
        legacyHeader.setAttribute('href', '#agendar-demonstracao')
        legacyHeader.dataset.koraxAction = 'demo'
      }

      // Hero — two primary conversion routes only.
      const heroButtons = [...document.querySelectorAll('.v6-actions .v6-btn')]
      if (heroButtons[0]) {
        replaceTextNode(heroButtons[0], 'Agendar uma demonstração')
        heroButtons[0].setAttribute('href', '#agendar-demonstracao')
        heroButtons[0].dataset.koraxAction = 'demo'
      }
      if (heroButtons[1]) {
        replaceTextNode(heroButtons[1], 'Falar com a equipe no WhatsApp')
        heroButtons[1].dataset.koraxAction = 'whatsapp'
        heroButtons[1].setAttribute('aria-label', 'Falar com a equipe da Korax no WhatsApp')
      }

      // AI comparison section
      const frustrationLink = document.querySelector('.v5-frustration .v5-inline-link')
      if (frustrationLink) {
        replaceTextNode(frustrationLink, 'Agendar uma demonstração')
        frustrationLink.setAttribute('href', '#agendar-demonstracao')
        frustrationLink.dataset.koraxAction = 'demo'
      }

      // Replace self-test positioning with a commercial demonstration invitation.
      const testSection = document.querySelector('.v5-test')
      if (testSection) {
        testSection.id = 'demonstracao'
        const label = testSection.querySelector('.v5-label')
        const title = testSection.querySelector('.v5-test-copy h2')
        const paragraph = testSection.querySelector('.v5-test-copy > p')
        const small = testSection.querySelector('.v5-test-copy > small')
        const prompts = testSection.querySelector('.v5-test-prompts')
        const phone = testSection.querySelector('.v5-test-phone')
        const button = testSection.querySelector('.v5-btn.white')

        if (label) label.textContent = 'DEMONSTRAÇÃO PERSONALIZADA'
        if (title) title.innerHTML = 'Veja como a Korax se encaixa <em>na sua operação.</em>'
        if (paragraph) paragraph.textContent = 'Em uma demonstração, mostramos como centralizar seus WhatsApps, organizar equipe e setores, acompanhar oportunidades, automatizar follow-ups e colocar IA para trabalhar dentro do seu processo comercial.'
        if (small) small.textContent = 'Demonstração orientada ao cenário real da sua empresa.'
        if (prompts) prompts.style.display = 'none'
        if (phone) phone.style.display = 'none'

        if (button) {
          replaceTextNode(button, 'Agendar uma demonstração')
          button.setAttribute('href', '#agendar-demonstracao')
          button.dataset.koraxAction = 'demo'

          if (!testSection.querySelector('.korax-test-whatsapp')) {
            const whatsapp = document.createElement('a')
            whatsapp.className = 'v5-btn korax-test-whatsapp'
            whatsapp.href = `https://wa.me/${WHATSAPP_NUMBER}`
            whatsapp.dataset.koraxAction = 'whatsapp'
            whatsapp.innerHTML = '<span>Falar com a equipe no WhatsApp</span>'
            button.insertAdjacentElement('afterend', whatsapp)
          }
        }
      }

      // Final CTA
      const finalButtons = [...document.querySelectorAll('.v5-final .v5-btn')]
      if (finalButtons[0]) {
        replaceTextNode(finalButtons[0], 'Agendar uma demonstração')
        finalButtons[0].setAttribute('href', '#agendar-demonstracao')
        finalButtons[0].dataset.koraxAction = 'demo'
      }
      if (finalButtons[1]) {
        replaceTextNode(finalButtons[1], 'Falar com a equipe')
        finalButtons[1].setAttribute('href', `https://wa.me/${WHATSAPP_NUMBER}`)
        finalButtons[1].dataset.koraxAction = 'whatsapp'
      }

      // Footer CTA
      const footerCta = document.querySelector('.v5plus-footer-cta')
      if (footerCta) {
        replaceTextNode(footerCta, 'Falar com a equipe no WhatsApp')
        footerCta.setAttribute('href', `https://wa.me/${WHATSAPP_NUMBER}`)
        footerCta.dataset.koraxAction = 'whatsapp'
      }

      document.body.classList.add('korax-conversion-flow')
    }

    const timer = window.setTimeout(configure, 50)
    const timer2 = window.setTimeout(configure, 450)

    const onClick = (event) => {
      const trigger = event.target.closest('[data-korax-action]')
      if (!trigger) return

      const action = trigger.dataset.koraxAction
      if (action === 'demo') {
        event.preventDefault()
        setSubmitted(false)
        setOpen(true)
      }
      if (action === 'whatsapp') {
        event.preventDefault()
        openWhatsApp()
      }
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('click', onClick)
    window.addEventListener('keydown', onKeyDown)

    return () => {
      cancelled = true
      window.clearTimeout(timer)
      window.clearTimeout(timer2)
      document.removeEventListener('click', onClick)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = original }
  }, [open])

  const update = (key) => (event) => {
    setForm(current => ({ ...current, [key]: event.target.value }))
  }

  const submit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    openWhatsApp(demoMessage)
  }

  if (!open) return null

  return createPortal(
    <div className="korax-demo-overlay" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) setOpen(false)
    }}>
      <div className="korax-demo-modal" role="dialog" aria-modal="true" aria-labelledby="korax-demo-title">
        <button className="korax-demo-close" type="button" onClick={() => setOpen(false)} aria-label="Fechar formulário">
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="korax-demo-head">
              <span className="korax-demo-kicker"><CalendarDays size={15} /> DEMONSTRAÇÃO KORAX</span>
              <h2 id="korax-demo-title">Vamos entender sua operação antes da demonstração.</h2>
              <p>Leva cerca de 2 minutos. Essas respostas ajudam nossa equipe a mostrar a Korax aplicada ao cenário real da sua empresa.</p>
            </div>

            <form className="korax-demo-form" onSubmit={submit}>
              <div className="korax-demo-grid two">
                <label>
                  <span>Seu nome</span>
                  <input required value={form.name} onChange={update('name')} placeholder="Nome completo" />
                </label>
                <label>
                  <span>Empresa</span>
                  <input required value={form.company} onChange={update('company')} placeholder="Nome da empresa" />
                </label>
              </div>

              <div className="korax-demo-grid two">
                <label>
                  <span>Seu WhatsApp</span>
                  <input required value={form.whatsapp} onChange={update('whatsapp')} inputMode="tel" placeholder="(11) 99999-9999" />
                </label>
                <label>
                  <span>Segmento</span>
                  <select required value={form.segment} onChange={update('segment')}>
                    <option value="">Selecione</option>
                    <option>Seguros</option>
                    <option>Clínica / Estética</option>
                    <option>Imobiliária</option>
                    <option>Concessionária</option>
                    <option>Serviços</option>
                    <option>Varejo / E-commerce</option>
                    <option>Transportadora / Logística</option>
                    <option>Outro</option>
                  </select>
                </label>
              </div>

              <label>
                <span>Como o WhatsApp participa do seu atendimento hoje?</span>
                <select required value={form.whatsappRole} onChange={update('whatsappRole')}>
                  <option value="">Selecione</option>
                  <option>É nosso principal canal de atendimento e vendas</option>
                  <option>Usamos bastante, mas a operação ainda é descentralizada</option>
                  <option>Usamos junto com outros canais</option>
                  <option>Ainda não usamos de forma estruturada</option>
                </select>
              </label>

              <div className="korax-demo-grid three">
                <label>
                  <span>Tamanho da equipe</span>
                  <select required value={form.teamSize} onChange={update('teamSize')}>
                    <option value="">Selecione</option>
                    <option>1 pessoa</option>
                    <option>2 a 5 pessoas</option>
                    <option>6 a 10 pessoas</option>
                    <option>11 a 20 pessoas</option>
                    <option>21+ pessoas</option>
                  </select>
                </label>
                <label>
                  <span>Números de WhatsApp</span>
                  <select required value={form.whatsappNumbers} onChange={update('whatsappNumbers')}>
                    <option value="">Selecione</option>
                    <option>1 número</option>
                    <option>2 números</option>
                    <option>3 a 5 números</option>
                    <option>6+ números</option>
                  </select>
                </label>
                <label>
                  <span>Usa CRM hoje?</span>
                  <select required value={form.crm} onChange={update('crm')}>
                    <option value="">Selecione</option>
                    <option>Sim</option>
                    <option>Não</option>
                    <option>Planilha / controle manual</option>
                  </select>
                </label>
              </div>

              <label>
                <span>Qual é o principal desafio comercial hoje?</span>
                <select required value={form.challenge} onChange={update('challenge')}>
                  <option value="">Selecione</option>
                  <option>Centralizar atendimentos e números</option>
                  <option>Organizar equipe, setores e responsáveis</option>
                  <option>Acompanhar oportunidades no CRM / pipeline</option>
                  <option>Não perder follow-ups e retornos</option>
                  <option>Preservar histórico e contexto dos clientes</option>
                  <option>Automatizar atendimento com IA sem perder qualidade</option>
                  <option>Outro</option>
                </select>
              </label>

              <fieldset className="korax-demo-period">
                <legend>Melhor período para uma reunião</legend>
                <div>
                  {['Manhã', 'Tarde', 'Noite'].map(period => (
                    <label key={period}>
                      <input required type="radio" name="period" value={period} checked={form.period === period} onChange={update('period')} />
                      <span>{period}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <button className="korax-demo-submit" type="submit">
                Solicitar demonstração <ArrowRight size={18} />
              </button>
              <small className="korax-demo-note">Ao continuar, abriremos uma mensagem com seus dados no WhatsApp da equipe Korax para confirmar a demonstração.</small>
            </form>
          </>
        ) : (
          <div className="korax-demo-success">
            <span className="korax-demo-success-icon"><CheckCircle2 size={30} /></span>
            <small>PRÓXIMO PASSO</small>
            <h2>Perfeito. Seus dados estão prontos.</h2>
            <p>Abrimos uma mensagem no WhatsApp com suas informações. Envie a mensagem para nossa equipe confirmar o melhor horário da demonstração.</p>
            <button type="button" className="korax-demo-submit" onClick={() => openWhatsApp(demoMessage)}>
              <MessageCircle size={18} /> Abrir WhatsApp novamente
            </button>
            <button type="button" className="korax-demo-back" onClick={() => setOpen(false)}>Voltar para o site</button>
          </div>
        )}
      </div>
    </div>,
    document.body,
  )
}
