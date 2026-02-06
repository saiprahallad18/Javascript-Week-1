const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const userError = document.getElementById("userError");
const passError = document.getElementById("passError");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop page reload

    let isValid = true;

    // clear previous errors
    userError.textContent = "";
    passError.textContent = "";

    // username validation
    if(username.value.trim() === "") {
        userError.textContent = "Username is required";
        isValid = false;
    }
    // password validation
    if(password.value.trim() === "") {
        passError.textContent = "Password is requied";
        isValid = false;
    } else if(password.value.length < 6) {
        passError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    if(isValid){
        alert("Login successful");
        form.reset();
    }
});