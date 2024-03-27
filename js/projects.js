const netflexClone = document.getElementById("netflexClone");
const chromeClone = document.getElementById("chromeClone");
const coinTracker = document.getElementById("coinTracker");
const projectGuide = document.getElementById("projectGuide");

const netflexBtn = document.getElementById("netflexBtn");
const netflexBtnColor = document.getElementById("netflexBtnColor");
const coinBtn = document.getElementById("coinBtn");
const coinBtnColor = document.getElementById("coinBtnColor");
const chromeBtn = document.getElementById("chromeBtn");
const chromeBtnColor = document.getElementById("chromeBtnColor");

function handleCoinBtn() {
  if (
    coinTracker.style.display === "" ||
    coinTracker.style.display === "none"
  ) {
    coinTracker.style.display = "flex";
    coinBtnColor.style.color = "brown";
    netflexBtnColor.style.color = "black";
    chromeBtnColor.style.color = "black";
    chromeClone.style.display = "none";
    netflexClone.style.display = "none";
    projectGuide.style.display = "none";
  }
}
function handleChromeBtn() {
  if (
    chromeClone.style.display === "" ||
    chromeClone.style.display === "none"
  ) {
    chromeClone.style.display = "flex";
    chromeBtnColor.style.color = "brown";
    netflexBtnColor.style.color = "black";
    coinBtnColor.style.color = "black";
    netflexClone.style.display = "none";
    coinTracker.style.display = "none";
    projectGuide.style.display = "none";
  }
}
function handleNetflexBtn() {
  if (
    netflexClone.style.display === "" ||
    netflexClone.style.display === "none"
  ) {
    netflexClone.style.display = "flex";
    netflexBtnColor.style.color = "brown";
    coinBtnColor.style.color = "black";
    chromeBtnColor.style.color = "black";
    chromeClone.style.display = "none";
    coinTracker.style.display = "none";
    projectGuide.style.display = "none";
  }
}

netflexBtn.addEventListener("click", handleNetflexBtn);
coinBtn.addEventListener("click", handleCoinBtn);
chromeBtn.addEventListener("click", handleChromeBtn);
