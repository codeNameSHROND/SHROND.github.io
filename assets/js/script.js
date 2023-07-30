function makeThisActive(element, className) {
  const links = document.querySelectorAll(".global-option");
  links.forEach((link) => {
    if (link !== element && !link.classList.contains(className)) {
      link.classList.remove("active");
    } else {
      link.classList.add("active");
      if (className != "home") {
        document.querySelector(".normal-nav").classList.add("show");
      } else {
        document.querySelector(".normal-nav").classList.remove("show");
      }
      console.log(link);
    }
  });
}

const spans = document.querySelectorAll(".word span");

spans.forEach((span, idx) => {
  span.addEventListener("mouseenter", (e) => {
    e.target.classList.add("active");
  });
  span.addEventListener("animationend", (e) => {
    e.target.classList.remove("active");
  });

  setTimeout(() => {
    span.classList.add("active");
  }, 750 * (idx + 1));
});

setTimeout(() => {
  const elements = document.querySelectorAll(".fade-group-8s");
  elements.forEach((element) => {
    element.classList.add("transform");
  });
}, 8000);

function toggleMenu() {
  const menuItems = document.querySelector(".menu-items");
  const toggleBtn = document.querySelector(".toggle-btn");
  menuItems.classList.toggle("show");
  toggleBtn.classList.toggle("active");
}
