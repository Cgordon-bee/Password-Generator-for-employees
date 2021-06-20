// Assignment Code

var generateBtn = document.querySelector("#generate");

// creation of type of variables globally scoped

var alphaLower = ['a','b','c','d','e','f','g','h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r', 's', 't', 'u', 'v', 'w','x','y', 'z',];

var alphaUpper =['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R','S','T','U','V','W','X','Y', 'Z',];

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var symbols = [ '@', '%', '+', '\\',  '/',  '“”',  '!',  '#', '$',  '^', '?',  ':', ',',  ')', '(', '}', '{',  ']', '[',   '~',  '-',  '_', '.', ];


  
// Prompt & alert set for password for user 

function generatePassword() {
var passwordLength = parseInt (prompt ("How many characters would you like in your password?"))



// this is a method & the syntax 

if (Number.isNaN (passwordLength)){
alert ("Sorry this is invalid please re-enter a number")

// nothing will happen after the word return
return 

}
if (passwordLength <8){
alert ("enter a number greater than 8")
return
}


if (passwordLength >128){
alert ("put in a number less than 128 ");
}

return



}

var confirmUppCase = confirm("Would you like to use uppercase?")
var confirmLowerCase = confirm ("Would you like to use lower case?")
var confirmSymbols = confirm("Would you like to use symbols?")
var confirmNumbers = confirm("Would you like to use numbers?")

generatePassword 

// Write password to the #password input -password length//
function writePassword() {
"abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUV1!@£$%^&*()_+~<>//?"


var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password()

}
  



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// 
// var generatePassword = (length, characters) => {
//   let password = "";
//   for (var i = 0; i < length; i++) {
//     generatePassword += characters.charAt(

// 