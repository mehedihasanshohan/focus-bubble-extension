document.getElementById('startFocus').onclick = () => {
  chrome.runtime.sendMessage({ type: "start-timer" });
};

document.getElementById('blockSites').onclick = () => {
  chrome.storage.local.set({ blocked: true });
  alert("Distraction sites will be blocked!");
};

const quotes = [
  "Stay focused. Stay strong.",
  "One task at a time.",
  "Discipline = Freedom.",
  "Your future self will thank you.",
];

document.getElementById('quote').textContent =
  quotes[Math.floor(Math.random() * quotes.length)];
