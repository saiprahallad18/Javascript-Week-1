function isStrongPassword(password){
    if(password.length < 8){
        return false;
    }
    // to check lowercase
    if(password === password.toUpperCase()){
        return false; 
    }
    // to check uppercase
    if(password === password.toLowerCase()){
        return false;
    }
    let hasNumber = false;
    for(let char of password){
        if(!isNaN(char)){
            hasNumber = true;
            break;
        }
    }
    return hasNumber;
}
console.log(isStrongPassword("Password1")); 
console.log(isStrongPassword("password1")); 
console.log(isStrongPassword("PASSWORD1"));