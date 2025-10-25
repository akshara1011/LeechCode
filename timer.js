chrome.storage.sync.get(["timer"], (data) => {
  let timerDuration = data.timer || 600; // default to 10 minutes if not set
  let remaining = timerDuration;

  function showTimer() {
    // Remove old timer if exists
    const oldTimer = document.getElementById("leechcode-timer");
    if (oldTimer) oldTimer.remove();

    const timerBox = document.createElement("div");
    timerBox.id = "leechcode-timer";
    timerBox.style = `
      position: fixed; top: 10px; right: 10px;
      background: rgba(0,0,0,0.7); color: #fff;
      padding: 8px 12px; border-radius: 6px;
      font-family: Arial; z-index: 9999;
      font-size: 14px;
    `;
    document.body.appendChild(timerBox);

    const update = () => {
      timerBox.textContent = "Focus Time Left: " + Math.ceil(remaining / 60) + " min";
      if (remaining <= 0) {
        alert("Focus time's up! Redirecting you away from YouTube.");
        window.location.href = "https://www.google.com";
      }
      remaining--;
    };
    update();
    setInterval(update, 1000);
  }

  if (window.location.href.includes("youtube.com/watch")) {
    showTimer();
  }
});
