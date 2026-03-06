import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar, Footer, ScrollToTop } from './components/common'
import {
  HeroSection,
  AboutUsSection,
  GallerySection,
  ContactSection,
  StatementSection,
  CustomSection,
  NewsletterSection,
  QuoteSection,
} from './components/sections'
import AboutUsPage from './pages/AboutUsPage'

const MotionMain = motion.main

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

const pageTransition = { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }

function AppRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <MotionMain
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
      >
        <Routes location={location}>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutUsSection />
                <CustomSection />
                <QuoteSection />
                <GallerySection />
                <StatementSection />
                <ContactSection />
                <NewsletterSection />
              </>
            }
          />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
      </MotionMain>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground scrollbar-hide">
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  )
}

export default App
