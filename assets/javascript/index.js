$(document).ready(function () {
  // Show the "home" section on page load
  $("#home").show();

  // Hide other sections
  $("#about, #services").hide();

  // Handle navigation clicks
  $(".normal-nav a").click(function () {
    // Get the target section ID from the href attribute
    var target = $(this).attr("href");

    if (target === "#contact") {
      console.log(target);
      href = "https://shrond-projects.000webhostapp.com/SHROND/chatBox.php";
      window.open(href, "_blank");
      return false;
    }

    // Check if the target section is the home section
    if (target === "#home") {
      // Slide up the current section
      $("section:visible").slideUp("slow");

      // Delay the sliding effect for a specific duration (adjustable)
      setTimeout(function () {
        // Show the target section with a sliding effect
        $(target).slideDown("slow");
      }, 500); //delay 0.5 secs

      // Replace the header logo with the default style
      $("header .logo").html('<i class="fa-solid fa-code"></i>');
    } else {
      // Replace the header logo with the home section's logo
      $("header .logo").html('SHR<i class="fa-solid fa-code"></i>ND');

      // Slide up the current section
      $("section:visible").slideUp("slow");

      // Delay the sliding effect for a specific duration (adjustable)
      setTimeout(function () {
        // Show the target section with a sliding effect
        $(target).slideDown("slow");
      }, 500); //delay 0.5 secs
    }

    return false; // Prevent default link behavior
  });
});

const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".normal-nav ul");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navList.classList.toggle("active");
  });
}

function loadingAnimationControl(state) {
  const loading = document.querySelector(".loading-animation");
  if (!loading) {
    return;
  }
  loading.classList.remove("hide");
  if (state == "show") {
    setTimeout(() => {
      loading.classList.add("hide");
    }, 900);
  }
}

window.onload = function () {
  loadingAnimationControl("show");
};
