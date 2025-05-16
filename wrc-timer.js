function updateWrcCountdown() {
  const countdownDate = new Date("2025-06-30T00:00:00Z").getTime();
  const now = new Date().getTime();
  let distance = countdownDate - now;

  if (distance < 0) distance = 0;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("wrcCountdown").innerHTML =
    `<span>${String(days).padStart(2, '0')}<small>Days</small></span>` +
    `<span>${String(hours).padStart(2, '0')}<small>Hours</small></span>` +
    `<span>${String(minutes).padStart(2, '0')}<small>Minutes</small></span>` +
    `<span>${String(seconds).padStart(2, '0')}<small>Seconds</small></span>`;
}
updateWrcCountdown();
setInterval(updateWrcCountdown, 1000);