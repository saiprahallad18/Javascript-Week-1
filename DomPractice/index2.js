// 1) Take input value and show it inside a <p> 
// const input = document.getElementById("input");
// const btn = document.getElementById("btn");
// const output = document.getElementById("output");
// btn.addEventListener("click", ()=> {
//     output.textContent = input.value;
// });

// 2)Take name input and display “Hello, <name>”
// const nameInput = document.getElementById("nameInput");
// const btn = document.getElementById("btn");
// const output = document.getElementById("output");

// btn.addEventListener("click", () => {
//     output.textContent = "Hello, " + nameInput.value;
// });

// 3)Clear input field after clicking submit
// const input = document.getElementById("input");
// const btn = document.getElementById("btn");
// const output = document.getElementById("output");
// btn.addEventListener("click", () => {
//     output.textContent = input.value;
//     input.value = "";
// });


// 4)Show input length on button click
// const input = document.getElementById("input");
// const btn = document.getElementById("btn");
// const output = document.getElementById("output");
// btn.addEventListener("click", () => {
//     output.textContent = input.value.length;
// });


// 5)Convert input text to uppercase and show it
// const input = document.getElementById("input");
// const btn = document.getElementById("btn");
// const output = document.getElementById("output");
// btn.addEventListener("click", () => {
//     output.textContent = input.value.toUpperCase(); 
// });
// btn.addEventListener("click", () => {
//     document.body.style.backgroundColor = "#FF4D6D";
// });


// 6)Check if input is empty and show a message
// const input = document.getElementById("input");
// const btn = document.getElementById("btn");
// const output = document.getElementById("output");
// btn.addEventListener("click", () => {
//     if(input.value === ""){
//         output.textContent = "Input is empty";
//     }else{
//         output.textContent = "Input received";
//     }
// });

// 7)Show live input value while typing
// const input = document.getElementById("input");
// const output = document.getElementById("output");

// input.addEventListener("input", ()=> {
//     output.textContent = input.value;
// });

// 8)Add two number inputs and display the sum
// const num1 = document.getElementById("num1");
// const num2 = document.getElementById("num2");
// const btn = document.getElementById("btn");
// const output = document.getElementById("output");

// btn.addEventListener("click", () => {
//     const sum = Number(num1.value) + Number(num2.value);
//     output.textContent = sum;
// });


// 9)Reset all inputs using a button
// const input1 = document.getElementById("input1");
// const input2 = document.getElementById("input2");
// const input3 = document.getElementById("input3");
// const btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//     input1.value = "";
//     input2.value = "";
//     input3.value = "";
// });


// ---------------------------------------------------------
// LEVEL 3

// 10)Change background color when mouse enters a box
// const box = document.getElementById("box");
// box.addEventListener("mouseenter", () => {
//     box.style.backgroundColor = "pink";
// });

// 11)Revert background color when mouse leaves the box
// const box = document.getElementById("box");
// box.addEventListener("mouseenter", () => {
//     box.style.backgroundColor = "pink";
// });
// box.addEventListener("mouseleave", () => {
//     box.style.backgroundColor = "#ddd";
// });


// 12)Disable a button after clicking once
// const btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//     btn.disable = true;
// });

// 13)Enable button only if input is not empty
// const input = document.getElementById("input");
// const btn = document.getElementById("btn");
// btn.disabled = true;

// input.addEventListener("input", () => {
//     if(input.value === ""){
//         btn.disabled = true
//     } else {
//         btn.disabled = false;
//     }
// });

// 14)Show a warning message if input length is less than 5
// const input = document.getElementById("input");
// const warning = document.getElementById("warning");

// input.addEventListener("input", () => {
//     if(input.value.length < 5){
//         warning.textContent = "Minimum 5 characters required";
//     } else {
//         warning.textContent = "";
//     }
// });

// 15)Toggle password visibility (Show / Hide)
// const password = document.getElementById("password");
// const btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//     if(password.type === "password"){
//         password.type = "text";
//         btn.textContent = "Hide";
//     } else{
//         password.type = "password";
//         btn.textContent = "Show";
//     }
// });

// 16)Count button clicks and display the count
// const btn = document.getElementById("btn");
// const countText = document.getElementById("count");
// let count = 0;
// btn.addEventListener("click", () => {
//     count++;
//     countText.textContent = count;
// });

// 17)Change text based on checkbox checked / unchecked
// const check = document.getElementById("check");
// const statusText = document.getElementById("status");
// check.addEventListener("change", () => {
//     if(check.checked){
//         statusText.textContent = "Checked";
//     }else {
//         statusText.textContent = "Unchecked";
//     }
// });

// 18)Show different message based on dropdown selection
// const select = document.getElementById("select");
// const output = document.getElementById("output");

// select.addEventListener("change", () => {
//     if(select.value === "js"){
//         output.textContent = "You selected JavaScript";
//     } else if(select.value === "html"){
//         output.textContent = "You selected HTML";
//     }else if(select.value === "css"){
//         output.textContent = "You selected CSS";
//     } else {
//         output.textContent = "";
//     }
// });

// 19)Prevent form submission and show alert instead
// const form = document.getElementById("myform");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     alert("Form submission prevented");
// });
// submit event is handled on the form, not the button
// event.preventDefault() stops page reload
// Alert confirms the action

// ------------------------------------------------------------------------
// LEVEL 4

// 20)Add item to a list from an input field
// const input = document.getElementById("input");
// const btn = document.getElementById("btn");
// const list = document.getElementById("list");
// btn.addEventListener("click", () => {
//     const value = input.value;
//     if(value==="") return;

//     const li = document.createElement("li");
//     li.textContent = value;

//     list.appendChild(li);
//     input.value = "";
// });


// 21)Remove the last item from the list
// const list = document.getElementById("list");
// const removeBtn = document.getElementById("removeBtn");

// removeBtn.addEventListener("click", () => {
//   if (list.lastElementChild) {
//     list.removeChild(list.lastElementChild);
//   }
// });


// 22)Clear the entire list with one button
// const list = document.getElementById("list");
// const clearBtn = document.getElementById("clearBtn");
// clearBtn.addEventListener("click", ()=> {
//     list.innerHTML = "";
// });

// 23)Highlight the clicked list item
// const listItem = document.querySelectorAll("#list li");
// listItem.forEach(item => {
//     item.addEventListener("click", () => {
//         listItem.forEach(li => li.classList.remove("active"));
//         item.classList.add("active");
//     });
// });

// 24)Count the number of list items and display the count
// const list = document.getElementById("list");
// const countBtn = document.getElementById("countBtn");
// const output = document.getElementById("output");

// countBtn.addEventListener("click", () => {
//     const count = list.children.length;
//     output.textContent = `Total items: ${count}`;
// });

// 25)Delete a specific list item using a delete button
// const deleteButtons =  document.querySelectorAll(".delete");
// deleteButtons.forEach(button => {
//     button.addEventListener("click", ()=> {
//         const li = button.parentElement;
//         li.remove();
//     });
// });


// 26)Create list items dynamically and append them with a delete button
// const input = document.getElementById("input");
// const addBtn = document.getElementById("addBtn");
// const list = document.getElementById("list");

// addBtn.addEventListener("click", () => {
//   const value = input.value;
//   if (value === "") return;

//   // 1. Create li
//   const li = document.createElement("li");

//   // 2. Create text
//   const text = document.createTextNode(value);

//   // 3. Create delete button
//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "Delete";

//   // 4. Delete logic
//   deleteBtn.addEventListener("click", () => {
//     li.remove();
//   });

//   // 5. Append everything
//   li.appendChild(text);
//   li.appendChild(deleteBtn);
//   list.appendChild(li);

//   // 6. Clear input
//   input.value = "";
// });


// 27)Alternate row colors in a list
// const items = document.querySelectorAll("#list li");

// items.forEach((item, index) => {
//   if (index % 2 === 0) {
//     item.classList.add("even");
//   } else {
//     item.classList.add("odd");
//   }
// });


// 28)Disable submit button if terms checkbox is unchecked
// const terms = document.getElementById("terms");
// const submitBtn = document.getElementById("submitBtn");

// submitBtn.disabled = true;

// terms.addEventListener("change", () => {
//   if (terms.checked) {
//     submitBtn.disabled = false;
//   } else {
//     submitBtn.disabled = true;
//   }
// });


// 29)Show error messages below inputs (not alerts)
// const username = document.getElementById("username");
// const errorMsg = document.getElementById("errorMsg");
// const submitBtn = document.getElementById("submitBtn");

// submitBtn.addEventListener("click", () => {
//   if (username.value === "") {
//     errorMsg.textContent = "Username is required";
//   } else {
//     errorMsg.textContent = "";
//   }
// });


// --------------------------------------------------------------
// LEVEL 5

// 30)Simple Login Form Validation
// const form = document.getElementById("loginForm");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const emailError = document.getElementById("emailError");
// const passwordError = document.getElementById("passwordError");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let isValid = true;

//     if(email.value === "") {
//         emailError.textContent = "Email is required";
//         isValid = false;
//     } else {
//         emailError.textContent = "";
//     }

//     if(password.value === "") {
//         passwordError.textContent = "Password is rquired";
//         isValid = false;
//     } else {
//         passwordError.textContent = "";
//     }

//     if(isValid){
//         console.log("Form submitted successfully");
//     }
// });


// 31)Password Match Checker (Register Form)
// const form = document.getElementById("registerForm");
// const password = document.getElementById("password");
// const confirmPassword = document.getElementById("confirmPassword");
// const message = document.getElementById("message");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   if (password.value === "" || confirmPassword.value === "") {
//     message.textContent = "Both fields are required";
//     message.className = "error";
//     return;
//   }

//   if (password.value !== confirmPassword.value) {
//     message.textContent = "Passwords do not match";
//     message.className = "error";
//   } else {
//     message.textContent = "Passwords match successfully";
//     message.className = "success";
//   }
// });


// 32)Character Counter (Max 100 Characters)
// const text = document.getElementById("text");
// const count = document.getElementById("count");

// text.addEventListener("input", () => {
//   const length = text.value.length;

//   count.textContent = `${length} / 100`;

//   if (length === 100) {
//     count.classList.add("warning");
//   } else {
//     count.classList.remove("warning");
//   }
// });


// 33)To-Do List (Add + Delete Items)
// const taskInput = document.getElementById("taskInput");
// const addBtn = document.getElementById("addBtn");
// const taskList = document.getElementById("taskList");

// addBtn.addEventListener("click", () => {
//   const task = taskInput.value.trim();

//   if (task === "") return;

//   const li = document.createElement("li");
//   li.textContent = task;

//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "Delete";

//   deleteBtn.addEventListener("click", () => {
//     li.remove();
//   });

//   li.appendChild(deleteBtn);
//   taskList.appendChild(li);

//   taskInput.value = "";
// });


// 34)To-Do List with “Mark as Completed”
// const taskInput = document.getElementById("taskInput");
// const addBtn = document.getElementById("addBtn");
// const taskList = document.getElementById("taskList");

// addBtn.addEventListener("click", () => {
//   const task = taskInput.value.trim();
//   if (task === "") return;

//   const li = document.createElement("li");
//   li.textContent = task;

//   // Toggle complete
//   li.addEventListener("click", () => {
//     li.classList.toggle("completed");
//   });

//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "Delete";

//   deleteBtn.addEventListener("click", (event) => {
//     event.stopPropagation(); 
//     li.remove();
//   });

//   li.appendChild(deleteBtn);
//   taskList.appendChild(li);

//   taskInput.value = "";
// });


// 35)Add Task Using Enter Key
// const taskInput = document.getElementById("taskInput");
// const addBtn = document.getElementById("addBtn");
// const taskList = document.getElementById("taskList");

// function addTask() {
//   const task = taskInput.value.trim();
//   if (task === "") return;

//   const li = document.createElement("li");
//   li.textContent = task;

//   li.addEventListener("click", () => {
//     li.classList.toggle("completed");
//   });

//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "Delete";

//   deleteBtn.addEventListener("click", (event) => {
//     event.stopPropagation();
//     li.remove();
//   });

//   li.appendChild(deleteBtn);
//   taskList.appendChild(li);

//   taskInput.value = "";
// }

// addBtn.addEventListener("click", addTask);

// taskInput.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     addTask();
//   }
// });


// 36)Show Total Task Counter
// const taskInput = document.getElementById("taskInput");
// const addBtn = document.getElementById("addBtn");
// const taskList = document.getElementById("taskList");
// const taskCount = document.getElementById("taskCount");

// function updateCount() {
//   taskCount.textContent = `Total Tasks: ${taskList.children.length}`;
// }

// function addTask() {
//   const task = taskInput.value.trim();
//   if (task === "") return;

//   const li = document.createElement("li");
//   li.textContent = task;

//   li.addEventListener("click", () => {
//     li.classList.toggle("completed");
//   });

//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "Delete";

//   deleteBtn.addEventListener("click", (event) => {
//     event.stopPropagation();
//     li.remove();
//     updateCount();
//   });

//   li.appendChild(deleteBtn);
//   taskList.appendChild(li);

//   taskInput.value = "";
//   updateCount();
// }

// addBtn.addEventListener("click", addTask);

// taskInput.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     addTask();
//   }
// });


// 37)To-Do App with localStorage (Data survives refresh)
// const taskInput = document.getElementById("taskInput");
// const addBtn = document.getElementById("addBtn");
// const taskList = document.getElementById("taskList");
// const taskCount = document.getElementById("taskCount");

// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// function updateCount() {
//   taskCount.textContent = `Total Tasks: ${tasks.length}`;
// }

// function saveTasks() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function renderTasks() {
//   taskList.innerHTML = "";

//   tasks.forEach((task, index) => {
//     const li = document.createElement("li");
//     li.textContent = task.text;

//     if (task.completed) {
//       li.classList.add("completed");
//     }

//     li.addEventListener("click", () => {
//       tasks[index].completed = !tasks[index].completed;
//       saveTasks();
//       renderTasks();
//     });

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";

//     deleteBtn.addEventListener("click", (event) => {
//       event.stopPropagation();
//       tasks.splice(index, 1);
//       saveTasks();
//       renderTasks();
//     });

//     li.appendChild(deleteBtn);
//     taskList.appendChild(li);
//   });

//   updateCount();
// }

// function addTask() {
//   const text = taskInput.value.trim();
//   if (text === "") return;

//   tasks.push({
//     text: text,
//     completed: false
//   });

//   saveTasks();
//   renderTasks();

//   taskInput.value = "";
// }

// addBtn.addEventListener("click", addTask);

// taskInput.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     addTask();
//   }
// });

// renderTasks();


// 38)Filter Tasks (All / Completed / Pending)
// const taskInput = document.getElementById("taskInput");
// const addBtn = document.getElementById("addBtn");
// const taskList = document.getElementById("taskList");
// const taskCount = document.getElementById("taskCount");

// const allBtn = document.getElementById("allBtn");
// const completedBtn = document.getElementById("completedBtn");
// const pendingBtn = document.getElementById("pendingBtn");

// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// let currentFilter = "all";

// function saveTasks() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function updateCount(filteredTasks) {
//   taskCount.textContent = `Total Tasks: ${filteredTasks.length}`;
// }

// function renderTasks() {
//   taskList.innerHTML = "";

//   let filteredTasks = tasks;

//   if (currentFilter === "completed") {
//     filteredTasks = tasks.filter(task => task.completed);
//   }

//   if (currentFilter === "pending") {
//     filteredTasks = tasks.filter(task => !task.completed);
//   }

//   filteredTasks.forEach((task, index) => {
//     const originalIndex = tasks.indexOf(task);

//     const li = document.createElement("li");
//     li.textContent = task.text;

//     if (task.completed) {
//       li.classList.add("completed");
//     }

//     li.addEventListener("click", () => {
//       tasks[originalIndex].completed = !tasks[originalIndex].completed;
//       saveTasks();
//       renderTasks();
//     });

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";

//     deleteBtn.addEventListener("click", (event) => {
//       event.stopPropagation();
//       tasks.splice(originalIndex, 1);
//       saveTasks();
//       renderTasks();
//     });

//     li.appendChild(deleteBtn);
//     taskList.appendChild(li);
//   });

//   updateCount(filteredTasks);
// }

// function addTask() {
//   const text = taskInput.value.trim();
//   if (text === "") return;

//   tasks.push({
//     text: text,
//     completed: false
//   });

//   saveTasks();
//   renderTasks();
//   taskInput.value = "";
// }

// addBtn.addEventListener("click", addTask);

// taskInput.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     addTask();
//   }
// });

// allBtn.addEventListener("click", () => {
//   currentFilter = "all";
//   renderTasks();
// });

// completedBtn.addEventListener("click", () => {
//   currentFilter = "completed";
//   renderTasks();
// });

// pendingBtn.addEventListener("click", () => {
//   currentFilter = "pending";
//   renderTasks();
// });

// renderTasks();


// 39)Edit Task Feature (Full Working Version)
// const taskInput = document.getElementById("taskInput");
// const addBtn = document.getElementById("addBtn");
// const taskList = document.getElementById("taskList");
// const taskCount = document.getElementById("taskCount");

// const allBtn = document.getElementById("allBtn");
// const completedBtn = document.getElementById("completedBtn");
// const pendingBtn = document.getElementById("pendingBtn");

// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// let currentFilter = "all";

// function saveTasks() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function updateCount(filteredTasks) {
//   taskCount.textContent = `Total Tasks: ${filteredTasks.length}`;
// }

// function renderTasks() {
//   taskList.innerHTML = "";

//   let filteredTasks = tasks;

//   if (currentFilter === "completed") {
//     filteredTasks = tasks.filter(task => task.completed);
//   }

//   if (currentFilter === "pending") {
//     filteredTasks = tasks.filter(task => !task.completed);
//   }

//   filteredTasks.forEach((task) => {
//     const originalIndex = tasks.indexOf(task);

//     const li = document.createElement("li");

//     const span = document.createElement("span");
//     span.textContent = task.text;

//     if (task.completed) {
//       span.classList.add("completed");
//     }

//     span.addEventListener("click", () => {
//       tasks[originalIndex].completed = !tasks[originalIndex].completed;
//       saveTasks();
//       renderTasks();
//     });

//     const editBtn = document.createElement("button");
//     editBtn.textContent = "Edit";

//     editBtn.addEventListener("click", (event) => {
//       event.stopPropagation();

//       const newText = prompt("Edit task:", task.text);
//       if (newText !== null && newText.trim() !== "") {
//         tasks[originalIndex].text = newText.trim();
//         saveTasks();
//         renderTasks();
//       }
//     });

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";

//     deleteBtn.addEventListener("click", (event) => {
//       event.stopPropagation();
//       tasks.splice(originalIndex, 1);
//       saveTasks();
//       renderTasks();
//     });

//     li.appendChild(span);
//     li.appendChild(editBtn);
//     li.appendChild(deleteBtn);

//     taskList.appendChild(li);
//   });

//   updateCount(filteredTasks);
// }

// function addTask() {
//   const text = taskInput.value.trim();
//   if (text === "") return;

//   tasks.push({
//     text: text,
//     completed: false
//   });

//   saveTasks();
//   renderTasks();
//   taskInput.value = "";
// }

// addBtn.addEventListener("click", addTask);

// taskInput.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     addTask();
//   }
// });

// allBtn.addEventListener("click", () => {
//   currentFilter = "all";
//   renderTasks();
// });

// completedBtn.addEventListener("click", () => {
//   currentFilter = "completed";
//   renderTasks();
// });

// pendingBtn.addEventListener("click", () => {
//   currentFilter = "pending";
//   renderTasks();
// });

// renderTasks();
