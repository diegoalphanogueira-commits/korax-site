import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import KoraxLandingV5Plus from './KoraxLandingV5Plus.jsx'
import { KORAX_LOGO } from './korax-logo-data.js'

const ease = [0.22, 1, 0.36, 1]
const WHATSAPP_URL = '#whatsapp-demo'

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

function V6Header() {
  return (
    <header className="v6-header">
      <div className="v5-shell v6-header-inner">
        <a className="v6-logo" href="#inicio" aria-label="Korax - início">
          <img src={KORAX_LOGO} alt="Korax" />
        </a>
        <nav className="v6-nav" aria-label="Navegação principal">
          <a href="#como-funciona">Como funciona</a>
          <a href="#diferencial">Diferencial</a>
          <a href="#segmentos">Segmentos</a>
          <a href="#cases">Cases</a>
          <a href="#especialista">Especialista</a>
        </nav>
        <a className="v6-header-cta" href={WHATSAPP_URL}>Testar a Korax <ArrowRight size={16} /></a>
      </div>
    </header>
  )
}

function VSLPlayer() {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(false)
  const [missing, setMissing] = useState(false)
  const [started, setStarted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let cancelled = false
    let unlocked = false
    let startedOnce = false

    const markPlaying = (isMuted) => {
      if (cancelled) return
      setMuted(isMuted)
      setStarted(true)
    }

    const playMuted = async () => {
      try {
        video.muted = true
        video.defaultMuted = true
        video.volume = 1
        await video.play()
        markPlaying(true)
      } catch {
        if (!cancelled) setStarted(false)
      }
    }

    const tryAudibleAutoplay = async () => {
      if (cancelled || startedOnce) return
      startedOnce = true

      try {
        video.muted = false
        video.defaultMuted = false
        video.volume = 1
        await video.play()
        unlocked = true
        markPlaying(false)
        removeUnlockListeners()
      } catch {
        await playMuted()
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.18) {
          tryAudibleAutoplay()
          observer.disconnect()
        }
      },
      { threshold: [0, 0.18, 0.4] },
    )

    observer.observe(video)

    const unlockOnFirstInteraction = async () => {
      if (cancelled || unlocked || !videoRef.current) return

      try {
        video.muted = false
        video.defaultMuted = false
        video.volume = 1
        await video.play()
        unlocked = true
        markPlaying(false)
        removeUnlockListeners()
      } catch {
        video.muted = true
        video.defaultMuted = true
        setMuted(true)
        try {
          await video.play()
          setStarted(true)
        } catch {}
      }
    }

    const removeUnlockListeners = () => {
      window.removeEventListener('pointerdown', unlockOnFirstInteraction, true)
      window.removeEventListener('touchstart', unlockOnFirstInteraction, true)
      window.removeEventListener('keydown', unlockOnFirstInteraction, true)
    }

    window.addEventListener('pointerdown', unlockOnFirstInteraction, true)
    window.addEventListener('touchstart', unlockOnFirstInteraction, true)
    window.addEventListener('keydown', unlockOnFirstInteraction, true)

    return () => {
      cancelled = true
      observer.disconnect()
      removeUnlockListeners()
    }
  }, [])

  const enableSound = async () => {
    const video = videoRef.current
    if (!video) return

    video.muted = false
    video.defaultMuted = false
    video.volume = 1

    try {
      await video.play()
      setMuted(false)
      setStarted(true)
    } catch {
      video.muted = true
      video.defaultMuted = true
      setMuted(true)
    }
  }

  const togglePlayback = async () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      try { await video.play(); setStarted(true) } catch {}
    } else {
      video.pause()
      setStarted(false)
    }
  }

  const progress = duration > 0 ? Math.min(100, Math.max(0, (currentTime / duration) * 100)) : 0

  return (
    <div className="v6-vsl-frame">
      <div className="v6-vsl-topline">
        <span><i /> APRESENTAÇÃO KORAX</span>
        <em>Veja como funciona na prática</em>
      </div>

      <div className="v6-video-shell">
        {!missing ? (
          <video
            ref={videoRef}
            className="v6-video"
            src="./media/vsl/korax-vsl.mp4"
            autoPlay
            muted={muted}
            playsInline
            preload="auto"
            poster="./media/vsl/korax-vsl-poster.webp"
            onLoadedData={() => setMissing(false)}
            onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 0)}
            onDurationChange={(event) => setDuration(event.currentTarget.duration || 0)}
            onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime || 0)}
            onError={() => setMissing(true)}
            onPlay={() => setStarted(true)}
            onPause={() => setStarted(false)}
            onEnded={() => setStarted(false)}
          />
        ) : (
          <div className="v6-video-placeholder">
            <span>VSL</span>
            <small>APRESENTAÇÃO VERTICAL · 9:16</small>
            <strong>Apresentação da Korax</strong>
            <p>Suba o arquivo como <code>public/media/vsl/korax-vsl.mp4</code></p>
          </div>
        )}

        {!missing && muted && (
          <button className="v6-unmute" type="button" onClick={enableSound}>
            <span>🔊</span>
            <div><strong>OUVIR COM SOM</strong><small>1 toque para ativar o áudio</small></div>
          </button>
        )}

        {!missing && (
          <button className="v6-playback" type="button" onClick={togglePlayback} aria-label={started ? 'Pausar vídeo' : 'Reproduzir vídeo'}>
            {started ? 'II' : '▶'}
          </button>
        )}
      </div>

      {!missing && (
        <div
          className="v6-progress-visual"
          role="progressbar"
          aria-label="Progresso da apresentação"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={Math.round(progress)}
        >
          <div className="v6-progress-fill" style={{ width: `${progress}%` }}>
            <span />
          </div>
        </div>
      )}

      <div className="v6-vsl-foot">
        <span>Reprodução automática quando o navegador permitir</span>
        <span>•</span>
        <span>Áudio liberado na primeira interação possível</span>
      </div>
    </div>
  )
}

function V6Hero() {
  const scrollToVsl = (event) => {
    event.preventDefault()
    const target = document.getElementById('vsl')
    if (!target) return

    const header = document.querySelector('.v6-header')
    const headerHeight = header?.getBoundingClientRect().height || 0
    const targetTop = target.getBoundingClientRect().top + window.scrollY
    const offset = window.innerWidth <= 680 ? 10 : 18

    window.scrollTo({
      top: Math.max(0, targetTop - headerHeight - offset),
      behavior: 'smooth',
    })
  }

  return (
    <section className="v6-hero" id="inicio">
      <div className="v6-grid-bg" />
      <div className="v6-glow one" />
      <div className="v6-glow two" />
      <div className="v5-shell v6-hero-inner">
        <motion.div className="v6-hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease }}>
          <div className="v6-kicker"><span /> FUNCIONÁRIO DIGITAL PARA O SEU WHATSAPP</div>
          <h1>
            Seu cliente chamou no WhatsApp.
            <em>Quanto tempo ele espera até alguém responder?</em>
          </h1>
          <p>
            Conheça a Korax: um funcionário digital altamente treinável e humanizado para atender, tirar dúvidas, qualificar, direcionar, agendar, confirmar, fazer follow-up e manter sua operação comercial organizada.
          </p>
          <div className="v6-actions">
            <a className="v6-btn primary" href={WHATSAPP_URL}><MessageCircle size={18} /> Testar a Korax no WhatsApp <ArrowRight size={18} /></a>
            <button className="v6-btn secondary" type="button" onClick={scrollToVsl}><WhatsAppIcon size={17} /> Assistir apresentação</button>
          </div>
          <div className="v6-proof">
            <span>Atendimento 24h</span><i />
            <span>Treinada na sua jornada</span><i />
            <span>CRM + Agenda + Follow-up</span>
          </div>
        </motion.div>

        <motion.div id="vsl" className="v6-vsl-wrap" initial={{ opacity: 0, y: 28, scale: .985 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .9, delay: .16, ease }}>
          <VSLPlayer />
        </motion.div>
      </div>
    </section>
  )
}

export default function KoraxLandingV6() {
  return (
    <>
      <V6Header />
      <V6Hero />
      <KoraxLandingV5Plus />
    </>
  )
}
