function reverseString(text){
    let arr = text.split("");
    arr.reverse();
    let result = arr.join("");
    return result;
}
let text = "Balaji";
let output = reverseString(text);

console.log(output);