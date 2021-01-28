document.querySelector(".input").addEventListener("keyup", function () {
  document.querySelector(".name").textContent = document.querySelector(
    ".input"
  ).value;
});
