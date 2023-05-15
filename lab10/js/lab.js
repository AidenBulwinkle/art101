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
  // Get the value of the input field
  let userName = document.getElementById("user-name").value;
  // Sort the user's name alphabetically
  let sortedName = sortUserName(userName);
  // Capitalize the first letter of the sorted name
  let capitalizedSortedName = capitalizeFirstLetter(sortedName);
  // Display the sorted and capitalized name on the page
  let output = document.getElementById("output");
  output.innerHTML = "<p>Your sorted and capitalized name is: " + capitalizedSortedName + "</p>";
});




// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
// Function to sort a name alphabetically
function sortUserName(name) {
  // Split the name into an array of letters
  let nameArray = name.split("");
  // Sort the array of letters
  let sortedArray = nameArray.sort();
  // Join the sorted array of letters back into a string
  let sortedName = sortedArray.join("");
  return sortedName;
}