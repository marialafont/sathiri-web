import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './components/common'
import {
  HeroSection,
  AboutUsSection,
  GallerySection,
  ContactSection,
} from './components/sections'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground scrollbar-hide">
        <Navbar />
        <HeroSection />
        <AboutUsSection />
        <GallerySection />
        <ContactSection />
        <main>
          <section className="bg-background flex items-center justify-center section-padding">
            <div className="main-container">
              <h2 className="section-title text-center mb-8">
                Estamos preparando algo especial
              </h2>
              <p className="text text-center">
                Como nuestros sombreros, esta sección se está creando con
                cuidado...
              </p>
            </div>
          </section>
        </main>
      </div>
    </Router>
  )
}

export default App
