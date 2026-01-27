let nums = [1,2,9,4,4,5,8,9,7,9];

let newNums = nums.filter((value, index) =>{
    return nums.indexOf(value) === index;
});
console.log(newNums);