let underlined = document.querySelector("nav ul li a:first-child");
underlined.classList.add("underline");

// Get all the navigation links with the "nav-a" class
const navLinks = document.querySelectorAll(".nav-a");

// Function to check if an element is at least partially in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Function to update the underlined link based on the scroll position
function updateUnderlinedLink() {
  navLinks.forEach((link) => {
    const sectionId = link.getAttribute("href");
    const section = document.querySelector(sectionId);

    if (section && isElementInViewport(section)) {
      if (underlined) {
        underlined.classList.remove("underline");
      }
      link.classList.add("underline");
      underlined = link;
    }
  });
}

// Initial call to set the underlined link on page load
updateUnderlinedLink();

// Listen for scroll events and update the underlined link accordingly
window.addEventListener("scroll", updateUnderlinedLink);

window.onload = function () {
  window.scrollTo(0, 0);
};
