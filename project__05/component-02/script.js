const input = document.querySelectorAll("input");
const label = document.querySelector("label");

// console.log(input);

input.forEach((item) =>
  item.addEventListener("focus", function () {
    item.parentNode.classList.add("expand");
  })
);

input.forEach((item) =>
  item.addEventListener("focusout", function () {
    item.parentNode.classList.remove("expand");
  })
);
