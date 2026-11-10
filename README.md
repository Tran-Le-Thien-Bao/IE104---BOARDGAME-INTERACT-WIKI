# MeeplePedia

Wiki board game tiếng Việt: tra thông tin, đọc luật và tìm game phù hợp cho buổi chơi.
Đồ án môn HTML, chỉ dùng **HTML, CSS và JavaScript thuần** (không framework, không cần cài đặt).

## Chạy thử

Mở `index.html` bằng trình duyệt, hoặc dùng extension **Live Server** trong VS Code.

## Tính năng

- **Trang chủ:** ảnh nền đổi dần giữa các game nổi bật, bộ sưu tập, game rating cao, thể loại.
- **Khám phá:** lọc theo số người, thời gian, độ khó, thể loại; tìm kiếm gõ không dấu; sắp xếp; nút "Xem thêm". Bộ lọc lưu trên link.
- **Chi tiết game:** danh sách game bên trái, bảng thông số, 6 nút tròn (Giới thiệu, Độ khó, Luật chơi, Video, Thành phần, Tương tự), đổi game không tải lại trang, nền sáng/tối.
- **Giới thiệu:** câu chuyện, nguyên tắc viết luật, nhóm thực hiện, ghi nguồn.
- **Tủ game của tôi:** bấm "♡ Lưu vào tủ game" ở trang chi tiết; game đã lưu hiện ở trang chủ và lọc riêng ở trang Khám phá (`games.html?saved=1`). Lưu bằng localStorage, không cần tài khoản.
- **Tìm bằng tên tiếng Việt:** gõ "mật danh", "cờ tỷ phú"… (có dấu hay không dấu) vẫn ra đúng game.

## Cấu trúc

```
index.html          trang chủ
games.html          khám phá: bộ lọc + tìm kiếm
game.html           chi tiết game (một khuôn cho mọi game, game.html?id=<id>)
about.html          giới thiệu + ghi nguồn
css/style.css       màu, chữ, header, footer, thẻ game dùng chung + trang chủ
css/pages.css       trang Khám phá, Giới thiệu
css/game.css        trang chi tiết
js/games.js         dữ liệu 154 game
js/main.js          hàm dùng chung: định dạng số liệu, thẻ game, header, menu
js/home.js          trang chủ
js/explore.js       bộ lọc, tìm kiếm trang Khám phá
js/game.js          trang chi tiết
assets/images/<stt>/<stt>.webp    ảnh bìa 600×800
assets/images/<stt>/<stt>b.webp   ảnh nền 1600×1000
rulebooks/          luật tóm tắt mỗi thành viên viết
docs/               file Excel danh sách game, slide báo cáo
```

`stt` là số thứ tự game trong `docs/boardgame.xlsx`; không đổi STT vì ảnh gắn theo STT.

## Nhóm thực hiện

Thiên Bảo (trưởng nhóm) · An Bình · Phúc Bảo · Yến Nhi

## Ghi nguồn

- Bố cục lấy cảm hứng từ [Board Game Wikia](https://boardgamewikia.com/vi).
- Chữ và code do nhóm tự viết. Luật chơi được diễn giải lại, không dịch nguyên văn sách luật.
- Tên game và hình ảnh thuộc bản quyền của tác giả và nhà phát hành tương ứng.
