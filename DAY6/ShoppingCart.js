let cart = [499, 999, 1255, 899, 1500];
cart.push(1100);
cart.pop();
// console.log(cart);

let expensiveItems = cart.filter(price => {
    return price > 500;
});

let totalBill = expensiveItems.reduce((total, price) =>{
    return total + price;
}, 0);

console.log("Cart Items:", cart);
console.log("Expensive Items:", expensiveItems);
console.log("Total Bill:", totalBill);
