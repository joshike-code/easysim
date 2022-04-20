//SIGN IN / SIGNUP PASSWORD SHOW/HIDE
const pswrdField = document.querySelector(".input-group input[type='password']"),
  toggleBtn = document.querySelector(".input-group i");

toggleBtn.onclick = () => {
  if (pswrdField.type == "password") {
    pswrdField.type = "text";
    toggleBtn.classList.add("active");
  } else {
    pswrdField.type = "password";
    toggleBtn.classList.remove("active");
  }
}


//SIGN IN / SIGNUP SWITCHER
function switchForm(className, e) {
	e.preventDefault();
	const allForm = document.querySelectorAll('form');
	const form = document.querySelector(`form.${className}`);

	allForm.forEach(item=> {
		item.classList.remove('active');
	})
	form.classList.add('active');
}


//SIGN IN / SIGNUP FORM VALIDATOR
const registerPassword = document.querySelector('form.register #password');
const registerConfirmPassword = document.querySelector('form.register #confirm-pass');

registerPassword.addEventListener('input', function () {
  registerConfirmPassword.pattern = `${this.value}`;
});