function isPalindrome(text){
    let arr = text.split("");
    arr.reverse();
    let reversedText = arr.join("");
    return text === reversedText;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("level"));
console.log(isPalindrome("121"));
console.log(isPalindrome("john"));