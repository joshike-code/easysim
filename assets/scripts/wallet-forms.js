const slideForm = document.querySelector(".slide-form");
const depositBtn = document.querySelector(".button-dep");
const withdrawBtn = document.querySelector(".button-with");
const sendBtn = document.querySelector(".button-send");
const colorBar = document.querySelectorAll(".action-header button");


withdrawBtn.addEventListener("click", function(event){
  event.preventDefault();
  slideForm.style.marginLeft = "-33.333333333333333%";

  if (curent = 1) {
  colorBar[curent - 1].classList.remove("active");
  colorBar[curent].classList.add("active");
  }

  if (curent = 3) {
  colorBar[curent - 1].classList.remove("active");
  colorBar[curent].classList.add("active");
  }

});

sendBtn.addEventListener("click", function(event){
  event.preventDefault();
  slideForm.style.marginLeft = "-66.6666667%";

  if (curent = 1) {
  colorBar[curent - 1].classList.remove("active");
  colorBar[curent].classList.add("active");
  }

  if (curent = 2) {
  colorBar[curent - 1].classList.remove("active");
  colorBar[curent].classList.add("active");
  }

});

depositBtn.addEventListener("click", function(event){
  event.preventDefault();
  slideForm.style.marginLeft = "0";

  if (curent = 2) {
  colorBar[curent - 1].classList.remove("active");
  colorBar[curent - 2].classList.add("active");
  }

  if (curent = 3) {
  colorBar[curent - 1].classList.remove("active");
  colorBar[curent].classList.add("active");
  }

});