# M.Space - Landing Page

Landing page chuyên nghiệp cho công ty M.Space - cung cấp dịch vụ ăn uống, thầu căn tin văn phòng và nguyên liệu nấu ăn.

## 🌟 Tính năng

- ✅ Design hiện đại, responsive trên mọi thiết bị
- ✅ Navigation menu với smooth scroll
- ✅ Hero section ấn tượng
- ✅ Giới thiệu về công ty và dịch vụ
- ✅ 3 dịch vụ chính: Thầu căn tin, Cung cấp suất ăn, Set nguyên liệu
- ✅ Section tính năng và lợi ích
- ✅ Form liên hệ
- ✅ Footer với thông tin đầy đủ
- ✅ Animations và transitions mượt mà

## 🚀 Cài đặt và chạy local

1. Clone repository hoặc tải xuống project
2. Mở file `index.html` trong trình duyệt
3. Hoặc sử dụng local server:

```bash
# Sử dụng Python
python -m http.server 8000

# Hoặc sử dụng Node.js (nếu có http-server)
npx http-server
```

Sau đó truy cập `http://localhost:8000`

## 📦 Cấu trúc project

```
web-mspace/
├── index.html          # File HTML chính
├── styles.css          # File CSS styling
├── script.js           # File JavaScript cho interactivity
├── README.md           # File hướng dẫn
└── .gitignore          # Git ignore file
```

## 🌐 Deploy lên GitHub Pages

### Cách 1: Sử dụng GitHub Actions (Khuyến nghị)

1. Push code lên GitHub repository
2. Vào Settings > Pages
3. Chọn Source: "Deploy from a branch"
4. Chọn branch `main` và folder `/ (root)`
5. Save và đợi vài phút để GitHub Pages deploy

### Cách 2: Sử dụng gh-pages branch

```bash
# Tạo branch gh-pages
git checkout -b gh-pages

# Push lên GitHub
git push origin gh-pages
```

Sau đó vào Settings > Pages và chọn branch `gh-pages`

### URL sau khi deploy

Sau khi deploy thành công, website sẽ có URL dạng:
```
https://[username].github.io/web-mspace/
```

## 🎨 Customization

### Thay đổi màu sắc

Chỉnh sửa các biến CSS trong file `styles.css`:

```css
:root {
    --primary-color: #4CAF50;      /* Màu chính */
    --primary-dark: #45a049;       /* Màu chính đậm */
    --primary-light: #81C784;      /* Màu chính nhạt */
    --secondary-color: #2E7D32;     /* Màu phụ */
}
```

### Thay đổi nội dung

Chỉnh sửa trực tiếp trong file `index.html`:
- Thông tin công ty
- Dịch vụ
- Thông tin liên hệ
- Logo và branding

## 📱 Responsive Design

Website được thiết kế responsive và hoạt động tốt trên:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔧 Technologies

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)

## 📝 License

© 2024 M.Space. All rights reserved.

## 📧 Liên hệ

- Email: info@mspace.vn
- Điện thoại: 1900 1234
- Địa chỉ: 123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh

---

Made with ❤️ for M.Space

