const productsDiv = document.getElementById("products");
const cartUl = document.getElementById("cart");
const totalSpan = document.getElementById("total");

const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 }
];

let cart = [];

function displayProducts() {
    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";

        div.innerHTML = `
            <span>${product.name} - ₹${product.price}</span>
            <button onclick="addToCart(${product.id})">Add</button>
        `;

        productsDiv.appendChild(div);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);

    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    cartUl.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>₹${item.price * item.quantity}</span>
        `;

        cartUl.appendChild(li);
    });

    totalSpan.textContent = total;
}

displayProducts();


// added a remove button to

// const productsDiv = document.getElementById("products");
// const cartUl = document.getElementById("cart");
// const totalSpan = document.getElementById("total");

// const products = [
//     { id: 1, name: "Laptop", price: 50000 },
//     { id: 2, name: "Phone", price: 20000 },
//     { id: 3, name: "Headphones", price: 3000 }
// ];

// let cart = [];

// function displayProducts() {
//     products.forEach(product => {
//         const div = document.createElement("div");
//         div.className = "product";

//         const nameSpan = document.createElement("span");
//         nameSpan.textContent = `${product.name} - ₹${product.price}`;

//         const addBtn = document.createElement("button");
//         addBtn.textContent = "Add";
//         addBtn.addEventListener("click", () => addToCart(product.id));

//         div.appendChild(nameSpan);
//         div.appendChild(addBtn);
//         productsDiv.appendChild(div);
//     });
// }

// function addToCart(id) {
//     const existingItem = cart.find(item => item.id === id);

//     if (existingItem) {
//         existingItem.quantity++;
//     } else {
//         const product = products.find(p => p.id === id);
//         cart.push({ ...product, quantity: 1 });
//     }

//     updateCart();
// }

// function removeFromCart(id) {
//     const existingItem = cart.find(item => item.id === id);

//     if (existingItem.quantity > 1) {
//         existingItem.quantity--;
//     } else {
//         cart = cart.filter(item => item.id !== id);
//     }

//     updateCart();
// }

// function updateCart() {
//     cartUl.innerHTML = "";
//     let total = 0;

//     cart.forEach(item => {
//         total += item.price * item.quantity;

//         const li = document.createElement("li");

//         const leftSpan = document.createElement("span");
//         leftSpan.textContent = `${item.name} (x${item.quantity})`;

//         const rightDiv = document.createElement("div");
//         rightDiv.className = "cart-right";

//         const priceSpan = document.createElement("span");
//         priceSpan.textContent = `₹${item.price * item.quantity}`;

//         const removeBtn = document.createElement("button");
//         removeBtn.textContent = "Remove";
//         removeBtn.className = "remove-btn";
//         removeBtn.addEventListener("click", () => removeFromCart(item.id));

//         rightDiv.appendChild(priceSpan);
//         rightDiv.appendChild(removeBtn);

//         li.appendChild(leftSpan);
//         li.appendChild(rightDiv);

//         cartUl.appendChild(li);
//     });

//     totalSpan.textContent = total;
// }

// displayProducts();
