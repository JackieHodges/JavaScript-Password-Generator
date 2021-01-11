// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt user about password length
var passwordLength = prompt("How many characters do you want in your password?");
if (passwordLength < 8){
  alert("Your password must be at least 8 characters. Try again.");
}
else if (passwordLength > 128){
  alert("Your password must be less than 128 characters. Try again.");
}
else {
  console.log(passwordLength);
}