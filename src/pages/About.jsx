import { Play, Sparkles, Zap, Shield } from 'lucide-react'

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 text-center mb-16 animate-fade-in-up">
        <p className="text-white/60 text-sm md:text-base uppercase tracking-[0.4em] mb-6 font-medium">Our Philosophy</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-8 drop-shadow-lg">
          The art of doing <span className="italic text-white drop-shadow-xl">less,</span> but better.
        </h1>
        <p className="text-white/80 text-xl leading-relaxed max-w-3xl mx-auto font-light drop-shadow-md">
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
          <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:bg-white/10 transition-all duration-500 delay-[50ms] group hover:shadow-[0_8px_40px_rgba(255,255,255,0.05)]">
            <div className="mb-6 bg-white/10 w-16 h-16 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
            <h3 className="text-2xl text-white font-medium mb-4 tracking-wide drop-shadow-md">{item.title}</h3>
            <p className="text-white/70 text-lg leading-relaxed font-light">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Cinematic quote */}
      <div className="max-w-4xl mx-auto text-center px-6">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/40 to-transparent mx-auto mb-10 shadow-lg" />
        <blockquote className="text-3xl md:text-5xl font-light text-white italic leading-snug drop-shadow-xl">
          "Simplicity is the ultimate sophistication."
        </blockquote>
        <p className="mt-8 text-white/60 text-sm md:text-base tracking-widest uppercase font-medium drop-shadow-md">
          — Leonardo da Vinci
        </p>
      </div>
    </div>
  )
}
