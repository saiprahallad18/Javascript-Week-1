let arr = [
    {name:"gold", price:20000},
    {name:"silver", price:10000},
    {name:"clothes",price:1000}
]
const productList = document.getElementById("productList");

for(let i=0; i<arr.length; i++){
    const product = arr[i];

    // creating a wrapper
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    // creating name element
    const nameEl = document.createElement("h3");
    nameEl.textContent = product.name;
    // creating price element
    const priceEl = document.createElement("p");
    priceEl.textContent = product.price;
    // assemble product card
    productDiv.appendChild(nameEl);
    productDiv.appendChild(priceEl);
    // adding product to the page
    productList.appendChild(productDiv);
}
