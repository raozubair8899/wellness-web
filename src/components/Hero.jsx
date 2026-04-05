import { useEffect, useState, useRef } from 'react'
import { useFocus } from '../context/FocusContext'

// Floating particle component
function Particle({ style }) {
  return (
    <div
      className="absolute rounded-full bg-white animate-float-up pointer-events-none"
      style={style}
    />
  )
}

// Generate particles once
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  style: {
    width: `${Math.random() * 3 + 1}px`,
    height: `${Math.random() * 3 + 1}px`,
    left: `${Math.random() * 100}%`,
    bottom: `${Math.random() * 30}%`,
    opacity: 0,
    filter: `blur(${Math.random() * 1}px)`,
    animationDelay: `${Math.random() * 10}s`,
    animationDuration: `${7 + Math.random() * 8}s`,
  },
}))

export default function Hero() {
  const videoRef = useRef(null)
  const { isFocusMode } = useFocus()

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center z-0 transition-colors duration-1000 bg-slate-950"
    >
      {/* ── Video background ── */}
      <div className={`absolute inset-0 transition-all duration-1000 ${isFocusMode ? 'grayscale-[90%] blur-md opacity-100 shadow-inner' : 'grayscale-0 blur-0 opacity-100'}`}>
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.zainkeepscode.com/boy_horizon.mp4"
          poster="https://images.unsplash.com/photo-1507120410856-1f35574c3b45?q=80&w=2560&auto=format&fit=crop"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        {/* ── Overlay 1: Softer therapeutic gradient for vivid video visibility ── */}
        <div className={`absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/70 transition-opacity duration-1000 ${isFocusMode ? 'opacity-90' : 'opacity-100'}`} />

        {/* ── Overlay 2: glass haze ── */}
        <div className="absolute inset-0 backdrop-blur-[3px]" />
      </div>

      {/* ── Floating particles ── */}
      <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${isFocusMode ? 'opacity-0' : 'opacity-100'}`}>
        {PARTICLES.map((p) => (
          <Particle key={p.id} style={p.style} />
        ))}
      </div>

      {/* ── Hero content with Zen Fade sequence (Glassmorphism Container Removed) ── */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 md:px-12 py-16 md:py-20 flex flex-col items-center gap-6 drop-shadow-2xl">

        {/* Typography (Fades in first: zen-fade-1) */}
        <div className="zen-fade-1 select-none pointer-events-none">
          <p className="text-teal-100/70 text-xs md:text-sm uppercase tracking-[0.5em] mb-6 font-medium drop-shadow-md">
            Clarity · Focus · Awareness
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-light tracking-tight text-white leading-[1.1] drop-shadow-xl">
            Ascend to a{' '}
            <span className="italic font-normal text-teal-50/90 drop-shadow-md">Higher State</span> of Mind
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mt-8 leading-relaxed font-light drop-shadow">
            Discover tranquility above the noise and unlock a distraction-free
            haven designed to reset your focus and awareness.
          </p>
        </div>

        {/* CTA button & Supporting Text (Fades in second: zen-fade-2) */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 zen-fade-2 relative z-20">
          <button
            id="cta-gateway-btn"
            className="rounded-full px-10 py-4 sm:px-12 sm:py-5 bg-white/10 backdrop-blur-3xl border border-white/20 text-white text-base sm:text-lg font-medium hover:bg-white hover:text-slate-950 active:scale-[0.97] hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-300 w-full sm:w-auto overflow-hidden touch-manipulation"
          >
            Enter the Gateway
          </button>
          <p className="text-teal-100/50 text-xs sm:text-sm tracking-[0.25em] uppercase whitespace-nowrap mt-2 drop-shadow-sm font-medium select-none">
            Guiding you to clarity and calm
          </p>
        </div>
      </div>

      {/* ── Scroll indicator (Fades in third: zen-fade-3) ── */}
      <div className={`absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 zen-fade-3 transition-opacity duration-1000 select-none ${isFocusMode ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-px h-10 sm:h-12 bg-white/40 animate-scroll-bounce shadow-lg" />
      </div>
    </section>
  )
}
