chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
  if (details.url.includes("youtube.com/shorts/")) {
    const videoId = details.url.split("shorts/")[1].split(/[?&]/)[0];
    const watchUrl = `https://www.youtube.com/playlist?list=WL`;
    chrome.tabs.update(details.tabId, { url: watchUrl });
  }
}, { url: [{ hostContains: "youtube.com" }] });
