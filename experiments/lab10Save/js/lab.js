// index.js - function: get a 10/10 on the assignment
// Author: Aiden Olivier
// Date:5.14.23

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
var buttonEl = document.getElementById ("my-button")
buttonEl.addEventListener("click", function (){
  var inputEl = document.getElementById("my-input");
  var value = inputEl.value;
  console.log(value)
  var newEl = document.createElement("p");
  newEl.innerHTML = value;
  document.getElementById("output").appendChild(newEl);
})


function sortMe(str) {
  return str.split('').sort().join('');
}
