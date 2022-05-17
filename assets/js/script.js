// Assignment code here
let userInfo = {
  passLength: 0,
  chars: "",
};

let chooseLength = function () {
  userInfo.passLength = prompt("Please choose a number between 8 and 128");
  userInfo.passLength = Math.floor(Number(userInfo.passLength));

  while (userInfo.passLength < 8 || userInfo.passLength > 128 || isNaN(userInfo.passLength)) {
    alert("Password is either to long or short, please choose again");
    chooseLength();
  }
};

let chooseChars = function () {
  userInfo.chars = "";

  lowercaseConfirm = confirm("Do you want to include lowercase letters?");
  uppercaseConfirm = confirm("Do you want to include uppercase letters?");
  numbericConfirm = confirm("Do you want to include numbers?");
  specialConfirm = confirm("Do you want to include special characters?");

  if (lowercaseConfirm) {
    userInfo.chars += "abcdefghijklmnopqrstuvwxyz";
  }

  if (uppercaseConfirm) {
    userInfo.chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (numbericConfirm) {
    userInfo.chars += "0123456789";
  }

  if (specialConfirm) {
    userInfo.chars += ` !"#$%&'()*+,-./:;<=>?@[\]^_{|}~`;
  }
};

function generatePassword() {
  alert("Your password generation is about to start. Please answer the following prompts");

  // Choose password length
  chooseLength();
  console.log(userInfo.passLength);

  chooseChars();
  console.log(userInfo.chars);
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
