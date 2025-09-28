import heroVideo from '../../assets/videos/hero-video.mp4'

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

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex items-center justify-center h-full -mt-16">
        <div className="text-center text-white main-container">
          <h1 className="title text-white mb-4">
            SOMBREROS HECHOS A MANO
            <br />
            EN ARGENTINA
          </h1>

          <p className="text text-white/90 max-w-2xl mx-auto mb-8">
            Amamos lo que hacemos y lo reflejamos en cada pieza de arte
          </p>

          <a
            href="https://www.sathirihats.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary text-white"
          >
            Tienda Online
          </a>
        </div>
      </div>
    </section>
  )
}

export { HeroSection }
