// Assignment code here
let userInfo = {
  passLength: 0,
  chars: "",
  password: "",
};
// Character sets
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChars = "0123456789";
const specialChars = /[!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`]/;

// Choose desired password length
function chooseLength() {
  // Get user input on how long password should be
  userInfo.passLength = prompt("Please choose a number between 8 and 128");
  // Round answer down if given a decimal for whatever reason
  userInfo.passLength = Math.floor(Number(userInfo.passLength));
  // Run chooseLength() until length is between 8 and 128 AND a number
  while (userInfo.passLength < 8 || userInfo.passLength > 128 || isNaN(userInfo.passLength)) {
    alert("Password is either to long or short, please choose again");
    chooseLength();
  }
}

// Choose what to characters to include in password
function chooseChars() {
  userInfo.chars = "";
  // Comfirm prompts
  lowercaseConfirm = confirm("Do you want to include lowercase letters?");
  uppercaseConfirm = confirm("Do you want to include uppercase letters?");
  numbericConfirm = confirm("Do you want to include numbers?");
  specialConfirm = confirm("Do you want to include special characters?");

  // Check is prompts are true or false ---- if true, add char sets to userInfo.chars
  // Check lowercaseConfirm
  if (lowercaseConfirm) {
    userInfo.chars += lowercaseChars;
  }
  // Check uppercaseConirm
  if (uppercaseConfirm) {
    userInfo.chars += uppercaseChars;
  }
  // Check numericConfirm
  if (numbericConfirm) {
    userInfo.chars += numericChars;
  }
  // Check specailConfirm
  if (specialConfirm) {
    userInfo.chars += specialChars;
  }
  // If ALL prompts are NOT selected, alert use and restart function
  while (!lowercaseConfirm && !uppercaseConfirm && !numbericConfirm && !specialConfirm) {
    alert("Please choose at least one of the prompts :)");
    chooseChars();
  }
}

function generatePassword() {
  // Reset any password stored from last generatePassword() execution
  userInfo.password = "";
  // Let user know they will need to answer upcoming prompts
  alert("Your password generation is about to start. Please answer the following prompts");

  // Choose password length
  chooseLength();
  console.log(userInfo.passLength);
  // Choose character to include
  chooseChars();
  console.log(userInfo.chars);

  // Generate password --- take desired passwordLength and start looping
  for (let i = 0; i < userInfo.passLength; i++) {
    // Generate random number based on length of userInfo.chars string
    let randomNumber = Math.floor(Math.random() * userInfo.chars.length);
    // For each iteration, select random character within userInfo.chars string
    userInfo.password += userInfo.chars.substring(randomNumber, randomNumber + 1);
    // Generating random combination for loop information used from
    // https://www.programiz.com/javascript/examples/generate-random-strings
  }

  console.log(userInfo.password, userInfo.password.length);

  console.log("Have lowercase letters?", haveLower(userInfo.password));
  console.log("Have uppercase letters?", haveUpper(userInfo.password));
  console.log("Have numbers?", haveNumber(userInfo.password));
  console.log("Have special characters?", haveSpecial(userInfo.password));

  return userInfo.password;
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

// Trying to create tests

var haveLower = function (str) {
  testLower = /[a-z]/;

  if (testLower.test(str)) {
    return true;
  } else {
    return false;
  }
};

var haveUpper = function (str) {
  testUpper = /[A-Z]/;

  if (testUpper.test(userInfo.password)) {
    return true;
  } else {
    return false;
  }
};

var haveNumber = function (str) {
  var testNumber = /[0-9]/;

  if (testNumber.test(userInfo.password)) {
    return true;
  } else {
    return false;
  }
};

var haveSpecial = function (str) {
  var testSpecial = specialChars;

  if (testSpecial.test(userInfo.password)) {
    return true;
  } else {
    return false;
  }
};

// console.log(haveSpecial);

// Figuring out how to test if generated password contains different character ranges
// https://melvingeorge.me/blog/check-if-string-contains-atleast-one-letter-regex-javascript

// https://www.codegrepper.com/code-examples/javascript/javascript+check+if+string+contains+at+least+one+special+characters
