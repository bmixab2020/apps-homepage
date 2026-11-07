const tabs = Array.from(document.querySelectorAll(".tab"));
const wrap = document.getElementById("appFrameWrap");

const apps = [
  {
    name: "Stock Tracking",
    url: "https://bmixab2020.github.io/stock-tracking/"
  },
  {
    name: "Calculation Sheet",
    url: "https://bmixab2020.github.io/calculator-app/?v=2"
  },
  {
    name: "Credit Card Tracking",
    url: "https://bmixab2020.github.io/creditCard-app/"
  },
  {
    name: "Mortgage Calculator",
    url: "https://bmixab2020.github.io/calculate-interest/?v=5"
  },
  {
    name: "Compound Interest",
    url: "https://bmixab2020.github.io/CalculateCompoundInterest-app/"
  },
  {
    name: "Crypto.com Calculation",
    url: "https://bmixab2020.github.io/CryptoApp/"
  },
  {
    name: "Calculate APTC",
    url: "https://bmixab2020.github.io/aptc-calculator/"
  }
];

const frames = {};

function getFrame(index) {
  if (frames[index]) return frames[index];
  const iframe = document.createElement("iframe");
  iframe.className = "app-frame";
  iframe.src = apps[index].url;
  iframe.title = apps[index].name;
  iframe.loading = "eager";
  iframe.style.display = "none";
  wrap.appendChild(iframe);
  frames[index] = iframe;
  return iframe;
}

function activateTab(index) {
  tabs.forEach((tab, i) => {
    const isActive = i === index;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  Object.keys(frames).forEach(k => {
    frames[k].style.display = (Number(k) === index) ? "block" : "none";
  });

  const frame = getFrame(index);
  frame.style.display = "block";

  const app = apps[index];
  if (app) {
    document.title = app.name + " | Useful Apps";
  }
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(index));
});

// Guard against the tab bar and the apps array drifting out of sync
if (tabs.length !== apps.length) {
  console.error(
    "Tab/app count mismatch: " + tabs.length + " tabs vs " + apps.length + " apps"
  );
}

// Load first tab without refresh-on-switch
activateTab(0);
