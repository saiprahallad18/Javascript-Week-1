const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const success = document.getElementById("success");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

  // clear previous messages
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  success.textContent = "";

  // name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  }

  // email validation
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!emailInput.value.includes("@")) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  }

  // message validation
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required";
    isValid = false;
  } else if (messageInput.value.length < 10) {
    messageError.textContent = "Message must be at least 10 characters";
    isValid = false;
  }

  if (isValid) {
    success.textContent = "Message sent successfully";
    form.reset();
  }
});