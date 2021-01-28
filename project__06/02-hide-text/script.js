const container = document.querySelector(".container");

const btn = document.querySelector(".btn");
const text = document.querySelector(".text");

btn.addEventListener("click", () => {
  container.classList.toggle("hide");
});
