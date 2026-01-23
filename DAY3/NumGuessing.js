
let secretNumber = 7;
let guess = 3;

while(true){
    if(guess == secretNumber){
        console.log("Try again");
        break;
    }
    else{
        console.log("Correct");
        guess ++;
    }
}