const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

function checkPasswordMatch() {
    if(password.value === "" || confirmPassword.value === "") {
        message.textContent = "";
        return;
    }
    if(password.value === confirmPassword.value) {
        message.textContent = "Password match";
        message.style.color = "green";
    } else {
        message.textContent = "Password don't match";
        message.style.color = "red";
    }
}

password.addEventListener("input", checkPasswordMatch);
confirmPassword.addEventListener("input", checkPasswordMatch);