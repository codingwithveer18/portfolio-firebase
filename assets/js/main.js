/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});
/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== EMAIL JS ===============*/

// Initialize Firebase

const firebaseConfig = {
  apiKey: process.env.APKEY,
  authDomain: process.env.AUTH,
  databaseURL: process.env.DB,
  projectId: process.env.PID,
  storageBucket: process.env.STRGE,
  messagingSenderId: process.env.MSID,
  appId: process.env.APPID,
  measurementId: process.env.MEASID,
};

firebase.initializeApp(firebaseConfig);
const contactformDB = firebase.database().ref("contact-form");
document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = getElementVal("contact-name");
  var email = getElementVal("contact-email");
  var message = getElementVal("contact-message");
  savemessages(name, email, message);
  document.querySelector(".alert").style.display = "block";
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
  document.getElementById("contact-form").reset();
}

const savemessages = (name, email, message) => {
  var newContactform = contactformDB.push();

  newContactform.set({
    name: name,
    email: email,
    message: message,
  });
};
const getElementVal = (id) => {
  return document.getElementById(id).value;
};
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
