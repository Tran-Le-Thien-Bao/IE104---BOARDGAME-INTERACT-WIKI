// Các hàm dùng chung cho mọi trang + vẽ trang chủ / trang Khám phá.
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

// Thẻ game. Cấu trúc .card > .card-inner > .card-front / .card-back
// được giữ sẵn để sau này gắn hiệu ứng hover mà không phải sửa HTML.
function renderCard(game) {
  const category = mainCategory(game);
  return `
    <article class="card" style="--accent: ${category.color}">
      <a class="card-link" href="game.html?id=${game.id}">
        <div class="card-inner">
          <div class="card-front">
            ${renderCover(game)}
            <div class="card-body">
              <h3 class="card-title">${game.nameVi || game.name}</h3>
              <p class="card-meta">
                <span title="Số người chơi">👥 ${formatRange(game.players)}</span>
                <span title="Thời gian">⏱ ${formatTime(game.time)}</span>
              </p>
            </div>
          </div>
          <div class="card-back" aria-hidden="true">
            <h3 class="card-title">${game.name}</h3>
            <dl class="card-stats">
              <dt>Số người</dt><dd>${formatRange(game.players)}</dd>
              <dt>Thời gian</dt><dd>${orDash(game.time && formatRange(game.time), " phút")}</dd>
              <dt>Độ tuổi</dt><dd>${orDash(game.age, "+")}</dd>
              <dt>Độ khó</dt><dd>${orDash(game.weight, "/5")}</dd>
            </dl>
          </div>
        </div>
      </a>
    </article>`;
}

// Trang chủ: mỗi bộ sưu tập là một hàng thẻ cuộn ngang
function renderCollections(container) {
  container.innerHTML = COLLECTIONS.map((collection) => {
    const games = GAMES.filter((game) => game.collections.includes(collection.id));
    return `
      <section class="collection" aria-labelledby="col-${collection.id}">
        <div class="section-head">
          <div>
            <h2 id="col-${collection.id}">${collection.title}</h2>
            <p class="section-desc">${collection.desc}</p>
          </div>
          <a class="see-all" href="games.html">Tất cả →</a>
        </div>
        <div class="card-row">${games.map(renderCard).join("")}</div>
      </section>`;
  }).join("");
}

// Trang Khám phá: lưới toàn bộ game (bộ lọc sẽ làm ở giai đoạn sau)
function renderGrid(container) {
  container.innerHTML = GAMES.map(renderCard).join("");
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

  const collections = document.getElementById("collections");
  if (collections) renderCollections(collections);

  const grid = document.getElementById("game-grid");
  if (grid) renderGrid(grid);

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
