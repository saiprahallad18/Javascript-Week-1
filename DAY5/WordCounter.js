// function countWords(sentence){
//     let arr = sentence.split(" ");
//     return arr.length;
// }
// console.log(countWords("Hello  World"));
// console.log(countWords("I am learning JS"));

function countWords(sentence) {
    let words = sentence.trim().split(" ");
    let count = 0;

    for (let word of words) {
        if (word !== "") {
            count++;
        }
    }

    return count;
}

console.log(countWords("Hello World"));        
console.log(countWords("Hello  World"));       
console.log(countWords("I am learning JS"));   
console.log(countWords("   One   Two   "));    
