


var length = (process.argv.length);

var args = process.argv.splice(2);

for (var i = 0; i < length - 2; i++) {

  var newString = "";

  var currentState = args[i];

  for (var j = currentState.length; j >= 0; j--) {
    var checkSpace = currentState.charAt(j);
    newString = newString + checkSpace;

  };

console.log(newString);

}

