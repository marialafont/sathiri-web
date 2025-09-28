import aboutImage from '../../assets/images/about.jpeg'
import { Button } from '../../components/ui'

const AboutUsSection = () => {
  return (
    <section id="sobre-nosotros" className="section-padding bg-background">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="section-title">
              SATHIRI, SOMBREROS
              <br />
              QUE DESPIERTAN
              <br />
              EMOCIONES
            </h2>

            <p className="text leading-relaxed max-w-lg">
              Fusionando una selección minuciosa de materiales de la más alta
              calidad y las manos mágicas de nuestros artesanos argentinos nace
              Sathiri.
            </p>

            <Button variant="primary">Sobre nosotros</Button>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={aboutImage}
                alt="Grupo de personas usando sombreros Sathiri en paisaje natural"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { AboutUsSection }
