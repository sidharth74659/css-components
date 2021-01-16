const remove = document.querySelector('.remove');

remove.addEventListener('click', function() {
    document.querySelector('.limited-offer').classList.add('hide')
})



// course
const courses = document.querySelectorAll(".courses");
// console.log(courses);
courses.forEach(course => course.addEventListener('click', function () {
    if(course.classList.contains('expand')) {
        course.classList.remove('expand');
    }
    else {
        courses.forEach(course => course.classList.remove('expand'));
        course.classList.add('expand');
    }
}))


const course = document.querySelector('.course-details');
const courseArray = [
  {
    course__img:
      "https://img-a.udemycdn.com/course/240x135/950390_270f_3.jpg?YTTS7m2UfwkHEgN9yVw2hQVV9nMOc7fA3-FJ5PZYP_Z1CRd7hGn3Clz_SkFVlYU11pJuv0xynI0q8ZcW0Cwr_5yuiu-Qg3zEGXfFd9CHSiWnznmmO8FMKqziHNXkwj4",
    course__title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
    course__creator: "Jose Portillia",
    rating_number: "4.6",
    rating_icon: "♣♣♣♣",
    rating_count: "(341,058)",
    discount_price: "$499",
    original_price: "$599",
    course__popularity: "Bestseller",
  },
  {
    course__img:
      "https://img-a.udemycdn.com/course/240x135/950390_270f_3.jpg?YTTS7m2UfwkHEgN9yVw2hQVV9nMOc7fA3-FJ5PZYP_Z1CRd7hGn3Clz_SkFVlYU11pJuv0xynI0q8ZcW0Cwr_5yuiu-Qg3zEGXfFd9CHSiWnznmmO8FMKqziHNXkwj4",
    course__title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
    course__creator: "Jose Portillia",
    rating_number: "4.6",
    rating_icon: "♣♣♣♣",
    rating_count: "(341,058)",
    discount_price: "$499",
    original_price: "$599",
    course__popularity: "Bestseller",
  },
];

// console.log(courseArray[0].course__img);
// console.log(courseArray.length);

for (i = 0; i < courseArray.length; i++) {

  course.innerHTML += `<ul class="course">
                <li class="course__img"><img src=${courseArray[i].course__img} alt="course_logo"></li>
                <li class="course__title"><h4>${courseArray[i].course__title}</h4></li>
                <li class="course__creator"><p>${courseArray[i].course__creator}</p></li>
                <li class="course__rating">
                  <div class="rating-number">${courseArray[i].rating_number}</div>
                  <div class="rating-icon">${courseArray[i].rating_icon}</div>
                  <div class="rating-count">${courseArray[i].rating_count}</div>
                </li>
                <li class="course__price">
                  <div class="discount-price"><b>${courseArray[i].discount_price}</b></div>
                  <div class="original-price">${courseArray[i].original_price}</div >
                </li>
                <li class="course__popularity">${courseArray[i].course__popularity}</li>
              </ul>`;
  }

// for (i = 0; i < 3; i++) {
// course.innerHTML += `<ul class="course">
//                 <li class="course__img"><img src="https://img-a.udemycdn.com/course/240x135/950390_270f_3.jpg?YTTS7m2UfwkHEgN9yVw2hQVV9nMOc7fA3-FJ5PZYP_Z1CRd7hGn3Clz_SkFVlYU11pJuv0xynI0q8ZcW0Cwr_5yuiu-Qg3zEGXfFd9CHSiWnznmmO8FMKqziHNXkwj4" alt="course_logo"></li>
//                 <li class="course__title"><h4>2021 Complete Python Bootcamp From Zero to Hero in Python</h4></li>
//                 <li class="course__creator"><p>Jose Portillia</p></li>
//                 <li class="course__rating">
//                   <div class="rating-number">4.6</div>
//                   <div class="rating-icon">♣♣♣♣♣</div>
//                   <div class="rating-count">(341,058)</div>
//                 </li>
//                 <li class="course__price">
//                   <div class="discount-price"><b>$499</b></div>
//                   <div class="original-price">$599</div>
//                 </li>
//                 <li class="course__popularity">Bestseller</li>
//               </ul>`;
    
// }
