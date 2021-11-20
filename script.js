//Assignment Code: Add "Event Listener" to generate button.
document.querySelector('#generate').addEventListener('click', writePassword);

// List all possible outcomes.
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbol = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';'];
var alphalower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphaupper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// select options.
var confirmlength = '';
var confirmsymbol;
var confirmnumeric;
var confirmuppercase;
var confirmlowercase;

function generatePassword() {
  var confirmlength = window.prompt('Please choose a password length between 8 and 128 characters (Pick a number from 8 to 128).');
  // check if a valid number (not alphabetical character) is selcted.
  while (confirmlength <= 7 || confirmlength > 128 || isNaN(confirmlength) === true) {
    window.alert('Invalid length. Please use numerical numbers to choose a length between 8 and 128 characters.');
    var confirmlength = window.prompt('How many characters would you like to choose for your password length?');
    }
  // To confirm the listed options.
  var confirmsymbol = window.confirm('Click OK to include special characters in your password.');
  var confirmnumeric = window.confirm('Click OK to include numerical characters in your password.');
  var confirmuppercase = window.confirm('Click OK to include uppercase characters in your password.');
  var confirmlowercase = window.confirm('Click OK to include lowercase characters in your password.');

  // Reloop unless at least 1 option is choosen.
    while(confirmuppercase === false && confirmlowercase === false && confirmsymbol === false && confirmnumeric === false) {
      window.alert('You must select at least one character type.');
      
      //Rerun the loop.
      var confirmsymbol = window.confirm('Click OK to include special characters in your password.');
      var confirmnumeric = window.confirm('Click OK to include numerical characters in your password.');
      var confirmuppercase = window.confirm('Click OK to include uppercase characters in your password.');
      var confirmlowercase = window.confirm('Click OK to include lowercase characters in your password.');
    }
    // Assign an action to the password parameters.
    var passwordCharacters = [];
      
    if (confirmsymbol) {
      passwordCharacters = passwordCharacters.concat(symbol);
    }

    if (confirmnumeric) {
      passwordCharacters = passwordCharacters.concat(number);
    }
      
    if (confirmlowercase) {
      passwordCharacters = passwordCharacters.concat(alphalower);
    }

    if (confirmuppercase) {
      passwordCharacters = passwordCharacters.concat(alphaupper);
    }
    
    var randomPassword = "";

    for (var i = 0; i < confirmlength; i++) {
      randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      console.log(randomPassword)
    }
    return randomPassword;
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
};

