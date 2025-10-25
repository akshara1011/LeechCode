document.getElementById("save").addEventListener("click", () => {
  const mins = parseInt(document.getElementById("minutes").value);
  if (Number.isNaN(mins) || mins < 1) {
    document.getElementById("status").textContent = "Please enter a valid number of minutes.";
    return;
  }
  chrome.storage.sync.set({ timer: mins * 60 }, () => {
    document.getElementById("status").textContent = "Timer saved!";
  });
});

chrome.storage.sync.get(["timer"], (data) => {
  if (data.timer) {
    document.getElementById("minutes").value = data.timer / 60;
  }
});
