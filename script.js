const egg = document.getElementById("egg");
const trigger = document.querySelector("[data-egg-trigger]");
let clicks = 0;

trigger?.addEventListener("click", () => {
  clicks += 1;
  if (clicks >= 10 && egg) {
    egg.hidden = false;
  }
});
