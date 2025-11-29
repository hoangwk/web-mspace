import React from 'react'
import { useInView } from '../hooks/useInView'

const ServiceCard = ({ icon, title, description, features }) => {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <div 
      className="service-card"
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
      }}
    >
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <ul className="service-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  )
}

const Services = () => {
  const services = [
    {
      icon: '🍽️',
      title: 'Thầu căn tin văn phòng',
      description: 'Quản lý và vận hành căn tin trong tòa nhà văn phòng với đầy đủ dịch vụ ăn uống, từ bữa trưa đến đồ uống, đảm bảo tiện lợi và chất lượng cho nhân viên.',
      features: [
        '✓ Menu đa dạng, thay đổi hàng ngày',
        '✓ Vệ sinh an toàn thực phẩm',
        '✓ Phục vụ nhanh chóng, tiện lợi',
        '✓ Giá cả hợp lý'
      ]
    },
    {
      icon: '🥘',
      title: 'Cung cấp suất ăn',
      description: 'Cung cấp các suất ăn trưa chất lượng cao cho doanh nghiệp, được chế biến tươi ngon mỗi ngày với đầy đủ dinh dưỡng và hương vị đậm đà.',
      features: [
        '✓ Đặt hàng linh hoạt theo nhu cầu',
        '✓ Giao hàng tận nơi',
        '✓ Đảm bảo dinh dưỡng cân bằng',
        '✓ Đóng gói vệ sinh, an toàn'
      ]
    },
    {
      icon: '🛒',
      title: 'Set nguyên liệu nấu ăn',
      description: 'Cung cấp các set nguyên liệu đã được chuẩn bị sẵn để nấu các món ăn, bán tại siêu thị, giúp khách hàng tiết kiệm thời gian và dễ dàng chế biến.',
      features: [
        '✓ Nguyên liệu tươi sống, chất lượng',
        '✓ Đã được sơ chế sẵn',
        '✓ Kèm hướng dẫn nấu ăn',
        '✓ Đa dạng món ăn'
      ]
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Dịch vụ của chúng tôi</h2>
          <p className="section-subtitle">Ba giải pháp chính cho mọi nhu cầu ăn uống</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

