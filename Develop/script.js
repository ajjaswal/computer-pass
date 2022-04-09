// Assignment code here
function generatePassword() {
  var lowercase = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
  var uppercase = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

  IncLowercase = confirm("Include lowercase letters? Select OK or Cancel");
  if (IncLowercase) {
    alert("Your password will include lowercase letters");
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
