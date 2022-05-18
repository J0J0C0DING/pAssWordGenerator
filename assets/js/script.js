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

function newPass(passwordGen) {
  userInfo.password = "";

  for (let i = 0; i < userInfo.passLength; i++) {
    // Generate random number based on length of userInfo.chars string
    let randomNumber = Math.floor(Math.random() * userInfo.chars.length);
    // For each iteration, select random character within userInfo.chars string
    userInfo.password += userInfo.chars.substring(randomNumber, randomNumber + 1);
    // Generating random combination for loop information used from
    // https://www.programiz.com/javascript/examples/generate-random-strings
  }
  return passwordGen;
}

function generatePassword() {
  // Reset any password stored from last generatePassword() execution
  // userInfo.password = "";
  // Let user know they will need to answer upcoming prompts
  alert("Your password generation is about to start. Please answer the following prompts");

  // Choose password length
  chooseLength();
  console.log(`User-selected length: ${userInfo.passLength}`);
  // Choose character to include
  chooseChars();
  console.log(`User-selected characters: ${userInfo.chars}`);

  // Generate password --- take desired passwordLength and start looping
  newPass();

  console.log(`Password 1st Attempt: ${userInfo.password}`);

  compare();

  return userInfo.password;
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(`Password Final: ${userInfo.password} | Length: ${userInfo.passLength}`);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password Validating Tests //////////////////
var test = {
  haveLower: function (str) {
    testLower = /[a-z]/;
    if (testLower.test(str)) {
      return true;
    } else {
      return false;
    }
  },

  haveUpper: function (str) {
    testUpper = /[A-Z]/;
    if (testUpper.test(str)) {
      return true;
    } else {
      return false;
    }
  },

  haveNumber: function (str) {
    testNumber = /[0-9]/;
    if (testNumber.test(str)) {
      return true;
    } else {
      return false;
    }
  },

  haveSpecial: function (str) {
    testSpecial = specialChars;
    if (testSpecial.test(str)) {
      return true;
    } else {
      return false;
    }
  },
};

var compare = function () {
  while (
    test.haveLower(userInfo.chars) !== test.haveLower(userInfo.password) ||
    test.haveUpper(userInfo.chars) !== test.haveUpper(userInfo.password) ||
    test.haveNumber(userInfo.chars) !== test.haveNumber(userInfo.password) ||
    test.haveSpecial(userInfo.chars) !== test.haveSpecial(userInfo.password)
  ) {
    newPass();
    console.log(`Password nxt Attempt: ${userInfo.password}`);
  }
};
// Figuring out how to test if generated password contains different character ranges
// https://melvingeorge.me/blog/check-if-string-contains-atleast-one-letter-regex-javascript

// https://www.codegrepper.com/code-examples/javascript/javascript+check+if+string+contains+at+least+one+special+characters
