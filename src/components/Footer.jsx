import React from 'react'

const Footer = () => {
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

  const Logo = ({ size = 40 }) => (
    <img src="/logo.svg" alt="M.SPACE" style={{ width: size, height: size, objectFit: 'contain' }} />
  )

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <Logo size={40} />
              <span>M.SPACE</span>
            </div>
            <p>Dịch vụ bữa ăn tiện lợi (Ready Meal Service) cho doanh nghiệp và gia đình</p>
          </div>
          <div className="footer-links">
            <h4>Liên kết nhanh</h4>
            <ul>
              <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Trang chủ</a></li>
              <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>Về chúng tôi</a></li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Dịch vụ</a></li>
              <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Liên hệ</a></li>
            </ul>
          </div>
          <div className="footer-services">
            <h4>Dịch vụ</h4>
            <ul>
              <li>Officetaurant</li>
              <li>Hometaurant</li>
              <li>Tư vấn vận hành F&B</li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Thông tin liên hệ</h4>
            <p>📞 093 823 95 66</p>
            <p>📍 Thủ Đức, TP. Hồ Chí Minh</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 M.Space. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

