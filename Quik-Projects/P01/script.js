const nav_list = document.querySelector(".nav-list")
const drop_down = document.querySelector(".drop-down");
drop_down.addEventListener("click", () => {
    nav_list.classList.toggle("hide");
})