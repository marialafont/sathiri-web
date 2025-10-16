const NewsletterSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="main-container">
        <div className="max-w-md mx-auto text-center">
          <p className="text mb-6">
            Suscríbite para recibir todas las novedades
          </p>

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded border border-gray-300 bg-white text-foreground placeholder:text-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
          />
        </div>
      </div>
    </section>
  )
}

export { NewsletterSection }
