import React, { useState, useEffect, useCallback } from 'react'

const slides = [
  { src: '/images/gallery/slide-1.jpg', caption: 'Quầy ăn M.SPACE — mặt tiền' },
  { src: '/images/gallery/slide-2.jpg', caption: 'Không gian phục vụ' },
  { src: '/images/gallery/slide-3.jpg', caption: 'Thiết kế nội thất hiện đại' },
  { src: '/images/gallery/slide-4.jpg', caption: 'Khu vực bày trí món ăn' },
  { src: '/images/gallery/slide-5.jpg', caption: 'Góc nhìn tổng thể' },
  { src: '/images/gallery/slide-6.jpg', caption: 'Chi tiết quầy phục vụ' },
  { src: '/images/gallery/slide-7.jpg', caption: 'Không gian dành cho khách' },
]

const Gallery = () => {
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState(null) // index or null
  const [isAnimating, setIsAnimating] = useState(false)

  const goTo = useCallback((index) => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 350)
    setCurrent((index + slides.length) % slides.length)
  }, [isAnimating])

  const prev = () => goTo(current - 1)
  const next = () => goTo(current + 1)

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 4500)
    return () => clearInterval(timer)
  }, [current, goTo])

  // Keyboard nav for lightbox
  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setLightbox((l) => (l + 1) % slides.length)
      if (e.key === 'ArrowLeft') setLightbox((l) => (l - 1 + slides.length) % slides.length)
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Không gian M.SPACE</h2>
          <p className="section-subtitle">Hình ảnh 3D thiết kế quầy ăn hiện đại — tiện nghi và chuyên nghiệp</p>
        </div>

        {/* Main carousel */}
        <div className="gallery-carousel">
          <button className="gallery-arrow gallery-arrow-prev" onClick={prev} aria-label="Trước">
            ‹
          </button>

          <div className="gallery-stage" onClick={() => setLightbox(current)}>
            <img
              key={current}
              src={slides[current].src}
              alt={slides[current].caption}
              className={`gallery-main-img ${isAnimating ? 'gallery-img-fade' : ''}`}
            />
            <div className="gallery-caption">{slides[current].caption}</div>
            <div className="gallery-zoom-hint">🔍 Click để xem lớn</div>
          </div>

          <button className="gallery-arrow gallery-arrow-next" onClick={next} aria-label="Tiếp">
            ›
          </button>
        </div>

        {/* Dot indicators */}
        <div className="gallery-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`gallery-dot ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Thumbnails strip */}
        <div className="gallery-thumbs">
          {slides.map((slide, i) => (
            <button
              key={i}
              className={`gallery-thumb ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
            >
              <img src={slide.src} alt={slide.caption} />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <button className="lightbox-arrow lightbox-prev" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + slides.length) % slides.length) }}>‹</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={slides[lightbox].src} alt={slides[lightbox].caption} className="lightbox-img" />
            <p className="lightbox-caption">{slides[lightbox].caption}</p>
          </div>
          <button className="lightbox-arrow lightbox-next" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % slides.length) }}>›</button>
        </div>
      )}
    </section>
  )
}

export default Gallery
