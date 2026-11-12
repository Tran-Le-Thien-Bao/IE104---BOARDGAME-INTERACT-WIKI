# Phúc Bảo: luật tóm tắt cho 10 game

## Việc cần làm

- Chọn **10 game** trong **STT 51–100** (xem STT và tên game trong `docs/boardgame.xlsx`, sheet "Danh sách game").
- Mỗi game: tìm **link sách luật (PDF)** và viết **"Luật trong 1 phút"** gồm 5–7 câu ngắn.
- Chỉ sửa **file này**, không sửa file của người khác (để push không bị xung đột).
- **Hạn: 20:00 ngày 10/11.** Xong thì chạy:

```
git pull
git add rulebooks
git commit -m "Luật tóm tắt của Phúc Bảo"
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

## 052 Sheriff of Nottingham
Link luật: https://cmon-files.s3.amazonaws.com/pdf/assets_item/resource/204/Rulebook.pdf

- Mỗi người là một thương nhân tìm cách tuồn hàng hóa vào thành Nottingham; ai giàu nhất khi kết thúc là người thắng.
- Mỗi vòng, một người đóng vai Cảnh sát trưởng (Sheriff), những người còn lại là thương nhân đem hàng vào chợ.
- Thương nhân bí mật xếp 1 đến 5 lá bài vào túi khóa kín, rồi khai báo với Cảnh sát trưởng (phải khai đúng số lượng và chỉ được khai duy nhất một món hàng hợp pháp).
- Cảnh sát trưởng quyết định cho qua hoặc mở túi kiểm tra; thương nhân được quyền thương lượng, hối lộ tiền hoặc lời hứa để không bị khám túi.
- Nếu Cảnh sát trưởng khám mà thương nhân khai thật, Cảnh sát trưởng phải đền tiền phạt; nếu bắt quả tang nói dối, hàng vi phạm bị tịch thu và thương nhân phải nộp phạt.
- Hàng hợp pháp mang trót lọt được bày công khai tính điểm và tranh thưởng Vua buôn hàng; hàng cấm giấu kín đem lại số tiền rất lớn cuối game.
- Game kết thúc khi mọi người đều làm Cảnh sát trưởng đủ số lượt (thường là 2 lần); ai có tổng tiền mặt, điểm hàng hóa và điểm thưởng cao nhất sẽ chiến thắng.

## 053 Coup
Link luật: https://boardgamegeek.com/boardgame/131357/coup/files

- Bạn là người đứng đầu một gia tộc quyền lực trong một thành phố suy đồi; ai là người sống sót cuối cùng sẽ giành chiến thắng.
- Mỗi người khởi đầu với 2 đồng tiền và 2 lá bài nhân vật úp bí mật (tượng trưng cho 2 mạng sống / tầm ảnh hưởng).
- Đến lượt, bạn thực hiện 1 hành động: lấy tiền (Thu nhập, Viện trợ), ám sát, đảo chính (Coup), hoặc tuyên bố nhận năng lực của một nhân vật.
- Bạn có thể nói dối mình có bất kỳ nhân vật nào để hưởng lợi; nếu bị người khác thách thức mà không chìa đúng lá bài đó, bạn mất 1 mạng; ngược lại, kẻ thách thức sai sẽ mất 1 mạng.
- Một số nhân vật có khả năng chặn đòn của đối thủ (như Nữ bá tước chặn Ám sát); hành động chặn đòn này cũng có thể bị thách thức và lật tẩy tương tự.
- Khi tích lũy đủ 7 tiền bạn có thể đảo chính, và khi đạt 10 tiền bạn bắt buộc phải đảo chính để loại bỏ ngay 1 mạng của đối thủ mà không thể bị chặn hay lật tẩy.
- Ai bị lật hết cả 2 lá nhân vật sẽ bị loại khỏi bàn chơi ngay lập tức; người duy nhất còn giữ được nhân vật úp là người chiến thắng.

## 056 The Crew: The Quest for Planet Nine
Link luật: https://boardgamegeek.com/boardgame/284083/the-crew-the-quest-for-planet-nine/files

- Tất cả người chơi cùng hợp tác trong vai các phi hành gia vượt qua 50 nhiệm vụ không gian để tìm kiếm Hành tinh Thứ Chín bí ẩn.
- Trò chơi sử dụng cơ chế đánh bài ăn chốt (trick-taking): người đi đầu đánh 1 lá màu, những người sau bắt buộc phải theo màu đó nếu có; người đánh lá bài cùng màu lớn nhất (hoặc lá Tên lửa - chất chủ) sẽ ăn vòng bài đó.
- Mỗi nhiệm vụ đưa ra các mục tiêu cụ thể, yêu cầu một phi hành gia nhất định phải ăn được chính xác các lá bài quy định trong suốt ván bài.
- Người chơi không được nói ra hay cho đồng đội xem bài trên tay; mỗi ván mỗi người chỉ được dùng 1 token liên lạc vô tuyến để báo hiệu duy nhất một lần về lá bài cao nhất, thấp nhất hoặc duy nhất của một màu.
- Người nắm giữ lá bài Tên lửa số 4 sẽ làm Đội trưởng, được đi lá bài đầu tiên và ưu tiên chọn thẻ nhiệm vụ trước.
- Cả đội cùng chiến thắng màn chơi nếu hoàn thành toàn bộ mục tiêu nhiệm vụ; nếu có bất kỳ thành viên nào vô tình ăn nhầm lá bài của đồng đội thì cả đội thất bại ngay lập tức.

## 057 Century: Spice Road
Link luật: https://boardgamegeek.com/boardgame/209685/century-spice-road/files

- Người chơi nhập vai các thương nhân dẫn đầu đoàn lữ hành trên Con đường Tơ lụa, cạnh tranh tích lũy điểm chiến thắng từ các thẻ đơn hàng gia vị.
- Có 4 loại gia vị theo thứ tự giá trị tăng dần: Vàng (nghệ), Đỏ (ớt), Xanh lá (bạch đậu khấu) và Nâu (quế); xe kéo của mỗi người chỉ chứa tối đa 10 viên gia vị.
- Đến lượt, bạn chọn thực hiện duy nhất 1 trong 4 hành động: đánh 1 lá bài trên tay (lấy hoặc nâng cấp gia vị), mua 1 lá bài mới từ thị trường, nghỉ ngơi để thu toàn bộ bài đã đánh về tay, hoặc hoàn thành 1 đơn hàng.
- Để mua bài mới từ hàng chờ, bạn phải đặt 1 viên gia vị lên mỗi lá bài đứng trước lá bạn muốn lấy.
- Để hoàn thành đơn hàng, bạn trả lại kho chung đúng số lượng và màu sắc gia vị theo yêu cầu của thẻ điểm trên bàn, rồi lấy thẻ đó kèm tiền xu thưởng (nếu có).
- Game kết thúc sau vòng đấu mà có người gom đủ 5 thẻ đơn hàng (hoặc 6 thẻ trong ván 2-3 người); ai có tổng điểm từ thẻ đơn hàng, tiền xu và gia vị thừa cao nhất sẽ chiến thắng.

## 070 One Night Ultimate Werewolf
Link luật: https://cdn.shopify.com/s/files/1/0740/4855/files/ONUW_rules-updated_for_BGG.pdf

- Trò chơi ẩn vai diễn ra trong duy nhất một đêm và một ngày; phe Dân làng tìm cách treo cổ ít nhất một Sói, còn phe Sói cố gắng ẩn mình để sống sót.
- Mỗi người được chia bí mật 1 lá bài nhân vật úp trước mặt, và có thêm 3 lá bài thừa đặt úp ở giữa bàn.
- Ban đêm, tất cả nhắm mắt ngủ (sử dụng ứng dụng điện thoại hỗ trợ); từng vai trò lần lượt thức dậy thực hiện năng lực bí mật như xem bài người khác, hoán đổi bài hoặc tráo bài giữa hai người.
- Ban ngày, mọi người thức giấc và không được xem lại lá bài trước mặt mình (vốn có thể đã bị tráo đổi trong đêm); cả bàn cùng thảo luận, tra hỏi và đánh lừa nhau trong thời gian giới hạn.
- Hết giờ thảo luận, tất cả đồng thời đếm 1-2-3 và chỉ tay vào người mình muốn xử tử; người nhận được nhiều phiếu nhất (tối thiểu 2 phiếu) sẽ bị treo cổ.
- Phe Dân làng thắng nếu có ít nhất một Sói bị treo cổ; phe Sói thắng nếu không có Sói nào chết; nếu không có ai là Sói và cả bàn hòa phiếu không ai chết thì Dân làng cũng chiến thắng.

## 071 Lisboa
Link luật: https://boardgamegeek.com/boardgame/161533/lisboa/files

- Bạn là các quý tộc Bồ Đào Nha chung tay tái thiết thủ đô Lisboa sau thảm họa kép năm 1755 (động đất, sóng thần và hỏa hoạn) để tích lũy tóc giả (điểm chiến thắng).
- Mỗi lượt, bạn chọn đánh 1 lá bài từ tay vào bảng cá nhân (để nhận tiền hoặc năng lực triều đình) hoặc đánh vào bàn cờ chính (để diện kiến Hoàng gia hoặc quy hoạch thành phố).
- Các hành động Hoàng gia cho phép bạn yết kiến Nhà vua, Hầu tước hoặc Đức Thượng phụ nhằm xin giấy phép xây dựng, mở xưởng sản xuất, điều tàu buôn hoặc chiêu mộ giáo sĩ.
- Sử dụng tài nguyên và giấy phép đã thu thập để xây dựng các tòa nhà thương mại trên bản đồ thành phố theo mạng lưới đường phố Baixa Pombalina.
- Khi một người chơi yết kiến Hoàng gia, những người chơi khác có thể chi trả điểm Ảnh hưởng để "theo chân" hành động đó ngay trong lượt của đối phương.
- Game kết thúc khi một người xây xong 4 bộ công trình thương mại hoặc rút cạn 2 chồng bài; người tích lũy nhiều tóc giả nhất từ bất động sản, tàu thuyền và các sắc lệnh tôn giáo sẽ chiến thắng.

## 072 On Mars
Link luật: https://boardgamegeek.com/boardgame/184267/on-mars/files

- Người chơi đại diện cho các tập đoàn không gian khai phá Sao Hỏa, cạnh tranh Điểm Cơ Hội (OP) bằng cách xây dựng và phát triển thuộc địa đầu tiên của nhân loại.
- Bàn chơi chia thành hai nửa riêng biệt: Không gian Quỹ đạo (Orbit) và Bề mặt Sao Hỏa (Surface); bạn chỉ được làm các hành động thuộc nửa khu vực mà phi thuyền của bạn đang hiện diện.
- Di chuyển qua lại giữa Quỹ đạo và Mặt đất theo lịch trình bay của tàu con thoi, sau đó đặt công nhân và điều khiển robot để đào quặng, khai thác tài nguyên và mở rộng công trình.
- Cùng nhau xây dựng và nâng cấp 5 loại công trình sự sống thiết yếu (nước, năng lượng, nhà kính, oxy và khu dân cư) để gia tăng chỉ số sinh tồn LSS của thuộc địa.
- Tuyển mộ các Nhà khoa học để mở khóa hành động độc quyền và thực hiện các hợp đồng nhiệm vụ nhằm tối ưu hóa điểm số.
- Trò chơi kết thúc khi toàn bộ thuộc địa Sao Hỏa đạt trạng thái tự cấp tự túc hoàn toàn (chỉ số LSS đạt ngưỡng tối đa); ai tích lũy được nhiều Điểm Cơ Hội nhất sẽ giành chiến thắng.

## 077 Catan: Starfarers
Link luật: https://www.catan.com/sites/default/files/2021-06/catan_starfarers_rulebook_eng_190823s_0_0.pdf

- Khám phá thiên hà Catan rộng lớn, định cư trên các hành tinh xa xôi và thiết lập liên minh với các chủng tộc ngoài hành tinh để đạt 15 điểm chiến thắng.
- Mỗi người sở hữu một mô hình tàu mẹ (Mothership); lắc tàu mẹ để các viên bi lăn xuống xác định tốc độ bay của hạm đội và kích hoạt các biến cố ngẫu nhiên.
- Đầu lượt, đổ xúc xắc để sản xuất tài nguyên (gỗ, quặng, ngũ cốc, thực phẩm, carbon) cho các thuộc địa và trạm không gian có số tương ứng; người ít điểm hơn được nhận tài nguyên hỗ trợ từ ngân hàng.
- Sử dụng tài nguyên để nâng cấp tàu mẹ (lắp thêm pháo laser, động cơ đẩy, khoang chở hàng), chế tạo tàu thám hiểm, mở rộng thuộc địa và trạm không gian mới.
- Khi lắc ra bi đen, bạn rút thẻ sự kiện ngẫu nhiên: chiến đấu chống lại hải tặc không gian, giúp đỡ phi thuyền gặp nạn hoặc giao thương hòa bình.
- Xây dựng trạm thương mại tại các tiền đồn ngoài hành tinh để kết đồng minh với 4 chủng tộc độc đáo và nhận các đặc quyền vĩnh viễn mạnh mẽ.
- Trò chơi kết thúc ngay lập tức khi một người chơi đạt đủ 15 điểm chiến thắng từ thuộc địa, trạm không gian và danh hiệu liên minh.

## 084 Ark Nova
Link luật: https://boardgamegeek.com/boardgame/342942/ark-nova/files

- Người chơi lên kế hoạch và thiết kế một sở thú hiện đại theo chuẩn khoa học, tài trợ các dự án bảo tồn thiên nhiên để đạt điểm số cao nhất.
- Mỗi người quản lý 5 thẻ hành động (Thẻ bài, Xây dựng, Động vật, Hiệp hội, Tài trợ) xếp ở 5 ô vị trí từ 1 đến 5; vị trí của thẻ quyết định độ mạnh của hành động, và sau khi dùng thẻ sẽ tụt về vị trí 1.
- Xây dựng chuồng thú bằng cách ghép các mảnh ghép đa giác lên bản đồ sở thú cá nhân sao cho thỏa mãn điều kiện kề cận sông hồ hoặc vách đá.
- Đưa động vật vào chuồng bằng cách trả tiền và đáp ứng điều kiện kích thước chuồng cũng như các biểu tượng yêu cầu; động vật mang lại điểm Thu hút và Danh tiếng.
- Cử nhân viên tham gia các dự án bảo tồn tại Hiệp hội để đẩy tăng điểm Bảo tồn và mở khóa nâng cấp thẻ hành động lên cấp 2 (mặt xanh).
- Game kết thúc khi điểm Thu hút (chạy theo chiều kim đồng hồ) và điểm Bảo tồn (chạy ngược chiều) của một người gặp nhau; người có khoảng cách giao thoa điểm số cao nhất sau vòng cuối sẽ chiến thắng.

## 085 Wingspan
Link luật: https://stonemaiergames.com/games/wingspan/rules/

- Người chơi là các nhà nghiên cứu chim tìm cách phát hiện và thu hút những loài chim đẹp nhất vào 3 sinh cảnh: Rừng, Đồng cỏ và Đầm lầy trong khu bảo tồn của mình.
- Trò chơi diễn ra trong 4 vòng; đến lượt, bạn đặt 1 khối hành động để chọn 1 trong 4 việc: Đưa 1 lá chim vào khu bảo tồn, Lấy thức ăn từ khay xúc xắc (Rừng), Đẻ trứng trên các lá chim (Đồng cỏ), hoặc Rút lá bài chim mới (Đầm lầy).
- Khi kích hoạt một sinh cảnh, bạn sẽ lần lượt kích hoạt sức mạnh (màu nâu) của toàn bộ các lá chim đã đưa vào sinh cảnh đó từ phải sang trái, tạo nên chuỗi liên hoàn (engine building).
- Để đưa chim vào khu bảo tồn, bạn phải trả đủ lượng thức ăn (sâu, hạt, quả, cá, chuột) tương ứng và trả thêm trứng nếu đặt ở các ô xa hơn.
- Cuối mỗi vòng, mọi người so sánh tiến độ để nhận điểm thưởng theo mục tiêu chung của vòng đấu đó.
- Sau 4 vòng, trò chơi kết thúc; tính tổng điểm từ giá trị lá chim, thẻ nhiệm vụ bí mật, mục tiêu vòng, số trứng đã đẻ, mồi lưu trữ và các lá bài giấu dưới cánh chim; ai nhiều điểm nhất sẽ chiến thắng.
