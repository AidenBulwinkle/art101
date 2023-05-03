// index.js - function
// Author: Aiden Olivier
// Date: 5.2.23

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.

function sortUserName () {
  var userName = window.prompt ("Hi. Please tell me your name so I can fix it.");
  console.log ("username =", userName);

  //Split String into array

  var nameArray = userName.split ('');
  console.log("nameArray =", nameArray);
  //Join array back to string
  var nameSorted = nameArray.sort();
  console.log("nameSorted: ",nameSorted);
  var nameSorted1 = nameSorted.join('');
  console.log("nameSorted =", nameSorted1);
  //got it thanks for the note
  return nameSorted1;
}

function main() {

  let SORTED_USERNAME = sortUserName()
  document.writeln ("Oh! I have fixed it: " , SORTED_USERNAME ,"</br>");

  printNames()
  
  /*
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  
  // Add userName to an HTML element
  var nameElement = document.getElementById("user-name");
  nameElement.innerHTML = userName;
  
  // Sort and randomize the name
  var sortedName = sortUserName();
  var randomName = randomizeName();
  
  // Output the results to HTML elements
  var sortedElement = document.getElementById("sorted-name");
  sortedElement.innerHTML = sortedName.toString();
  
  var randomElement = document.getElementById("random-name");
  randomElement.innerHTML = randomName;
  */

}



// let's get this party started
main();
