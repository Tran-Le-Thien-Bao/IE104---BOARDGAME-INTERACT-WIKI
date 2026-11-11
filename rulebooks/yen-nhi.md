# Yến Nhi: luật tóm tắt cho 10 game

## Việc cần làm

- Chọn **10 game** trong **STT 101–154** (xem STT và tên game trong `docs/boardgame.xlsx`, sheet "Danh sách game").
- Mỗi game: tìm **link sách luật (PDF)** và viết **"Luật trong 1 phút"** gồm 5–7 câu ngắn.
- Chỉ sửa **file này**, không sửa file của người khác (để push không bị xung đột).
- **Hạn: 20:00 ngày 10/11.** Xong thì chạy:

```
git pull
git add rulebooks
git commit -m "Luật tóm tắt của Yến Nhi"
git push
```

## Cách viết

- **5–7 câu**, mỗi câu một gạch đầu dòng, mỗi câu một ý. Người chưa chơi bao giờ đọc cũng phải hiểu.
- Thứ tự gợi ý: mục tiêu → mỗi lượt làm gì → cách ghi điểm → khi nào kết thúc → luật đặc biệt hay quên.
- **Tự viết bằng lời mình**, không copy hay dịch nguyên văn câu trong sách luật.
- **Giữ đúng dòng tiêu đề `## STT Tên game`** (STT đủ 3 số, ví dụ `## 007 Blood Rage`), vì dòng này dùng để đưa luật lên đúng game trên web.

## Link sách luật

- Ưu tiên: trang của NXB → nhà phát hành ở Việt Nam (có bản tiếng Việt) → BoardGameGeek.
- Tránh link Google Drive của người lạ (hay bị xóa).
- **Chỉ dán link, không push file PDF lên GitHub.** Nếu chỉ có file mà không có link, gửi file cho Bảo qua Zalo.
- Video YouTube hướng dẫn: không bắt buộc, có thì dán vào.

## Ví dụ

```
## 015 Catan
Link luật: https://www.catan.com/...
Video: https://www.youtube.com/watch?v=...

- Mỗi người là một nhóm khai hoang, ai đạt 10 điểm trước thì thắng.
- Đầu lượt, đổ 2 xúc xắc: ô đất trùng số sẽ cho tài nguyên tới ai có làng cạnh ô đó.
- Dùng tài nguyên để xây đường, làng (1 điểm) và nâng làng thành thành phố (2 điểm).
- Được trao đổi tài nguyên với người khác, hoặc đổi với ngân hàng theo tỉ lệ 4 lấy 1.
- Đổ ra 7 thì không ai nhận tài nguyên; người đổ dời kẻ cướp và lấy 1 lá của người có làng cạnh ô đó.
- Con đường dài nhất và đội quân lớn nhất được thêm 2 điểm mỗi thứ.
```

---

# BÀI LÀM

## 122 Ticket to Ride
Link luật: 

- Thu thập các lá bài toa tàu để nối các tuyến đường sắt kết nối các thành phố trên bản đồ.
- Đầu lượt, chọn 1 trong 3 việc: rút bài toa tàu, đánh bài để chiếm đường, hoặc rút thêm vé nhiệm vụ.
- Đặt các quân tàu của bạn lên bản đồ để ghi điểm ngay dựa trên độ dài tuyến đường.
- Hoàn thành vé nhiệm vụ nối thành công 2 thành phố được cộng thêm điểm; không hoàn thành bị trừ điểm.
- Khi một người còn từ 2 toa tàu trở xuống, tất cả chơi thêm một lượt cuối rồi kết thúc.
- Người có tổng điểm cao nhất từ các tuyến đường và vé nhiệm vụ sẽ giành chiến thắng.

## 123 Carcassonne
Link luật: https://s3.amazonaws.com/geekdo-files.com/bgg125611?response-content-disposition=inline%3B%20filename%3D%22Carcassonne_rules_%28Vietnamese%29.pdf%22&response-content-type=application%2Fpdf&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASRSNYN2BU2SPAZNG%2F20261111%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261111T113107Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Signature=0cbbe9060a94bca9e74d91cf13b486c9409dc141262ae88bf7aec971035d0e5b

- Xây dựng vùng đất Carcassonne bằng cách rút và đặt các mảnh bản đồ cùng các quân meeple.
- Mỗi lượt, rút 1 mảnh bản đồ ngẫu nhiên và đặt vào bảng sao cho khớp các nét đường, thành hoặc chùa.
- Tùy chọn đặt 1 meeple lên mảnh vừa đặt để làm hiệp sĩ, tên cướp, tu sĩ hoặc nông dân.
- Khi một khu vực (đường, thành, chùa) hoàn thành, khu vực đó tính điểm ngay và lấy lại meeple.
- Game kết thúc ngay khi rút hết toàn bộ các mảnh bản đồ trong chồng bài.
- Tính điểm các khu vực chưa xong và nông dân trên đồng cỏ; ai nhiều điểm nhất là người thắng.

## 125 Pandemic
Link luật: https://s3.amazonaws.com/geekdo-files.com/bgg135019?response-content-disposition=inline%3B%20filename%3D%22BGV_Pandemic_Vietnamese_.pdf%22&response-content-type=application%2Fpdf&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASRSNYN2BU2SPAZNG%2F20261111%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261111T113638Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Signature=e62564cbfbbffeb30f19c22725331aaa254b2c13ce5a7153e0e7ebbb3108c573

- Tất cả người chơi cùng thuộc một đội chuyên gia y tế, hợp tác dập tắt 4 mầm bệnh toàn cầu.
- Mỗi người chơi đảm nhận 1 vai trò với kỹ năng đặc biệt riêng (Bác sĩ, Nhà khoa học...).
- Trong lượt, bạn thực hiện tối đa 4 hành động: di chuyển, chữa bệnh, chia sẻ bài hoặc chế vắc-xin.
- Thực hiện xong hành động, bạn rút 2 lá bài chơi và lật các lá dịch bệnh để làm lây lan mầm bệnh.
- Rút phải lá bùng phát (Epidemic), độ nguy hiểm tăng cao và dịch bệnh lây lan mạnh hơn.
- Cả đội thắng khi tìm đủ vắc-xin cho 4 căn bệnh trước khi hết bài rút hoặc bùng phát quá 8 lần.

## 127 Kingdomino
Link luật: https://board-game-rules.com/wp-content/uploads/2025/01/kingdomino_Official-Rules.pdf

- Nhập vai các nhà vua đi mở rộng lãnh thổ bằng cách ghép mảnh domino địa hình xung quanh lâu đài 5x5.
- Mỗi lượt, chọn 1 mảnh domino mới từ hàng chờ; mảnh càng giá trị thì lượt sau chọn càng muộn.
- Mảnh domino vừa lấy phải ghép sao cho có ít nhất 1 cạnh địa hình trùng khớp với địa hình kề bên.
- Điểm mỗi vùng được tính bằng tổng số ô địa hình liền kề nhân với tổng số vương miện trong vùng đó.
- Game kết thúc sau 12 vòng khi toàn bộ mảnh domino đã được dùng hết để hoàn thành vương quốc.
- Người chơi có tổng điểm lãnh thổ cao nhất sau khi tính điểm vương miện sẽ chiến thắng.

## 128 Cascadia
Link luật: https://s3.amazonaws.com/geekdo-files.com/bgg308516?response-content-disposition=inline%3B%20filename%3D%22Cascadia_Rules_bgg_.pdf%22&response-content-type=application%2Fpdf&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASRSNYN2BU2SPAZNG%2F20261111%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261111T114303Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Signature=7d9daec28d0430dbdd3b46756e400410a81ff2fa8cb71db5ffeeebde27cf3aa0

- Kiến tạo hệ sinh thái môi trường bằng cách kết hợp đặt các ô địa hình và thẻ linh vật tương ứng.
- Trong lượt, bạn chọn 1 cặp gồm 1 ô môi trường và 1 thẻ linh vật từ thị trường chung.
- Ghép ô môi trường vào vùng đất của bạn sao cho tạo thành các dải địa hình liền kề lớn nhất.
- Đặt thẻ linh vật vào ô địa hình phù hợp để đáp ứng các mô hình xếp hình ghi điểm của từng loài.
- Game kết thúc sau 20 lượt đặt bài khi các ô môi trường trên thị trường đã được rút hết.
- Người chơi có tổng điểm cao nhất từ mô hình linh vật và chuỗi địa hình lớn nhất sẽ chiến thắng.

## 131 Hanabi
Link luật: 

- Tất cả người chơi hợp tác để bắn một màn pháo hoa rực rỡ bằng cách xếp các lá bài theo thứ tự 1 đến 5.
- Điểm đặc biệt: bạn cầm bài hướng ra ngoài nên chỉ người khác thấy bài bạn, còn bạn thì không.
- Trong lượt, chọn 1 trong 3 hành động: cho người khác gợi ý, bỏ 1 lá bài, hoặc đánh 1 lá bài ra bàn.
- Cho gợi ý tốn 1 đồng Token gợi ý; bạn chỉ được gợi ý về màu sắc hoặc số lượng của các lá bài.
- Đánh sai lá bài (không đúng thứ tự 1-5) sẽ làm mất 1 Token cầu chì; mất đủ 3 Token cả đội thua ngay.
- Trò chơi kết thúc khi hoàn thành cả 5 chồng pháo hoa hoặc rút hết bài; điểm số dựa trên tổng số lá đánh đúng.

## 141 Clank!
Link luật: http://s3.amazonaws.com/geekdo-files.com/bgg170710?response-content-disposition=inline%3B%20filename%3D%22Game_Rules_v1.compressed.pdf%22&response-content-type=application%2Fpdf&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASRSNYN2BU2SPAZNG%2F20261111%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261111T115551Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Signature=063470c00cc3a3f360e04ccbbe1bd91171d0912903ddc33b9541a1aa0a2d70ba

- Bạn là tên trộm đột nhập vào hang rồng để cướp kho báu và rút lui an toàn ra ngoài.
- Đầu lượt, đánh các lá bài trên tay để lấy điểm di chuyển, điểm chiến đấu hoặc mua thêm bài mới.
- Các hành động gây ra tiếng động sẽ phải đặt các viên cube "Clank!" của bạn vào túi rồng.
- Khi rút bài có biểu tượng Rồng, bốc ngẫu nhiên các viên cube trong túi; cube màu nào thì người đó mất máu.
- Cướp lấy ít nhất 1 cổ vật và nhanh chóng thoát khỏi hầm ngục trước khi bị rồng hạ gục.
- Game kết thúc khi tất cả người chơi thoát ra hoặc bị nốc ao; ai nhiều điểm kho báu nhất sẽ thắng.

## 142 King of Tokyo
Link luật: https://s3.amazonaws.com/geekdo-files.com/bgg178221?response-content-disposition=inline%3B%20filename%3D%22King_Of_Tokyo_2nd_Vietnamese.pdf%22&response-content-type=application%2Fpdf&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASRSNYN2BU2SPAZNG%2F20261111%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261111T115653Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Signature=f1dffede08f5cad62d48496082769911d4fa429abbe1aab47837b96aac760ea5

- Hóa thân thành các quái thú khổng lồ tranh giành quyền kiểm soát thành phố Tokyo.
- Trong lượt, đổ 6 xúc xắc và được phép đổ lại tối đa 2 lần để chọn giữ các biểu tượng mong muốn.
- Xúc xắc giúp bạn ghi điểm chiến thắng, hồi máu, tích năng lượng hoặc tung đòn tấn công quái thú khác.
- Chiếm Tokyo mang lại nhiều điểm hơn nhưng không thể hồi máu bằng xúc xắc và bị tất cả quái thú bên ngoài tấn công.
- Dùng năng lượng tích lũy được để mua các lá bài thảm họa nhằm sở hữu kỹ năng đặc biệt.
- Trò chơi kết thúc khi có quái thú đạt 20 điểm chiến thắng hoặc là quái thú duy nhất còn sống sót.

## 145 Sushi Go!
Link luật: https://s3.amazonaws.com/geekdo-files.com/bgg101843?response-content-disposition=inline%3B%20filename%3D%22SushiGoRulesWeb.pdf%22&response-content-type=application%2Fpdf&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASRSNYN2BU2SPAZNG%2F20261111%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261111T115845Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Signature=0dd6e237b8bdfa94a96a5f99313adfcf6a81972984e9df949d02d6217b9fe7fe

- Trò chơi chuyền bài nhẩm điểm nhanh, mô phỏng chọn các món ăn trên băng chuyền sushi.
- Game diễn ra trong 3 vòng; đầu mỗi vòng mỗi người được chia một số lá bài nhất định trên tay.
- Mỗi lượt, mọi người chọn 1 lá bài trên tay úp xuống, lật mở đồng thời, rồi chuyền xấp bài còn lại cho người kế bên.
- Mỗi món sushi có cách tính điểm riêng: Tempura tính theo cặp, Sashimi tính theo bộ 3, Nigiri nhân điểm nhờ Wasabi.
- Tích lũy các lá Pudding để dành tính điểm thưởng hoặc phạt ở cuối vòng 3.
- Sau 3 vòng chơi, người có tổng điểm tích lũy từ các món ăn cao nhất sẽ giành chiến thắng.

## 153 Bang!
Link luật: https://s3.amazonaws.com/geekdo-files.com/bgg125560?response-content-disposition=inline%3B%20filename%3D%22BANG_rules_%28Vietnamese%29.pdf%22&response-content-type=application%2Fpdf&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASRSNYN2BU2SPAZNG%2F20261111%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261111T115945Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Signature=6a2bd8c476ab5086ca8c2d562dcbf20ab9f5de8a1f097f1db15138c948ccd3b7

- Mỗi người nhận bí mật một vai trò: Cảnh sát trưởng, Cảnh sát viên, Tội phạm hoặc Kẻ hai mặt.
- Cảnh sát trưởng lộ diện ngay từ đầu; các vai trò khác giữ bí mật để ẩn thân và làm nhiệm vụ riêng.
- Đầu lượt, rút 2 lá bài từ chồng bài chung.
- Trong lượt, đánh bài để trang bị vũ khí, hồi máu hoặc bắn lá BANG! vào người chơi khác trong tầm bắn.
- Người bị bắn phải dùng lá MISSED! để né, nếu không sẽ bị mất 1 máu; hết máu sẽ bị loại khỏi game.
- Phe Cảnh sát thắng khi diệt hết Tội phạm; Tội phạm thắng khi diệt Cảnh sát trưởng; Kẻ hai mặt thắng nếu sống sót cuối cùng.
