import { useState } from 'react'
import { ArrowRight, Lock, KeyRound, Loader2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleDemoLogin = () => {
    setEmail('guest@RestNet.io')
    setPassword('focus2026')
    handleLogin()
  }

  const handleLogin = (e) => {
    if (e) e.preventDefault()
    setIsLoading(true)
    
    // Mock login delay
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to home or a dashboard (mock authenticated state)
      navigate('/?welcome=true')
    }, 1500)
  }

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-6 overflow-hidden pt-20 pb-12 select-none">
      {/* Background elements */}
      <div className="absolute inset-0 bg-transparent -z-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/[0.01] rounded-full blur-[100px] -z-10" />

      {/* Main glass card */}
      <div className="w-full max-w-md bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-10 animate-fade-in-up relative shadow-[0_8px_60px_rgba(255,255,255,0.03)] flex-shrink-0">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full flex items-center justify-center border border-white/5 backdrop-blur-md">
          <Lock className="w-8 h-8 text-white/60" />
        </div>

        <div className="text-center mt-8 mb-10">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-2">Welcome Back</h2>
          <p className="text-white/40 text-sm font-light">Enter your gateway to clarity.</p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleLogin}>
          <div className="flex flex-col gap-2">
            <label className="text-teal-50 text-xs tracking-[0.2em] uppercase ml-1 opacity-70">Email Address</label>
            <input 
              type="email" 
              placeholder="name@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-900/50 border border-white/5 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-teal-500/40 focus:bg-slate-800/60 transition-all font-light shadow-inner"
              required
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-teal-50 text-xs tracking-[0.2em] uppercase opacity-70">Password</label>
              <button type="button" className="text-teal-100/40 hover:text-teal-50 text-xs transition-colors font-light touch-manipulation">Forgot?</button>
            </div>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-slate-900/50 border border-white/5 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-teal-500/40 focus:bg-slate-800/60 transition-all tracking-widest shadow-inner"
              required
            />
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="mt-4 group relative w-full rounded-xl bg-teal-50 text-slate-950 font-medium py-4 overflow-hidden shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:shadow-[0_0_40px_rgba(20,184,166,0.4)] active:scale-[0.98] transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed touch-manipulation"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="flex items-center justify-center gap-2">
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>Sign In <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
              )}
            </span>
          </button>
        </form>

        <p className="text-center mt-8 text-white/30 text-sm font-light">
          Don't have an account? <button className="text-white/70 hover:text-white transition-colors">Apply for early access.</button>
        </p>
      </div>

      {/* Guest Access Card */}
      <div className="w-full max-w-md mt-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <div className="bg-slate-900/40 backdrop-blur-3xl border border-teal-500/10 rounded-2xl p-6 relative overflow-hidden group shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-white/90 text-sm font-medium flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-white/50" /> Portfolio Demo Access
              </h3>
              <p className="text-white/40 text-xs mt-1">Skip registration and explore the platform anonymously.</p>
            </div>
          </div>
          
          <button 
            onClick={handleDemoLogin}
            disabled={isLoading}
            className="w-full bg-slate-800/50 hover:bg-teal-900/40 border border-white/5 hover:border-teal-500/30 rounded-xl py-3 text-teal-50 text-sm transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 touch-manipulation"
          >
            One-Click Demo Login
          </button>
        </div>
      </div>
    </div>
  )
}
