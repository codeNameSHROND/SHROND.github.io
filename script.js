const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector(".navUl");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navUl.classList.toggle("active");
});

document.querySelector("nav").addEventListener("click", () => {
  console.log("hello");
  document.querySelector("nav").classList.add("changeBg");
});
