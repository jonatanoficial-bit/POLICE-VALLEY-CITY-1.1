// ================================================
// VALE GAMES — RUNTIME LAYER (Audio + Build + Fallbacks)
// Build: 2026-02-13 16:51:47 UTC
// ================================================

(() => {
  // -----------------------
  // Build info (visible)
  // -----------------------
  const BUILD = "2026-02-13 16:51:47 UTC";
  const VERSION = "v1.1";
  function ensureBuildBadge() {
    let el = document.getElementById("buildInfo");
    if (!el) {
      el = document.createElement("div");
      el.id = "buildInfo";
      document.body.appendChild(el);
    }
    el.textContent = `BUILD ${VERSION} • ${BUILD}`;
  }

  // -----------------------
  // Global image fallback
  // -----------------------
  const PLACEHOLDER = "assets/placeholder.png";
  window.addEventListener("error", (e) => {
    const t = e.target;
    if (t && t.tagName === "IMG") {
      if (!t.dataset.fallbackApplied) {
        t.dataset.fallbackApplied = "1";
        t.src = PLACEHOLDER;
      }
    }
  }, true);

  // -----------------------
  // Single background music
  // -----------------------
  const music = new Audio("audio/main_theme.mp3");
  music.loop = true;
  music.volume = 0.35;
  let started = false;

  function startMusic() {
    if (started) return;
    started = true;
    music.play().catch(() => {
      // autoplay blocked; user gesture will retry
      started = false;
    });
  }

  // start after first user gesture (mobile safe)
  window.addEventListener("pointerdown", startMusic, { once: true, passive: true });
  window.addEventListener("keydown", startMusic, { once: true });

  function ensureMusicToggle() {
    let btn = document.getElementById("musicToggle");
    if (btn) return;

    btn = document.createElement("button");
    btn.id = "musicToggle";
    btn.type = "button";
    btn.title = "Som (M)";

    const syncIcon = () => {
      btn.textContent = music.muted ? "🔇" : "🔊";
    };
    syncIcon();

    btn.addEventListener("click", () => {
      // guarantee start on interaction
      startMusic();
      music.muted = !music.muted;
      syncIcon();
    });

    document.body.appendChild(btn);

    // keyboard shortcut
    window.addEventListener("keydown", (e) => {
      if (e.key && e.key.toLowerCase() === "m") {
        startMusic();
        music.muted = !music.muted;
        syncIcon();
      }
    });
  }

  // -----------------------
  // Reset button hook (if exists)
  // -----------------------
  function bindResetButton() {
    const btn = document.getElementById("resetGameBtn");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const ok = confirm("Isso vai apagar seu progresso salvo e reiniciar o jogo. Deseja continuar?");
      if (!ok) return;
      try { localStorage.removeItem("valleyCitySave"); } catch (e) {}
      location.reload();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    ensureBuildBadge();
    ensureMusicToggle();
    bindResetButton();
  });
})();
