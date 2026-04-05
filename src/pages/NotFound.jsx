import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Abstract particle noise / haze */}
      <div className="absolute inset-0 bg-black -z-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent block pointer-events-none -z-10" />
      
      <div className="text-center animate-fade-in-up">
        <h1 className="text-8xl md:text-[150px] font-light text-white/10 tracking-tighter mix-blend-screen select-none">
          404
        </h1>
        <div className="-mt-8 md:-mt-16 bg-black/60 backdrop-blur-md px-12 py-8 rounded-3xl border border-white/5 inline-block">
          <h2 className="text-2xl md:text-3xl text-white font-light tracking-tight mb-4">
            Lost in the noise.
          </h2>
          <p className="text-white/40 max-w-sm mx-auto mb-10 font-light">
            The space you are looking for does not exist in this realm. Let's return to clarity.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-8 py-3 transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}
