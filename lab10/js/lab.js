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
// Event listener for button click
document.getElementById("my-button").addEventListener("click", function() {

  let userName = document.getElementById("user-name").value;

  let sortedName = sortUserName(userName);

  let capitalizedSortedName = capitalizeFirstLetter(sortedName);
  // Display the sorted and capitalized name on the page
  let output = document.getElementById("output");
  output.innerHTML = "<p>Your sorted and capitalized name is: " + capitalizedSortedName + "</p>";
});




// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function sortUserName(name) {
  
  let nameArray = name.split("");

  let sortedArray = nameArray.sort();
 
  let sortedName = sortedArray.join("");
  return sortedName;
}