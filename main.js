document.getElementById("menu").onclick = () => {
  document.getElementById("sidebar").style.cssText =
    "transform: translateX(0%);";
};
document.getElementById("close-menu").onclick = () => {
  document.getElementById("sidebar").style.cssText =
    "transform: translateX(550%);";
};
