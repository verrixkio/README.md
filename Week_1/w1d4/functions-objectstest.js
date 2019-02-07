// var myFn = function() {
//   console.log("I am function.");
// }

// myFn.someAttribute = 42;
// console.log(myFn.someAttribute);

// function runner(f) {
//   console.log(f)
//   f();
// }

// runner(myFn);

// //


function findWaldo(arr, found) {
  arr.forEach(function(element) {
    if (element === "Waldo") {
      
      found(arr.indexOf(element));   // execute callback
    }
  })
}


function actionWhenFound(indexPos) {cd
  console.log("Found him at indice " + indexPos);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
