
let secretNumber = 7;
let guess = 3;

while(true){
    if(guess === secretNumber){
        console.log("Correct");
        break;
    }
    else{
        console.log("Try again");
        guess ++;
    }
}