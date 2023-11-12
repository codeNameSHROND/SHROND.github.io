let underlined = document.querySelector("nav ul li a:first-child");
underlined.classList.add("underline");
let currentPage = null;

// Get all the navigation links with the "nav-a" class
const navLinks = document.querySelectorAll(".nav-a");
const pages = document.querySelectorAll(".page");
const skillChart = document.querySelector(".skills-chart");

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

    if (section && isElementInViewport(section) && sectionId != currentPage) {
      if (underlined) {
        underlined.classList.remove("underline");
      }
      link.classList.add("underline");
      underlined = link;

      let pageOpacity = calculateOpacity(section);

      pages.forEach((element) => {
        element.style.opacity = 100 - pageOpacity + "%";
      });

      currentPage = sectionId;
      document.querySelector(currentPage).style.opacity = pageOpacity + "%";
    }
  });
}

// Calculate opacity based on the percentage of the page view
function calculateOpacity(element) {
  const rect = element.getBoundingClientRect();
  const percentVisible = ((window.innerHeight - rect.top) / rect.height) * 100;
  return percentVisible;
}

// Initial call to set the underlined link and opacity on page load
updateUnderlinedLink();

// Listen for scroll events and update the underlined link and opacity accordingly
window.addEventListener("scroll", updateUnderlinedLink);

function updateSkillBars() {
  const skillInnerBars = document.querySelectorAll(".skill__inner-bar");

  skillInnerBars.forEach((innerBar) => {
    const randomWidth = Math.floor(Math.random() * (100 - 40 + 1)) + 40;
    innerBar.style.width = `${randomWidth}%`;
  });
}

window.onload = function () {
  window.scrollTo(0, 0);
  // setTimeout(function () {
  //   alert("This website is under development...");
  // }, 5000);
  setInterval(() => {
    updateSkillBars();
  }, 5000);
};
