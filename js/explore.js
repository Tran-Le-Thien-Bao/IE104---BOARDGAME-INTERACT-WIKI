// Trang Khám phá (games.html): bộ lọc, tìm kiếm gõ không dấu, nút "Xem thêm".
// Bộ lọc lưu trên link (?q=&players=&time=&level=&cat=&col=&sort=) để gửi link cho người khác vẫn giữ kết quả.
// Cần nạp js/games.js và js/main.js trước file này.

const PAGE_SIZE = 24;

const PLAYER_OPTIONS = [
  { value: "", label: "Bất kỳ" },
  { value: "1", label: "Chơi 1 mình" },
  { value: "2", label: "2 người" },
  { value: "3", label: "3 người" },
  { value: "4", label: "4 người" },
  { value: "5", label: "5 người" },
  { value: "6", label: "6–7 người" },
  { value: "8", label: "8 người trở lên" }
];

// So với thời gian tối đa của một ván
const TIME_OPTIONS = [
  { value: "", label: "Bất kỳ" },
  { value: "30", label: "Dưới 30 phút", test: (time) => time[1] <= 30 },
  { value: "60", label: "30–60 phút", test: (time) => time[1] > 30 && time[1] <= 60 },
  { value: "120", label: "1–2 giờ", test: (time) => time[1] > 60 && time[1] <= 120 },
  { value: "dai", label: "Trên 2 giờ", test: (time) => time[1] > 120 }
];

const LEVELS = ["Dễ", "Vừa", "Khó", "Rất khó"];

const SORTS = {
  rating: { label: "Rating cao nhất", compare: (a, b) => (b.rating || 0) - (a.rating || 0) },
  name:   { label: "Tên A–Z",         compare: (a, b) => a.name.localeCompare(b.name) },
  year:   { label: "Mới ra mắt",      compare: (a, b) => (b.year || 0) - (a.year || 0) },
  easy:   { label: "Dễ chơi trước",   compare: (a, b) => (a.weight || 9) - (b.weight || 9) }
};

const DEFAULTS = { q: "", players: "", time: "", level: "", cat: "", col: "", saved: "", sort: "rating" };
const state = { ...DEFAULTS, shown: PAGE_SIZE };

function canPlay(game, count) {
  if (!game.players) return false;
  const [min, max] = game.players;
  if (count === 8) return max >= 8;
  if (count === 6) return min <= 7 && max >= 6;
  return min <= count && count <= max;
}

function matches(game) {
  if (state.q) {
    const text = normalizeText(`${game.name} ${game.nameVi} ${game.designer || ""}`);
    if (!text.includes(normalizeText(state.q.trim()))) return false;
  }
  if (state.players && !canPlay(game, Number(state.players))) return false;
  if (state.time) {
    const option = TIME_OPTIONS.find((item) => item.value === state.time);
    if (!game.time || !option.test(game.time)) return false;
  }
  if (state.level && difficultyLevel(game.weight).label !== state.level) return false;
  if (state.cat && !game.categories.includes(state.cat)) return false;
  if (state.col && !game.collections.includes(state.col)) return false;
  if (state.saved && !isSaved(game.id)) return false;
  return true;
}

// ===== Dựng các ô lọc =====

function renderControls() {
  const options = (list) => list.map((item) => `<option value="${item.value}">${item.label}</option>`).join("");
  document.getElementById("f-players").innerHTML = options(PLAYER_OPTIONS);
  document.getElementById("f-time").innerHTML = options(TIME_OPTIONS);
  document.getElementById("f-sort").innerHTML = Object.entries(SORTS)
    .map(([value, sort]) => `<option value="${value}">${sort.label}</option>`).join("");

  // Mỗi nhóm chip là các nút radio, có thêm "Tất cả"
  const chip = (name, value, label, extra = "") => `
    <label class="lux-chip" ${extra}>
      <input type="radio" name="${name}" value="${value}">
      <span>${label}</span>
    </label>`;
  // Độ khó 1, 2, 3, 4 lần lượt rơi vào Dễ, Vừa, Khó, Rất khó: lấy màu của từng mức
  document.getElementById("f-level").innerHTML = chip("level", "", "Tất cả") +
    LEVELS.map((label, index) => chip("level", label, label, `style="--level: ${difficultyLevel(index + 1).color}"`)).join("");
  document.getElementById("f-cat").innerHTML = chip("cat", "", "Tất cả") +
    Object.entries(CATEGORIES).map(([id, category]) => chip("cat", id, `${category.icon} ${category.name}`)).join("");
}

// Đưa giá trị trong state lên các ô lọc
function syncForm() {
  const form = document.getElementById("filter-form");
  form.q.value = state.q;
  form.players.value = state.players;
  form.time.value = state.time;
  form.saved.checked = state.saved === "1";
  document.getElementById("f-sort").value = state.sort;
  form.querySelectorAll('input[name="level"], input[name="cat"]').forEach((radio) => {
    radio.checked = radio.value === state[radio.name];
  });
}

function readForm() {
  const form = document.getElementById("filter-form");
  state.q = form.q.value;
  state.players = form.players.value;
  state.time = form.time.value;
  state.saved = form.saved.checked ? "1" : "";
  state.sort = document.getElementById("f-sort").value;
  state.level = form.querySelector('input[name="level"]:checked')?.value || "";
  state.cat = form.querySelector('input[name="cat"]:checked')?.value || "";
}

// ===== Link =====

function readUrl() {
  const params = new URLSearchParams(window.location.search);
  Object.keys(DEFAULTS).forEach((key) => {
    if (params.has(key)) state[key] = params.get(key);
  });
  if (!SORTS[state.sort]) state.sort = DEFAULTS.sort;
}

function writeUrl() {
  const params = new URLSearchParams();
  Object.keys(DEFAULTS).forEach((key) => {
    if (state[key] && state[key] !== DEFAULTS[key]) params.set(key, state[key]);
  });
  const query = params.toString();
  history.replaceState(null, "", query ? `?${query}` : window.location.pathname);
}

// ===== Kết quả =====

function render() {
  const results = GAMES.filter(matches).sort(SORTS[state.sort].compare);
  document.getElementById("game-grid").innerHTML = results.slice(0, state.shown).map(renderCard).join("");
  document.getElementById("result-count").innerHTML =
    `<strong class="metal-text">${results.length}</strong> / ${GAMES.length} game`;
  const emptyNote = document.getElementById("empty-note");
  emptyNote.hidden = results.length > 0;
  emptyNote.textContent = state.saved && getShelf().length === 0
    ? "Tủ game đang trống. Mở một game và bấm \"♡ Lưu vào tủ game\" để lưu lại."
    : "Không có game nào khớp bộ lọc. Thử bỏ bớt điều kiện nhé.";
  document.getElementById("more-btn").hidden = state.shown >= results.length;

  const activeCol = document.getElementById("active-col");
  const collection = COLLECTIONS.find((item) => item.id === state.col);
  activeCol.hidden = !collection;
  if (collection) {
    activeCol.innerHTML = `Bộ sưu tập: <strong>${collection.title}</strong>
      <button type="button" class="lux-chip-close" id="clear-col" aria-label="Bỏ lọc bộ sưu tập">✕</button>`;
  }
  writeUrl();
}

function update() {
  readForm();
  state.shown = PAGE_SIZE;
  render();
}

document.addEventListener("DOMContentLoaded", () => {
  renderControls();
  readUrl();
  syncForm();
  render();

  // Trên điện thoại bộ lọc thu gọn sẵn
  if (window.innerWidth <= 1000) document.getElementById("lux-filters").open = false;

  const form = document.getElementById("filter-form");
  form.addEventListener("input", update);
  form.addEventListener("change", update);
  form.addEventListener("submit", (event) => event.preventDefault());
  document.getElementById("f-sort").addEventListener("change", update);

  document.getElementById("f-reset").addEventListener("click", () => {
    Object.assign(state, DEFAULTS, { shown: PAGE_SIZE });
    syncForm();
    render();
  });

  document.getElementById("more-btn").addEventListener("click", () => {
    state.shown += PAGE_SIZE;
    render();
  });

  document.getElementById("active-col").addEventListener("click", (event) => {
    if (!event.target.closest("#clear-col")) return;
    state.col = "";
    render();
  });
});
