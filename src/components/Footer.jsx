import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/5 py-12 md:py-16 px-4 md:px-6 relative z-10 w-full select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
          <span className="text-teal-50 tracking-[0.4em] uppercase text-sm font-medium drop-shadow">RestNet</span>
          <span className="hidden md:inline text-white/40">·</span>
          <span className="text-white/70 text-sm font-light">Ascend to a Higher State of Mind</span>
          <span className="text-white/70 text-sm font-light">Made By: <span style={{ color: "#00ff00" }}>Rao Muhammad Zubair</span></span>
        </div>

        <div className="flex gap-6 md:gap-8 text-sm md:text-base">
          <Link to="/about" className="text-white/60 hover:text-white active:scale-95 transition-all">Philosophy</Link>
          <Link to="/insights" className="text-white/60 hover:text-white active:scale-95 transition-all">Insights</Link>
          <a href="mailto:hello@RestNet.io" className="text-white/60 hover:text-white active:scale-95 transition-all">Contact</a>
        </div>

        <p className="text-white/40 text-xs tracking-widest uppercase font-medium">
          © {new Date().getFullYear()} RestNet
        </p>
      </div>
    </footer>
  )
}
