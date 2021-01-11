// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseString = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var lowerCaseArray = lowerCaseString.split(" ");
var upperCaseString = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
var upperCaseArray = upperCaseString.split(" ");


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
} else if (passwordLength > 128){
  alert("Your password must be less than 128 characters. Try again.");
} else {
  console.log("Password Length: " + passwordLength);
  console.log(typeof passwordLength)
//   changes string entry to number to allow for creation of password array
  var passwordArrayLength = Number(passwordLength);
  console.log(typeof passwordArrayLength)
//   create an array with length specified

}

