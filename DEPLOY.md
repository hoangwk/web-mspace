# Hướng dẫn Deploy lên GitHub Pages

## Bước 1: Tạo Repository trên GitHub

1. Đăng nhập vào GitHub
2. Click vào dấu "+" ở góc trên bên phải, chọn "New repository"
3. Đặt tên repository: `web-mspace` (hoặc tên khác bạn muốn)
4. Chọn Public (GitHub Pages chỉ hoạt động với Public repo miễn phí)
5. **KHÔNG** tích vào "Initialize with README" (vì bạn đã có code sẵn)
6. Click "Create repository"

## Bước 2: Push code lên GitHub

Mở terminal/command prompt trong thư mục project và chạy các lệnh sau:

```bash
# Khởi tạo git repository (nếu chưa có)
git init

# Thêm tất cả files
git add .

# Commit
git commit -m "Initial commit: M.Space landing page"

# Thêm remote repository (thay YOUR_USERNAME bằng username GitHub của bạn)
git remote add origin https://github.com/YOUR_USERNAME/web-mspace.git

# Push lên GitHub
git branch -M main
git push -u origin main
```

## Bước 3: Kích hoạt GitHub Pages

1. Vào repository trên GitHub
2. Click vào tab **Settings** (ở menu trên cùng)
3. Scroll xuống phần **Pages** (ở sidebar bên trái)
4. Trong phần **Source**:
   - Chọn branch: `main`
   - Chọn folder: `/ (root)`
5. Click **Save**

## Bước 4: Đợi và kiểm tra

- GitHub sẽ mất vài phút để build và deploy
- Sau khi deploy xong, bạn sẽ thấy thông báo màu xanh với URL của website
- URL sẽ có dạng: `https://YOUR_USERNAME.github.io/web-mspace/`

## Lưu ý

- Nếu bạn đổi tên repository, URL cũng sẽ thay đổi
- Mỗi lần push code mới, GitHub Pages sẽ tự động cập nhật (có thể mất 1-2 phút)
- Để đổi tên miền tùy chỉnh, bạn có thể thêm trong phần Settings > Pages > Custom domain

## Troubleshooting

### Website không hiển thị
- Kiểm tra lại Settings > Pages đã được bật chưa
- Đảm bảo repository là Public
- Đợi thêm vài phút và refresh lại

### CSS/JS không load
- Kiểm tra đường dẫn file trong HTML có đúng không
- Đảm bảo tất cả files đã được commit và push lên GitHub

### Cần cập nhật code
```bash
git add .
git commit -m "Update: mô tả thay đổi"
git push
```

