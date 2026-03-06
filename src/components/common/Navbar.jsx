import { useState, useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import SathiriLogo from '../../assets/images/sathiri-logo.svg?react'
import { SiInstagram, SiFacebook } from 'react-icons/si'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()

  const navigation = [
    { name: 'Inicio', href: '#inicio', external: false },
    {
      name: 'Tienda online',
      href: 'https://www.sathirihats.com.ar/',
      external: true,
    },
    { name: 'Personalizados', href: '#custom', external: false },
    { name: 'Sathiri', href: '/about-us', external: false, isRoute: true },
    { name: 'Contacto', href: '#contacto', external: false },
  ]

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const isHome = location.pathname === '/'
        const currentScrollY = window.scrollY

        if (currentScrollY < lastScrollY) {
          setIsVisible(!isHome || currentScrollY > 100)
        } else if (currentScrollY > lastScrollY) {
          setIsVisible(false)
        }

        setLastScrollY(currentScrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY, location.pathname])

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

  useEffect(() => {
    setIsVisible(location.pathname !== '/')
  }, [location.pathname])

  const handleHomeClick = e => {
    e.preventDefault()
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <Motion.header
      className="w-full bg-white/95 backdrop-blur-sm fixed top-0 z-50"
      initial={{ y: -120 }}
      animate={{ y: isVisible ? 0 : -120 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <div className="main-container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between items-center justify-center h-auto py-4 md:h-20 md:py-0">
          <div className="flex flex-col md:flex-row md:items-center items-center space-y-4 md:space-y-0 md:space-x-16">
            <Link
              to="/"
              onClick={handleHomeClick}
              className="hover:opacity-80 transition-opacity flex-shrink-0"
            >
              <SathiriLogo
                aria-label="Sathiri"
                className="h-12 md:h-14 w-auto text-foreground"
              />
            </Link>

            <nav className="flex items-center space-x-4 md:space-x-8">
              {navigation.map(item => {
                if (item.external) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] md:text-sm font-normal text-foreground/70 hover:text-foreground link-hover whitespace-nowrap"
                    >
                      {item.name}
                    </a>
                  )
                } else if (item.isRoute) {
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-[11px] md:text-sm font-normal text-foreground/70 hover:text-foreground link-hover whitespace-nowrap"
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
                      className="text-[11px] md:text-sm font-normal text-foreground/70 hover:text-foreground link-hover whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                  )
                }
              })}
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <a
              href="https://instagram.com/sathiri_hats"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground/60 hover:text-foreground link-hover flex items-center justify-center"
              aria-label="Instagram"
            >
              <SiInstagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com/sathirihats"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground/60 hover:text-foreground link-hover flex items-center justify-center"
              aria-label="Facebook"
            >
              <SiFacebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </Motion.header>
  )
}

export { Navbar }
