import React, { useEffect } from 'react'

const DishDetail = ({ dish, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!dish) return null

  return (
    <div className="dish-modal-overlay" onClick={onClose}>
      <div className="dish-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="dish-modal-close" onClick={onClose} aria-label="Đóng">✕</button>

        {/* Hero image */}
        <div className="dish-modal-image-wrap">
          <img src={dish.image} alt={dish.name} className="dish-modal-image" />
          <div className="dish-modal-image-overlay">
            <span className="dish-modal-category">{dish.category}</span>
          </div>
        </div>

        {/* Content */}
        <div className="dish-modal-body">
          <h2 className="dish-modal-title">{dish.name}</h2>

          <div className="dish-modal-tags">
            {dish.tags.map((tag, i) => (
              <span key={i} className="dish-tag">{tag}</span>
            ))}
          </div>

          <div className="dish-modal-divider" />

          <div className="dish-modal-section">
            <h4>Mô tả</h4>
            <p>{dish.description}</p>
          </div>

          <div className="dish-modal-section">
            <h4>Thành phần & đặc điểm</h4>
            <ul className="dish-modal-ingredients">
              {dish.details.ingredients.map((item, i) => (
                <li key={i}>
                  <span className="ingredient-dot">●</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="dish-modal-info-row">
            {dish.details.calories && (
              <div className="dish-info-badge">
                <span className="info-badge-icon">🔥</span>
                <span className="info-badge-label">Calo</span>
                <span className="info-badge-value">{dish.details.calories}</span>
              </div>
            )}
            {dish.details.servingSize && (
              <div className="dish-info-badge">
                <span className="info-badge-icon">🍽️</span>
                <span className="info-badge-label">Khẩu phần</span>
                <span className="info-badge-value">{dish.details.servingSize}</span>
              </div>
            )}
            {dish.details.prepTime && (
              <div className="dish-info-badge">
                <span className="info-badge-icon">⏱️</span>
                <span className="info-badge-label">Thời gian</span>
                <span className="info-badge-value">{dish.details.prepTime}</span>
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="btn btn-primary dish-modal-cta"
            onClick={onClose}
          >
            Đặt ngay món này
          </a>
        </div>
      </div>
    </div>
  )
}

export default DishDetail
