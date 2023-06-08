// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it does and what parameters are passed to it.
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

// xkcd comics
// Author: Michael Quinn and Kira
// Date: 06/03/2023

// Using the shorthand $.get() method
$.get("https://api.allorigins.win/raw?url=https://xkcd.com/info.0.json", function (comicObj) {
  displayComic(comicObj);
}, "json").fail(function (jqXHR, textStatus, errorThrown) {
  console.log("Error:", textStatus, errorThrown);
});

function displayComic(comicObj) {
  // Get the output element
  var output = $("#output");

  // Create HTML to display the comic information
  var comicHTML = "<h2>" + comicObj.title + "</h2>";
  comicHTML += "<img src='" + comicObj.img + "' alt='" + comicObj.alt + "'>";
  comicHTML += "<p>" + comicObj.alt + "</p>";

  // Set the comic HTML as the content of the output element
  output.html(comicHTML);
}
