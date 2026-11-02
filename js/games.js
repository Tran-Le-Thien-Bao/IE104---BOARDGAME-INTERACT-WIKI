// Dữ liệu board game.
// LƯU Ý: đây là 8 game MẪU để chạy thử giao diện — danh sách chính thức do người dùng tự chọn.
//
// Mỗi game gồm:
//   id          slug dùng trên link: game.html?id=<id>
//   name        tên gốc
//   nameVi      tên tiếng Việt (bỏ trống nếu không có)
//   year        năm phát hành
//   players     [ít nhất, nhiều nhất]
//   time        [ít nhất, nhiều nhất] (phút)
//   age         độ tuổi tối thiểu
//   weight      độ khó 1–5
//   categories  mã thể loại (xem CATEGORIES)
//   collections mã bộ sưu tập ở trang chủ (xem COLLECTIONS)
//   designer, publisher
//   intro       giới thiệu 2–3 câu
//   image       đường dẫn ảnh bìa; bỏ trống thì dùng ảnh tạm theo màu thể loại

const CATEGORIES = {
  "chien-thuat": { name: "Chiến thuật", color: "#c0392b", icon: "♜" },
  "party":       { name: "Party",       color: "#e6a817", icon: "🎉" },
  "gia-dinh":    { name: "Gia đình",    color: "#2e8b57", icon: "🏠" },
  "hop-tac":     { name: "Hợp tác",     color: "#2f6fb5", icon: "🤝" },
  "the-bai":     { name: "Thẻ bài",     color: "#7d4bb5", icon: "🃏" },
  "suy-luan":    { name: "Suy luận",    color: "#d35400", icon: "🔍" }
};

const COLLECTIONS = [
  { id: "nguoi-moi",  title: "Dành cho người mới", desc: "Luật dễ, vào chơi trong 10 phút." },
  { id: "dong-nguoi", title: "Chơi đông người",    desc: "Hợp cho nhóm bạn, buổi tiệc." },
  { id: "dong-nao",   title: "Đấu trí",            desc: "Cần tính toán và lên kế hoạch." }
];

const GAMES = [
  {
    id: "catan",
    name: "Catan",
    nameVi: "",
    year: 1995,
    players: [3, 4],
    time: [60, 120],
    age: 10,
    weight: 2.3,
    categories: ["chien-thuat", "gia-dinh"],
    collections: ["dong-nao"],
    designer: "Klaus Teuber",
    publisher: "KOSMOS",
    intro: "Người chơi là những nhóm khai hoang trên một hòn đảo mới. Bạn thu gỗ, gạch, lúa, cừu và quặng để xây đường, làng và thành phố. Điểm hấp dẫn nhất là trao đổi tài nguyên: ai cũng cần người khác, nhưng không ai muốn đối thủ thắng.",
    image: ""
  },
  {
    id: "ma-soi",
    name: "Werewolf",
    nameVi: "Ma Sói",
    year: 1986,
    players: [8, 18],
    time: [30, 60],
    age: 10,
    weight: 1.3,
    categories: ["party", "suy-luan"],
    collections: ["dong-nguoi", "nguoi-moi"],
    designer: "Dimitry Davidoff",
    publisher: "Nhiều NXB",
    intro: "Ngôi làng có những con sói đội lốt dân thường. Ban đêm sói chọn nạn nhân, ban ngày cả làng tranh luận để treo cổ kẻ bị nghi ngờ. Đây là game của nói dối, quan sát và thuyết phục.",
    image: ""
  },
  {
    id: "exploding-kittens",
    name: "Exploding Kittens",
    nameVi: "Mèo Nổ",
    year: 2015,
    players: [2, 5],
    time: [15, 15],
    age: 7,
    weight: 1.1,
    categories: ["the-bai", "party"],
    collections: ["nguoi-moi", "dong-nguoi"],
    designer: "Elan Lee, Matthew Inman, Shane Small",
    publisher: "Exploding Kittens",
    intro: "Mỗi lượt bạn rút một lá, và nếu rút trúng mèo nổ mà không có lá gỡ bom thì bạn bị loại. Các lá hành động giúp bạn xem trước, xáo bài hay đẩy lượt sang người khác. Nhanh, ồn ào và rất hợp để khởi động buổi chơi.",
    image: ""
  },
  {
    id: "splendor",
    name: "Splendor",
    nameVi: "",
    year: 2014,
    players: [2, 4],
    time: [30, 30],
    age: 10,
    weight: 1.8,
    categories: ["chien-thuat", "the-bai"],
    collections: ["nguoi-moi", "dong-nao"],
    designer: "Marc André",
    publisher: "Space Cowboys",
    intro: "Bạn là thương nhân đá quý thời Phục Hưng, gom đá để mua mỏ, xưởng và cửa hàng. Mỗi lá bài mua được lại giảm giá cho lần mua sau, tạo thành một cỗ máy ngày càng mạnh. Luật chỉ vài phút nhưng chơi mãi không chán.",
    image: ""
  },
  {
    id: "codenames",
    name: "Codenames",
    nameVi: "Mật Danh",
    year: 2015,
    players: [2, 8],
    time: [15, 15],
    age: 14,
    weight: 1.3,
    categories: ["party", "suy-luan"],
    collections: ["dong-nguoi", "nguoi-moi"],
    designer: "Vlaada Chvátil",
    publisher: "Czech Games Edition",
    intro: "Hai đội, mỗi đội có một đội trưởng biết vị trí các điệp viên của mình trên lưới 25 từ. Đội trưởng chỉ được nói một từ và một con số để gợi ý. Đoán trúng là vui, đoán nhầm sát thủ là thua ngay.",
    image: ""
  },
  {
    id: "ticket-to-ride",
    name: "Ticket to Ride",
    nameVi: "",
    year: 2004,
    players: [2, 5],
    time: [30, 60],
    age: 8,
    weight: 1.8,
    categories: ["gia-dinh"],
    collections: ["nguoi-moi"],
    designer: "Alan R. Moon",
    publisher: "Days of Wonder",
    intro: "Thu thẻ toa tàu cùng màu để chiếm các tuyến đường sắt trên bản đồ. Mỗi người có những vé bí mật yêu cầu nối hai thành phố. Ai cũng sợ bị chặn đường đúng lúc sắp hoàn thành.",
    image: ""
  },
  {
    id: "pandemic",
    name: "Pandemic",
    nameVi: "Đại Dịch",
    year: 2008,
    players: [2, 4],
    time: [45, 45],
    age: 8,
    weight: 2.4,
    categories: ["hop-tac", "chien-thuat"],
    collections: ["dong-nao"],
    designer: "Matt Leacock",
    publisher: "Z-Man Games",
    intro: "Cả nhóm cùng thắng hoặc cùng thua: bốn dịch bệnh đang lan khắp thế giới. Mỗi người giữ một vai trò có kỹ năng riêng, phải phối hợp di chuyển, chữa bệnh và tìm thuốc giải. Game hợp tác kinh điển cho người chưa từng chơi kiểu này.",
    image: ""
  },
  {
    id: "azul",
    name: "Azul",
    nameVi: "",
    year: 2017,
    players: [2, 4],
    time: [30, 45],
    age: 8,
    weight: 1.8,
    categories: ["gia-dinh", "chien-thuat"],
    collections: ["nguoi-moi", "dong-nao"],
    designer: "Michael Kiesling",
    publisher: "Plan B Games",
    intro: "Người chơi là thợ lát gạch, lần lượt lấy gạch men cùng màu từ các xưởng để trang trí bức tường của mình. Lấy thừa thì gạch rơi vỡ và bị trừ điểm. Đẹp mắt, dễ học nhưng có nhiều cách gài đối thủ.",
    image: ""
  }
];
