function calculator(a,b,operator){
    switch(operator){
        case "+":
            return a+b;

        case "-":
            return a-b;

        case "*":
            return a*b;
        
        case "/":
            if(b === 0){
                return "Can't divide by zero";
            }
            return a/b;

        default:
            return "invalid ";
    }
}
console.log(calculator(10,5, "+"));
console.log(calculator(10,5, "-"));
console.log(calculator(10,5, "*"));
console.log(calculator(10,5, "/"));