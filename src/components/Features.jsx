import React from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { dishes } from '../data/dishes'

const DishCard = ({ dish }) => {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <Link
      to={`/mon-an/${dish.id}`}
      className="feature-item dish-card"
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        padding: 0,
        overflow: 'hidden',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'inherit',
        display: 'block'
      }}
    >
      <div className="dish-image-wrap">
        <img src={dish.image} alt={dish.name} className="dish-image" />
        <div className="dish-card-view-hint">Xem chi tiết →</div>
      </div>
      <div className="dish-body">
        <div className="dish-category">{dish.category}</div>
        <h3 className="dish-name">{dish.name}</h3>
        <p className="dish-desc">{dish.description}</p>
        <div className="dish-tags">
          {dish.tags.map((tag, i) => (
            <span key={i} className="dish-tag">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Thực đơn nổi bật</h2>
          <p className="section-subtitle">Những món ăn được yêu thích nhất từ bếp M.SPACE — chế biến tươi mỗi ngày, đảm bảo dinh dưỡng và hương vị</p>
        </div>
        <div className="features-grid">
          {dishes.map((dish, index) => (
            <DishCard key={index} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
