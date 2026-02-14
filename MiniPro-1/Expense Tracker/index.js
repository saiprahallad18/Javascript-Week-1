const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const list = document.getElementById("list");

let transactions = JSON.parse(localStorage.getItem("transanctions")) || [];
// localStorage.getItem - to get stored data(data in string)
// JSON.parse() - converts string to object/array
// if no stored data use empty array []

function updateValues() {
    const amounts = transactions.map(t => t.amount);
    const total = amounts.reduce((acc, item) => acc + item, 0);
    // reduce() adds all the no.
    // acc = accumulator starting from 0
    const incomeTotal = amounts
        .filter(item => item > 0)
        .reduce(acc)
}