const dropdown = document.querySelector(".dropdown");
const dropdownList = document.querySelector(".dropdown-list");

dropdown.addEventListener('click', function () {
    dropdownList.classList.toggle("none")
})