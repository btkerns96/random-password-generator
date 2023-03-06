var passwordLength = 8;
var passwordOptions = [];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Generating the password based on prompts
function generatePassword() {

}

function getPrompts(){
  passwordLength = (prompt("How many characters would you like in your password? (8-126)"))
    while ((passwordLength < 8) || (passwordLength > 126)){
      passwordLength = prompt ("Please enter a number between 8 and 126.")
    }
  if (confirm("Would you like lowercase letters in your password?")) {
    passwordOptions = passwordOptions.concat(lowerCase);
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    passwordOptions = passwordOptions.concat(upperCase);
  }
  if (confirm("Would you like symbols in your password?")) {
    passwordOptions = passwordOptions.concat(symbols);
  }
  if (confirm("Would you like numbers in your password?")) {
    passwordOptions = passwordOptions.concat(numbers);
  }
  return true;
}