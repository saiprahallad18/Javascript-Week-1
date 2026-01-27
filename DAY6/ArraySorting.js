let nums = [12,49, 99, 100, 33,18,90];

let original = [...nums]; 
// [...nums] =>spread operator 

let ascending = [...nums].sort((a,b) => {
    return a-b;
});

let descending = [...nums].sort((a,b) => {
    return b-a;
});

console.log("original Nums:", original);
console.log("Ascending Nums:", ascending);
console.log("Descending Nums:", descending);


// let nums = [12,49, 99, 100, 33,18,90];
// nums.sort();
// let descending = (nums).sort((a,b) => {
//     return b-a;
// });
// console.log(nums);