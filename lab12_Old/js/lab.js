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

// sortingHat function
function sortingHat(str) {
  var length = str.length;
  var mod = length % 4;

  var houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
  var house = houses[mod];

  return house;
}

// click listener
$(document).ready(function() {
  $("#button").click(function() {
      var name = $("#input").val();
      var house = sortingHat(name);
      $("#output").append("<p>The Sorting Hat has sorted you into " + house + ".</p>");
  });
});
