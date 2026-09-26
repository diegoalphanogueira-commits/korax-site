import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, MessageCircle } from 'lucide-react'
import KoraxLandingV5Plus from './KoraxLandingV5Plus.jsx'

const ease = [0.22, 1, 0.36, 1]
const WHATSAPP_URL = '#whatsapp-demo'

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

    // Primeiro tenta tocar com áudio. Se o navegador bloquear, mantém o vídeo rodando mudo.
    tryAudibleAutoplay()

    // Assim que houver a primeira interação válida com a página, tenta liberar o áudio
    // sem exigir um segundo clique no player.
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
            onCanPlay={() => {
              const video = videoRef.current
              if (video?.paused) video.play().catch(() => {})
            }}
            onError={() => setMissing(true)}
            onPlay={() => setStarted(true)}
            onPause={() => setStarted(false)}
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

      <div className="v6-vsl-foot">
        <span>Reprodução automática quando o navegador permitir</span>
        <span>•</span>
        <span>Áudio liberado na primeira interação possível</span>
      </div>
    </div>
  )
}

function V6Hero() {
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
            <a className="v6-btn secondary" href="#vsl"><ChevronDown size={17} /> Assistir apresentação</a>
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
