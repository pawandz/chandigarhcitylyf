/*hero-slider-js*/
var Swipes = new Swiper(".hero-slider-js", {
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

/*testimonials-layout-2*/
var swiper = new Swiper(".testimonials-layout-2", {
  grabCursor: true,
  speed: 400,
  loop: true,
  mousewheel: {
    invert: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    900: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

/*parallax-swiper-js*/
const parallax = new Swiper(".parallax-swiper-js", {
  direction: "horizontal",
  grabCursor: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: false,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 10,
  mousewheel: {
    forceToAxis: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1699: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  },
  speed: 700,
  slideActiveClass: "is-active",
  slideDuplicateActiveClass: "is-active",
});
