import React, { useEffect, useRef, useState } from "react";

const StatItem = ({ number, label }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter(number);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [number, hasAnimated]);

  const animateCounter = (target) => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const updateCounter = () => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    updateCounter();
  };

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">{count}+</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Về M.Space</h2>
          <p className="section-subtitle">
            Đối tác tin cậy cho dịch vụ ăn uống chuyên nghiệp
          </p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              M.Space là công ty chuyên cung cấp các giải pháp ăn uống toàn diện
              cho doanh nghiệp và khách hàng cá nhân, căn tin. Với nhiều năm
              kinh nghiệm trong ngành, chúng tôi tự hào mang đến những dịch vụ
              chất lượng cao và đáng tin cậy.
            </p>
            <p>
              Chúng tôi hiểu rằng bữa ăn ngon không chỉ là nhu cầu thiết yếu mà
              còn là yếu tố quan trọng tạo nên sự hài lòng và năng suất làm
              việc. Vì vậy, M.Space cam kết cung cấp những giải pháp tốt nhất
              với tiêu chuẩn vệ sinh an toàn thực phẩm cao nhất.
            </p>
          </div>
          <div className="about-stats">
            <StatItem number={500} label="Khách hàng hài lòng" />
            <StatItem number={50} label="Tòa nhà đối tác" />
            <StatItem number={1000} label="Suất ăn mỗi ngày" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
