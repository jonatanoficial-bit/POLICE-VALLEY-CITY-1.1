// === VALE GAMES: RESET (Complete v1) ===
(() => {
  function resetGame() {
    try { localStorage.clear(); } catch (e) {}
    location.reload();
  }
  window.__VALE_RESET_GAME__ = resetGame;
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("resetGame");
    if (btn) btn.addEventListener("click", resetGame);
  });
})();
