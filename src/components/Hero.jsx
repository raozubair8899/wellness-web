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
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center z-0 transition-colors duration-1000 bg-black"
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
        {/* ── Overlay 1: Darker gradient for much better text readability ── */}
        <div className={`absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 transition-opacity duration-1000 ${isFocusMode ? 'opacity-90' : 'opacity-100'}`} />
        
        {/* ── Overlay 2: glass haze ── */}
        <div className="absolute inset-0 backdrop-blur-[3px]" />
      </div>

      {/* ── Floating particles ── */}
      <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${isFocusMode ? 'opacity-0' : 'opacity-100'}`}>
        {PARTICLES.map((p) => (
          <Particle key={p.id} style={p.style} />
        ))}
      </div>

      {/* ── Hero content with Zen Fade sequence ── */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 mt-32 pointer-events-none drop-shadow-2xl">
        
        {/* Typography (Fades in first: zen-fade-1) */}
        <div className="zen-fade-1">
          <p className="text-white/80 text-sm md:text-base uppercase tracking-[0.4em] mb-6 font-medium drop-shadow-lg">
            Clarity · Focus · Awareness
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-light tracking-tight text-white leading-[1.1] drop-shadow-2xl">
            Ascend to a{' '}
            <span className="italic font-normal text-white drop-shadow-xl">Higher State</span> of Mind
          </h1>
          <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto mt-8 leading-relaxed font-light drop-shadow-lg">
            Discover tranquility above the noise and unlock a distraction-free
            haven designed to RestNet your focus and awareness.
          </p>
        </div>

        {/* CTA button (Fades in second: zen-fade-2) */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 zen-fade-2 pointer-events-auto">
          <button
            id="cta-gateway-btn"
            className="rounded-full px-12 py-5 bg-white/20 backdrop-blur-lg border border-white/40 text-white text-lg font-medium hover:bg-white hover:text-black hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-500 w-full sm:w-auto"
          >
            Enter the Gateway
          </button>
        </div>
      </div>

      {/* ── Scroll indicator & Micro text (Fades in third: zen-fade-3) ── */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 zen-fade-3 transition-opacity duration-1000 ${isFocusMode ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-px h-12 bg-white/60 animate-scroll-bounce shadow-lg" />
        <p className="text-white/70 text-sm md:text-base tracking-wide whitespace-nowrap mt-4 drop-shadow-md">
          Guiding you to clarity and calm
        </p>
      </div>
    </section>
  )
}
