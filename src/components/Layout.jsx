import { Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CommandPalette from './CommandPalette'
import { useFocus } from '../context/FocusContext'

export default function Layout() {
  const { isFocusMode } = useFocus()

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-grow relative z-0">
        <Outlet />
      </main>
      
      {/* Footer is now a permanent fixture at the bottom of the layout as requested */}
      <Footer />
      
      <CommandPalette />
    </div>
  )
}
