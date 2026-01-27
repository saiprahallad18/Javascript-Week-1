let user = {name:"Sai", age:22, email:"sai@gmail.com", 
            location:"Vizag", isActive: true};

console.log("User Profile");
console.log("------------");
console.log(`Name     : ${user.name}`);
console.log(`Age      : ${user.age}`);
console.log(`Email    : ${user.email}`);
console.log(`Location : ${user.location}`);
// console.log(`Staus    : ${user.isActive}`);
console.log(`Status   : ${user.isActive ? "Active" : "Inactive"}`);
