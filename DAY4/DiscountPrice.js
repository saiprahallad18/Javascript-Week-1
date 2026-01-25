function finalPrice(price, discountPercent){
    if(discountPercent < 0 || discountPercent > 100){
        return "Invalid discount"
    }
    let discountAmount = (price * discountPercent)/ 100;
        return price - discountAmount;
}
console.log(finalPrice(1000, 10));
console.log(finalPrice(500, 50));
console.log(finalPrice(200,120));