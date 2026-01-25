function generateOTP() {
    let otp = Math.floor(Math.random() * 900000) + 100000;
    return otp.toString();
}
console.log(generateOTP());
console.log(generateOTP());
console.log(generateOTP());
