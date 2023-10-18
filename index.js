const signUpContainer = document.querySelector(".signUp-container");
const successContainer = document.querySelector(".success-container");
console.log(successContainer);
let inputEmail = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkEmail()) {
    console.log("Ok c'est good " + inputEmail);
    userEmail.textContent = inputEmail;
    console.log(userEmail);
    signUpContainer.style.display = "none";
    successContainer.style.display = "block";
  } else {
    console.log("Non pas bon");
  }
});

email.addEventListener("input", (e) => {
  checkEmail();
});

function checkEmail() {
  let input = email.value;
  if (!input.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i)) {
    form.classList.add("error");
    inputEmail = "";
    return false;
  } else {
    form.classList.remove("error");
    inputEmail = input;
    return true;
  }
}
