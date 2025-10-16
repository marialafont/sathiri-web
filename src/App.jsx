import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar, Footer } from './components/common'
import {
  HeroSection,
  AboutUsSection,
  GallerySection,
  ContactSection,
  StatementSection,
  CustomSection,
  NewsletterSection,
} from './components/sections'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground scrollbar-hide">
        <Navbar />
        <main>
          <HeroSection />
          <AboutUsSection />
          <CustomSection />
          <GallerySection />
          <StatementSection />
          <ContactSection />
          <NewsletterSection />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
