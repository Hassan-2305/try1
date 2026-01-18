import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import Loader from './components/Loader'
import Home from './pages/Home'
import Events from './pages/Events'
import Materials from './pages/Materials'
import Placements from './pages/Placements'
import Newsletter from './pages/Newsletter'
import Team from './pages/Team'
import NewsletterReader from './pages/NewsletterReader'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <Router>
          <div className="app-container fade-in-content">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
                <Route path="/materials" element={<PageTransition><Materials /></PageTransition>} />
                <Route path="/placements" element={<PageTransition><Placements /></PageTransition>} />
                <Route path="/newsletter" element={<PageTransition><Newsletter /></PageTransition>} />
                <Route path="/newsletter/jan-2024" element={<PageTransition><NewsletterReader /></PageTransition>} />
                <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      )}
    </>
  )
}

export default App
