const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector(".navUl");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navUl.classList.toggle("active");
});
