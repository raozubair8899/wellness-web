import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useFocus } from '../context/FocusContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { isFocusMode } = useFocus()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Features', path: '/#features' },
    { label: 'Insights', path: '/insights' }
  ]

  // If focus mode is on, slide navbar out of view entirely
  if (isFocusMode) {
    return (
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-5 z-50 transition-all duration-1000 -translate-y-full opacity-0 pointer-events-none" />
    )
  }

  return (
    <nav
      className={`fixed top-0 w-full flex justify-between items-center px-8 py-5 z-50 transition-all duration-500 zen-fade-3 ${
        scrolled || menuOpen
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent backdrop-blur-none border-b border-transparent'
      }`}
    >
      {/* Left – nav links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className={`text-base tracking-wide transition-colors duration-300 font-light drop-shadow-md ${
              location.pathname === link.path || (location.pathname === '/' && link.path === '/#features')
                ? 'text-white' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Center – brand */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4">
        <Link to="/" className="text-white hover:text-white/80 transition-colors font-medium uppercase tracking-[0.35em] text-lg select-none drop-shadow-lg">
          RestNet
        </Link>
      </div>

      {/* Right – sign in */}
      <div className="hidden md:flex items-center gap-6">
        <Link
          to="/signin"
          className="rounded-full px-6 py-2.5 border border-white/40 text-white text-sm font-medium hover:bg-white text-black hover:text-black hover:bg-white/10 transition-all duration-300 drop-shadow-md bg-black/20 backdrop-blur-md"
          style={{ '--tw-hover-bg-opacity': '0' }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.2)'; e.currentTarget.style.color = 'white'; }}
        >
          Sign In
        </Link>
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden ml-auto flex items-center gap-4 z-50">
        <button
          className="flex flex-col gap-1.5 p-2 bg-black/20 rounded-md backdrop-blur-sm"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 flex flex-col items-center gap-6 py-10 md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 py-0 border-transparent'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className={`text-lg tracking-wide transition-colors duration-300 ${
              location.pathname === link.path ? 'text-white font-medium' : 'text-white/80 hover:text-white font-light'
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/signin"
          className="rounded-full px-10 py-3.5 border border-white/40 text-white text-base font-medium hover:bg-white hover:text-black transition-all duration-300 mt-4 bg-white/5"
        >
          Sign In
        </Link>
      </div>
    </nav>
  )
}
