const loaderContainer = document.querySelector(".loader-container");
const loaderIcon = document.querySelector(".loading-icon");
const loadingPercentage = document.querySelector(".loaded-percentage");
const loadingText = document.querySelector(".loading-text");
const main = document.querySelector(".main");

let loadedResources = 0;
let totalResources = 0;

function hideLoading() {
  loaderContainer.classList.add("hide");
  main.classList.add("show");
}

function updateLoaded() {
  const percentage = Math.floor((loadedResources / totalResources) * 100);
  loaderIcon.style.backgroundSize = `${percentage}% 100%`;
  loadingPercentage.textContent = percentage + "%";

  if (loadedResources === totalResources) {
    setTimeout(() => {
      hideLoading();
    }, 1000);
  }
}

function resources() {
  const resources = [];
  // Get resource URLs from performance entries
  const performanceEntries = performance.getEntries();
  performanceEntries.forEach((entry) => {
    const initiatorType = entry.initiatorType;
    const resourceName = entry.name;

    // console.log("ENTRY [" + initiatorType + "] : name=" + resourceName);

    if (
      (initiatorType === "navigation" ||
        initiatorType === "script" ||
        initiatorType === "link" ||
        initiatorType === "img" ||
        initiatorType === "css" ||
        initiatorType === "font" ||
        initiatorType === "fetch" ||
        (initiatorType === "other" && resourceName.includes(".php"))) &&
      resourceName !==
        "https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png"
    ) {
      // console.log("REQUIRED [" + initiatorType + "] : " + resourceName);
      resources.push(resourceName);
    } else {
      // console.log("NOT REQUIRED [" + initiatorType + "] : " + resourceName);
    }
  });

  totalResources = resources.length;

  const resourcePromises = resources.map((resource) => {
    return fetch(resource)
      .then((response) => {
        if (response.ok) {
          loadedResources++;
          updateLoaded();
        } else {
          // console.log("failed: " + resource);
        }
      })
      .catch((error) => {
        // console.error("Error fetching resource:", error);
      });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // console.log("DOWNLOADING");
  resources();
});
