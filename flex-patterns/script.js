// setion--01

const btns = document.querySelectorAll('.btn');
let value = document.querySelector('.value');

btns.forEach(btn => btn.addEventListener('click', function () {
  // console.log('btn.classList');
  btn.classList.contains('btn--decrement') && value.textContent--;
  
  btn.classList.contains('btn--increment') &&  value.textContent++;
  
  // console.log(value);
  value.textContent > 0 ? value.style.color = 'green' : value.textContent < 0 ? value.style.color = 'red' : value.style.color = 'black';  
}))

// section--02
const section__02_el = document.querySelectorAll('.section--02 div') 

section__02_el.forEach(tab => tab.addEventListener('click', function() {
  section__02_el.forEach(tab => tab.classList.remove('is-active'))
  tab.classList.add('is-active')
}))



// section--03
const section__03_el = document.querySelectorAll('.section--03__el') 

section__03_el.forEach(item => item.addEventListener('click', function() {
  section__03_el.forEach(item => item.classList.remove('is-active'))
  item.classList.add('is-active')
}))


// section--05
const section__05_el = document.querySelectorAll('.section--05__el') 

section__05_el.forEach(item => item.addEventListener('click', function() {
  section__05_el.forEach(item => item.classList.remove('is-active'))
  item.classList.add('is-active')
}))













