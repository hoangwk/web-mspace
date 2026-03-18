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

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyGSxsuuxlhH1NfXrLiPjPEiBTbX5OxuHKiWEHLYOSj0ZiTGVfTyI2ibSB4qJcM1YE7/exec'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.')
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    } catch (error) {
      alert('Có lỗi xảy ra. Vui lòng thử lại!')
    } finally {
      setIsSubmitting(false)
    }
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
              icon="📞"
              title="Điện thoại"
              content="093 823 95 66"
            />
            <ContactItem 
              icon="📍"
              title="Địa chỉ"
              content="Thủ Đức, TP. Hồ Chí Minh"
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
                <option value="officetaurant">Mô hình Officetaurant</option>
                <option value="hometaurant">Dịch vụ Hometaurant</option>
                <option value="fnb-consulting">Dịch vụ tư vấn vận hành F&B</option>
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
            <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
              {isSubmitting ? 'Đang gửi...' : 'Gửi yêu cầu'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

