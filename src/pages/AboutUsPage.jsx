import aboutUs1 from '../assets/images/about-us-1.png'
import aboutUs2 from '../assets/images/about-us-2.png'

const AboutUsPage = () => {
  return (
    <>
      <div className="h-28 md:h-20" />
      <section className="section-padding bg-background">
        <div className="main-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src={aboutUs1}
                  alt="Equipo Sathiri Hats"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 text-center lg:text-left">
              <h2 className="section-title">¿QUIÉNES SOMOS?</h2>

              <div className="space-y-4">
                <p className="text leading-relaxed">
                  Fusionando el fieltro más premium del Ecuador y la mano de
                  obra de artistas y artesanos Argentinos nace SATHIRI, una
                  marca que transmuta un sombrero en una pieza conceptual con
                  identidad propia y engloba una serie de ideologías,
                  pensamientos, estilos y energías. Todos los que hacemos parte
                  de esta comunidad convivimos en un ecosistema que se alimenta
                  de las experiencias de cada persona que lleva consigo un
                  Sathiri.
                </p>

                <p className="text leading-relaxed">
                  Cuidamos mucho el impacto que generamos en el mundo, evitando
                  promover la cultura del &quot;fast fashion&quot; através de un
                  producto sostenible en términos de vida útil y calidad.
                  Queremos que tu sombrero te acompañe por muchos años, por lo
                  que elegimos la mejor materia prima y nos reinventamos
                  constantemente. Desde el mas pequeño detalle como el uso de
                  etiquetas biodegradables, hasta el proceso 100% handmade
                  evitando el uso de máquinas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-28 lg:pb-48 bg-background">
        <div className="main-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
              <h2 className="section-title">LA FUNDADORA</h2>

              <div className="space-y-4">
                <p className="text leading-relaxed">
                  Mi nombre es Nicol Rosero y soy la creadora de Sathiri Hats,
                  una marca de sombreros artesanales que nació en Argentina con
                  un profundo compromiso hacia la sostenibilidad.
                </p>

                <p className="text leading-relaxed">
                  Estoy apasionadamente involucrada con el uso de materiales
                  biodegradables provenientes de Ecuador, trabajando de la mano
                  con artesanos argentinos para dar vida a cada pieza. Hace
                  alrededor de cinco años me enamoré de este oficio y decidí
                  transformar cada sombrero en una obra de arte única, concebida
                  para que cada persona que lo porte lleve consigo un amuleto de
                  poder.
                </p>

                <p className="text leading-relaxed">
                  Mi visión es revolucionar el estilo, convirtiendo al sombrero
                  en un símbolo de empoderamiento que eleve la energía de
                  quienes lo usan, abriendo portales para que ocurran las cosas
                  más increíbles en sus vidas. Con Sathiri Hats, busco que cada
                  sombrero no solo sea un accesorio, sino una fuente de
                  inspiración y conexión con la esencia de cada individuo.
                </p>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src={aboutUs2}
                  alt="Nicol Rosero, fundadora de Sathiri Hats"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUsPage
