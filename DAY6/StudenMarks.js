let marks = [45, 67, 89, 34, 76];
// add grace marks (map => transforms data, returns a new array)
let graceMarks = marks.map(mark =>{
    return mark + 5;
});
// filter passed students (filter =>selects data based on a condition)
let passedMarks = graceMarks.filter(mark => {
    return mark >= 40;
});
//  total marks (reduce => combines data into one value)
let totalMarks = passedMarks.reduce((total, mark) =>{
    return total + mark;
}, 0);
// calculate average
let averageMarks = totalMarks / passedMarks.length;

console.log("Original Marks:", marks);
console.log("After Grace:", graceMarks);
console.log("Passed Marks:", passedMarks);
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);
