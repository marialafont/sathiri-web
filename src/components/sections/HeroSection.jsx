import heroVideo from '../../assets/videos/hero-video.mp4'
import { Button } from '../ui'

const HeroSection = () => {
  return (
    <section id="inicio" className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex items-center justify-center h-full -mt-16">
        <div className="text-center text-white main-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight lg:leading-snug tracking-wider text-white mb-4 w-full md:w-[70%] mx-auto">
            SOMBREROS HECHOS A MANO EN ARGENTINA
          </h1>

          <p className="text text-white/90 max-w-2xl mx-auto mb-8">
            Amamos lo que hacemos y lo reflejamos en cada pieza de arte
          </p>

          <Button
            as="a"
            href="https://www.sathirihats.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            Tienda Online
          </Button>
        </div>
      </div>
    </section>
  )
}

export { HeroSection }
