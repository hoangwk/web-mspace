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
    <img src="/logo.svg" alt="M.SPACE" style={{ width: size, height: size, objectFit: 'contain' }} />
  )

  return (
    <section id="home" className="hero">
      <div className="hero-background" style={{
        backgroundImage: 'url(/images/hero_background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.35
      }}></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-logo">
            <Logo size={80} />
          </div>
          <h1 className="hero-title">M.SPACE</h1>
          <p className="hero-subtitle">Dịch vụ bữa ăn tiện lợi (Ready Meal Service) cho doanh nghiệp và gia đình</p>
          <p className="hero-description">
            M.SPACE cung cấp các giải pháp ẩm thực tiện lợi, chất lượng và an toàn.
            Với mô hình <strong>Officetaurant</strong>, chúng tôi giúp doanh nghiệp triển khai bữa ăn ngay tại văn phòng một cách chuyên nghiệp.
            Đồng thời, dịch vụ <strong>Hometaurant</strong> mang đến những bữa ăn gia đình tiện nghi, dinh dưỡng và phù hợp với nhịp sống hiện đại.
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
