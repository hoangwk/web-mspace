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
          <h2 className="section-title">Về M.SPACE</h2>
          <p className="section-subtitle">
            Đối tác tin cậy cho giải pháp ẩm thực chuyên nghiệp
          </p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              Với chúng tôi, một bữa ăn ngon không chỉ mang lại giá trị dinh dưỡng cho cơ thể
              mà còn góp phần tạo nên nguồn năng lượng tích cực cho tinh thần.
            </p>
            <p>
              Tại M.SPACE, chúng tôi tập trung vào chất lượng trong từng khâu, từ lựa chọn nguyên liệu
              đầu vào đến quy trình chế biến và đóng gói, nhằm đảm bảo mang đến những bữa ăn ngon miệng,
              an toàn và đáng tin cậy cho khách hàng.
            </p>
            <p>
              Với nhiều năm kinh nghiệm trong lĩnh vực ẩm thực, chúng tôi hiểu rằng ẩm thực không chỉ là
              món ăn mà còn là một phần của văn hóa. Vì vậy, M.SPACE luôn lắng nghe, không ngừng cải tiến
              và tôn trọng những khác biệt trong văn hóa ẩm thực của từng vùng miền và cộng đồng. Nhờ đó,
              chúng tôi có thể mang đến những giải pháp ẩm thực phù hợp và đáp ứng tốt nhất nhu cầu của khách hàng.
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
