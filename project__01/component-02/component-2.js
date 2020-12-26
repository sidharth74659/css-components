// TODO : A fluid animation/transition on background from one link to another

let options = document.querySelectorAll(".option");

options.forEach((option) => {
  option.addEventListener("click", function () {
    // remove existing links with className 'selected'
    options.forEach((option) => option.classList.remove("selected"));

    // add new className 'selected' to the lnk that's been clicked
    option.classList.add("selected");
  });
});
