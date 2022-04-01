function generatePassword(){
  var letters = ['q','w','e','r','t','y','u','i','o','p','z','x','c','v','b'];
  var uppercaseLetters = ['A','S','D','F','G','H','J','K','L','N','M'];
  var specialChars = ['!','@','#','$','%','^','&','.'];
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  
  
  var passwordLength = prompt('Please choose your password length between 7 and 18 characters');
  var passwordN = confirm ('Do you want to add number?')
  var passwordSc = confirm ('Do you want to add special character?')
  var passwordUl = confirm ('Do you want to add uppercase letter?')
  var userConfirm = confirm ('This is your length: ' + passwordLength + ' ?')
  
  if (passwordLength >6 && userConfirm === true && passwordLength < 19){
    alert('This is your password, if you want another one, click generate password again')
  } else{
    alert('Please choose your password length between 7 and 18 characters')
    return ('Password');
  }
  
  var ramdomPass1 = letters.concat(numbers,specialChars,uppercaseLetters);
  var ramdomPass2 = letters.concat(numbers,specialChars);
  var ramdomPass3 = letters.concat(numbers,uppercaseLetters);
  var ramdomPass4 = letters.concat(specialChars,uppercaseLetters);
  var ramdomPass5 = letters.concat(numbers);
  var ramdomPass6 = letters.concat(specialChars);
  var ramdomPass7 = letters.concat(uppercaseLetters);


  var piggybank = [];
  if (userConfirm === true && passwordN === true && passwordSc === true && passwordUl === true) {
    piggybank.push(ramdomPass1.join(''));
  } else if (userConfirm === true && passwordN === true && passwordSc === true && passwordUl === false) {
    piggybank.push(ramdomPass2.join(''));
  } else if (userConfirm === true && passwordN === true && passwordSc === false && passwordUl === true) {
    piggybank.push(ramdomPass3.join(''));
  } else if (userConfirm === true && passwordN === false && passwordSc === true && passwordUl === true) {
    piggybank.push(ramdomPass4.join(''));
  } else if (userConfirm === true && passwordN === true && passwordSc === false && passwordUl === false) {
    piggybank.push(ramdomPass5.join(''));
  } else if (userConfirm === true && passwordN === false && passwordSc === true && passwordUl === false) {
    piggybank.push(ramdomPass6.join(''));
  } else if (userConfirm === true && passwordN === false && passwordSc === false && passwordUl === true) {
    piggybank.push(ramdomPass7.join(''));
  } else if (userConfirm === true && passwordN === false && passwordSc === false && passwordUl === false) {
    piggybank.push(letters.join(''));
  } else {
    return ('Password');
  }

  var tempPass = piggybank.join('');
  var password = ' ';


  for ( let i = 0; i < passwordLength; i++) {
    password += tempPass.charAt(Math.floor(Math.random() * tempPass.length));
  }
  
  return password;
}






// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);