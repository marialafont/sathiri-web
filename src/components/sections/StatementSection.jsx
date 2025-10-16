import statementImage from '../../assets/images/statement.jpeg'

const StatementSection = () => {
  return (
    <section className="relative w-full h-[400px] lg:h-[450px] overflow-hidden pt-16 md:pt-24 lg:pt-32">
      <div className="absolute inset-0">
        <img
          src={statementImage}
          alt="Sathiri artesanal hat"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center w-full lg:w-[60%] mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold leading-normal lg:leading-relaxed tracking-wider text-white">
            NO VENDEMOS SOMBREROS CREAMOS, PIEZAS QUE CORONAN TUS MOMENTOS MÁS
            ESPECIALES
          </h2>
        </div>
      </div>
    </section>
  )
}

export { StatementSection }
