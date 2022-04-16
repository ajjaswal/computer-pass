// arrays for different character types in potential password
function generatePassword() {
  var lowercase = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
  var uppercase = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
  var newpassword = [];

  // Confirm number of characters in password
  numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Invalid. Choose between 8 and 138 characters";
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("Please enter a valid number.");
  }
  else {
    alert("Your password will be " + numberOfCharacters + " characters long.");
    
  }

  // variables to decide which characters will be included in the final password
  IncLowercase = confirm("Include lowercase letters? Select OK or Cancel");
  if (IncLowercase) {
    var turnToLowercase = alert("Your password will include lowercase letters");
  } else {
    alert("Your password will NOT include lowercase letters");
  }

  IncUppercase = confirm("Include uppercase letters? Select OK or Cancel");
  if (IncUppercase) {
    alert("Your password will include uppercase letters");
  } else {
    alert("Your password will NOT include uppercase letters");
  }

  IncNumbers = confirm("Include Numbers? Select OK or Cancel");
  if (IncNumbers) {
    alert("Your password will include numbers");
  } else {
    alert("Your password will NOT include numbers");
  }

  IncSpecial = confirm("Include Special Characters? Select OK or Cancel");
  if (IncSpecial) {
    alert("Your password will include Special Characters");
  } else {
    alert("Your password will NOT include Special Characters");
  }

  // alert to tell user to choose at least 1 character type
  if (IncLowercase === false && IncUppercase === false && IncNumbers === false && IncSpecial === false) {
    alert("Choose a character type");
  };

  // Concatenate characters into final password depending what the user chose
  if (IncLowercase) {
    newpassword = newpassword.concat(lowercase);
  }
  if (IncUppercase) {
    newpassword = newpassword.concat(uppercase);
  }
  
  if (IncNumbers) {
    newpassword = newpassword.concat(numbers);
  }
  if (IncSpecial) {
    newpassword = newpassword.concat(special);
  }

  // randomize password with math.random and math.floor
  let finalPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let rng =[Math.floor(Math.random() * newpassword.length)];
    finalPassword = finalPassword + newpassword[rng];
  }
  // print final password in the box
  return finalPassword;
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
generateBtn.addEventListener("click", writePassword);``
