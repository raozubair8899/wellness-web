import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const features = [
  {
    id: 'deep-focus',
    title: 'Deep Focus',
    description: 'Remove digital noise and stay completely immersed in what matters most to your workflow.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="7" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    id: 'calm-interface',
    title: 'Calm Interface',
    description: 'A minimalist environment that encourages mental clarity and reduces visual cognitive load.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 6h20" /><path d="M2 10h10" /><path d="M2 14h6" />
        <path d="M17 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 'guided-awareness',
    title: 'Guided Awareness',
    description: 'Subtle guidance and cinematic micro-interactions that keep your mind centered.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 6-4 10-4 10S8 12 8 6a4 4 0 0 1 4-4z" />
        <circle cx="12" cy="6" r="1" />
      </svg>
    ),
  },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      id={feature.id}
      className={`group relative bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-10 flex flex-col gap-6
        transition-all duration-700 cursor-default
        hover:bg-white/[0.06] hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_8px_40px_rgba(255,255,255,0.05)]
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="text-white bg-white/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-inner">
        {feature.icon}
      </div>
      <h3 className="text-white text-2xl font-medium tracking-wide drop-shadow-md">{feature.title}</h3>
      <p className="text-white/70 text-base leading-relaxed font-light drop-shadow-sm">{feature.description}</p>
    </div>
  )
}

export default function Features() {
  const headingRef = useRef(null)
  const [headingVisible, setHeadingVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeadingVisible(true) },
      { threshold: 0.3 }
    )
    if (headingRef.current) observer.observe(headingRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="features"
      className="bg-black py-40 px-6 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-1/2 h-[800px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section heading */}
        <div
          ref={headingRef}
          className={`text-center mb-24 transition-all duration-1000 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-white/60 text-sm uppercase tracking-[0.4em] mb-6 font-medium drop-shadow-md">
            Core Experience
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight drop-shadow-lg leading-tight">
            Designed for <span className="italic text-white drop-shadow-xl">deep clarity.</span>
          </h2>
        </div>

        {/* Cinematic Imagery / Split Feature Block */}
        <div className="mb-32 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
          
          {/* Image */}
          <div className="w-full lg:w-1/2 h-[60vh] rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/10 group">
            <img 
              src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2670&auto=format&fit=crop" 
              alt="Minimalist abstract geometry representing psychological engineering" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10">
              <span className="text-white/80 text-xs font-semibold uppercase tracking-widest drop-shadow-lg">Cognitive Design</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-4xl md:text-5xl font-light text-white mb-8 drop-shadow-md leading-[1.2]">
              Psychological Engineering
            </h3>
            <p className="text-white/80 text-xl leading-relaxed font-light mb-10 drop-shadow-sm">
              We leverage principles of cognitive neuroscience to engineer interfaces that actively resist distraction. By applying the "Zen Fade" and global Focus Modes, we deliberately slow your browsing speed, shifting your brain out of the reactive dopamine loop and into a state of intentional creation.
            </p>
            <button className="flex items-center gap-3 text-white text-lg font-medium tracking-wide hover:gap-5 transition-all group">
              Read the Whitepaper <ArrowRight className="w-5 h-5 group-hover:text-white/70" />
            </button>
          </div>
        </div>

        {/* Layout divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-32" />

        {/* Original Cards Grid (Enhanced) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>
        
      </div>
    </section>
  )
}
