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
  LimitedOffer.classList.add("remove");
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
courses.forEach((course) =>
  course.addEventListener("click", function () {
    if (course.classList.contains("expand")) {
      course.classList.remove("expand");
      // loadCourses();
    } else {
      courses.forEach((course) => course.classList.remove("expand"));
      course.classList.add("expand");
    }
  })
);

/* Caraousel loop */
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
      "https://img-a.udemycdn.com/course/240x135/793796_0e89.jpg?NWB95wLynVqGbe_1-l8atkBXWZW1TDriJD4xpd9-PpilWQ13rRPoNIA2W2S-n3E9YYYEZEgIHQe3-eokDOrfb80fZZp_7G52bg1IeIgdM_WbBeB_tP7CLbTTIja_",
    course__title: "Microsoft Excel - Excel from Beginning to Advanced",
    course__creator: "kyle Pew",
    rating_number: "4.6",
    rating_icon: "♣♣♣♣",
    rating_count: "(194,562)",
    discount_price: "$420",
    original_price: "$7000",
    course__popularity: "Bestseller",
  },
  {
    course__img:
      "https://img-a.udemycdn.com/course/240x135/914296_3670_8.jpg?YkMfSOX81kqY-S-KBEr30z1IbF61e6jXtBmo1BDLSSh5HqRf4i_LAn5b6J7UTr1eNAjEcIfO199xo4H0KVBuGg_cdiANN6AU1IMScLlLuqAuje505h__65w1xHZaH6o",
    course__title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
    course__creator: "Jose rose",
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
    course__creator: "Jose rose",
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
    course__creator: "Jose rose",
    rating_number: "4.6",
    rating_icon: "♣♣♣♣",
    rating_count: "(341,058)",
    discount_price: "$499",
    original_price: "$599",
    course__popularity: "Bestseller",
  },
];

const courseDetails = document.querySelector(".course-details");
const carousel = document.querySelector(".carousel");
// console.log(carousel);

for (i = 0; i < courseArray.length ; i++) {
  carousel.innerHTML += `<div class="carousel-cell expand">
    <ul class="expanded-course">
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
              </ul>
                </div>
              `;
}
/* End of Caraousel loop */

/* Top-categories */
const top_category = document.querySelector(".top-categories ul");
const top_categoryObj = [
  {
    img: "https://s.udemycdn.com/home/top-categories/lohp-category-design.jpg",
    name: "Design",
  },
  {
    img:
      "https://s.udemycdn.com/home/top-categories/lohp-category-development.jpg",
    name: "development",
  },
  {
    img:
      "https://s.udemycdn.com/home/top-categories/lohp-category-marketing.jpg",
    name: "marketing",
  },
  {
    img:
      "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software.jpg",
    name: "IT and software",
  },
  {
    img:
      "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development.jpg",
    name: "personal development",
  },
  {
    img:
      "https://s.udemycdn.com/home/top-categories/lohp-category-photography.jpg",
    name: "photography",
  },
];
// console.log(top_category)
for (i = 0; i < top_categoryObj.length ; i++) {
  top_category.innerHTML += `
<li class="wrap-category">
                    <img src="${top_categoryObj[i].img}" alt="top category image"
                      class="top-category__image">
                    <h3 class="top-category__name"><a href="#">${top_categoryObj[i].name}</a></h3>
                </li>
  `;
}
/* End of Top-categories */

/* Fearured categories */
const featured_courses__Obj = [
  {
    featured_courses__Heading: "Develoment",
    featured_courses__Data: [
      {
        course__name: "Python",
        course__members: "23,857,979",
      },
      {
        course__name: "Web Development",
        course__members: "8,116,478",
      },
      {
        course__name: "Machine Learning",
        course__members: "4,625,443",
      },
    ],
  },
  {
    featured_courses__Heading: "Business",
    featured_courses__Data: [
      {
        course__name: "Financial Analysis",
        course__members: "917,240",
      },
      {
        course__name: "SQL",
        course__members: "3,557,266",
      },
      {
        course__name: "PMP",
        course__members: "1,254,606",
      },
    ],
  },
  {
    featured_courses__Heading: "IT and Software",
    featured_courses__Data: [
      {
        course__name: "AWS Certification",
        course__members: "3,621,823",
      },
      {
        course__name: "Ethical Hacking",
        course__members: "7,715,750",
      },
      {
        course__name: "Cyber Security",
        course__members: "2,660,622",
      },
    ],
  },
  {
    featured_courses__Heading: "Design",
    featured_courses__Data: [
      {
        course__name: "Photoshop",
        course__members: "8,325,265",
      },
      {
        course__name: "Graphic Design",
        course__members: "2,407,852",
      },
      {
        course__name: "Drawing",
        course__members: "2,076,880",
      },
    ],
  }
];
console.log(featured_courses__Obj[1].featured_courses__Data[2].course__name, "asdf");
const featured_categories = document.querySelector(".featured-categories")
const featured_courses = document.querySelector(".featured-courses");
const featured_courses__ul = document.querySelector(".featured-courses ul")
for (let i = 0; i < 1; i++) {
  var featured__courses = `<!-- comment -->`;
  for (let j = 0; j < 4; j++) {
    var featured__course = `<!-- comment -->`;
    for (let k = 0; k < featured_courses__Obj[j].featured_courses__Data.length; k++) {
      featured__course += `
      <li class="featured-course">
      <h3 class="featured-course__name"><a href="#">${featured_courses__Obj[j].featured_courses__Data[k].course__name}</a></h3>
      <div class="featured-course__members"><span class="featured-course__count">${featured_courses__Obj[j].featured_courses__Data[k].course__members}</span> students
      </div>
      </li>
      `;
    }
    featured__courses += `
    <ul>
    <li class="featured-category">
    <h3>${featured_courses__Obj[j].featured_courses__Heading}</h3>
    </li>
    ${featured__course}
    </ul>
    `;
  }
  
  // console.log(featured__course, "course")
  // console.log(featured__courses);

  featured_courses.innerHTML += `${featured__courses}`;
}
/* End of Fearured categories */





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
