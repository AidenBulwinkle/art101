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

function sortingHat(str) {
  var length = str.length;
  var mod = length % 5;

  if (mod== 0){
    return "Lion"
  }

  else if (mod == 1) {
    return "Crow"
  }

  else if (mod == 2) {
    return "Snake"
  }

else if (mod == 3) {
  return "Hedgehog"
}

else if (mod == 4) {
  return "Swaggy 5th creature the wombat"}

else if (mod == 5) {
   return "Jellyfish"}

else if (mod == 6) {
  return "Turtle"}
}

var myButton = document.getElementById ("button");
myButton.addEventListener ("click", function (){
  var name = document.getElementById ("input").value;
  var house = sortingHat (name);
  $("#output").append("<p>If you were an animal, you would be a " + house + ".</p>")
})


console.log("testing");