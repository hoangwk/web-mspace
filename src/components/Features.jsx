import React from 'react'
import { useInView } from '../hooks/useInView'

const FeatureItem = ({ icon, title, description }) => {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <div 
      className="feature-item"
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
      }}
    >
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

const Features = () => {
  const features = [
    {
      icon: '✨',
      title: 'Chất lượng cao',
      description: 'Nguyên liệu tươi ngon, chế biến theo tiêu chuẩn vệ sinh an toàn thực phẩm'
    },
    {
      icon: '⚡',
      title: 'Phục vụ nhanh',
      description: 'Giao hàng đúng giờ, phục vụ nhanh chóng, không làm gián đoạn công việc'
    },
    {
      icon: '💰',
      title: 'Giá cả hợp lý',
      description: 'Mức giá cạnh tranh, phù hợp với ngân sách của doanh nghiệp và cá nhân'
    },
    {
      icon: '🎯',
      title: 'Linh hoạt',
      description: 'Đặt hàng linh hoạt, tùy chỉnh theo nhu cầu và số lượng'
    },
    {
      icon: '👨‍🍳',
      title: 'Đội ngũ chuyên nghiệp',
      description: 'Đầu bếp và nhân viên được đào tạo chuyên nghiệp, giàu kinh nghiệm'
    },
    {
      icon: '🌱',
      title: 'Bền vững',
      description: 'Cam kết sử dụng nguyên liệu bền vững, thân thiện với môi trường'
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Tại sao chọn M.Space?</h2>
          <p className="section-subtitle">Những lợi ích vượt trội chúng tôi mang lại</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

