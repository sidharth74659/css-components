/* Advertisement section */
const adObj = [
  {
    textContent: `<span><b>New student deal </b>| Sign up now to get courses for as low as ₹455 each. New users only.</span>
     <span><b>Ends in <span class="timer">5h 59m 37s</span>.</b></span>`,
  },
  {
    textContent: `<span> <b>Learn without barriers with courses from ₹420 </b>| Courses on sale now until Jan 27.</span>
        <span><b>3 days left!</b></span>
      `,
  },
];

const LimitedOffer = document.querySelector(".limited-offer");

LimitedOffer.innerHTML = `<p>${
  adObj[Math.floor(Math.random() * 2)].textContent
}</p><i class="fas fa-times remove"></i>`;

const remove = document.querySelector(".remove");
remove.addEventListener("click", function () {
  LimitedOffer.classList.add("hide");
  console.log("working");
});

/* End of advertisement */

/* Nav-bar section  */
const categoryArray = ["Development", "Eduacation", "Drawing", "Painting"];
const nav__item__categories__dropdown = document.querySelector(
  ".nav__item--categories .drop-down"
);

categoryArray.forEach(
  (category) =>
    (nav__item__categories__dropdown.innerHTML += `<li>
                <a href="#">${category}</a>
                <i class="fa fa-chevron-right"></i>
              </li>`)
);

/* End of nav-bar */

/* course-section */
const asideFloatObj = [
  {
    h2: "Dream up",
    h2__tag:
      "Ambition accepted. Learn the latest skills to reach your professional goals.",
    img:
      "https://img-a.udemycdn.com/notices/home_banner/image_udlite/f8324ecd-1a8d-4260-8e15-ec8aaeffa1d1.jpg?j9u5l6FTA3INmHjLahI78a7DrNNwvfdclboREXw49yem9L2jIPlnw4-mzsJJ5ze7S3eA_Vm84wjEeFiZsPDx0mku18Yyp__PLYt_r9nLS6AG09mhFKzcedlC10OOJWaYhkM8USDCXwmn6UbjmB9iUf85g7cL1PBKV8pICYygEgjbhEsdlpVDcgwKBbabxhDqpE00mgyMSmSKXwRA2qgvG8c-jUlLxtKsiO0cmGS6Kuo8e8qfePIb0O30zQUtdOJi-aKhw",
  },

  {
    h2: "Education = Power",
    h2__tag: "Our Republic Day Sale is on now: Courses from ₹420 until Jan 27.",
    img:
      "https://img-a.udemycdn.com/notices/web_banner/image_udlite/a0d80d8f-36d4-4872-9996-62f0bf87163d.jpg?VP08Y7LNfAdY06uP4WTREV3nHm_M6Ix7mdM-kiKek8ERsUQTnIQCgyIbfxaDAptKx5StBnWiDduLhD-d9s6pQHTHNtbiUHJTNyaYzHA989MuiwXRbwalaAATZG_h9ZE7ySxDvkf3AQkmBljm1m-Be9-Dm18pszdWkAhHkuTGhmD0fSvTi9bB",
  },
];

const whatToLearn = document.querySelector(".whatToLearn");
const whatToLearn__RandomNumber = Math.floor(
  Math.random() * asideFloatObj.length
);
whatToLearn.innerHTML = `
   <h2 class="h2">${asideFloatObj[whatToLearn__RandomNumber].h2}</h2>
              <p class="h2-tag">${asideFloatObj[whatToLearn__RandomNumber].h2__tag}</p>

              <div class="search-toLearn">
                <input type="text" class="search__input" placeholder="What do you want to learn?" aria-label="search">
                <button class="fa fa-search btn--search" type="button" title="search"></button>
              </div>`;

/* img-section */
const img__section = document.querySelector(".img-section");

img__section.style.backgroundImage = `url(${asideFloatObj[whatToLearn__RandomNumber].img})`;
/* End of img-section */

/* End of course-section */

const speciality = document.querySelector(".speciality ul");
const specialityObj = [
  [
    {
      icon: "fa-thumbs-up",
      heading: "130,000 online courses",
      subtitle: "Enjoy a variety of fresh topics",
    },
    {
      icon: "fa-thumbs-up",
      heading: "Expert instruction",
      subtitle: "Find the right instructor for you",
    },
    {
      icon: "fa-thumbs-up",
      heading: "Lifetime access",
      subtitle: "Learn on your schedule",
    },
  ],
  [
    {
      icon: "fa-thumbs-up",
      heading: "1Go at your own pace",
      subtitle: "Enjoy lifetime access to courses on Udemy’s website and app",
    },
    {
      icon: "fa-thumbs-up",
      heading: "Learn from industry experts",
      subtitle: "Select from top instructors around the world",
    },
    {
      icon: "fa-thumbs-up",
      heading: "Find video courses on almost any topic",
      subtitle: "Build your library for your career and personal growth",
    },
  ],
];

/* Explore-section */

// course
const courses = document.querySelectorAll(".course-name");
// console.log(courses);
courses.forEach(course => course.addEventListener('click', function () {
    if(course.classList.contains('expand')) {
      course.classList.remove('expand');
      // loadCourses();
    }
    else {
        courses.forEach(course => course.classList.remove('expand'));
        course.classList.add('expand');
    }
}))

// const courseDetails = document.querySelector('.course-details');
// const courseArray = [
//   {
//     course__img:
//       "https://img-a.udemycdn.com/course/240x135/950390_270f_3.jpg?YTTS7m2UfwkHEgN9yVw2hQVV9nMOc7fA3-FJ5PZYP_Z1CRd7hGn3Clz_SkFVlYU11pJuv0xynI0q8ZcW0Cwr_5yuiu-Qg3zEGXfFd9CHSiWnznmmO8FMKqziHNXkwj4",
//     course__title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
//     course__creator: "Jose Portillia",
//     rating_number: "4.6",
//     rating_icon: "♣♣♣♣",
//     rating_count: "(341,058)",
//     discount_price: "$499",
//     original_price: "$599",
//     course__popularity: "Bestseller",
//   },
//   {
//     course__img:
//       "https://img-a.udemycdn.com/course/240x135/950390_270f_3.jpg?YTTS7m2UfwkHEgN9yVw2hQVV9nMOc7fA3-FJ5PZYP_Z1CRd7hGn3Clz_SkFVlYU11pJuv0xynI0q8ZcW0Cwr_5yuiu-Qg3zEGXfFd9CHSiWnznmmO8FMKqziHNXkwj4",
//     course__title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
//     course__creator: "Jose rose",
//     rating_number: "4.6",
//     rating_icon: "♣♣♣♣",
//     rating_count: "(341,058)",
//     discount_price: "$499",
//     original_price: "$599",
//     course__popularity: "Bestseller",
//   },
// ];

//   for (i = 0; i < courseArray.length; i++) {
//     course.innerHTML += `<ul class="course">
//                 <li class="course__img"><img src=${courseArray[i].course__img} alt="course_logo"></li>
//                 <li class="course__title"><h4>${courseArray[i].course__title}</h4></li>
//                 <li class="course__creator"><p>${courseArray[i].course__creator}</p></li>
//                 <li class="course__rating">
//                   <div class="rating-number">${courseArray[i].rating_number}</div>
//                   <div class="rating-icon">${courseArray[i].rating_icon}</div>
//                   <div class="rating-count">${courseArray[i].rating_count}</div>
//                 </li>
//                 <li class="course__price">
//                   <div class="discount-price"><b>${courseArray[i].discount_price}</b></div>
//                   <div class="original-price">${courseArray[i].original_price}</div >
//                 </li>
//                 <li class="course__popularity">${courseArray[i].course__popularity}</li>
//               </ul>`;


// // console.log(courseArray[0].course__img);
// // console.log(courseArray.length);
// function loadCourses() {
//   }
// }
/* End of explore-section */

// // for (i = 0; i < 3; i++) {
// // course.innerHTML += `<ul class="course">
// //                 <li class="course__img"><img src="https://img-a.udemycdn.com/course/240x135/950390_270f_3.jpg?YTTS7m2UfwkHEgN9yVw2hQVV9nMOc7fA3-FJ5PZYP_Z1CRd7hGn3Clz_SkFVlYU11pJuv0xynI0q8ZcW0Cwr_5yuiu-Qg3zEGXfFd9CHSiWnznmmO8FMKqziHNXkwj4" alt="course_logo"></li>
// //                 <li class="course__title"><h4>2021 Complete Python Bootcamp From Zero to Hero in Python</h4></li>
// //                 <li class="course__creator"><p>Jose Portillia</p></li>
// //                 <li class="course__rating">
// //                   <div class="rating-number">4.6</div>
// //                   <div class="rating-icon">♣♣♣♣♣</div>
// //                   <div class="rating-count">(341,058)</div>
// //                 </li>
// //                 <li class="course__price">
// //                   <div class="discount-price"><b>$499</b></div>
// //                   <div class="original-price">$599</div>
// //                 </li>
// //                 <li class="course__popularity">Bestseller</li>
// //               </ul>`;

// // }
