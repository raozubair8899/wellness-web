import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, BrainCircuit, Maximize } from 'lucide-react'
import { useFocus } from '../context/FocusContext'

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const { isFocusMode, toggleFocusMode } = useFocus()

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Cmd+K or Ctrl+K to open
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (!isOpen) return null

  const navigateTo = (path) => {
    navigate(path)
    setIsOpen(false)
    setSearch('')
  }

  const handleToggleFocus = () => {
    toggleFocusMode()
    setIsOpen(false)
    setSearch('')
  }

  const commands = [
    { name: 'Go to About', icon: <BrainCircuit size={16} />, action: () => navigateTo('/about') },
    { name: 'Browse Insights', icon: <Search size={16} />, action: () => navigateTo('/insights') },
    { name: isFocusMode ? 'Exit Focus Mode' : 'Enter Focus Mode', icon: <Maximize size={16} />, action: handleToggleFocus },
    { name: 'Guest Access (Sign In)', icon: <BrainCircuit size={16} />, action: () => navigateTo('/signin') },
  ]

  const filteredCommands = commands.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg bg-black/80 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        {/* Search Input */}
        <div className="flex items-center px-4 border-b border-white/10">
          <Search className="w-5 h-5 text-white/50 mr-3" />
          <input
            autoFocus
            type="text"
            className="w-full bg-transparent text-white placeholder-white/40 outline-none py-5 font-light text-lg"
            placeholder="Search commands or jump to..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <kbd className="hidden sm:inline-block text-xs font-medium text-white/40 bg-white/10 px-2 py-1 rounded">ESC</kbd>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto py-2">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((command, idx) => (
              <button
                key={idx}
                onClick={command.action}
                className="w-full flex items-center px-6 py-4 text-left hover:bg-white/10 transition-colors group"
              >
                <div className="text-white/40 group-hover:text-white transition-colors mr-4">
                  {command.icon}
                </div>
                <span className="text-white/80 group-hover:text-white font-light tracking-wide">{command.name}</span>
              </button>
            ))
          ) : (
            <div className="px-6 py-8 text-center text-white/40 font-light">
              No combinations found for clarity.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
