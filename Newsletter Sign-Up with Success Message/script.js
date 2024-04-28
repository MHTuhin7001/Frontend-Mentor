const form = document.querySelector("form");
const mainCard = document.querySelector(".main");
const successCard = document.querySelector(".success");
const emailInput = document.querySelector("input");
const errorMsg = document.querySelector(".errorMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Email Validation
  const email = emailInput.value;
  if (email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    mainCard.classList.add("hidden");
    successCard.classList.remove("hidden");
  } else {
    errorMsg.classList.remove("hidden");
    emailInput.style.backgroundColor = "#ffe7e6";
    emailInput.style.color = "hsl(4, 100%, 67%)";
  }
});
// Success Message With Close
function modalClose() {
  successCard.classList.add("hidden");
  mainCard.classList.remove("hidden");
  window.location.reload();
}
