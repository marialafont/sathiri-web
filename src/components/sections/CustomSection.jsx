import customVideo from '../../assets/videos/custom-video.mp4'
import { Button } from '../ui'

const CustomSection = () => {
  return (
    <section id="custom" className="pb-16 md:pb-24 lg:pb-36 bg-background">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[3/4] rounded overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={customVideo} type="video/mp4" />
                Tu navegador no soporta videos HTML5.
              </video>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="section-title">VIVÍ LA EXPERIENCIA SATHIRI</h2>

            <div className="space-y-4">
              <p className="text leading-relaxed">
                Conoce a la artesana fundadora y crea un diseño único,
                personalizado y a medida, fusionando tu idea con su mente
                creativa.
              </p>

              <p className="text leading-relaxed">
                También podrás ver toda la colección y recibir asesoramiento
                para encontrar tu sombrero perfecto.
              </p>
            </div>

            <Button
              as="a"
              href="https://wa.me/5491127046922"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              Contáctanos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { CustomSection }
