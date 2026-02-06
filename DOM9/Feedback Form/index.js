const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const feedbackInput = document.getElementById("feedback");
const nameError = document.getElementById("nameError");
const feedbackError = document.getElementById("feedbackError");
const output = document.getElementById("output");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    nameError.textContent = "";
    feedbackError.textContent = "";
    
    let isValid = true;

    if(nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    if(feedbackInput.value.trim() === "") {
        feedbackInput.textContent = "Feedback is required";
        isValid = false;
    }

    if(isValid) {
        const card = document.createElement("div");
        card.className = "feedback-card";

        const nameEl = document.createElement("h4");
        nameEl.textContent = nameInput.value;

        const feedbackEl = document.createElement("p");
        feedbackEl.textContent = feedbackInput.value;

        card.appendChild(nameEl);
        card.appendChild(feedbackEl);
        card.appendChild(card);
    }
});