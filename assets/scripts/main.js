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

// Clipboard copy (Account settings)
function myCopy() {
  var copyText = document.getElementById("NumberCopy");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied";
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

// Clipboard copy (Wallet)
function myIdCopy() {
  var copyText = document.getElementById("IdCopy");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied";
}

function outIdFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy";
}


// Mobile Search
const search = document.getElementById("search");
const secondary = document.getElementById("secondary-header");
const back = document.getElementById("back-arrow");

search.addEventListener('click', () => {
    secondary.style.visibility = 'visible';
});

back.addEventListener('click', () => {
    secondary.style.visibility = 'hidden';
});



//TEST DROPDOWN
var headerProfileAvatar = document.getElementById("avatarWrapper")
var headerProfileDropdownArrow = document.getElementById("dropdownWrapperArrow");
var headerProfileDropdown = document.getElementById("dropdownWrapper");

document.addEventListener("click", function(event) {
  var headerProfileDropdownClickedWithin = headerProfileDropdown.contains(event.target);
  
  if (!headerProfileDropdownClickedWithin) {
    if (headerProfileDropdown.classList.contains("active")) {
      headerProfileDropdown.classList.remove("active");
      headerProfileDropdownArrow.classList.remove("active");
    }
  }
});

headerProfileAvatar.addEventListener("click", function(event) {
  headerProfileDropdown.classList.toggle("active");
  headerProfileDropdownArrow.classList.toggle("active");
  event.stopPropagation();
});


// show or hide sidebar
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
})