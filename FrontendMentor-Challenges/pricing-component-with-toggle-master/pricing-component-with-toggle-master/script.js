const input = document.querySelector('.input');
const cost = document.querySelectorAll('.cost');

const annually = ["199.99", "249.99", "399.99"];
const monthly = ["19.99", "24.99", "39.99"];

input.addEventListener('click', function () {

    if (input.checked) {
        cost.forEach((item, index) => {
            item.textContent = annually[index];
        })
    } else {
        cost.forEach((item, index) => {
            item.textContent = monthly[index];
        })
    }
})