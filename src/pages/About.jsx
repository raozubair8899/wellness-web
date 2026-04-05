import { Play, Sparkles, Zap, Shield, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 text-center mb-16 animate-fade-in-up">
        <p className="text-teal-200/50 text-sm md:text-base uppercase tracking-[0.4em] mb-6 font-medium">Our Philosophy</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-teal-50 mb-8 drop-shadow-lg leading-tight">
          The art of doing <span className="italic text-white drop-shadow-xl">less,</span> but better.
        </h1>
        <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light drop-shadow-sm">
          In a world increasingly optimized for distraction, RestNet restores your natural state of deep focus. 
          We believe that technology should be a clear window, not a noisy room. 
          By stripping away the non-essential, we invite you to experience absolute mental clarity.
        </p>
      </div>

      {/* Cinematic Image Addition */}
      <div className="max-w-6xl mx-auto px-6 mb-24 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <div className="w-full h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden relative shadow-2xl border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=2560&auto=format&fit=crop" 
            alt="Abstract architecture representing clarity" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>
      </div>

      {/* Philosophy grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {[
          {
            icon: <Sparkles className="w-8 h-8 text-white/90" />,
            title: "Radical Simplicity",
            text: "Every pixel, every interaction, and every workflow is designed to reduce cognitive load. We remove the friction so your mind can soar."
          },
          {
            icon: <Zap className="w-8 h-8 text-white/90" />,
            title: "Unbroken State",
            text: "Flow state is fragile. Our tools protect it relentlessly, silencing the chaos to protect your most valuable asset: your attention."
          },
          {
            icon: <Shield className="w-8 h-8 text-white/90" />,
            title: "Privacy by Design",
            text: "Your thoughts are sanctuary. RestNet processes entirely on your device, ensuring what you create remains exclusively yours."
          },
          {
            icon: <Play className="w-8 h-8 text-white/90" />,
            title: "Effortless Motion",
            text: "Fluid micro-interactions guide your awareness gently, respecting your momentum rather than stealing it."
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-900/30 backdrop-blur-3xl border border-white/5 rounded-3xl p-10 hover:bg-slate-800/40 transition-all duration-500 delay-[50ms] group shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_40px_-5px_rgba(0,0,0,0.4)] select-none">
            <div className="mb-6 bg-teal-900/30 w-16 h-16 flex items-center justify-center rounded-full group-hover:scale-110 group-hover:bg-teal-800/50 transition-all duration-500 shadow-[inset_0_1px_4px_rgba(255,255,255,0.1)] border border-white/5">
              <div className="text-teal-100">{item.icon}</div>
            </div>
            <h3 className="text-2xl text-teal-50 font-medium mb-4 tracking-wide drop-shadow-sm">{item.title}</h3>
            <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Cinematic quote */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-24 cursor-default select-none">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-teal-200/40 to-transparent mx-auto mb-10 shadow-lg" />
        <blockquote className="text-3xl md:text-5xl font-light text-teal-50 italic leading-snug drop-shadow-xl">
          "Simplicity is the ultimate sophistication."
        </blockquote>
        <p className="mt-8 text-teal-100/50 text-sm md:text-base tracking-[0.3em] uppercase font-medium drop-shadow">
          — Leonardo da Vinci
        </p>
      </div>

      {/* High-Conversion CTA Block */}
      <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
        <div className="bg-gradient-to-b from-slate-900/50 to-slate-950/80 backdrop-blur-3xl border border-teal-500/10 rounded-[3rem] p-12 md:p-20 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 drop-shadow-md">
            Ready to reclaim your mind?
          </h2>
          <p className="text-white/70 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Step away from the noise and embrace the power of intentional focus. Access the RestNet platform today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/signin" 
              className="w-full sm:w-auto rounded-full px-10 py-4 bg-teal-50 text-slate-950 text-lg font-medium hover:bg-white active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(20,184,166,0.3)] flex items-center justify-center gap-3 touch-manipulation select-none"
            >
              Enter the Platform <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
