const emailCopy = document.getElementById("copyEmailId");

emailCopy.addEventListener("click", () => {
  window.navigator.clipboard.writeText("boram8655@gmail.com").then(() => {
    alert("My email address has been copied!");
  });
});
