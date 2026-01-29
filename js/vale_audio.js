// === VALE GAMES: AUDIO + FALLBACKS (Complete v1) ===
(() => {
  const music = new Audio("audio/main_theme.mp3");
  music.loop = true;
  music.volume = 0.40;

  let started = false;
  const start = () => {
    if (started) return;
    started = true;
    music.play().catch(() => {});
  };

  // mobile-safe: start after first user gesture
  window.addEventListener("pointerdown", start, { once: true, passive: true });
  window.addEventListener("keydown", start, { once: true });

  // toggle button
  const ensureToggle = () => {
    if (document.getElementById("musicToggle")) return;
    const btn = document.createElement("button");
    btn.id = "musicToggle";
    btn.type = "button";
    btn.textContent = "🔊";
    btn.title = "Som (M)";
    btn.addEventListener("click", () => {
      start();
      music.muted = !music.muted;
      btn.textContent = music.muted ? "🔇" : "🔊";
    });
    document.body.appendChild(btn);
  };

  document.addEventListener("DOMContentLoaded", ensureToggle);

  window.addEventListener("keydown", (e) => {
    if (e.key && e.key.toLowerCase() === "m") {
      start();
      music.muted = !music.muted;
      const btn = document.getElementById("musicToggle");
      if (btn) btn.textContent = music.muted ? "🔇" : "🔊";
    }
  });

  // global image fallback (no broken 404 visuals)
  const placeholder = "assets/placeholder.png";
  window.addEventListener("error", (e) => {
    const t = e.target;
    if (t && t.tagName === "IMG") {
      if (!t.dataset.fallbackApplied) {
        t.dataset.fallbackApplied = "1";
        t.src = placeholder;
      }
    }
  }, true);
})();
