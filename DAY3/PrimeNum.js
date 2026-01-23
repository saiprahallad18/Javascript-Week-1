
let number = 8;
let isPrime = true;

if(number<=1){
    isPrime=false;
}
else{
    for(let i = 2; i< number; i++){
        if(number%i===0){
            isPrime=false;
            break;
        }
    }
}
if(isPrime){
    console.log("prime");
}
else{
    console.log("not prime");
}