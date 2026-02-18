const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesList = document.getElementById("notesList");

// Load notes when page loads
document.addEventListener("DOMContentLoaded", loadNotes);

addBtn.addEventListener("click", function() {
    const noteText = noteInput.value.trim();

    if (noteText === "") {
        return;
    }

    addNoteToUI(noteText);
    saveNoteToLocalStorage(noteText);

    noteInput.value = "";
});

function addNoteToUI(text) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    deleteBtn.addEventListener("click", function() {
        li.remove();
        removeNoteFromLocalStorage(text);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    notesList.appendChild(li);
}

function saveNoteToLocalStorage(note) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach(function(note) {
        addNoteToUI(note);
    });
}

function removeNoteFromLocalStorage(noteToDelete) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes = notes.filter(function(note) {
        return note !== noteToDelete;
    });
    localStorage.setItem("notes", JSON.stringify(notes));
}
