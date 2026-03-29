import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dishes } from "../data/dishes";

const DishDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dish = dishes.find((d) => d.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!dish) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <h2>Không tìm thấy món ăn</h2>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          ← Quay về trang chủ
        </button>
      </div>
    );
  }

  return (
    <div className="dish-page">
      {/* Hero image banner */}
      <div className="dish-page-hero">
        <img src={dish.image} alt={dish.name} className="dish-page-hero-img" />
        <div className="dish-page-hero-overlay">
          <div className="container">
            <button
              className="dish-page-back"
              onClick={() => navigate("/mon-an")}
            >
              ← Quay lại thực đơn
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container">
        <div className="dish-page-content">
          {/* Left: main info */}
          <div className="dish-page-main">
            <div className="dish-category dish-page-category">
              {dish.category}
            </div>
            <h1 className="dish-page-title">{dish.name}</h1>

            <div className="dish-tags" style={{ marginBottom: "1.5rem" }}>
              {dish.tags.map((tag, i) => (
                <span key={i} className="dish-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="dish-page-divider" />

            <div className="dish-page-section">
              <h3>Mô tả</h3>
              <p>{dish.description}</p>
            </div>

            <div className="dish-page-section">
              <h3>Thành phần & đặc điểm</h3>
              <ul className="dish-page-ingredients">
                {dish.details.ingredients.map((item, i) => (
                  <li key={i}>
                    <span className="ingredient-dot">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: sidebar */}
          <div className="dish-page-sidebar">
            <div className="dish-page-info-card">
              <h4>Thông tin dinh dưỡng</h4>
              <div className="dish-page-info-grid">
                {dish.details.calories && (
                  <div className="dish-info-badge">
                    <span className="info-badge-icon">🔥</span>
                    <span className="info-badge-label">Calo</span>
                    <span className="info-badge-value">
                      {dish.details.calories}
                    </span>
                  </div>
                )}
                {dish.details.servingSize && (
                  <div className="dish-info-badge">
                    <span className="info-badge-icon">🍽️</span>
                    <span className="info-badge-label">Khẩu phần</span>
                    <span className="info-badge-value">
                      {dish.details.servingSize}
                    </span>
                  </div>
                )}
                {dish.details.prepTime && (
                  <div className="dish-info-badge">
                    <span className="info-badge-icon">⏱️</span>
                    <span className="info-badge-label">Thời gian</span>
                    <span className="info-badge-value">
                      {dish.details.prepTime}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="dish-page-cta-card">
              <h4>Quan tâm món này?</h4>
              <p>
                Liên hệ với M.SPACE để đặt thực đơn cho văn phòng hoặc gia đình
                của bạn.
              </p>
              <button
                className="btn btn-primary"
                style={{ width: "100%", marginTop: "1rem" }}
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                }}
              >
                Đặt ngay món này
              </button>
              <button
                className="btn btn-secondary"
                style={{
                  width: "100%",
                  marginTop: "0.75rem",
                  borderColor: "var(--primary-color)",
                }}
                onClick={() => navigate("/mon-an")}
              >
                ← Xem thêm món khác
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishDetailPage;
