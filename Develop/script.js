// Assignment Code
var char = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var sym = ["!", "@", "#", "$", "%", "+", "_"];

var password = num + sym + char;

for (var i = 0; i < 26; i++) {
  console.log(char[i]);
}

for (var i = 0; i < num.length; i++) {
  console.log(num[i]);
}

for (var i = 0; i < sym.length; i++) {
  console.log(sym[i]);
}

console.log(password);

for (var i = 0; i < password.length - 1; i++) {
  var userpassword = Math.floor(Math.random() * 10);
  console.log(userpassword);
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
