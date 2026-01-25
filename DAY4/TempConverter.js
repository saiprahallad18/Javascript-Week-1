function celsiusToFahrenheit(C){
    F= ((C * 9/5) +32);
    return F;
}
function fahrenheitToCelsius(F){
    C = ((F - 32) * 5/9);
    return C;
}
console.log(celsiusToFahrenheit(22));
console.log(fahrenheitToCelsius(33));

 