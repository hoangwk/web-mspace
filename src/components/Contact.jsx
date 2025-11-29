import React, { useState } from 'react'
import { useInView } from '../hooks/useInView'

const ContactItem = ({ icon, title, content }) => {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <div 
      className="contact-item"
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
      }}
    >
      <div className="contact-icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    alert(
      'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.\n\nThông tin đã gửi:\n' +
      'Họ tên: ' + formData.name + '\n' +
      'Email: ' + formData.email + '\n' +
      'Điện thoại: ' + formData.phone + '\n' +
      'Dịch vụ: ' + formData.service + '\n' +
      'Tin nhắn: ' + formData.message
    )

    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Liên hệ với chúng tôi</h2>
          <p className="section-subtitle">Hãy để chúng tôi phục vụ bạn</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <ContactItem 
              icon="📧"
              title="Email"
              content="info@mspace.vn"
            />
            <ContactItem 
              icon="📞"
              title="Điện thoại"
              content="1900 1234"
            />
            <ContactItem 
              icon="📍"
              title="Địa chỉ"
              content="123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh"
            />
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Họ và tên *"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Số điện thoại *"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Chọn dịch vụ quan tâm *</option>
                <option value="canteen">Thầu căn tin văn phòng</option>
                <option value="meals">Cung cấp suất ăn</option>
                <option value="ingredients">Set nguyên liệu nấu ăn</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Tin nhắn của bạn"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Gửi yêu cầu
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

