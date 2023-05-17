// index.js - Learn jQuery
// Author: Aiden Olivier
// Date: 5/17/23

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
$(document).ready(function() {
  $("#button1").click(function() {
      $("#button2").toggleClass("color-change1");
      $("h1, h2").toggleClass("change-font1");
  });

  $("#button2").click(function() {
      $("#button1").toggleClass("color-change2");
      $("h1, h2").toggleClass("change-font2");
  });
});

