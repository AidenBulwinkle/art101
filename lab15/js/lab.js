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

function getStuff() {
	console.log("Clicked!");
  $.ajax({
    url: "https://yesno.wtf//api",
    type: "GET",
    data: {},
  })
  .done(function(data) {
 		// console.log(data);
    console.log(data);
    var answer = data.answer;
    var imgURL = data.image;
    $("#output").html("<h2>" + answer);
    $("#output").append("<img src=" + imgURL + ">");
  })
}

$("button").click(getStuff);