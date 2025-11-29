import React from 'react'

const Hero = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const Logo = ({ size = 80 }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 30L15 10L20 25L25 15L30 30" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-logo">
            <Logo size={80} />
          </div>
          <h1 className="hero-title">M.SPACE</h1>
          <p className="hero-subtitle">Giải pháp ăn uống chuyên nghiệp cho văn phòng và siêu thị</p>
          <p className="hero-description">
            Cung cấp dịch vụ thầu căn tin, suất ăn chất lượng và nguyên liệu nấu ăn tươi ngon
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary" onClick={(e) => handleSmoothScroll(e, '#contact')}>
              Liên hệ ngay
            </a>
            <a href="#services" className="btn btn-secondary" onClick={(e) => handleSmoothScroll(e, '#services')}>
              Tìm hiểu thêm
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

