const questions = [
    { question:"what is Javascript",
        options:["Programming Language", "DataBase", "OS","Browser"],
        answer:["Programming Language"]
    },
    {
        question:"which keyword declares a variable?",
        options:["var","loop","print","echo"],
        answer:"var"
    }
];
let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("optionsEl");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("resultEl");

loadQuestion();

function loadQuestion(){
    const current = questions[currentIndex];
    questionEl.textContent = current.question;
    optionsEl.innerHTML = "";

    current.options.forEach(option => {
        const li = document.createElement("li");
        li.innerHTML = `
        <label>
            <input type="radio" name="option" value="${option}">
            ${option}
        </label>`;
        optionsEl.appendChild(li);
    });
}
nextBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="option"]:checked');

    if(!selected){
        alert("Select an option");
        return;
    }
    if (selected.value === questions[currentIndex].answer) { 
        score++;
    }

    currentIndex++;

    if(currentIndex < questions.length) {
        loadQuestion();
    } else{
        showResult();
    }
});

function showResult(){
    questionEl.textContent = "Quiz Completed";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    resultEl.textContent = `Score: ${score} / ${questions.length}`;
}