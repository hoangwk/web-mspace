import React from 'react'
import { useInView } from '../hooks/useInView'

const DishCard = ({ image, name, category, description, tags }) => {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <div
      className="feature-item dish-card"
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        padding: 0,
        overflow: 'hidden'
      }}
    >
      <div className="dish-image-wrap">
        <img src={image} alt={name} className="dish-image" />
      </div>
      <div className="dish-body">
        <div className="dish-category">{category}</div>
        <h3 className="dish-name">{name}</h3>
        <p className="dish-desc">{description}</p>
        <div className="dish-tags">
          {tags.map((tag, i) => (
            <span key={i} className="dish-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

const Features = () => {
  const dishes = [
    {
      image: '/images/dish_com_ga.png',
      name: 'Cơm gà xối mỡ',
      category: 'Món Á',
      description: 'Cơm trắng dẻo thơm, gà chiên vàng giòn xối mỡ nóng, ăn kèm dưa leo và nước chấm đặc biệt.',
      tags: ['Phổ biến', 'Văn phòng', 'Gia đình']
    },
    {
      image: '/images/dish_bo_luc_lac.png',
      name: 'Bò lúc lắc sốt tiêu đen',
      category: 'Món Á – Âu',
      description: 'Thịt bò Mỹ hảo hạng xào tỏi bơ, sốt tiêu đen đậm đà, dùng kèm cơm trắng hoặc khoai tây chiên.',
      tags: ['Cao cấp', 'Đặc biệt']
    },
    {
      image: '/images/dish_bun_bo_hue.png',
      name: 'Bún bò Huế',
      category: 'Món Việt',
      description: 'Nước dùng hầm xương đậm vị, tôm cua chắc thịt, rau sống tươi mát — đặc sản miền Trung mỗi ngày.',
      tags: ['Truyền thống', 'Dinh dưỡng']
    },
    {
      image: '/images/dish_salad_ga.png',
      name: 'Salad ức gà quinoa',
      category: 'Healthy',
      description: 'Ức gà áp chảo mềm mọng, quinoa giàu đạm, rau xanh tươi, sốt mè rang thanh nhẹ.',
      tags: ['Healthy', 'Ít calo', 'Dinh dưỡng']
    },
    {
      image: '/images/dish_canh_chua.png',
      name: 'Canh chua cá lóc',
      category: 'Món Việt',
      description: 'Cá lóc đồng tươi, nước dùng chua thanh từ me, thơm, cà chua kết hợp giá và rau om.',
      tags: ['Truyền thống', 'Gia đình']
    },
    {
      image: '/images/dish_ca_ri_ga.png',
      name: 'Cà ri gà coconut',
      category: 'Món Á',
      description: 'Gà ta hầm mềm trong nước cốt dừa béo ngậy, gia vị cà ri thơm nồng, dùng kèm bánh mì hoặc cơm.',
      tags: ['Phổ biến', 'Đặc biệt']
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Thực đơn nổi bật</h2>
          <p className="section-subtitle">Những món ăn được yêu thích nhất từ bếp M.SPACE — chế biến tươi mỗi ngày, đảm bảo dinh dưỡng và hương vị</p>
        </div>
        <div className="features-grid">
          {dishes.map((dish, index) => (
            <DishCard key={index} {...dish} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
