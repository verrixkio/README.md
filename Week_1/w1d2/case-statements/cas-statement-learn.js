var args = process.argv.splice(2);
var argument = args
var stringone = argument.toString();
var newString = ""

//console.log (args)

  // Go through the number of characters in the string.
for (var i = 0; i < stringone.length; i++){
  // Check the value of the string
  var checkSpace = stringone.charAt(i);

  switch (checkSpace) {

  case "a" :
    newString += "4";
    break;

  case "e" :
    newString += "3";
    break;

  case "o" :
    newString += "0";
    break;

  case "l" :
    newString += "1";
    break;

  default:
    newString += checkSpace
    break;
  }
}
console.log(newString)




