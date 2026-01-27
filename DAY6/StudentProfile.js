let students = [
    {name:"A",age: 22,marks: 85},
    {name:"B",age: 21, marks: 91},
    {name:"C", age:20, marks: 42}
];

students.forEach(students => {
    // console.log(students.age);
    console.log(`Name: ${students.name}, Age: ${students.age}, Marks: ${students.marks}`);
});

let passedStudents = students.filter(students => {
    return students.marks >= 50;
});
passedStudents.forEach(students => {
    console.log(`Passed: ${students.name} (${students.marks})`);
});

let totalMarks = students.reduce((total, students) => {
    return total + students.marks;
}, 0);

let average = totalMarks / students.length;

console.log(average);