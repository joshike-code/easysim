// MULTISTEP FORM SCRIPT
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const nextBtnFourth = document.querySelector(".next-3");
const prevBtnFifth = document.querySelector(".prev-4");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-20%";
  bullet[current - 1].classList.add("active");
  progressText[current - 1].classList.remove("active");
  progressText[current].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-40%";
  bullet[current - 1].classList.add("active");
  progressText[current].classList.add("active");
  progressText[current - 1].classList.remove("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-60%";
  bullet[current - 2].classList.add("active");
  progressText[current - 1].classList.add("active");
  progressText[current - 2].classList.remove("active");
  current += 1;
});
nextBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-80%";
  bullet[current - 2].classList.add("active");
  progressText[current - 1].classList.add("active");
  progressText[current - 2].classList.remove("active");
  current += 1;
});
submitBtn.addEventListener("click", function(){
  bullet[current - 2].classList.add("active");
  progressText[current - 2].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressText[current - 1].classList.remove("active");
  progressText[current - 2].classList.add("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-20%";
  bullet[current - 2].classList.remove("active");
  progressText[current - 1].classList.remove("active");
  progressText[current - 2].classList.add("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-40%";
  current -= 1;
});
prevBtnFifth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-60%";
  bullet[current - 3].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  progressText[current - 3].classList.add("active");
  current -= 1;
});


//PHONE MODAL TOGGLER
function togglePhone() {
  var modal = document.getElementById("modal");
    modal.classList.toggle("show-modal");
}


//PHONE MODAL SIZE SWITCHER
function miniSwitch() {
  var jerry = document.getElementById("phoneModal");
  jerry.classList.toggle("mini");
};

//EMOJIS
function addEmoji(emoji) {
  let inputEle = document.getElementById('input');
  
  input.value += emoji;
}

function toggleEmojiDrawer() {
  let drawer = document.getElementById('drawer');
  
  if (drawer.classList.contains('hidden')) {
    drawer.classList.remove('hidden');
  } else {
    drawer.classList.add('hidden');
  }
}

//Dropdown
function myDropdownBtn() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}