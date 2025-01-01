const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const NavLinks = document.querySelectorAll("#nav-menu #nav-link");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

//close menu when nav link is clicked
NavLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});
//close menu
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// initialize swiperrrr
const swiper = new Swiper(".slider-wrapper", {
  loop: false,
  grabCursor: true,
  spacebetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
