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
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 30L15 10L20 25L25 15L30 30" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
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
            <p>Giải pháp ăn uống chuyên nghiệp cho văn phòng và siêu thị</p>
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
              <li>Thầu căn tin văn phòng</li>
              <li>Cung cấp suất ăn</li>
              <li>Set nguyên liệu nấu ăn</li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Thông tin liên hệ</h4>
            <p>📧 info@mspace.vn</p>
            <p>📞 1900 1234</p>
            <p>📍 123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</p>
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

