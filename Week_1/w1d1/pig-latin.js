var length = (process.argv.length);


var args = process.argv.splice(2);


var stringone = args.toString();


var piglatin = "";
var newString = "";

for (var i = 0; i < length - 2; i++) {

  var currentState = args[i];
  var string = currentState.length;
  //console.log(string);

  for (var j = 0; j < string; j++) {

    var checkSpace = currentState.charAt(j);
    if (j === 0) {

      piglatin = checkSpace + "ay"
      //console.log(piglatin)
    } else if (j === string - 1) {
        newString = newString + checkSpace + piglatin + " "
    } else {
        newString = newString + checkSpace
    };
  };
 }
console.log(newString)
  // for (var i = 0; i < string.length; i++)



  //   var checkSpace = currentState.charAt(i)
  //   console.log(checkSpace)

// Go through the number of characters in the string.
// for (var i = 0; i < stringone.length; i++){
// // Check the value of the string
//   var checkSpace = stringone.charAt(i);
//   //console.log(checkSpace)
//   if (checkSpace === "a") {

//     newString = newString + "4";
//   } else if (checkSpace === "e") {