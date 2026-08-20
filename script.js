/* ==========================================================================
   EDIT YOUR FRIEND DATA HERE
   ==========================================================================
   Each friend is one object below. To customize:

   - name       -> Friend's full name (text)
   - stream     -> Must exactly match one of:
                   "Computer Science & Engineering", "Information Technology",
                   "Electronics & Communication Engineering", "Electrical Engineering",
                   "Mechanical Engineering", "Civil Engineering", "Other"
   - birthday   -> Format "YYYY-MM-DD" (the year doesn't matter, only month/day is used)
   - image      -> Path to their photo, e.g. "images/friend01.jpg"
                   (if the file is missing, a colored initials avatar shows automatically)
   - about      -> A short one or two sentence description shown in their profile popup

   TO ADD A NEW FRIEND: copy any object below (including the { } and comma),
   paste it into the array, and fill in the new details.

   TO REMOVE A FRIEND: delete their entire { ... } object (and its trailing comma).
   ========================================================================== */

const friends = [
  { name: "Sanjay Das", stream: "Computer Science & Engineering", birthday: "2007-08-25", image: "1.jpeg", about: "Loves late-night coding sessions and always ready to debug a tricky problem." },
  { name: "Friend 02", stream: "Information Technology", birthday: "2004-04-22", image: "images/friend02.jpg", about: "The trip planner of the group — always finding the next adventure." },
  { name: "Friend 03", stream: "Electronics & Communication Engineering", birthday: "2003-01-19", image: "images/friend03.jpg", about: "Known for epic dance moves and infectious laughter at every gathering." },
  { name: "Friend 04", stream: "Electrical Engineering", birthday: "2004-01-26", image: "images/friend04.jpg", about: "Our go-to person for exam-time notes and last-minute doubts." },
  { name: "Friend 05", stream: "Mechanical Engineering", birthday: "2003-02-02", image: "images/friend05.jpg", about: "A foodie who knows the best canteen snacks on campus." },
  { name: "Friend 06", stream: "Civil Engineering", birthday: "2004-02-09", image: "images/friend06.jpg", about: "Always up for a late-night movie marathon or a cricket match." },
  { name: "Friend 07", stream: "Other", birthday: "2003-02-16", image: "images/friend07.jpg", about: "The one who remembers everyone's birthday before anyone else." },
  { name: "Friend 08", stream: "Computer Science & Engineering", birthday: "2004-02-23", image: "images/friend08.jpg", about: "A calm, dependable friend who's there whenever you need advice." },
  { name: "Friend 09", stream: "Information Technology", birthday: "2003-03-02", image: "images/friend09.jpg", about: "Turns every boring lecture into a fun story worth remembering." },
  { name: "Friend 10", stream: "Electronics & Communication Engineering", birthday: "2004-03-09", image: "images/friend10.jpg", about: "The group's photographer, capturing every unforgettable moment." },
  { name: "Friend 11", stream: "Electrical Engineering", birthday: "2003-03-16", image: "images/friend11.jpg", about: "Loves late-night coding sessions and always ready to debug a tricky problem." },
  { name: "Friend 12", stream: "Mechanical Engineering", birthday: "2004-03-23", image: "images/friend12.jpg", about: "The trip planner of the group — always finding the next adventure." },
  { name: "Friend 13", stream: "Civil Engineering", birthday: "2003-03-30", image: "images/friend13.jpg", about: "Known for epic dance moves and infectious laughter at every gathering." },
  { name: "Friend 14", stream: "Other", birthday: "2004-04-06", image: "images/friend14.jpg", about: "Our go-to person for exam-time notes and last-minute doubts." },
  { name: "Friend 15", stream: "Computer Science & Engineering", birthday: "2003-04-13", image: "images/friend15.jpg", about: "A foodie who knows the best canteen snacks on campus." },
  { name: "Friend 16", stream: "Information Technology", birthday: "2004-04-20", image: "images/friend16.jpg", about: "Always up for a late-night movie marathon or a cricket match." },
  { name: "Friend 17", stream: "Electronics & Communication Engineering", birthday: "2003-04-27", image: "images/friend17.jpg", about: "The one who remembers everyone's birthday before anyone else." },
  { name: "Friend 18", stream: "Electrical Engineering", birthday: "2004-05-04", image: "images/friend18.jpg", about: "A calm, dependable friend who's there whenever you need advice." },
  { name: "Friend 19", stream: "Mechanical Engineering", birthday: "2003-05-11", image: "images/friend19.jpg", about: "Turns every boring lecture into a fun story worth remembering." },
  { name: "Friend 20", stream: "Civil Engineering", birthday: "2004-05-18", image: "images/friend20.jpg", about: "The group's photographer, capturing every unforgettable moment." },
  { name: "Friend 21", stream: "Other", birthday: "2003-05-25", image: "images/friend21.jpg", about: "Loves late-night coding sessions and always ready to debug a tricky problem." },
  { name: "Friend 22", stream: "Computer Science & Engineering", birthday: "2004-06-01", image: "images/friend22.jpg", about: "The trip planner of the group — always finding the next adventure." },
  { name: "Friend 23", stream: "Information Technology", birthday: "2003-06-08", image: "images/friend23.jpg", about: "Known for epic dance moves and infectious laughter at every gathering." },
  { name: "Friend 24", stream: "Electronics & Communication Engineering", birthday: "2004-06-15", image: "images/friend24.jpg", about: "Our go-to person for exam-time notes and last-minute doubts." },
  { name: "Friend 25", stream: "Electrical Engineering", birthday: "2003-02-18", image: "images/friend25.jpg", about: "A foodie who knows the best canteen snacks on campus." },
  { name: "Friend 26", stream: "Mechanical Engineering", birthday: "2004-06-29", image: "images/friend26.jpg", about: "Always up for a late-night movie marathon or a cricket match." },
  { name: "Friend 27", stream: "Civil Engineering", birthday: "2003-07-06", image: "images/friend27.jpg", about: "The one who remembers everyone's birthday before anyone else." },
  { name: "Friend 28", stream: "Other", birthday: "2004-07-13", image: "images/friend28.jpg", about: "A calm, dependable friend who's there whenever you need advice." },
  { name: "Friend 29", stream: "Computer Science & Engineering", birthday: "2003-07-20", image: "images/friend29.jpg", about: "Turns every boring lecture into a fun story worth remembering." },
  { name: "Friend 30", stream: "Information Technology", birthday: "2004-07-27", image: "images/friend30.jpg", about: "The group's photographer, capturing every unforgettable moment." },
  { name: "Friend 31", stream: "Electronics & Communication Engineering", birthday: "2003-08-03", image: "images/friend31.jpg", about: "Loves late-night coding sessions and always ready to debug a tricky problem." },
  { name: "Friend 32", stream: "Electrical Engineering", birthday: "2004-08-10", image: "images/friend32.jpg", about: "The trip planner of the group — always finding the next adventure." },
  { name: "Friend 33", stream: "Mechanical Engineering", birthday: "2003-08-17", image: "images/friend33.jpg", about: "Known for epic dance moves and infectious laughter at every gathering." },
  { name: "Friend 34", stream: "Civil Engineering", birthday: "2004-05-19", image: "images/friend34.jpg", about: "Our go-to person for exam-time notes and last-minute doubts." },
  { name: "Friend 35", stream: "Other", birthday: "2003-08-24", image: "images/friend35.jpg", about: "A foodie who knows the best canteen snacks on campus." },
  { name: "Friend 36", stream: "Computer Science & Engineering", birthday: "2004-08-31", image: "images/friend36.jpg", about: "Always up for a late-night movie marathon or a cricket match." },
  { name: "Friend 37", stream: "Information Technology", birthday: "2003-09-07", image: "images/friend37.jpg", about: "The one who remembers everyone's birthday before anyone else." },
  { name: "Friend 38", stream: "Electronics & Communication Engineering", birthday: "2004-09-14", image: "images/friend38.jpg", about: "A calm, dependable friend who's there whenever you need advice." },
  { name: "Friend 39", stream: "Electrical Engineering", birthday: "2003-09-21", image: "images/friend39.jpg", about: "Turns every boring lecture into a fun story worth remembering." },
  { name: "Friend 40", stream: "Mechanical Engineering", birthday: "2004-09-28", image: "images/friend40.jpg", about: "The group's photographer, capturing every unforgettable moment." },
  { name: "Friend 41", stream: "Civil Engineering", birthday: "2003-10-05", image: "images/friend41.jpg", about: "Loves late-night coding sessions and always ready to debug a tricky problem." },
  { name: "Friend 42", stream: "Other", birthday: "2004-10-12", image: "images/friend42.jpg", about: "The trip planner of the group — always finding the next adventure." },
  { name: "Friend 43", stream: "Computer Science & Engineering", birthday: "2003-10-19", image: "images/friend43.jpg", about: "Known for epic dance moves and infectious laughter at every gathering." },
  { name: "Friend 44", stream: "Information Technology", birthday: "2004-10-26", image: "images/friend44.jpg", about: "Our go-to person for exam-time notes and last-minute doubts." },
  { name: "Friend 45", stream: "Electronics & Communication Engineering", birthday: "2003-11-02", image: "images/friend45.jpg", about: "A foodie who knows the best canteen snacks on campus." },
  { name: "Friend 46", stream: "Electrical Engineering", birthday: "2004-11-09", image: "images/friend46.jpg", about: "Always up for a late-night movie marathon or a cricket match." },
  { name: "Friend 47", stream: "Mechanical Engineering", birthday: "2003-11-16", image: "images/friend47.jpg", about: "The one who remembers everyone's birthday before anyone else." },
  { name: "Friend 48", stream: "Civil Engineering", birthday: "2004-11-23", image: "images/friend48.jpg", about: "A calm, dependable friend who's there whenever you need advice." },
  { name: "Friend 49", stream: "Other", birthday: "2003-12-01", image: "images/friend49.jpg", about: "Turns every boring lecture into a fun story worth remembering." },
  { name: "Friend 50", stream: "Computer Science & Engineering", birthday: "2004-12-25", image: "images/friend50.jpg", about: "The group's photographer, capturing every unforgettable moment." }
];

/* Note: Friend 25's birthday is set close to today on purpose so you can see
   the "Birthday Today" / confetti features working immediately. Change it
   to their real birthday once you've seen the demo. */


/* ==========================================================================
   STATE
   ========================================================================== */
const state = {
  search: "",
  stream: "All",
  sort: "default",
  lastCheckedDate: new Date().toDateString(),
  confettiLaunchedToday: false
};

/* ==========================================================================
   DOM REFERENCES
   ========================================================================== */
const loadingScreen = document.getElementById("loadingScreen");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");
const themeToggleBtn = document.getElementById("themeToggle");
const musicToggleBtn = document.getElementById("musicToggle");
const bgMusic = document.getElementById("bgMusic");

const heroPhoto = document.getElementById("heroPhoto");
const heroFriendName = document.getElementById("heroFriendName");
const heroCountdownWrap = document.getElementById("heroCountdownWrap");
const heroDays = document.getElementById("heroDays");
const heroHours = document.getElementById("heroHours");
const heroMinutes = document.getElementById("heroMinutes");
const heroSeconds = document.getElementById("heroSeconds");
const heroCelebrateMsg = document.getElementById("heroCelebrateMsg");

const statTotal = document.getElementById("statTotal");
const statUpcoming = document.getElementById("statUpcoming");
const statToday = document.getElementById("statToday");
const statTopStream = document.getElementById("statTopStream");

const todayContainer = document.getElementById("todayContainer");
const upcomingContainer = document.getElementById("upcomingContainer");

const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const sortSelect = document.getElementById("sortSelect");
const friendsGrid = document.getElementById("friendsGrid");
const randomBtn = document.getElementById("randomBtn");
const surpriseBtn = document.getElementById("surpriseBtn");

const modal = document.getElementById("friendModal");
const modalCloseBtn = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalStream = document.getElementById("modalStream");
const modalBirthdayEl = document.getElementById("modalBirthday");
const modalStatusEl = document.getElementById("modalStatus");
const modalCountdownEl = document.getElementById("modalCountdown");
const modalAbout = document.getElementById("modalAbout");

const galleryGrid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCloseBtn = document.getElementById("lightboxClose");

const surpriseOverlay = document.getElementById("surpriseOverlay");
const surprisePhoto = document.getElementById("surprisePhoto");
const surpriseMessageEl = document.getElementById("surpriseMessage");
const surpriseCloseBtn = document.getElementById("surpriseClose");

const confettiContainer = document.getElementById("confettiContainer");
const backToTopBtn = document.getElementById("backToTopBtn");

/* ==========================================================================
   UTILITY FUNCTIONS
   ========================================================================== */
function isLeapYear(y) {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
}

// Returns true if today's real-world date matches this friend's birthday (month/day)
function isBirthdayToday(birthdayStr) {
  const now = new Date();
  const b = new Date(birthdayStr);
  let day = b.getDate();
  const month = b.getMonth();
  if (month === 1 && day === 29 && !isLeapYear(now.getFullYear())) day = 28; // Feb 29 -> observe Feb 28 on non-leap years
  return now.getMonth() === month && now.getDate() === day;
}

// Finds the next occurrence (this year or next) of a friend's birthday as a Date at midnight
function getNextBirthdayDate(birthdayStr) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const b = new Date(birthdayStr);
  const month = b.getMonth();
  let year = today.getFullYear();
  let day = b.getDate();
  if (month === 1 && day === 29 && !isLeapYear(year)) day = 28;

  let next = new Date(year, month, day);
  if (next <= today) {
    year += 1;
    day = b.getDate();
    if (month === 1 && day === 29 && !isLeapYear(year)) day = 28;
    next = new Date(year, month, day);
  }
  return next;
}

function getDaysRemaining(birthdayStr) {
  if (isBirthdayToday(birthdayStr)) return -1;
  const diff = getNextBirthdayDate(birthdayStr) - new Date();
  return Math.ceil(diff / 86400000);
}

function getCountdownParts(diffMs) {
  if (diffMs < 0) diffMs = 0;
  return {
    days: Math.floor(diffMs / 86400000),
    hours: Math.floor((diffMs % 86400000) / 3600000),
    minutes: Math.floor((diffMs % 3600000) / 60000),
    seconds: Math.floor((diffMs % 60000) / 1000)
  };
}

function pad(n) { return String(n).padStart(2, "0"); }

function formatDateDisplay(birthdayStr) {
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date(birthdayStr);
  return `${d.getDate()} ${months[d.getMonth()]}`;
}

// Generates a colored initials avatar (data URI) so missing photos never break the site
function generateAvatarPlaceholder(name) {
  const initials = name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
  const colors = ["6C5CE7","00B894","0984E3","E17055","FD79A8","00CEC9","FDCB6E","FF6B6B"];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  const color = colors[Math.abs(hash) % colors.length];
  const svg = `<svg xmlns='[w3.org](http://www.w3.org/2000/svg)' width='300' height='300'><rect width='100%' height='100%' fill='#${color}'/><text x='50%' y='50%' font-size='110' fill='#fff' font-family='Poppins, Arial, sans-serif' font-weight='600' text-anchor='middle' dominant-baseline='central'>${initials}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function attachImageFallback(img, name) {
  img.addEventListener("error", function handler() {
    img.removeEventListener("error", handler);
    img.src = generateAvatarPlaceholder(name);
  });
}

/* ==========================================================================
   DATA HELPERS
   ========================================================================== */
function getTodaysBirthdayFriends() {
  return friends.filter(f => isBirthdayToday(f.birthday));
}

function getUpcomingBirthdays(count = 5) {
  return friends
    .filter(f => !isBirthdayToday(f.birthday))
    .map(f => ({ friend: f, date: getNextBirthdayDate(f.birthday) }))
    .sort((a, b) => a.date - b.date)
    .slice(0, count);
}

function findNextBirthdayFriend() {
  let best = null;
  friends.forEach(f => {
    if (isBirthdayToday(f.birthday)) return;
    const date = getNextBirthdayDate(f.birthday);
    const diff = date - new Date();
    if (!best || diff < best.diff) best = { friend: f, date, diff };
  });
  return best;
}

/* ==========================================================================
   RENDER: HERO
   ========================================================================== */
function updateHeroCountdown() {
  const now = new Date();
  const todays = getTodaysBirthdayFriends();

  if (todays.length > 0) {
    const f = todays[0];
    heroPhoto.src = f.image;
    attachImageFallback(heroPhoto, f.name);
    heroFriendName.textContent = `🎉 It's ${f.name}'s Birthday Today!`;
    heroCountdownWrap.classList.add("hidden");
    heroCelebrateMsg.classList.remove("hidden");
  } else {
    const best = findNextBirthdayFriend();
    if (!best) return;
    heroCelebrateMsg.classList.add("hidden");
    heroCountdownWrap.classList.remove("hidden");
    heroPhoto.src = best.friend.image;
    attachImageFallback(heroPhoto, best.friend.name);
    heroFriendName.textContent = `Next Birthday: ${best.friend.name} 🎉`;
    const parts = getCountdownParts(best.date - now);
    heroDays.textContent = pad(parts.days);
    heroHours.textContent = pad(parts.hours);
    heroMinutes.textContent = pad(parts.minutes);
    heroSeconds.textContent = pad(parts.seconds);
  }
}

/* ==========================================================================
   RENDER: STATS
   ========================================================================== */
function renderStats() {
  statTotal.textContent = friends.length;

  const upcoming30 = friends.filter(f => {
    if (isBirthdayToday(f.birthday)) return false;
    return getDaysRemaining(f.birthday) <= 30;
  }).length;
  statUpcoming.textContent = upcoming30;

  statToday.textContent = getTodaysBirthdayFriends().length;

  const freq = {};
  friends.forEach(f => { freq[f.stream] = (freq[f.stream] || 0) + 1; });
  let top = "-", max = 0;
  Object.entries(freq).forEach(([k, v]) => { if (v > max) { max = v; top = k; } });
  statTopStream.textContent = top;
}

/* ==========================================================================
   RENDER: TODAY SECTION
   ========================================================================== */
function renderTodayBirthdays() {
  const todays = getTodaysBirthdayFriends();

  if (todays.length === 0) {
    todayContainer.innerHTML = `<p class="no-birthday-msg">No birthdays today. But there are plenty of celebrations coming! 😊</p>`;
    return;
  }

  todayContainer.innerHTML = todays.map(f => `
    <div class="today-card">
      <div class="today-badge">🎉 Happy Birthday!</div>
      <img class="today-photo" src="${f.image}" alt="${f.name}">
      <h3>${f.name}</h3>
      <p>${f.stream}</p>
      <p class="today-date">${formatDateDisplay(f.birthday)}</p>
    </div>
  `).join("");

  todayContainer.querySelectorAll(".today-photo").forEach((img, i) => attachImageFallback(img, todays[i].name));

  if (!state.confettiLaunchedToday) {
    launchConfetti();
    state.confettiLaunchedToday = true;
  }
}

/* ==========================================================================
   RENDER: UPCOMING SECTION
   ========================================================================== */
let upcomingCache = [];

function renderUpcomingBirthdays() {
  upcomingCache = getUpcomingBirthdays(5);

  upcomingContainer.innerHTML = upcomingCache.map((item, i) => `
    <div class="upcoming-item">
      <img class="upcoming-photo" src="${item.friend.image}" alt="${item.friend.name}">
      <div class="upcoming-info">
        <h4>${item.friend.name}</h4>
        <p>${formatDateDisplay(item.friend.birthday)}</p>
        <span class="upcoming-days" id="updays-${i}">-- days left</span>
      </div>
    </div>
  `).join("");

  upcomingContainer.querySelectorAll(".upcoming-photo").forEach((img, i) => attachImageFallback(img, upcomingCache[i].friend.name));
}

function updateUpcomingCountdowns(now) {
  upcomingCache.forEach((item, i) => {
    const days = Math.ceil((item.date - now) / 86400000);
    const el = document.getElementById(`updays-${i}`);
    if (el) el.textContent = `${days} day${days !== 1 ? "s" : ""} left`;
  });
}

/* ==========================================================================
   RENDER: FRIENDS GRID
   ========================================================================== */
function createFriendCardHTML(friend, index) {
  const today = isBirthdayToday(friend.birthday);
  return `
    <div class="friend-card ${today ? "birthday-today" : ""}" data-index="${index}">
      ${today ? `<div class="birthday-badge">🎉 Happy Birthday!</div>` : ""}
      <div class="friend-photo-wrap">
        <img class="friend-photo" src="${friend.image}" alt="${friend.name}">
      </div>
      <h3 class="friend-name">${friend.name}</h3>
      <p class="friend-stream"><i class="fa-solid fa-graduation-cap"></i>${friend.stream}</p>
      <p class="friend-birthday"><i class="fa-solid fa-cake-candles"></i>${formatDateDisplay(friend.birthday)}</p>
      <div class="friend-countdown">
        ${today
          ? `<span class="celebrate-text">🎉 Happy Birthday!</span>`
          : `<div class="countdown-mini">
               <div class="cd-unit"><span class="cd-num" id="days-${index}">--</span><span class="cd-label">Days</span></div>
               <div class="cd-unit"><span class="cd-num" id="hours-${index}">--</span><span class="cd-label">Hrs</span></div>
               <div class="cd-unit"><span class="cd-num" id="mins-${index}">--</span><span class="cd-label">Min</span></div>
               <div class="cd-unit"><span class="cd-num" id="secs-${index}">--</span><span class="cd-label">Sec</span></div>
             </div>`}
      </div>
      <span class="view-profile-hint">Click to view profile</span>
    </div>
  `;
}

function getFilteredSortedFriends() {
  let list = friends.map((f, idx) => ({ ...f, _index: idx }));

  if (state.search) {
    const q = state.search.toLowerCase();
    list = list.filter(f => f.name.toLowerCase().includes(q) || f.stream.toLowerCase().includes(q));
  }

  if (state.stream !== "All") {
    list = list.filter(f => f.stream === state.stream);
  }

  switch (state.sort) {
    case "nameAsc": list.sort((a, b) => a.name.localeCompare(b.name)); break;
    case "nameDesc": list.sort((a, b) => b.name.localeCompare(a.name)); break;
    case "upcoming": list.sort((a, b) => getDaysRemaining(a.birthday) - getDaysRemaining(b.birthday)); break;
    case "stream": list.sort((a, b) => a.stream.localeCompare(b.stream)); break;
    default: break;
  }

  return list;
}

function renderFriendsGrid() {
  const list = getFilteredSortedFriends();

  if (list.length === 0) {
    friendsGrid.innerHTML = `<p class="no-results">No friends found matching your search 😢</p>`;
    return;
  }

  friendsGrid.innerHTML = list.map(f => createFriendCardHTML(f, f._index)).join("");

  friendsGrid.querySelectorAll(".friend-photo").forEach(img => {
    const idx = img.closest(".friend-card").dataset.index;
    attachImageFallback(img, friends[idx].name);
  });
}

/* ==========================================================================
   MASTER COUNTDOWN TICK (runs every second)
   ========================================================================== */
function updateAllCountdowns() {
  const now = new Date();

  updateHeroCountdown();
  updateUpcomingCountdowns(now);

  document.querySelectorAll(".friend-card:not(.birthday-today)").forEach(card => {
    const idx = card.dataset.index;
    const friend = friends[idx];
    if (!friend) return;
    const diff = getNextBirthdayDate(friend.birthday) - now;
    const p = getCountdownParts(diff);
    const d = document.getElementById(`days-${idx}`);
    const h = document.getElementById(`hours-${idx}`);
    const m = document.getElementById(`mins-${idx}`);
    const s = document.getElementById(`secs-${idx}`);
    if (d) d.textContent = pad(p.days);
    if (h) h.textContent = pad(p.hours);
    if (m) m.textContent = pad(p.minutes);
    if (s) s.textContent = pad(p.seconds);
  });

  if (modal.classList.contains("active") && modal._currentFriend) {
    updateModalCountdown(modal._currentFriend);
  }

  const todayStr = now.toDateString();
  if (todayStr !== state.lastCheckedDate) {
    state.lastCheckedDate = todayStr;
    state.confettiLaunchedToday = false;
    renderStats();
    renderTodayBirthdays();
    renderUpcomingBirthdays();
    renderFriendsGrid();
  }
}

/* ==========================================================================
   CONFETTI
   ========================================================================== */
function launchConfetti() {
  const colors = ["#ff6b6b", "#feca57", "#48dbfb", "#1dd1a1", "#ff9ff3", "#54a0ff"];
  for (let i = 0; i < 90; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 6 + 6;
    piece.style.width = size + "px";
    piece.style.height = size + "px";
    piece.style.opacity = Math.random() * 0.6 + 0.4;
    piece.style.animationDuration = Math.random() * 2 + 3 + "s";
    confettiContainer.appendChild(piece);
    setTimeout(() => piece.remove(), 5500);
  }
}

/* ==========================================================================
   FRIEND PROFILE MODAL
   ========================================================================== */
function openFriendModal(friend) {
  modalImage.src = friend.image;
  attachImageFallback(modalImage, friend.name);
  modalName.textContent = friend.name;
  modalStream.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> ${friend.stream}`;
  modalBirthdayEl.innerHTML = `<i class="fa-solid fa-cake-candles"></i> ${formatDateDisplay(friend.birthday)}`;
  modalAbout.textContent = friend.about;
  updateModalCountdown(friend);
  modal._currentFriend = friend;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function updateModalCountdown(friend) {
  if (isBirthdayToday(friend.birthday)) {
    modalStatusEl.innerHTML = `<span class="status-today">🎉 It's their birthday today!</span>`;
    modalCountdownEl.innerHTML = "";
  } else {
    modalStatusEl.innerHTML = `<span class="status-upcoming">Upcoming Birthday</span>`;
    const p = getCountdownParts(getNextBirthdayDate(friend.birthday) - new Date());
    modalCountdownEl.innerHTML = `
      <div class="cd-unit"><span class="cd-num">${pad(p.days)}</span><span class="cd-label">Days</span></div>
      <div class="cd-unit"><span class="cd-num">${pad(p.hours)}</span><span class="cd-label">Hrs</span></div>
      <div class="cd-unit"><span class="cd-num">${pad(p.minutes)}</span><span class="cd-label">Min</span></div>
      <div class="cd-unit"><span class="cd-num">${pad(p.seconds)}</span><span class="cd-label">Sec</span></div>`;
  }
}

function closeFriendModal() {
  modal.classList.remove("active");
  modal._currentFriend = null;
  document.body.style.overflow = "";
}

/* ==========================================================================
   INITIALIZATION & EVENT LISTENERS
   ========================================================================== */
function init() {
  // Theme
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  // Initial render
  renderStats();
  renderTodayBirthdays();
  renderUpcomingBirthdays();
  renderFriendsGrid();
  updateHeroCountdown();

  setInterval(updateAllCountdowns, 1000);

  // Search
  searchInput.addEventListener("input", e => {
    state.search = e.target.value.trim();
    renderFriendsGrid();
  });

  // Filter buttons
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.stream = btn.dataset.stream;
      renderFriendsGrid();
    });
  });

  // Sort
  sortSelect.addEventListener("change", e => {
    state.sort = e.target.value;
    renderFriendsGrid();
  });

  // Card click -> open modal
  friendsGrid.addEventListener("click", e => {
    const card = e.target.closest(".friend-card");
    if (!card) return;
    const friend = friends[card.dataset.index];
    if (friend) openFriendModal(friend);
  });

  modalCloseBtn.addEventListener("click", closeFriendModal);
  modal.addEventListener("click", e => { if (e.target === modal) closeFriendModal(); });

  // Random & Surprise
  randomBtn.addEventListener("click", () => {
    const f = friends[Math.floor(Math.random() * friends.length)];
    openFriendModal(f);
  });

  surpriseBtn.addEventListener("click", () => {
    const f = friends[Math.floor(Math.random() * friends.length)];
    surprisePhoto.src = f.image;
    attachImageFallback(surprisePhoto, f.name);
    surpriseMessageEl.textContent = `You got ${f.name}! 🎉`;
    surpriseOverlay.classList.add("active");
    launchConfetti();
  });
  surpriseCloseBtn.addEventListener("click", () => surpriseOverlay.classList.remove("active"));
  surpriseOverlay.addEventListener("click", e => { if (e.target === surpriseOverlay) surpriseOverlay.classList.remove("active"); });

  // Theme toggle
  themeToggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeIcon(next);
  });

  // Music toggle (manual only — never autoplays)
  let musicPlaying = false;
  musicToggleBtn.addEventListener("click", () => {
    if (musicPlaying) {
      bgMusic.pause();
      musicToggleBtn.innerHTML = '<i class="fa-solid fa-music"></i>';
    } else {
      bgMusic.play().catch(() => console.warn("Add your audio file at music/birthday.mp3 to enable playback."));
      musicToggleBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    }
    musicPlaying = !musicPlaying;
  });

  // Mobile nav
  hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburgerBtn.classList.toggle("active");
  });
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburgerBtn.classList.remove("active");
    });
  });

  // Gallery lightbox
  galleryGrid.addEventListener("click", e => {
    if (e.target.tagName === "IMG") {
      lightboxImg.src = e.target.src;
      lightbox.classList.add("active");
    }
  });
  lightboxCloseBtn.addEventListener("click", () => lightbox.classList.remove("active"));
  lightbox.addEventListener("click", e => { if (e.target === lightbox) lightbox.classList.remove("active"); });

  // Escape key closes any open overlay
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeFriendModal();
      lightbox.classList.remove("active");
      surpriseOverlay.classList.remove("active");
    }
  });

  // Back to top
  window.addEventListener("scroll", () => {
    backToTopBtn.classList.toggle("show", window.scrollY > 400);
  });
  backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Loading screen
  window.addEventListener("load", () => {
    setTimeout(() => {
      loadingScreen.classList.add("fade-out");
      setTimeout(() => (loadingScreen.style.display = "none"), 600);
    }, 500);
  });
}

function updateThemeIcon(theme) {
  themeToggleBtn.innerHTML = theme === "dark" ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

document.addEventListener("DOMContentLoaded", init);
