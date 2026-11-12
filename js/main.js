// Các hàm dùng chung cho mọi trang: định dạng số liệu, ảnh bìa, thẻ game, header, menu.
// Cần nạp js/games.js trước file này.

// "3–4" hoặc "15" nếu hai số bằng nhau; chưa có số liệu thì "—"
function formatRange(range) {
  if (!range) return "—";
  return range[0] === range[1] ? `${range[0]}` : `${range[0]}–${range[1]}`;
}

// Thời gian chơi: "30–60′"; chưa có số liệu thì "—"
function formatTime(time) {
  return time ? `${formatRange(time)}′` : "—";
}

// Giá trị kèm đơn vị, ví dụ orDash(10, "+") → "10+"; chưa có số liệu thì "—"
function orDash(value, suffix = "") {
  return value === null || value === undefined || value === "" ? "—" : `${value}${suffix}`;
}

function getGame(id) {
  return GAMES.find((game) => game.id === id);
}

// Độ khó 1–5 → nhãn và màu, dùng cho huy hiệu và thanh độ khó
function difficultyLevel(weight) {
  if (!weight) return { label: "Chưa rõ", color: "#8a8178" };
  if (weight < 2) return { label: "Dễ", color: "#2e9d5b" };
  if (weight < 3) return { label: "Vừa", color: "#d9a514" };
  if (weight < 4) return { label: "Khó", color: "#e0662d" };
  return { label: "Rất khó", color: "#c0392b" };
}

// Bỏ dấu tiếng Việt để tìm kiếm: "Mèo Nổ" → "meo no"
function normalizeText(text) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

// Màu và biểu tượng của thể loại đầu tiên quyết định ảnh tạm của game
function mainCategory(game) {
  return CATEGORIES[game.categories[0]];
}

// Game có rating cao nhất, dùng cho hero và mục "Tuyển chọn" ở trang chủ
function topRated(count) {
  return GAMES
    .filter((game) => game.rating && game.banner)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, count);
}

// ===== Tủ game của tôi =====
// Danh sách id game người xem đã lưu, giữ trong localStorage của trình duyệt (không cần tài khoản).
const SHELF_KEY = "meeplepedia-shelf";

function getShelf() {
  try {
    return JSON.parse(localStorage.getItem(SHELF_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function isSaved(id) {
  return getShelf().includes(id);
}

// Lưu hoặc bỏ lưu một game; trả về true nếu game vừa được lưu
function toggleSaved(id) {
  const shelf = getShelf();
  const index = shelf.indexOf(id);
  if (index === -1) shelf.unshift(id);
  else shelf.splice(index, 1);
  try { localStorage.setItem(SHELF_KEY, JSON.stringify(shelf)); } catch (e) {}
  return index === -1;
}

// Game trong tủ, game lưu sau cùng đứng đầu
function shelfGames() {
  return getShelf().map(getGame).filter(Boolean);
}

// Ảnh bìa: dùng ảnh thật nếu có, không thì vẽ ảnh tạm bằng CSS
function renderCover(game) {
  if (game.image) {
    return `<img class="cover" src="${game.image}" alt="Ảnh bìa ${game.name}" loading="lazy">`;
  }
  const category = mainCategory(game);
  return `
    <div class="cover cover-placeholder" style="--accent: ${category.color}" role="img" aria-label="Ảnh tạm của ${game.name}">
      <span class="cover-icon">${category.icon}</span>
      <span class="cover-name">${game.name}</span>
    </div>`;
}

// Thẻ game ở trang chủ và trang Khám phá.
// Giữ cấu trúc .card > .card-inner > .card-front / .card-back để gắn hiệu ứng hover.
function renderCard(game) {
  const level = difficultyLevel(game.weight);
  return `
    <article class="card lux-card">
      <a class="lux-card-link" href="game.html?id=${game.id}">
        <div class="card-inner">
          <div class="card-front">
            ${renderCover(game)}
            ${isSaved(game.id) ? '<span class="lux-card-saved" title="Có trong tủ game của bạn">♥</span>' : ""}
            <div class="lux-card-body">
              <p class="lux-card-rating">★ ${orDash(game.rating)}</p>
              <h3 class="lux-card-title">${game.nameVi || game.name}</h3>
              <p class="lux-card-meta">${formatRange(game.players)} người · ${formatTime(game.time)} · ${level.label}</p>
            </div>
          </div>
          <div class="card-back" aria-hidden="true"></div>
        </div>
      </a>
    </article>`;
}

// Ô số liệu: <strong data-stat="games"></strong> → số game
const STATS = {
  games: () => GAMES.length,
  categories: () => Object.keys(CATEGORIES).length,
  collections: () => COLLECTIONS.length,
  rules: () => GAMES.filter((game) => game.rulesSummary || game.rules).length
};

// Header trong suốt khi ở đầu trang, có nền khi cuộn xuống
function setupHeader() {
  const header = document.getElementById("lux-header");
  if (!header) return;
  const update = () => header.classList.toggle("scrolled", window.scrollY > 40);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

// Nút menu trên điện thoại
function setupMenu() {
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (!button || !nav) return;
  button.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", open);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupMenu();
  setupHeader();

  document.querySelectorAll("[data-stat]").forEach((el) => {
    el.textContent = STATS[el.dataset.stat]();
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
