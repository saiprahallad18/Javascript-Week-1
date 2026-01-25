function deposit(balance, amount){
    return balance + amount;
}
function withdraw(balance, amount){
    if(amount<=balance){
        return balance - amount;
    }else{
        return "Reject";
    }
}
console.log(deposit(1000,5000));
console.log(withdraw(1500,300));
console.log(withdraw(1000,1500));