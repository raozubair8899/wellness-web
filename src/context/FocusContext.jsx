import { createContext, useContext, useState, useEffect } from 'react'

const FocusContext = createContext()

export function FocusProvider({ children }) {
  const [isFocusMode, setIsFocusMode] = useState(false)

  const toggleFocusMode = () => {
    setIsFocusMode((prev) => !prev)
  }

  // Effect to handle escape key to exit focus mode
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isFocusMode) {
        setIsFocusMode(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isFocusMode])

  return (
    <FocusContext.Provider value={{ isFocusMode, toggleFocusMode }}>
      {children}
    </FocusContext.Provider>
  )
}

export function useFocus() {
  const context = useContext(FocusContext)
  if (context === undefined) {
    throw new Error('useFocus must be used within a FocusProvider')
  }
  return context
}
