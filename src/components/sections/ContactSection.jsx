import contactImage from '../../assets/images/contact.jpg'
import { Button } from '../ui'

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="section-title mb-8">BOUTIQUE SATHIRI</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4 underline underline-offset-4">
                    Argentina
                  </h3>
                  <p className="text-xl md:text-2xl font-serif font-medium">
                    Capital Federal
                  </p>
                  <p className="text-xl md:text-2xl font-serif font-medium">
                    Palermo Soho
                  </p>
                  <p className="text mt-4">sathirihats@gmail.com</p>
                </div>

                <div className="space-y-2">
                  <div className="pt-2 pb-6 lg:py-0">
                    <Button
                      as="a"
                      href="https://wa.me/5491123659179"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                    >
                      Agenda tu cita
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-last">
            <div className="aspect-[4/3] rounded overflow-hidden">
              <img
                src={contactImage}
                alt="Boutique Sathiri en Palermo Hollywood"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { ContactSection }
