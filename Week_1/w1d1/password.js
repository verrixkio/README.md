var args = process.argv.splice(2);

function obfuscate(args) {

  var argument = args

  var stringone = argument.toString();

  var newString = ""

  // Go through the number of characters in the string.
  for (var i = 0; i < stringone.length; i++){
  // Check the value of the string
    var checkSpace = stringone.charAt(i);
    //console.log(checkSpace)
    if (checkSpace === "a") {

      newString = newString + "4";
    } else if (checkSpace === "e") {

        newString = newString + "3";
    } else if (checkSpace === "o") {

        newString = newString + "0";

    } else if (checkSpace === "l") {


        newString = newString + "1";
    } else {

        newString = newString + checkSpace;
    }
  }
  return(newString);
}

console.log(obfuscate(args))




