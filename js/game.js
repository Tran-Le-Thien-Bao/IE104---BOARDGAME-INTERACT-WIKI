// Trang chi tiết dạng "tủ game": cột trái là danh sách game, khung phải trưng bày game đang chọn.
// Bấm game ở cột trái thì đổi game mà không tải lại trang; link vẫn là <trang>?id=<id>.
// Cần nạp js/games.js và js/main.js trước file này.

// 6 nút tròn quanh ảnh hộp game, theo thứ tự:
// trên trái, trên phải, giữa trái, giữa phải, dưới trái, dưới phải
const PANELS = [
  { id: "gioi-thieu", icon: "ℹ️", label: "Giới thiệu" },
  { id: "do-kho",     icon: "🧠", label: "Độ khó" },
  { id: "luat-choi",  icon: "📜", label: "Luật chơi" },
  { id: "video",      icon: "▶️", label: "Video" },
  { id: "thanh-phan", icon: "🧩", label: "Thành phần" },
  { id: "tuong-tu",   icon: "🎲", label: "Tương tự" }
];

const DIFFICULTY_NOTES = {
  "Dễ": "Luật ngắn, giải thích trong 5–10 phút. Hợp với người mới và chơi cùng gia đình.",
  "Vừa": "Cần một ván làm quen, sau đó chơi trơn tru. Hợp với nhóm đã chơi vài game.",
  "Khó": "Nhiều luật và lựa chọn, ván đầu nên có người biết chơi hướng dẫn.",
  "Rất khó": "Luật dài, cần tính toán nhiều. Dành cho người đã quen board game.",
  "Chưa rõ": "Chưa có số liệu độ khó cho game này."
};

// Các mục trong game.rules; mục "turn" là các bước nên dùng danh sách có số
const RULE_SECTIONS = [
  { key: "setup",    title: "Chuẩn bị" },
  { key: "goal",     title: "Mục tiêu" },
  { key: "turn",     title: "Một lượt chơi", ordered: true },
  { key: "end",      title: "Kết thúc & tính điểm" },
  { key: "mistakes", title: "Lỗi luật hay gặp" },
  { key: "tips",     title: "Mẹo cho người mới" }
];

let currentGame = null;
let currentPanel = null;   // null = đang xem bảng thông số

// Giá trị có thể là một đoạn văn hoặc mảng gạch đầu dòng
function renderText(value, ordered) {
  if (Array.isArray(value)) {
    const tag = ordered ? "ol" : "ul";
    return `<${tag}>${value.map((item) => `<li>${item}</li>`).join("")}</${tag}>`;
  }
  return `<p>${value}</p>`;
}

function emptyNote(text) {
  return `<p class="empty-note">${text}</p>`;
}

// ===== Cột trái =====

function renderTile(game) {
  const level = difficultyLevel(game.weight);
  const selected = currentGame && currentGame.id === game.id;
  return `
    <li>
      <a class="tile" href="?id=${game.id}" data-game-id="${game.id}"
         style="--accent: ${mainCategory(game).color}" ${selected ? 'aria-current="page"' : ""}>
        <span class="badge badge-players" title="Số người chơi: ${formatRange(game.players)}">👥 ${formatRange(game.players)}</span>
        <div class="tile-cover">
          ${renderCover(game)}
          <span class="badge badge-level" style="--level: ${level.color}" title="Độ khó: ${level.label} (${orDash(game.weight, "/5")})">${level.label}</span>
        </div>
        <span class="tile-name">${game.nameVi || game.name}</span>
        <span class="tile-meta">⏱ ${formatTime(game.time)} · ${orDash(game.age, "+")}</span>
      </a>
    </li>`;
}

function renderGameList(query) {
  const keyword = normalizeText(query.trim());
  const games = GAMES.filter((game) =>
    normalizeText(`${game.name} ${game.nameVi} ${game.id}`).includes(keyword));
  document.getElementById("game-list-items").innerHTML = games.map(renderTile).join("");
  document.getElementById("game-list-empty").hidden = games.length > 0;
}

// ===== Nội dung 6 nút tròn =====

const PANEL_CONTENT = {
  "gioi-thieu": (game) => {
    const tags = game.categories
      .map((id) => `<span class="tag" style="--accent: ${CATEGORIES[id].color}">${CATEGORIES[id].icon} ${CATEGORIES[id].name}</span>`)
      .join("");
    const intro = game.intro ? `<p>${game.intro}</p>` : emptyNote("ℹ️ Giới thiệu đang được cập nhật.");
    return `${intro}<div class="tags">${tags}</div>`;
  },

  "do-kho": (game) => {
    const level = difficultyLevel(game.weight);
    const facts = [];
    if (game.time) facts.push(`Một ván khoảng <strong>${formatRange(game.time)} phút</strong>.`);
    if (game.age) facts.push(`Từ <strong>${game.age} tuổi</strong> trở lên.`);
    return `
      <p class="level-score" style="--level: ${level.color}">${level.label} <span>${orDash(game.weight, "/5")}</span></p>
      <div class="meter" style="--level: ${level.color}; --value: ${((game.weight || 0) / 5) * 100}%"
           role="img" aria-label="Độ khó ${orDash(game.weight, " trên 5")}"><span></span></div>
      <p>${DIFFICULTY_NOTES[level.label]}</p>
      ${facts.length ? `<p>${facts.join(" ")}</p>` : ""}`;
  },

  "luat-choi": (game) => {
    let html = "";
    if (game.rulesSummary) {
      html += `<h3>Luật trong 1 phút</h3>${renderText(game.rulesSummary)}`;
    }
    if (game.rules) {
      html += RULE_SECTIONS
        .filter((section) => game.rules[section.key])
        .map((section) => `<h3>${section.title}</h3>${renderText(game.rules[section.key], section.ordered)}`)
        .join("");
    }
    return html || emptyNote("📜 Luật chơi đang được cập nhật.");
  },

  "video": (game) => {
    if (!game.videos || game.videos.length === 0) return emptyNote("▶️ Video hướng dẫn đang được cập nhật.");
    return game.videos.map((videoId) => `
      <iframe class="video-frame" src="https://www.youtube-nocookie.com/embed/${videoId}"
              title="Video hướng dẫn ${game.name}" loading="lazy"
              allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe>`).join("");
  },

  "thanh-phan": (game) => {
    if (!game.rules || !game.rules.components) return emptyNote("🧩 Thành phần trong hộp đang được cập nhật.");
    return renderText(game.rules.components);
  },

  "tuong-tu": (game) => {
    // Game tương tự: có chung ít nhất một thể loại
    const similar = GAMES
      .filter((other) => other.id !== game.id && other.categories.some((id) => game.categories.includes(id)))
      .slice(0, 6);
    if (similar.length === 0) return emptyNote("Chưa có game tương tự.");
    return `<ul class="game-tiles similar-tiles">${similar.map(renderTile).join("")}</ul>`;
  }
};

function renderStats(game) {
  const level = difficultyLevel(game.weight);
  return `
    <h2 class="panel-title" id="info-panel-title">Thông số board game</h2>
    <table class="stat-table">
      <tbody>
        <tr><th scope="row">Số người chơi</th><td>${formatRange(game.players)}</td></tr>
        <tr><th scope="row">Thời gian</th><td>${formatTime(game.time)}</td></tr>
        <tr><th scope="row">Độ tuổi</th><td>${orDash(game.age, "+")}</td></tr>
        <tr><th scope="row">Độ khó</th><td>${game.weight ? `${game.weight}/5 · ${level.label}` : "—"}</td></tr>
        <tr><th scope="row">Năm phát hành</th><td>${orDash(game.year)}</td></tr>
        <tr><th scope="row">Rating</th><td>${game.rating ? `${game.rating}/10` : "—"}</td></tr>
        <tr class="wide"><th scope="row">Tác giả</th><td>${orDash(game.designer)}</td></tr>
        <tr class="wide"><th scope="row">Nhà phát hành</th><td>${orDash(game.publisher)}</td></tr>
      </tbody>
    </table>`;
}

function renderPanel(game, panelId) {
  const panel = PANELS.find((item) => item.id === panelId);
  return `
    <div class="panel-head">
      <h2 class="panel-title" id="info-panel-title">${panel.icon} ${panel.label}</h2>
      <button type="button" class="panel-close" data-close-panel>✕ Đóng</button>
    </div>
    <div class="panel-body">${PANEL_CONTENT[panelId](game)}</div>`;
}

// Bấm nút đang mở thì đóng lại, về bảng thông số
function openPanel(panelId) {
  currentPanel = currentPanel === panelId ? null : panelId;
  document.getElementById("info-panel").innerHTML = currentPanel
    ? renderPanel(currentGame, currentPanel)
    : renderStats(currentGame);
  document.querySelectorAll(".node").forEach((node) => {
    node.setAttribute("aria-pressed", node.dataset.panel === currentPanel);
  });
}

// Nút lưu game vào "Tủ game của tôi" (hàm lưu nằm trong main.js)
function renderShelfButton(game) {
  const saved = isSaved(game.id);
  return `
    <button type="button" class="shelf-btn" id="shelf-btn" aria-pressed="${saved}">
      ${saved ? "♥ Đã lưu vào tủ game" : "♡ Lưu vào tủ game"}
    </button>`;
}

// ===== Khung trưng bày =====

function renderShowcase(container, game) {
  const category = mainCategory(game);
  const level = difficultyLevel(game.weight);
  const categoryIcons = game.categories
    .map((id) => `<span title="${CATEGORIES[id].name}">${CATEGORIES[id].icon}</span>`)
    .join(" ");
  const photo = game.banner || game.image;
  const background = photo
    ? `<img class="showcase-photo" src="${photo}" alt="">`
    : `<span class="showcase-icon">${category.icon}</span>`;
  const nodes = PANELS.map((panel, index) => `
    <button type="button" class="node node-${index + 1}" data-panel="${panel.id}"
            aria-pressed="false" aria-controls="info-panel">
      <span class="node-icon" aria-hidden="true">${panel.icon}</span>
      <span class="node-label">${panel.label}</span>
    </button>`).join("");

  container.style.setProperty("--accent", category.color);
  container.innerHTML = `
    <div class="showcase-bg" aria-hidden="true">${background}</div>
    <div class="showcase-content">
      <header class="showcase-head">
        <h1 class="showcase-title">${game.name}</h1>
        <p class="showcase-sub">${[game.nameVi, game.year].filter(Boolean).join(" · ")}</p>
        <ul class="quick-bar" aria-label="Thông tin nhanh">
          <li title="Số người chơi">👥 ${formatRange(game.players)} người</li>
          <li title="Thời gian">⏱ ${formatTime(game.time)}</li>
          <li title="Độ tuổi">🎂 ${orDash(game.age, "+")}</li>
          <li class="quick-level" style="--level: ${level.color}" title="Độ khó ${orDash(game.weight, "/5")}">🧠 ${level.label}</li>
          <li title="Thể loại">${categoryIcons}</li>
        </ul>
        ${renderShelfButton(game)}
      </header>

      <section class="info-panel" id="info-panel" aria-labelledby="info-panel-title">
        ${renderStats(game)}
      </section>

      <nav class="node-ring" aria-label="Nội dung của ${game.name}">
        ${nodes}
        <div class="node-center">
          ${renderCover(game)}
          <span class="node-label">${orDash(game.year)}</span>
        </div>
      </nav>
    </div>`;
}

function selectGame(id, push) {
  const showcase = document.getElementById("game-detail");
  currentGame = getGame(id);
  currentPanel = null;

  document.querySelectorAll("#game-list-items .tile").forEach((tile) => {
    if (currentGame && tile.dataset.gameId === currentGame.id) tile.setAttribute("aria-current", "page");
    else tile.removeAttribute("aria-current");
  });

  if (!currentGame) {
    showcase.style.removeProperty("--accent");
    showcase.innerHTML = `
      <section class="not-found">
        <h1>Không tìm thấy game</h1>
        <p>Game này chưa có trên wiki. Chọn một game ở danh sách bên trái nhé.</p>
      </section>`;
    return;
  }

  if (push) history.pushState({ id }, "", `?id=${id}`);
  document.title = `${currentGame.name} – Luật chơi & giới thiệu | MeeplePedia`;
  renderShowcase(showcase, currentGame);
}

function idFromUrl() {
  return new URLSearchParams(window.location.search).get("id") || GAMES[0].id;
}

// ===== Nền sáng / tối =====

function updateThemeButton() {
  const dark = document.documentElement.dataset.theme === "dark";
  const button = document.getElementById("theme-toggle");
  button.textContent = dark ? "☀️" : "🌙";
  button.setAttribute("aria-label", dark ? "Chuyển sang nền sáng" : "Chuyển sang nền tối");
}

function setupTheme() {
  updateThemeButton();
  document.getElementById("theme-toggle").addEventListener("click", () => {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch (e) {}
    updateThemeButton();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupTheme();
  selectGame(idFromUrl(), false);
  renderGameList("");

  document.getElementById("game-search").addEventListener("input", (event) => {
    renderGameList(event.target.value);
  });

  const listToggle = document.getElementById("list-toggle");
  listToggle.addEventListener("click", () => {
    const collapsed = document.getElementById("detail-layout").classList.toggle("list-collapsed");
    listToggle.setAttribute("aria-expanded", !collapsed);
    listToggle.textContent = collapsed ? "▶" : "◀ Thu nhỏ";
  });

  // Bấm vào game (ở danh sách hoặc mục Tương tự): đổi game tại chỗ, giữ Ctrl/giữa chuột thì mở tab mới như thường
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-game-id]");
    if (!link || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey) return;
    event.preventDefault();
    selectGame(link.dataset.gameId, true);
    if (window.innerWidth <= 900) {
      document.getElementById("game-detail").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  document.getElementById("game-detail").addEventListener("click", (event) => {
    const node = event.target.closest("[data-panel]");
    if (node) openPanel(node.dataset.panel);
    if (event.target.closest("[data-close-panel]")) openPanel(currentPanel);
    if (event.target.closest("#shelf-btn")) {
      toggleSaved(currentGame.id);
      document.getElementById("shelf-btn").outerHTML = renderShelfButton(currentGame);
    }
  });

  // Esc: đóng nội dung đang mở, đưa con trỏ về nút tròn vừa bấm
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !currentPanel) return;
    const panelId = currentPanel;
    openPanel(panelId);
    document.querySelector(`.node[data-panel="${panelId}"]`).focus();
  });

  window.addEventListener("popstate", () => selectGame(idFromUrl(), false));
});
