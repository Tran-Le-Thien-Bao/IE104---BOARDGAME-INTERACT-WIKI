// Trang chi tiết: đọc ?id= trên link rồi đổ dữ liệu game vào khuôn game.html.
// Cần nạp js/games.js và js/main.js trước file này.

function renderGameDetail(container, game) {
  const categories = game.categories
    .map((id) => `<span class="tag" style="--accent: ${CATEGORIES[id].color}">${CATEGORIES[id].name}</span>`)
    .join("");

  // Game tương tự: có chung ít nhất một thể loại
  const similar = GAMES
    .filter((other) => other.id !== game.id && other.categories.some((id) => game.categories.includes(id)))
    .slice(0, 6);

  container.innerHTML = `
    <article class="game-detail">
      <header class="game-header">
        <div class="game-cover">${renderCover(game)}</div>
        <div class="game-summary">
          <h1>${game.name} <span class="game-year">(${game.year})</span></h1>
          ${game.nameVi ? `<p class="game-name-vi">${game.nameVi}</p>` : ""}
          <div class="tags">${categories}</div>
          <table class="info-table">
            <caption>Thông tin cơ bản</caption>
            <tbody>
              <tr><th scope="row">👥 Số người chơi</th><td>${formatRange(game.players)}</td></tr>
              <tr><th scope="row">⏱ Thời gian</th><td>${formatRange(game.time)} phút</td></tr>
              <tr><th scope="row">🎂 Độ tuổi</th><td>${game.age}+</td></tr>
              <tr><th scope="row">🧠 Độ khó</th><td>${game.weight}/5</td></tr>
              <tr><th scope="row">✏️ Tác giả</th><td>${game.designer}</td></tr>
              <tr><th scope="row">🏢 Nhà phát hành</th><td>${game.publisher}</td></tr>
            </tbody>
          </table>
        </div>
      </header>

      <nav class="game-tabs" aria-label="Mục lục">
        <a href="#gioi-thieu">Giới thiệu</a>
        <a href="#luat-choi">Luật chơi</a>
        <a href="#tuong-tu">Game tương tự</a>
      </nav>

      <section id="gioi-thieu" class="game-section">
        <h2>Giới thiệu</h2>
        <p>${game.intro}</p>
      </section>

      <section id="luat-choi" class="game-section">
        <h2>Luật chơi</h2>
        <p class="empty-note">📜 Luật chơi đang được cập nhật.</p>
      </section>

      <section id="tuong-tu" class="game-section">
        <h2>Game tương tự</h2>
        <div class="card-row">${similar.map(renderCard).join("")}</div>
      </section>
    </article>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("game-detail");
  const id = new URLSearchParams(window.location.search).get("id");
  const game = getGame(id);

  if (!game) {
    container.innerHTML = `
      <section class="not-found">
        <h1>Không tìm thấy game</h1>
        <p>Game này chưa có trên wiki. <a href="games.html">Xem tất cả game →</a></p>
      </section>`;
    return;
  }

  document.title = `${game.name} – Luật chơi & giới thiệu | Wiki Board Game`;
  renderGameDetail(container, game);
});
