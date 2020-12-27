const btns = document.querySelectorAll(".component__btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    btns.forEach((btn) => btn.classList.remove("component__btn--selected"));

    btn.classList.add("component__btn--selected");
  });
});
