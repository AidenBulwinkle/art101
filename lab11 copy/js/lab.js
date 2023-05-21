// index.js - purpose and description here
// Author: Your Name
// Date:

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
var name = prompt ("Enter name");
var house = sortingHat(name);
console.log("sorting hat says: ", house)

function sortingHat (string) {
  var len = string.length;
  if (len % 4 == 0){
    return "Griffindor";
  }

else  if (len % 4 == 1){
    return "snakiepeeps";}

else  if (len % 4 == 2){
   return "owls";}

else  if (len % 4 == 3){
   return "ravens";}

  
}
