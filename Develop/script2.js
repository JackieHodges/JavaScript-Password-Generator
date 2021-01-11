// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseString = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var lowerCaseArray = lowerCaseString.split(" ");
var upperCaseString = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
var upperCaseArray = upperCaseString.split(" ");
var specialCaseString = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var specialCaseArray = specialCaseString.split("");
var yourPassword = [];


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
//   create random numbers from password array length
  const random = Math.floor(Math.random()*passwordArrayLength);
  console.log("random: " + random);

//   prompt user for characters to use
    var includeLower = confirm("Would you like to include lower case letters?");
    var includeUpper = confirm("Would you like to include upper case letters?");
    var includeSpecial = confirm("Would you like to include special characters?");

    if(includeLower === true && includeUpper === true && includeSpecial === true ){
        var numberOfLower = random;
        console.log("number of lower case: " + numberOfLower);
        for (var i = 0; i < numberOfLower; i++){
            yourPassword.push(lowerCaseArray[i]);
        }
        const numberOfUpper = Math.floor(Math.random()*(passwordArrayLength-numberOfLower));
        console.log("number of upper case: " + numberOfUpper);
        for (var j = 0; j < numberOfUpper; j++){
            yourPassword.push(upperCaseArray[j]);
        }
        var numberOfSpecial = passwordArrayLength - numberOfLower - numberOfUpper;
        console.log("number of special characters: " + numberOfSpecial);
        for (var k = 0; k < numberOfSpecial; k++){
            yourPassword.push(specialCaseArray[k]);
        }
        console.log(yourPassword);
    }



}