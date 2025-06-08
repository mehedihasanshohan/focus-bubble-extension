function renderChart(dataMap) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const labels = [];
  const data = [];

  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const key = date.toISOString().split("T")[0];
    labels.push(days[date.getDay()]);
    data.push(dataMap[key] || 0);
  }

  const ctx = document.getElementById("focusChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: "Focus (mins)",
        data,
        backgroundColor: "#4CAF50"
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}

function loadChart() {
  chrome.storage.local.get(["focusHistory"], (result) => {
    renderChart(result.focusHistory || {});
  });
}

document.addEventListener("DOMContentLoaded", loadChart);
