import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { setLunchMenus } from "../data/setLunch";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState(false);

  const menu = setLunchMenus.find((m) => m.id === id);

  if (!menu) {
    return (
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h2>Không tìm thấy sản phẩm</h2>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/san-pham")}
        >
          ← Quay lại
        </button>
      </div>
    );
  }

  // Sibling menus for "other products" strip
  const others = setLunchMenus.filter((m) => m.id !== id).slice(0, 3);

  return (
    <div className="product-detail-page">
      {/* Back + breadcrumb */}
      <div className="product-detail-breadcrumb">
        <div className="container">
          <button
            className="product-back-btn"
            onClick={() => navigate("/san-pham")}
          >
            ← Quay lại Sản phẩm
          </button>
        </div>
      </div>

      <div className="container">
        <div className="product-detail-layout">
          {/* Left — Menu image */}
          <div className="product-detail-img-col">
            <div
              className="product-detail-img-card"
              onClick={() => setLightbox(true)}
            >
              <img
                src={menu.image}
                alt={menu.name}
                className="product-detail-img"
              />
              <div className="product-detail-img-zoom">
                🔍 Click để phóng to
              </div>
            </div>
            <p className="product-detail-img-note">
              * Hình ảnh menu mẫu thực tế từ M.SPACE
            </p>
          </div>

          {/* Right — Info */}
          <div className="product-detail-info-col">
            <span
              className="product-detail-tag"
              style={{ background: menu.tagColor }}
            >
              {menu.tag}
            </span>
            <h1 className="product-detail-name">{menu.name}</h1>
            <p className="product-detail-desc">{menu.description}</p>

            <div className="product-detail-price-box">
              <div className="product-detail-price">
                <span className="product-detail-price-amount">
                  {menu.price}
                </span>
                <span className="product-detail-price-unit">
                  đ / {menu.pax} pax
                </span>
              </div>
              <p className="product-detail-price-note">
                Đã bao gồm cơm trắng và trái cây (nếu có)
              </p>
            </div>

            {/* Menu items */}
            <div className="product-detail-menu">
              <h3 className="product-detail-menu-title">Thực đơn bao gồm</h3>
              <ul className="product-detail-menu-list">
                {menu.items.map((item, i) => (
                  <li key={i} className="product-detail-menu-item">
                    <span className="menu-item-dot" />
                    <div>
                      <span className="menu-item-vi">{item.vi}</span>
                      {item.en && (
                        <span className="menu-item-en">{item.en}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              {menu.note && (
                <div className="product-detail-note">
                  <span>📌</span> {menu.note}
                </div>
              )}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="btn btn-primary product-detail-cta"
              onClick={(e) => {
                e.preventDefault();
                navigate("/#contact");
              }}
            >
              Đặt hàng ngay
            </a>
            <button
              className="btn btn-secondary product-detail-cta-sec"
              onClick={() => navigate("/san-pham")}
            >
              Xem set khác
            </button>
          </div>
        </div>

        {/* Other products */}
        {others.length > 0 && (
          <div className="product-detail-others">
            <h2 className="product-detail-others-title">Các Set Lunch khác</h2>
            <div className="product-detail-others-grid">
              {others.map((m) => (
                <button
                  key={m.id}
                  className="product-other-card"
                  onClick={() => navigate(`/san-pham/${m.id}`)}
                >
                  <img
                    src={m.image}
                    alt={m.name}
                    className="product-other-img"
                  />
                  <div className="product-other-body">
                    <p className="product-other-name">{m.name}</p>
                    <p className="product-other-price">{m.price}đ</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="gallery-lightbox" onClick={() => setLightbox(false)}>
          <button className="lightbox-close" onClick={() => setLightbox(false)}>
            ✕
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={menu.image} alt={menu.name} className="lightbox-img" />
            <p className="lightbox-caption">
              {menu.name} — {menu.price}đ / {menu.pax} pax
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
