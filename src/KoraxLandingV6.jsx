import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, MessageCircle } from 'lucide-react'
import KoraxLandingV5Plus from './KoraxLandingV5Plus.jsx'

const ease = [0.22, 1, 0.36, 1]
const WHATSAPP_URL = '#whatsapp-demo'

function formatTime(value) {
  if (!Number.isFinite(value) || value < 0) return '0:00'
  const minutes = Math.floor(value / 60)
  const seconds = Math.floor(value % 60).toString().padStart(2, '0')
  return `${minutes}:${seconds}`
}

function V6Header() {
  return (
    <header className="v6-header">
      <div className="v5-shell v6-header-inner">
        <a className="v6-logo" href="#inicio" aria-label="Korax - início">
          <span>K</span><strong>KORAX</strong>
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
  const [muted, setMuted] = useState(true)
  const [missing, setMissing] = useState(false)
  const [started, setStarted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let cancelled = false
    let unlocked = false

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
      try {
        video.muted = false
        video.defaultMuted = false
        video.volume = 1
        await video.play()
        unlocked = true
        markPlaying(false)
      } catch {
        await playMuted()
      }
    }

    const unlockOnFirstInteraction = async () => {
      if (cancelled || unlocked || !videoRef.current) return

      const rect = video.getBoundingClientRect()
      const videoIsVisible = rect.bottom > 0 && rect.top < window.innerHeight
      if (!videoIsVisible) return

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
        try { await video.play(); setStarted(true) } catch {}
      }
    }

    const removeUnlockListeners = () => {
      window.removeEventListener('pointerdown', unlockOnFirstInteraction, true)
      window.removeEventListener('keydown', unlockOnFirstInteraction, true)
    }

    tryAudibleAutoplay()
    window.addEventListener('pointerdown', unlockOnFirstInteraction, true)
    window.addEventListener('keydown', unlockOnFirstInteraction, true)

    return () => {
      cancelled = true
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

  const seekVideo = (event) => {
    const video = videoRef.current
    if (!video) return
    const nextTime = Number(event.target.value)
    video.currentTime = nextTime
    setCurrentTime(nextTime)
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
            src="/media/vsl/korax-vsl.mp4"
            autoPlay
            muted={muted}
            playsInline
            preload="auto"
            poster="/media/vsl/korax-vsl-poster.webp"
            onLoadedData={() => setMissing(false)}
            onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 0)}
            onDurationChange={(event) => setDuration(event.currentTarget.duration || 0)}
            onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime || 0)}
            onCanPlay={() => {
              const video = videoRef.current
              if (video?.paused) video.play().catch(() => {})
            }}
            onError={() => setMissing(true)}
            onPlay={() => setStarted(true)}
            onPause={() => setStarted(false)}
            onEnded={() => setStarted(false)}
          />
        ) : (
          <div className="v6-video-placeholder">
            <span>VSL</span>
            <small>VÍDEO HORIZONTAL · 16:9</small>
            <strong>Sua apresentação entra aqui</strong>
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
        <div className="v6-progress-row">
          <span>{formatTime(currentTime)}</span>
          <input
            className="v6-progress"
            type="range"
            min="0"
            max={duration || 0.1}
            step="0.1"
            value={Math.min(currentTime, duration || 0)}
            onChange={seekVideo}
            aria-label="Progresso do vídeo"
            style={{ '--v6-progress': `${progress}%` }}
          />
          <span>{formatTime(duration)}</span>
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
            <button className="v6-btn secondary" type="button" onClick={scrollToVsl}><ChevronDown size={17} /> Assistir apresentação</button>
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
