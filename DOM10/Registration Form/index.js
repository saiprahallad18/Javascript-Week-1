const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");
const success = document.getElementById("success");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    success.textContent = "";

    // name validation
    if(nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    // email validation
    if(emailInput.value.trim() === "") {
        emailError.textContent = "Enter is required";
        isValid = false;
    } else if(!emailInput.value.includes("@")){
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }

    // password validation
    if(passwordInput.value.trim() === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    } else if(passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    // confirm password validation
    if(confirmPasswordInput.value.trim() === "") {
        confirmError.textContent = "Confirm your password";
        isValid = false;
    } else if(passwordInput.value !== confirmPasswordInput.value) {
        confirmError.textContent = "Password do not match";
        isValid = false;
    }

    if(isValid){
        success.textContent = "Registration successful";
        form.reset();
    }
});