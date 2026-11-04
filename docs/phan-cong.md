# Phân công dự án Wiki Board Game

> Đồ án môn IE104 · Báo cáo midterm: **khoảng 11/11/2026**
> Repo: https://github.com/Tran-Le-Thien-Bao/IE104---BOARDGAME-INTERACT-WIKI

## 1. Mình đang làm gì?

Một **wiki board game tiếng Việt**. Mỗi game có trang riêng gồm **giới thiệu** và **luật chơi** viết lại cho dễ hiểu.

- **Công nghệ:** chỉ dùng **HTML + CSS + JavaScript thuần**. Không framework, không backend, không cài gì thêm.
- **Chạy thử:** mở `index.html` bằng trình duyệt, hoặc dùng extension **Live Server** trong VS Code (tự tải lại khi lưu).
- **Không làm:** shop, sự kiện, quán chơi, đăng nhập, bình luận.
- **Tham khảo bố cục:** https://boardgamewikia.com/vi. Chỉ học bố cục. **Không chép chữ, ảnh hay code của họ.**

## 2. Phân công

| Người | Phần phụ trách | File của mình |
|---|---|---|
| **Bảo (trưởng nhóm)** | Cấu trúc dữ liệu game, JS dùng chung (vẽ thẻ game, lấy game theo id), kiểm tra dữ liệu, layout chung (header, menu, footer), **trang chủ**, **hiệu ứng hover thẻ game**, duyệt và gộp code | `index.html`, `css/base.css`, `css/card.css`, `js/main.js`, `js/validate.js` |
| **Người 2** | Trang **Khám phá**: bộ lọc (số người, thời gian, độ khó, thể loại), **tìm kiếm gõ không dấu**, nút "Xem thêm" (mỗi lần hiện thêm 24 game) | `games.html`, `css/games.css`, `js/filter.js` |
| **Người 3** | Trang **chi tiết game**: hộp thông tin, tab mục lục, phần luật chơi, nhúng video YouTube, game tương tự, giao diện điện thoại | `game.html`, `css/game.css`, `js/game.js` |
| **Người 4** | Trang **Giới thiệu**, trang mới **Thuật ngữ & Thể loại** (giải thích worker placement, deck-building...), tìm và nén **ảnh bìa**, **README**, **slide báo cáo** | `about.html`, `glossary.html`, `css/pages.css`, `assets/images/` |

**Việc chung của cả 4 người, chia đều nhau:**
- Nhập dữ liệu **khoảng 25 game/người**, lấy từ file `docs/tierlist-boardgame.xlsx` sau khi chốt danh sách 100 game.
- Viết **luật đầy đủ cho 3–4 game/người**, cả nhóm được khoảng 12–15 game.
- Mỗi người nhập vào **file dữ liệu của riêng mình**: `js/data/games-1.js` (Bảo), `games-2.js` (Người 2), `games-3.js` (Người 3), `games-4.js` (Người 4).

> Bảo sẽ tách sẵn các file CSS và file dữ liệu như trên **trước khi mọi người bắt đầu**. Chưa thấy file của mình thì cứ `git pull` lại.

## 3. Cấu trúc dữ liệu một game

Dữ liệu viết đúng theo mẫu dưới đây. Trường nào chưa có thì để `""` hoặc `[]`, **không xóa trường**.

```js
{
  id: "catan",                 // chữ thường, không dấu, nối bằng gạch ngang; KHÔNG trùng
  name: "Catan",               // tên gốc
  nameVi: "",                  // tên tiếng Việt nếu có
  year: 1995,
  players: [3, 4],             // [ít nhất, nhiều nhất]
  time: [60, 120],             // phút
  age: 10,
  weight: 2.3,                 // độ khó 1–5 (theo BGG)
  rating: 7.1,                 // rating BGG
  categories: ["chien-thuat", "gia-dinh"],  // chỉ dùng mã có trong CATEGORIES
  collections: ["nguoi-moi"],  // bộ sưu tập ở trang chủ
  designer: "Klaus Teuber",
  publisher: "KOSMOS",
  intro: "2–3 câu giới thiệu, TỰ VIẾT.",
  image: "assets/images/catan.webp",        // để "" nếu chưa có ảnh
  videos: ["YOUTUBE_ID"],      // chỉ lấy phần ID sau "watch?v="
  rulesSummary: [],            // "Luật trong 1 phút": 5–7 gạch đầu dòng
  rules: {                     // luật đầy đủ; để {} nếu chưa viết
    components: "",            // thành phần
    setup: "",                 // chuẩn bị
    goal: "",                  // mục tiêu
    turn: "",                  // một lượt chơi
    end: "",                   // kết thúc và tính điểm
    mistakes: "",              // lỗi luật hay gặp
    tips: ""                   // mẹo cho người mới
  }
}
```

**Mã thể loại:** `chien-thuat`, `party`, `gia-dinh`, `hop-tac`, `the-bai`, `suy-luan`. Muốn thêm thể loại mới thì báo Bảo, đừng tự thêm.

## 4. Quy ước

- **Nội dung hiển thị bằng tiếng Việt.**
- **Luật chơi tự viết lại bằng lời của mình.** Không copy hay dịch nguyên văn từ sách luật hoặc website khác. Giảng viên có thể kiểm tra đạo văn.
- **Ảnh:** định dạng `.webp`, mỗi ảnh khoảng **30–60KB**, tên file trùng với `id` của game (ví dụ `catan.webp`), luôn thêm `loading="lazy"`. Ghi nguồn ảnh vào trang Giới thiệu.
- **HTML:** dùng thẻ ngữ nghĩa (`<header> <nav> <main> <article> <section> <table> <ol>`), vì môn học chấm phần này. Mọi ảnh phải có `alt`.
- **CSS:** chỉ sửa **file CSS của mình**. Màu và font dùng biến có sẵn trong `base.css` (`var(--primary)`...). Cần thêm biến mới thì báo Bảo.
- **Không sửa file của người khác.** Cần đổi gì thì nhắn người đó, hoặc ghi vào Pull Request.
- **Không đưa API key hay mật khẩu lên repo.**

## 5. Quy trình làm việc với Git

**Làm lần đầu:**
```powershell
git clone https://github.com/Tran-Le-Thien-Bao/IE104---BOARDGAME-INTERACT-WIKI.git
cd IE104---BOARDGAME-INTERACT-WIKI
git checkout -b ten-phan-cua-ban        # ví dụ: trang-kham-pha, trang-chi-tiet, trang-gioi-thieu
```

**Mỗi lần làm việc:**
```powershell
git checkout main
git pull                                 # lấy code mới nhất
git checkout ten-phan-cua-ban
git merge main                           # cập nhật nhánh của mình
# ... làm việc ...
git add .
git commit -m "Mô tả ngắn: làm gì"
git push -u origin ten-phan-cua-ban
```

**Khi xong một phần:**
1. Lên GitHub và tạo **Pull Request** từ nhánh của mình vào `main`.
2. Ghi ngắn gọn đã làm gì, kèm ảnh chụp màn hình nếu có.
3. Bảo duyệt rồi gộp vào `main`. **Không ai push thẳng vào `main`.**

**Khi bị xung đột (conflict):** đừng xóa bừa code của người khác. Nhắn Bảo để cùng xử lý.

## 6. Lịch làm việc

| Ngày | Việc | Ai |
|---|---|---|
| **04/11** | Giao việc. Tách file CSS và file dữ liệu. Chốt danh sách 100 game và chia 25 game/người | Bảo |
| **04/11** | Clone repo, tạo nhánh, chạy thử web trên máy | Cả nhóm |
| **05–08/11** | Làm phần của mình, đồng thời nhập 25 game | Cả nhóm |
| **07/11** | **Họp giữa kỳ:** mỗi người cho xem tiến độ, gộp bản đầu tiên | Cả nhóm |
| **08/11** | Hạn cuối gửi Pull Request | Cả nhóm |
| **09/11** | Gộp code, sửa lỗi, kiểm tra trên điện thoại | Bảo + cả nhóm |
| **10/11** | Bật GitHub Pages, hoàn thiện slide, tập báo cáo | Người 4 + cả nhóm |
| **~11/11** | **Báo cáo midterm** | Cả nhóm |

## 7. Thế nào là "xong"?

Trước khi tạo Pull Request, tự kiểm tra:

- [ ] Trang chạy được khi mở bằng trình duyệt, Console (F12) không báo lỗi đỏ
- [ ] Hiển thị ổn trên điện thoại (F12, bật chế độ thiết bị di động, thử chiều rộng 375px)
- [ ] Toàn bộ chữ hiển thị là tiếng Việt, không lỗi font
- [ ] Ảnh có `alt`, link không bị hỏng
- [ ] Chỉ sửa file thuộc phần của mình
- [ ] Dữ liệu game đúng mẫu ở mục 3, `id` không trùng

## 8. Báo cáo midterm

Mỗi người trình bày **phần của mình** trong khoảng 2–3 phút:

1. **Bảo:** giới thiệu dự án, cấu trúc dữ liệu, trang chủ và hiệu ứng thẻ game
2. **Người 2:** trang Khám phá, cách làm bộ lọc và tìm kiếm không dấu
3. **Người 3:** trang chi tiết, cách một file `game.html` hiển thị được mọi game
4. **Người 4:** trang Giới thiệu, trang Thuật ngữ, nguồn ảnh, rồi tổng kết

Mỗi người chuẩn bị sẵn để giải thích được **code mình viết**, vì giảng viên có thể hỏi bất kỳ ai.
