import React from 'react'
import { Link } from 'react-router-dom'
import { dishes } from '../data/dishes'

const DishListPage = () => {
  return (
    <div className="dish-list-page">
      <div className="dish-list-hero">
        <div className="container">
          <h1 className="dish-list-title">Thực đơn M.SPACE</h1>
          <p className="dish-list-subtitle">Chế biến tươi mỗi ngày — đảm bảo dinh dưỡng và hương vị</p>
        </div>
      </div>

      <div className="container">
        <div className="dish-list-grid">
          {dishes.map((dish) => (
            <Link
              key={dish.id}
              to={`/mon-an/${dish.id}`}
              className="dish-list-card"
            >
              <div className="dish-list-card-img-wrap">
                <img src={dish.image} alt={dish.name} className="dish-list-card-img" />
                <div className="dish-list-card-hover">Xem chi tiết →</div>
              </div>
              <div className="dish-list-card-body">
                <div className="dish-categorys">
                  <span className="dish-category">{dish.category}</span>
                </div>
                <h3 className="dish-list-card-name">{dish.name}</h3>
                <p className="dish-list-card-desc">{dish.description}</p>
                <div className="dish-tags">
                  {dish.tags.map((tag, i) => (
                    <span key={i} className="dish-tag">{tag}</span>
                  ))}
                </div>
                <div className="dish-list-card-meta">
                  {dish.details.calories && <span>🔥 {dish.details.calories}</span>}
                  {dish.details.prepTime && <span>⏱️ {dish.details.prepTime}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DishListPage
