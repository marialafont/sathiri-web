import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/common/Navbar'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <div className="container py-32">
            <h1 className="hero-title text-center">SATHIRI</h1>
            <p className="text-center text-lg text-muted-foreground mt-8">
              Desarrollo en progreso...
            </p>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App
