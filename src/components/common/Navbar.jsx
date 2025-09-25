import { useState, useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logoImage from '../../assets/images/sathiri-logo.png'
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navigation = [
    {
      name: 'Tienda online',
      href: 'https://www.sathirihats.com.ar/',
      external: true,
    },
    { name: 'Custom', href: '#custom', external: false },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros', external: false },
    { name: 'Contacto', href: '#contacto', external: false },
  ]

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  const handleLinkClick = (e, href) => {
    e.preventDefault()

    if (href === '#inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const element = document.querySelector(href)
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.offsetTop - navbarHeight
      window.scrollTo({ top: elementPosition, behavior: 'smooth' })
    }
  }

  const handleLogoClick = e => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Motion.header
      className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -120 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between items-center justify-center h-auto py-4 md:h-20 md:py-0">
          <div className="flex flex-col md:flex-row md:items-center items-center space-y-4 md:space-y-0 md:space-x-16">
            <Link
              to="/"
              onClick={handleLogoClick}
              className="hover:opacity-80 transition-opacity flex-shrink-0"
            >
              <img
                src={logoImage}
                alt="Sathiri"
                className="h-10 md:h-14 w-auto"
              />
            </Link>

            <nav className="flex items-center space-x-6 md:space-x-8">
              {navigation.map(item => {
                if (item.external) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] md:text-sm font-medium text-foreground/70 hover:text-foreground link-hover"
                    >
                      {item.name}
                    </a>
                  )
                } else {
                  return (
                    <Link
                      key={item.name}
                      to="/"
                      onClick={e => handleLinkClick(e, item.href)}
                      className="text-[10px] md:text-sm font-medium text-foreground/70 hover:text-foreground link-hover"
                    >
                      {item.name}
                    </Link>
                  )
                }
              })}
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://instagram.com/sathirihats"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground/60 hover:text-foreground link-hover"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com/sathirihats"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground/60 hover:text-foreground link-hover"
              aria-label="Facebook"
            >
              <FaFacebook className="h-5 w-5" />
            </a>
            <a
              href="https://tiktok.com/@sathirihats"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground/60 hover:text-foreground link-hover"
              aria-label="TikTok"
            >
              <FaTiktok className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </Motion.header>
  )
}

export default Navbar
