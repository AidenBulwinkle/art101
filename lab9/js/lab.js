// index.js - JavaScript for the Web
// Author: Aiden Olivier and Elenes Vilchis
// Date: 5.9.23

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
 
 var outputEl = document.getElementById("output");
 console.log("outputEl: ", outputEl);
 
 var new1El = document.createElement("p");

 new1El.innerHTML = "Thing 1";
 new1El.id = "new-one";
 new1El.style.background = "yellow"

 var new2El = document.createElement("p");
 new1El.id = "new-two";

 new2El.innerHTML = "Thing 1 again but cooler";
 new2El.style.color = "red"
 new2El.style.fontFamily = "times-new-roman"
 new2El.style.background = "black"

 outputEl.appendChild(new1El);
 outputEl.appendChild(new2El);

 outputEl.className = "changed";
