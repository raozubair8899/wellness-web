import { Routes, Route } from 'react-router-dom'
import { FocusProvider } from './context/FocusContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Insights from './pages/Insights'
import SignIn from './pages/SignIn'
import NotFound from './pages/NotFound'

function App() {
  return (
    <FocusProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Index route for the landing page */}
          <Route index element={<Home />} />
          {/* Other pages */}
          <Route path="about" element={<About />} />
          <Route path="features" element={<Home />} />
          <Route path="insights" element={<Insights />} />
          <Route path="signin" element={<SignIn />} />
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </FocusProvider>
  )
}

export default App
