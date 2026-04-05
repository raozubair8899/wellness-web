export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6 relative z-10 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <span className="text-white tracking-[0.4em] uppercase text-sm font-medium">RestNet</span>
          <span className="hidden md:inline text-white/40">·</span>
          <span className="text-white/70 text-sm font-light">Ascend to a Higher State of Mind</span>
        </div>
        
        <div className="flex gap-8 text-sm">
          <a href="/about" className="text-white/60 hover:text-white transition-colors">Philosophy</a>
          <a href="/insights" className="text-white/60 hover:text-white transition-colors">Insights</a>
          <a href="mailto:hello@RestNet.io" className="text-white/60 hover:text-white transition-colors">Contact</a>
        </div>

        <p className="text-white/40 text-xs tracking-widest uppercase font-medium">
          © {new Date().getFullYear()} RestNet
        </p>
      </div>
    </footer>
  )
}
