import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './components/common'
import { HeroSection } from './components/sections'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground scrollbar-hide">
        <Navbar />
        <HeroSection />

        <main>
          <section className="min-h-screen bg-background flex items-center justify-center section-padding">
            <div className="main-container">
              <h2 className="section-title text-center mb-8">
                Sección de prueba
              </h2>
              <p className="text text-center">
                Contenido temporal para scroll...
              </p>
            </div>
          </section>
        </main>
      </div>
    </Router>
  )
}

export default App
