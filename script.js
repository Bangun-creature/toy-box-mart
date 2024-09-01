const navbarNav = document.querySelector(".navbar-nav");

// document.querySelector("#hamburger-menu").addEventListener("click", () => {
//   navbarNav.classList.toggle("active");
// });

// atau :

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

// klik selain hamburger dan navbarNav
document.addEventListener("click", (event) => {
  //   console.log(event.target);
  if (!hamburger.contains(event.target) && !navbarNav.contains(event.target)) {
    navbarNav.classList.remove("active");
  }
});
