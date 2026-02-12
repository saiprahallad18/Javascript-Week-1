const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const button = document.getElementById("btn");

const API_URL = "https://api.quotable.io/random";

async function getQuote() {
    try{
        // show loading up
        quoteElement.textContent = "Loading...";
        authorElement.textContent = "";

        const response = await fetch(API_URL);

        if(!response.ok){
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();

        quoteElement.textContent = `"${data.content}"`;
        authorElement.textContent = `- ${data.author}`;
    }   
        catch (error){
            quoteElement.textContent = "Something went wrong";
            authorElement.textContent = "";
            console.error(error);
        }
}
// button click event
button.addEventListener("click", getQuote);
getQuote();