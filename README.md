# M.Space - Landing Page (React)

Landing page chuyên nghiệp cho công ty M.Space được xây dựng bằng React.js và Vite.

## 🌟 Tính năng

- ✅ React.js với Vite (build tool nhanh)
- ✅ Design hiện đại, responsive trên mọi thiết bị
- ✅ Component-based architecture
- ✅ Custom hooks (useInView cho animations)
- ✅ Smooth scroll navigation
- ✅ Form handling với React state
- ✅ Intersection Observer API cho animations
- ✅ Counter animations cho statistics

## 🚀 Cài đặt và chạy local

### Yêu cầu
- Node.js 16+ và npm/yarn/pnpm

### Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview production build
npm run preview
```

Sau khi chạy `npm run dev`, truy cập `http://localhost:5173`

## 📦 Cấu trúc project

```
web-mspace/
├── public/                 # Static files
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Features.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/              # Custom hooks
│   │   └── useInView.js
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Entry point
│   └── styles.css          # Global styles
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── package.json
└── README.md
```

## 🌐 Deploy lên GitHub Pages

### Cách 1: Sử dụng GitHub Actions (Khuyến nghị)

1. Tạo file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Push code lên GitHub
3. Vào Settings > Pages
4. Chọn Source: "GitHub Actions"
5. Website sẽ tự động deploy sau mỗi lần push

### Cách 2: Deploy thủ công

```bash
# Build project
npm run build

# Deploy dist folder lên gh-pages branch
# (Sử dụng tool như gh-pages hoặc deploy thủ công)
npx gh-pages -d dist
```

### Cấu hình base path

File `vite.config.js` đã được cấu hình với `base: '/web-mspace/'`. 
Nếu repository của bạn có tên khác, hãy cập nhật trong `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',  // Thay đổi tên repo ở đây
})
```

### URL sau khi deploy

Sau khi deploy thành công, website sẽ có URL:
```
https://[username].github.io/web-mspace/
```

## 🎨 Customization

### Thay đổi màu sắc

Chỉnh sửa các biến CSS trong file `src/styles.css`:

```css
:root {
    --primary-color: #4CAF50;      /* Màu chính */
    --primary-dark: #45a049;       /* Màu chính đậm */
    --primary-light: #81C784;      /* Màu chính nhạt */
    --secondary-color: #2E7D32;     /* Màu phụ */
}
```

### Thay đổi nội dung

Chỉnh sửa trong các component files:
- `src/components/About.jsx` - Thông tin công ty
- `src/components/Services.jsx` - Dịch vụ
- `src/components/Contact.jsx` - Thông tin liên hệ
- `src/components/Hero.jsx` - Hero section

## 📱 Responsive Design

Website được thiết kế responsive và hoạt động tốt trên:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔧 Technologies

- **React 18** - UI library
- **Vite** - Build tool và dev server
- **CSS3** - Styling với Custom Properties
- **Intersection Observer API** - Scroll animations

## 📝 Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build cho production
- `npm run preview` - Preview production build

## 📧 Liên hệ

- Email: info@mspace.vn
- Điện thoại: 1900 1234
- Địa chỉ: 123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh

---

Made with ❤️ for M.Space using React
