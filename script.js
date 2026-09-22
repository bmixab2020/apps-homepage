const tabs = Array.from(document.querySelectorAll(".tab"));
const appFrame = document.getElementById("appFrame");

const apps = [
  {
    name: "Calculate Sheet",
    url: "https://bmixab2020.github.io/LearnIAProjects/"
  },
  {
    name: "Crypto.com Calculation",
    url: "https://bmixab2020.github.io/CryptoApp/"
  }
];

function activateTab(index) {
  tabs.forEach((tab, i) => {
    const isActive = i === index;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  const app = apps[index];
  if (app) {
    appFrame.src = app.url;
    appFrame.title = app.name;
    document.title = app.name + " | My Apps";
  }
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(index));
});