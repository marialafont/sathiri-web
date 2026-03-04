import { Link, useNavigate, useLocation } from 'react-router-dom'
import logoImage from '../../assets/images/sathiri-logo.png'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleHomeClick = e => {
    e.preventDefault()
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    {
      name: 'Tienda online',
      href: 'https://www.sathirihats.com.ar/',
      external: true,
    },
    { name: 'Personalizados', href: '#custom' },
    { name: 'Sathiri', href: '/about-us', isRoute: true },
    { name: 'Contacto', href: '#contacto' },
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()

    if (href === '#inicio') {
      handleHomeClick(e)
      return
    }

    const element = document.querySelector(href)
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.offsetTop - navbarHeight
      window.scrollTo({ top: elementPosition, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-background py-12 md:py-16">
      <div className="main-container">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-col md:flex-row items-center md:justify-center md:space-x-8 space-y-4 md:space-y-0 order-2 md:order-1 pt-4 md:pt-0">
            {navigation.map(item => {
              if (item.external) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground hover:text-foreground/70 transition-colors"
                  >
                    {item.name}
                  </a>
                )
              } else if (item.isRoute) {
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-sm text-foreground hover:text-foreground/70 transition-colors"
                  >
                    {item.name}
                  </Link>
                )
              } else {
                return (
                  <Link
                    key={item.name}
                    to="/"
                    onClick={e => handleLinkClick(e, item.href)}
                    className="text-sm text-foreground hover:text-foreground/70 transition-colors"
                  >
                    {item.name}
                  </Link>
                )
              }
            })}
          </div>

          <div className="flex flex-col items-center space-y-6 order-1 md:order-2">
            <img
              src={logoImage}
              alt="Sathiri"
              className="h-20 md:h-24 w-auto"
            />

            <div className="flex items-center space-x-6">
              <a
                href="https://instagram.com/sathirihats"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-foreground/70 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com/sathirihats"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-foreground/70 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="text-center order-3">
            <p className="text-xs text-foreground/70">
              © 2025, Sathiri Hats. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
