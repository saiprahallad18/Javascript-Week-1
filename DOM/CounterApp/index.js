// select elements
const countDisplay = document.getElementById("count");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");


let count = 0;

incBtn.addEventListener("click", function () {
  count++;
  countDisplay.textContent = count;
});

decBtn.addEventListener("click", function () {
  count--;
  countDisplay.textContent = count;
});

resetBtn.addEventListener("click", function () {
  count = 0;
  countDisplay.textContent = count;
});
