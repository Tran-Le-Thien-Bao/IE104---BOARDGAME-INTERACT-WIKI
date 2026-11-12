// Trang chủ (index.html): hero ảnh nền đổi dần, bộ sưu tập, game rating cao, thể loại.
// Cần nạp js/games.js và js/main.js trước file này.

function renderHero() {
  const slides = topRated(4);
  const slideBox = document.getElementById("hero-slides");
  const caption = document.getElementById("hero-caption");
  slideBox.innerHTML = slides
    .map((game, index) => `<img src="${game.banner}" alt="" class="${index === 0 ? "active" : ""}">`)
    .join("");

  let current = 0;
  const showCaption = () => {
    const game = slides[current];
    caption.href = `game.html?id=${game.id}`;
    caption.innerHTML = `<span>Đang trưng bày</span> ${game.name} →`;
  };
  showCaption();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (slides.length > 1 && !reduceMotion) {
    const images = slideBox.querySelectorAll("img");
    setInterval(() => {
      images[current].classList.remove("active");
      current = (current + 1) % slides.length;
      images[current].classList.add("active");
      showCaption();
    }, 6000);
  }

  // Chưa có game nào có luật thì hiện số bộ sưu tập, tránh khoe con số 0
  const withRules = GAMES.filter((game) => game.rulesSummary || game.rules).length;
  const stats = [
    [GAMES.length, "board game"],
    [Object.keys(CATEGORIES).length, "thể loại"],
    withRules ? [withRules, "game có luật"] : [COLLECTIONS.length, "bộ sưu tập"]
  ];
  document.getElementById("hero-stats").innerHTML = stats
    .map(([number, label]) => `<li><strong class="metal-text">${number}</strong> ${label}</li>`)
    .join("");
}

function renderLuxCollections() {
  document.getElementById("lux-collections").innerHTML = COLLECTIONS.map((collection) => {
    const games = GAMES.filter((game) => game.collections.includes(collection.id));
    const cover = games.find((game) => game.banner);
    return `
      <a class="lux-collection" href="games.html?col=${collection.id}">
        ${cover ? `<img src="${cover.banner}" alt="" loading="lazy">` : ""}
        <div class="lux-collection-text">
          <p class="lux-eyebrow">${games.length} game</p>
          <h3>${collection.title}</h3>
          <p>${collection.desc}</p>
        </div>
      </a>`;
  }).join("");
}

function renderLuxCategories() {
  document.getElementById("lux-categories").innerHTML = Object.entries(CATEGORIES).map(([id, category]) => {
    const count = GAMES.filter((game) => game.categories[0] === id).length;
    return `
      <li>
        <a class="lux-category" href="games.html?cat=${id}" style="--accent: ${category.color}">
          <span class="lux-medal" aria-hidden="true">${category.icon}</span>
          <span class="lux-category-name">${category.name}</span>
          <span class="lux-category-count">${count} game</span>
        </a>
      </li>`;
  }).join("");
}

// Tủ game: 4 game lưu gần nhất; tủ trống thì hướng dẫn cách lưu
function renderShelf() {
  const games = shelfGames();
  document.getElementById("shelf-grid").innerHTML = games.slice(0, 4).map(renderCard).join("");
  document.getElementById("shelf-empty").hidden = games.length > 0;
  document.getElementById("shelf-more").hidden = games.length === 0;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderShelf();
  renderLuxCollections();
  document.getElementById("lux-featured").innerHTML = topRated(8).map(renderCard).join("");
  renderLuxCategories();
});
