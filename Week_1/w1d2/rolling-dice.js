var numberOfDice = process.argv.splice(2);

function rollDice () {
  output = "Rolled " + numberOfDice[0] + " dice: "


  for (var i = 0; i < numberOfDice[0]; i++) {
    dice = Math.ceil(Math.random() * 6);
    output += dice + " "
  }
  return output
}
console.log(rollDice())
// function obfuscate(args) {

//   var argument = args

//   var stringone = argument.toString();

//   var newString = ""