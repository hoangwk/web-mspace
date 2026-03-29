import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { setLunchMenus } from '../data/setLunch'

const ProductsPage = () => {
  const [filter, setFilter] = useState('all')

  const tags = ['all', ...new Set(setLunchMenus.map((s) => s.tag))]
  const filtered = filter === 'all' ? setLunchMenus : setLunchMenus.filter((s) => s.tag === filter)

  return (
    <div className="products-page">
      {/* Hero */}
      <div className="products-hero">
        <div className="products-hero-overlay" />
        <div className="container products-hero-inner">
          <div className="products-hero-left">
            <span className="products-hero-eyebrow">✦ Saigon Chill × M.SPACE</span>
            <h1 className="products-hero-title">Set Lunch<br />Văn Phòng</h1>
            <p className="products-hero-sub">
              Thực đơn đa dạng, nấu tươi mỗi ngày — giao tận nơi cho 10+ người
            </p>
            <div className="products-hero-badges">
              <span className="products-hero-badge">🍱 6 gói set lunch</span>
              <span className="products-hero-badge">👥 10 pax / set</span>
              <span className="products-hero-badge">✅ VAT included</span>
            </div>
          </div>
          <div className="products-hero-right">
            <div className="products-hero-price-card">
              <p className="phpc-label">Từ chỉ</p>
              <p className="phpc-price">1.550.000<span>đ</span></p>
              <p className="phpc-unit">/ SET · 10 pax</p>
              <div className="phpc-divider" />
              <p className="phpc-note">Đặt trước để nhận<br/>thực đơn tùy chỉnh</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Filter chips */}
        <div className="products-filters">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`products-filter-chip ${filter === tag ? 'active' : ''}`}
              onClick={() => setFilter(tag)}
            >
              {tag === 'all' ? 'Tất cả' : tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="products-grid">
          {filtered.map((menu) => (
            <Link key={menu.id} to={`/san-pham/${menu.id}`} className="product-card">
              <div className="product-card-img-wrap">
                <img src={menu.image} alt={menu.name} className="product-card-img" />
                <span
                  className="product-card-tag"
                  style={{ background: menu.tagColor }}
                >
                  {menu.tag}
                </span>
              </div>
              <div className="product-card-body">
                <h3 className="product-card-name">{menu.name}</h3>
                <p className="product-card-highlight">✦ {menu.highlight}</p>
                <p className="product-card-desc">{menu.description}</p>
                <div className="product-card-footer">
                  <div className="product-card-price">
                    <span className="product-price-amount">{menu.price}</span>
                    <span className="product-price-unit">đ / {menu.pax} pax</span>
                  </div>
                  <span className="product-card-cta">Xem chi tiết →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
