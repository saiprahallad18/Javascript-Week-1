let employees = [
    {name:"Ravi", salary: 30000, isPermanent: true},
    {name:"Ram", salary: 30500, isPermanent: true},
    {name:"Ramu", salary: 25000, isPermanent: false},
];
// to display all the employess
employees.forEach(employees => {
    console.log(`Name: ${employees.name}, Salary: ${employees.salary}, isPermanent: ${employees.isPermanent}`);
});
// filter to  select specific items
let permanentEmployees = employees.filter(employees => {
    return employees.isPermanent === true;
});
// map to transform the data
let salaryHike = employees.map(employees => {
    if(employees.isPermanent){
        return{
            ...employees,
            salary: employees.salary * 1.10
        };
    }else{
        return employees;
    }
});
// reduce - to combine everything into one value
let totalPayroll = employees.reduce((total, employees) =>{
    return total + employees.salary;
}, 0);

console.log("total Payroll Cost:", totalPayroll);