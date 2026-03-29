import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigate to a home page section; if not on home, go home first then scroll
  const handleSectionNav = (e, sectionId) => {
    e.preventDefault()
    setIsMenuOpen(false)
    if (isHomePage) {
      const target = document.querySelector(sectionId)
      if (target) {
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' })
      }
    } else {
      navigate('/')
      // After navigation, scroll to section
      setTimeout(() => {
        const target = document.querySelector(sectionId)
        if (target) {
          window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' })
        }
      }, 350)
    }
  }

  const Logo = ({ size = 40 }) => (
    <img src="/logo.svg" alt="M.SPACE" style={{ width: size, height: size, objectFit: 'contain' }} />
  )

  return (
    <nav className="navbar" style={{
      background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
      boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <div className="container">
        {/* Logo — always goes home */}
        <Link to="/" className="nav-brand" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="logo">
            <Logo size={40} />
          </div>
          <span className="brand-text">M.SPACE</span>
        </Link>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
              Trang chủ
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleSectionNav(e, '#about')}>Về chúng tôi</a>
          </li>
          <li>
            <a href="#services" onClick={(e) => handleSectionNav(e, '#services')}>Dịch vụ</a>
          </li>
          <li>
            <Link
              to="/san-pham"
              className={location.pathname.startsWith('/san-pham') ? 'nav-active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Sản phẩm
            </Link>
          </li>
          <li>
            <Link
              to="/mon-an"
              className={location.pathname.startsWith('/mon-an') ? 'nav-active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Món ăn
            </Link>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleSectionNav(e, '#contact')}>Liên hệ</a>
          </li>
        </ul>

        <button
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
