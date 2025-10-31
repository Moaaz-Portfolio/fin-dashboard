import Chart from "chart.js/auto";

// Revenue Chart
const ctxRevenue = document.getElementById("revenueChart");
if (ctxRevenue) {
  const gradient = ctxRevenue
    .getContext("2d")
    .createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, "rgba(25,118,210,0.3)"); // أزرق فاتح في الأعلى
  gradient.addColorStop(1, "rgba(25,118,210,0)"); // شفاف في الأسفل
  new Chart(ctxRevenue, {
    type: "line",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Revenue ($)",
          data: [
            1200, 1900, 3000, 5000, 2600, 4500, 4900, 5200, 6100, 7000, 7500,
            8300,
          ],
          borderColor: "#00B3FF",
          backgroundColor: gradient,
          tension: 0.4,
          fill: true,
          pointRadius: 3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      // Render at device pixel ratio for crisp display on high-DPI screens
      devicePixelRatio: window.devicePixelRatio || 1,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          grid: {
            color: "#eee",
          },
          ticks: {
            color: "#666",
          },
        },
        x: {
          ticks: {
            color: "#666",
          },
        },
      },
    },
  });
}

// Expense Chart
const ctxExpense = document.getElementById("expenseChart");
if (ctxExpense) {
  new Chart(ctxExpense, {
    type: "doughnut",
    data: {
      labels: ["Shoping", "Workspace", "Platform", "Entertainments"],
      datasets: [
        {
          label: "Expenses ($)",
          data: [4500, 2500, 1500, 1000],
          backgroundColor: ["#00B3FF", "#6C6C6C", "#000000", "#A8E6E0"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      devicePixelRatio: window.devicePixelRatio || 1,
      cutout: "70%",
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}
