// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseString = "a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z";
var lowerCaseArray = lowerCaseString.split(" ");
var upperCaseString = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
var upperCaseArray = upperCaseString.split(" ");
var specialCaseString = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
var specialCaseArray = specialCaseString.split("");
var yourPassword = [];
console.log(lowerCaseArray);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// randomizes array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
        // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

function generatePassword (){
    // Prompt user about password length
    var passwordLength = prompt("How many characters do you want in your password?");
    if (passwordLength < 8){
        alert("Your password must be at least 8 characters. Try again.");
    } else if (passwordLength > 128){
        alert("Your password must be less than 128 characters. Try again.");
    } else {
        console.log("Password Length: " + passwordLength);
        // changes string entry to number to allow for creation of password array
        var passwordArrayLength = Number(passwordLength);
        //   create random numbers from password array length
        const random = Math.floor(Math.random()*passwordArrayLength);
        console.log("random: " + random);

        //   prompt user for characters to use
        var includeLower = confirm("Would you like to include lower case letters?");
        var includeUpper = confirm("Would you like to include upper case letters?");
        var includeSpecial = confirm("Would you like to include special characters?");

        // if users chooses to have all 3 options
        if(includeLower === true && includeUpper === true && includeSpecial === true ){
            var numberOfLower = random;
            console.log("number of lower case: " + numberOfLower);
            for (var i = 0; i < numberOfLower; i++){
                yourPassword.push(lowerCaseArray[i]);
            }
            var numberOfUpper = Math.floor(Math.random()*(passwordArrayLength-numberOfLower));
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

        // if users choose to have lower and upper but no special 
        if(includeLower === true && includeUpper === true && includeSpecial === false){
            var numberOfLower = random;
            console.log("number of lower case: " + numberOfLower);
            for (var i = 0; i < numberOfLower; i++){
                yourPassword.push(lowerCaseArray[i]);
            }
            var numberOfUpper = passwordArrayLength - numberOfLower;
            console.log("number of upper case: " + numberOfUpper);
            for (var j = 0; j < numberOfUpper; j++){
                yourPassword.push(upperCaseArray[j]);
            }
            var numberOfSpecial = 0;
            console.log("number of special characters: " + numberOfSpecial);
            console.log(yourPassword);
        }

        // if users choose to have lower and special but no upper 
        if(includeLower === true && includeUpper === false && includeSpecial === true){
            var numberOfLower = random;
            console.log("number of lower case: " + numberOfLower);
            for (var i = 0; i < numberOfLower; i++){
                yourPassword.push(lowerCaseArray[i]);
            }
            var numberOfSpecial = passwordArrayLength - numberOfLower;
            console.log("number of special case: " + numberOfSpecial);
            for (var k = 0; k < numberOfSpecial; k++){
                yourPassword.push(specialCaseArray[k]);
            }
            var numberOfUpper = 0;
            console.log("number of upper characters: " + numberOfUpper);
            console.log(yourPassword);
        }

        // if users choose to have upper and special but no lower 
        if(includeLower === false && includeUpper === true && includeSpecial === true){
            var numberOfUpper = random;
            console.log("number of upper case: " + numberOfUpper);
            for (var j = 0; j < numberOfUpper; j++){
                yourPassword.push(upperCaseArray[j]);
            }
            var numberOfSpecial = passwordArrayLength - numberOfUpper;
            console.log("number of special case: " + numberOfSpecial);
            for (var k = 0; k < numberOfSpecial; k++){
                yourPassword.push(specialCaseArray[k]);
            }
            var numberOfLower = 0;
            console.log("number of lower characters: " + numberOfLower);
            console.log(yourPassword);
        }

        // if users choose only lower 
        if(includeLower === true && includeUpper === false && includeSpecial === false){
            var numberOfLower = 128;
            console.log("number of lower case: " + numberOfLower);
            for (var j = 0; j < numberOfLower; j++){
                yourPassword.push(lowerCaseArray[j]);
            }
            var numberOfSpecial = 0;
            console.log("number of special case: " + numberOfSpecial);
            var numberOfUpper = 0;
            console.log("number of upper characters: " + numberOfUpper);
            console.log(yourPassword);
        }

        // if users choose only upper 
        if(includeLower === false && includeUpper === true && includeSpecial === false){
            var numberOfUpper = 128;
            console.log("number of upper case: " + numberOfUpper);
            for (var j = 0; j < numberOfUpper; j++){
                yourPassword.push(upperCaseArray[j]);
            }
            var numberOfSpecial = 0;
            console.log("number of special case: " + numberOfSpecial);
            var numberOfLower = 0;
            console.log("number of lower characters: " + numberOfLower);
            console.log(yourPassword);
        }

        // if users choose only special 
        if(includeLower === false && includeUpper === false && includeSpecial === true){
            var numberOfSpecial = 128;
            console.log("number of special case: " + numberOfSpecial);
            for (var j = 0; j < numberOfSpecial; j++){
                yourPassword.push(specialCaseArray[j]);
            }
            var numberOfLower = 0;
            console.log("number of lower case: " + numberOfLower);
            var numberOfUpper = 0;
            console.log("number of upper characters: " + numberOfUpper);
            console.log(yourPassword);
        }
    }
    // randomize the password array 
    shuffle(yourPassword);
    console.log(yourPassword);
    // join the password array into a single string
    var password = yourPassword.join("");
    console.log(password);
    return password;
        
}



