function showHidePassword(state, formId) {
  if (!document.getElementById(formId)) {
    return;
  }

  const passwordField = document
    .getElementById(formId)
    .querySelectorAll(".password");
  const eyeIcon = document.getElementById(formId).querySelector(".fa-eye");
  const eyeLowVisionIcon = document
    .getElementById(formId)
    .querySelector(".fa-eye-low-vision");

  if (!passwordField || !eyeIcon || !eyeLowVisionIcon) {
    return;
  }

  if (state === "hide") {
    passwordField.forEach((element) => {
      element.setAttribute("type", "password");
    });

    eyeIcon.style.display = "inline";
    eyeLowVisionIcon.style.display = "none";
  } else if (state === "show") {
    passwordField.forEach((element) => {
      element.setAttribute("type", "text");
    });

    eyeIcon.style.display = "none";
    eyeLowVisionIcon.style.display = "inline";
  }
}

showHidePassword("hide", "signUp");
showHidePassword("hide", "signIn");

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

loadingAnimationControl("hide");

function formControl(formId) {
  loadingAnimationControl("show");

  if (formId === "signIn") {
    document.getElementById("signUp").style.display = "none";
    document.getElementById("signIn").style.display = "flex";
  } else if (formId === "signUp") {
    document.getElementById("signUp").style.display = "flex";
    document.getElementById("signIn").style.display = "none";
  }
}

formControl("signIn");
