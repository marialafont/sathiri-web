import contactImage from '../../assets/images/contact.jpg'

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
                  <h3 className="text-xl md:text-2xl font-serif font-semibold">
                    Capital Federal
                  </h3>
                  <p className="text-xl md:text-2xl font-serif font-semibold">
                    Palermo Hollywood
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text">Costa Rica 5922</p>
                  <p className="text">Martes a Sábado - 11hs a 20hs</p>
                </div>

                <div className="space-y-2">
                  <p className="text">+5491123659179</p>
                  <p className="text">sathirihats@gmail.com</p>
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
