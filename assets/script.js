var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = ["0", "1,", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]; 

function generatePassword() {
  var passwordCriteria = [];
  var passwordLength = window.prompt("Please create a password with at least 8 but no more than 128 characters. Include uppercase, lowercase, numeric and/or special characters. Use at least one from each of the four requirements");
  if (passwordLength <8 || passwordLength >128) {
    window.alert("password length does not meet criteria");
    generatePassword();
  } 
  var passwordUppercase = window.confirm("would you like uppercase characters?")
  var passwordLowercase = window.confirm("would you like lowercase characters?")
  var passwordNumeric = window.confirm("would you like to add numbers?")
  var passwordCharacter = window.confirm("would you like to add a special character?")
  if (!passwordUppercase && !passwordLowercase && !passwordNumeric && !passwordCharacter) {
    window.alert("you must choose at least one option");
    generatePassword();
  }
  if (passwordUppercase) {
    passwordCriteria = passwordCriteria.concat(uppercaseArray);
  }
  if (passwordLowercase) {
    passwordCriteria = passwordCriteria.concat(lowercaseArray);
  }
  if (passwordNumeric) {
    passwordCriteria = passwordCriteria.concat(numbersArray);
  }
  if (passwordCharacter) {
    passwordCriteria = passwordCriteria.concat(specialCharacter);
  }
  
  var password = ""
  
  for (var i = 0; i < passwordLength; i ++) {
    var randomCharacter = passwordCriteria[Math.floor(Math.random ()*passwordCriteria.length)];
    password = password + randomCharacter;
  }
  return password; 
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