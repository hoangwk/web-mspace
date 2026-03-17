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
      icon: '🏢',
      title: 'Officetaurant – Mô hình nhà hàng tại văn phòng',
      description: 'Officetaurant là giải pháp giúp doanh nghiệp tổ chức bữa ăn ngay tại văn phòng với chất lượng như nhà hàng, góp phần nâng cao trải nghiệm bữa ăn và phúc lợi cho nhân viên, đồng thời tối ưu chi phí và vận hành cho doanh nghiệp.',
      features: [
        '✓ Chất lượng món ăn theo tiêu chuẩn nhà hàng',
        '✓ Đội ngũ phục vụ được đào tạo chuyên nghiệp',
        '✓ Thực đơn đa dạng với nhiều phong cách ẩm thực từ Á đến Âu',
        '✓ Quy trình vận hành được tối ưu cho môi trường văn phòng'
      ]
    },
    {
      icon: '🏠',
      title: 'Hometaurant – Bữa ăn tiện lợi cho gia đình',
      description: 'Hometaurant mang đến giải pháp bữa ăn gia đình tiện lợi, dinh dưỡng và phù hợp với nhịp sống hiện đại.',
      features: [
        '✓ Tiện lợi, giúp tiết kiệm thời gian',
        '✓ Dinh dưỡng cân bằng và hợp lý',
        '✓ Quy trình chế biến và đóng gói đảm bảo an toàn thực phẩm'
      ]
    },
    {
      icon: '📊',
      title: 'Tư vấn vận hành F&B',
      description: 'Bên cạnh dịch vụ bữa ăn, M.SPACE còn cung cấp giải pháp tư vấn và tối ưu vận hành cho các mô hình F&B vừa và nhỏ. Với kinh nghiệm vận hành bếp trung tâm, hệ thống nhà cung cấp và quy trình chế biến chuyên nghiệp, chúng tôi hỗ trợ các doanh nghiệp F&B tối ưu chi phí vận hành, nâng cao hiệu quả hoạt động và phát triển bền vững.',
      features: [
        '✓ Tối ưu chi phí vận hành',
        '✓ Nâng cao hiệu quả hoạt động',
        '✓ Phát triển bền vững'
      ]
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Dịch vụ của M.SPACE</h2>
          <p className="section-subtitle">M.SPACE cung cấp các giải pháp ẩm thực chuyên nghiệp cho doanh nghiệp và gia đình. Trong đó, Officetaurant là dịch vụ trọng tâm, mang đến mô hình bữa ăn chất lượng ngay tại nơi làm việc.</p>
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
