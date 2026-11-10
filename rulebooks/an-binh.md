# An Bình: luật tóm tắt cho 10 game

## Việc cần làm

- Chọn **10 game** trong **STT 1–50** (xem STT và tên game trong `docs/boardgame.xlsx`, sheet "Danh sách game").
- Mỗi game: tìm **link sách luật (PDF)** và viết **"Luật trong 1 phút"** gồm 5–7 câu ngắn.
- Chỉ sửa **file này**, không sửa file của người khác (để push không bị xung đột).
- **Hạn: 20:00 ngày 10/11.** Xong thì chạy:

```
git pull
git add rulebooks
git commit -m "Luật tóm tắt của An Bình"
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

## 011 Patchwork
Link luật: https://www.lookout-spiele.de/upload/en_patchwork.html_Rules_Patchwork_EN.pdf

- Hai bạn thi nhau may một tấm chăn có 9x9; ai có nhiều nút áo hơn khi hết trò thì thắng.
- Bạn dùng nút áo để trả tiền mua vải. Cuối trò, nút còn lại cũng được tính là điểm.
- Trên bàn có một con đường gồm nhiều ô, hai bạn mỗi người có một quân đi trên đó. Quân của ai đang ở phía sau thì đến lượt người đó chơi.
- Đến lượt, bạn chọn một trong hai việc: mua một miếng vải, hoặc nghỉ để lấy thêm nút.
- Muốn mua vải thì chọn 1 trong 3 miếng ở gần nhất, trả nút, rồi đặt miếng vải lên tấm chăn của mình. Miếng vải không được chồng lên nhau.
- Mua vải xong thì đi quân tới trước trên con đường đó, số ô ghi trên miếng vải. Đi qua ô có hình nút áo thì nhận thêm nút.
- Khi cả hai tới cuối đường thì hết trò. Mỗi ô trống trên chăn bị trừ 2 điểm. Ai còn nhiều điểm hơn là người thắng.

## 018 Secret Hitler
Link luật: https://www.secrethitler.com/assets/Secret_Hitler_Rules.pdf

- Mỗi người bí mật thuộc phe Tự do (đa số), phe Phát xít, hoặc là Hitler; phe Phát xít biết nhau còn phe Tự do thì không.
- Mỗi vòng, Tổng thống đề cử một Thủ tướng; cả bàn bỏ phiếu Ja/Nein(Yes/No), nếu phiếu thua thì người kế tiếp làm Tổng thống.
- Nếu đề cử được thông qua, Tổng thống rút 3 chính sách, bỏ 1 lá, đưa 2 lá cho Thủ tướng; Thủ tướng bỏ tiếp 1 lá và ban hành lá còn lại.
- Hai người này được nói gì tùy ý về lá đã bỏ nên có thể nói dối; cả bàn tranh luận để đoán ai đáng tin.
- Khi phe Phát xít có thêm chính sách, Tổng thống nhận quyền đặc biệt như xem bài, điều tra phe của ai đó hoặc loại người chơi.
- Phe Tự do thắng khi ban hành 5 chính sách Tự do hoặc giết được Hitler; phe Phát xít thắng với 6 chính sách Phát xít hoặc khi Hitler được bầu làm Thủ tướng sau khi đã có 3 chính sách Phát xít.

## 035 Love Letter
Link luật: https://cdn.svc.asmodee.net/production-zman/uploads/2026/04/LL_Rulebook_with_Bag.pdf

- Bạn muốn đưa thư tình tới công chúa, nên phải giữ lá bài có số cao nhất khi vòng kết thúc.
- Mỗi người cầm 1 lá; tới lượt thì rút thêm 1 lá, rồi chọn đánh ra 1 lá và làm theo hiệu ứng của lá đó.
- Hiệu ứng khác nhau theo từng nhân vật, ví dụ Lính gác đoán bài trên tay người khác, Hoàng tử bắt người khác bỏ bài.
- Ai bị loại (đoán trúng, so bài thua, hoặc phải bỏ Công chúa) thì ra khỏi vòng đó.
- Vòng kết thúc khi chỉ còn một người hoặc hết bài rút; người còn lại hoặc có lá cao nhất thắng và nhận 1 tim.
- Ai đạt đủ số tim (7 tim với 2 người, 5 tim với 3, 4 tim với 4) trước thì thắng cả ván.

## 036 Liar's Dice
Link luật: https://boardgamegeek.com/filepage/23565/liars-dice-rules-by-jr-v1-1doc
- Mỗi người có 5 viên xúc xắc và một cốc úp; ai còn xúc xắc đến cuối cùng là người thắng.
- Đầu mỗi vòng, mọi người lắc xúc xắc trong cốc rồi bí mật xem kết quả của riêng mình.
- Người đi trước đoán có ít nhất bao nhiêu viên mặt nào trên toàn bàn, ví dụ "ba con số 4".
- Người kế tiếp phải đoán cao hơn (nhiều viên hơn hoặc mặt lớn hơn), hoặc hô "nói dối" để kiểm tra lời đoán trước đó.
- Khi có người hô "nói dối", cả bàn mở cốc và đếm số viên thật sự có. Nếu lời đoán trước đó đúng hoặc thấp hơn thực tế, người hô "nói dối" bị mất 1 xúc xắc. Nếu lời đoán đó cao hơn thực tế, người vừa đoán bị mất 1 xúc xắc.
- Người mất hết xúc xắc thì bị loại; một số nhà chơi coi mặt 1 là mặt thay thế cho mọi số.

## 040 Machi Koro
Link luật: https://boardgamegeek.com/boardgame/143884/machi-koro/files

- Mỗi người xây một thành phố nhỏ; ai xây đủ 4 công trình biểu tượng đầu tiên thì thắng.
- Đầu lượt, đổ xúc xắc; mỗi lá bài trên bàn có con số kích hoạt riêng, trùng số thì sinh ra tiền.
- Bài xanh dương kiếm tiền ở mọi lượt, bài xanh lá chỉ ở lượt của chủ bài, còn bài đỏ lấy tiền của người vừa đổ xúc xắc.
- Sau khi nhận tiền, bạn được mua 1 lá bài từ kho chung hoặc 1 công trình biểu tượng, hoặc không mua gì.
- Ban đầu mỗi người có 1 ruộng lúa, 1 tiệm bánh mì và vài đồng tiền để khởi động.
- Công trình biểu tượng (như Nhà ga cho phép đổ 2 xúc xắc) rất đắt nhưng đem lại sức mạnh đặc biệt.

## 041 Saboteur
Link luật: https://boardgamegeek.com/boardgame/9220/saboteur/files

- Có hai phe bí mật: Thợ mỏ muốn đào đường tới kho vàng, còn Kẻ phá hoại muốn chặn họ.
- Mỗi người nhận vai úp, chỉ mình biết; trên bàn có một điểm bắt đầu và 3 lá đích, chỉ một lá có vàng.
- Mỗi lượt đánh một lá: nối thêm đoạn đường, hoặc đánh lá hành động rồi rút lại cho đủ bài.
- Lá hành động có thể làm hỏng công cụ của ai đó (cuốc, đèn, xe), sửa công cụ, phá đường, hoặc xem lá đích.
- Thợ mỏ thắng nếu đường nối liền tới lá vàng, rồi chia các lá vàng; Kẻ phá hoại thắng nếu bài cạn mà đường chưa tới.
- Chơi 3 vòng, ai có nhiều vàng nhất sau 3 vòng là người thắng cả ván.

## 044 Exploding Kittens
Link luật: https://cdn.shopify.com/s/files/1/0345/9180/1483/files/ekoe-instructions-english.pdf

- Mục tiêu là sống sót: ai rút phải mèo nổ mà không có cách gỡ thì bị loại, người cuối cùng còn lại thắng.
- Mỗi người bắt đầu với một lá Gỡ bom và vài lá bài ngẫu nhiên, còn mèo nổ được trộn vào chồng bài rút.
- Trong lượt, bạn đánh ra bao nhiêu lá tùy ý, rồi kết thúc bằng cách rút 1 lá từ chồng bài.
- Lá Bỏ qua kết thúc lượt mà không rút, Tấn công bắt người kế phải chơi 2 lượt, Xem tương lai cho bạn nhìn trước bài trên cùng.
- Bất kỳ ai cũng có thể đánh lá "Không" để hủy một lá vừa được đánh.
- Rút trúng mèo nổ thì đánh lá Gỡ bom để sống, rồi tự nhét mèo trở lại chồng bài ở chỗ mình chọn.

## 046 Codenames
Link luật: https://filemanager.czechgames.com/storage/files/codenames/rules/CN%20rulebook%20EN%2030.pdf

- Hai đội đỏ và xanh thi nhau tìm ra hết các điệp viên của đội mình trong bảng 25 từ.
- Mỗi đội có một Trưởng nhóm biết từ nào là của đội nào; các thành viên còn lại không biết.
- Đến lượt đội, Trưởng nhóm nói một từ gợi ý kèm một con số, cho biết có bao nhiêu từ trên bảng liên quan tới gợi ý đó.
- Đồng đội lần lượt chỉ vào các từ để đoán; chọn đúng thì được đoán tiếp, chọn nhầm từ của đội kia hay từ trung lập thì mất lượt.
- Nếu chạm vào thẻ Sát thủ, đội đó thua ngay lập tức.
- Đội nào tìm hết điệp viên của mình trước thì thắng.

## 048 The Werewolves of Miller's Hollow (Ma Sói)
Link luật: https://cdn.svc.asmodee.net/production-asmodeeca/uploads/2023/07/WerewolvesThePact_EN_Rules.pdf

- Dân làng muốn tìm ra Ma Sói, còn Ma Sói muốn ăn thịt dân làng cho đến khi số sói bằng số dân.
- Một người làm Quản trò, những người khác nhận vai úp (Sói, Dân thường, Tiên tri, Phù thủy...).
- Ban đêm, mọi người nhắm mắt; Quản trò gọi từng vai dậy làm hành động, Sói chọn một nạn nhân, Tiên tri soi một người.
- Ban ngày, mọi người mở mắt, nghe công bố ai đã chết, rồi cùng thảo luận.
- Cả làng bỏ phiếu để treo cổ một người nghi là Sói; người đó phải lật bài cho cả bàn xem.
- Dân làng thắng khi hết sói; Sói thắng khi số sói bằng số dân còn sống.

## 049 Deception: Murder in Hong Kong
Link luật: https://boardgamegeek.com/boardgame/156129/deception-murder-in-hong-kong/files

- Một người là Kẻ sát nhân, những người còn lại là Điều tra viên cần tìm ra hung thủ, hung khí và manh mối.
- Kẻ sát nhân bí mật chọn 1 bài Hung khí và 1 bài Manh mối từ bài của mình, nhưng Pháp y biết đáp án và sẽ giúp tìm ra.
- Pháp y không được nói, chỉ đặt các miếng gợi ý lên các thẻ cảnh trạng để dẫn đường.
- Điều tra viên thảo luận, đọc bài của nhau và đoán xem ai là hung thủ.
- Mỗi người chỉ có một lần buộc tội, nêu rõ tên Kẻ sát nhân, Hung khí và Manh mối; đúng cả ba thì thắng.
- Nếu không ai buộc tội đúng sau 3 vòng, Kẻ sát nhân thắng.
