function generatePassword() {
  var passwordLength = window.prompt("Please create a password with at least 8 but no more than 128 characters. Include uppercase, lowercase, numeric & special characters. Use at least one from each of the four requirements");
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);