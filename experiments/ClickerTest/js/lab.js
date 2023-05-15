
// Create a basic "Hello, World!" page.
// Add a button (id="my-button") to the Hello World page.

var buttonEl = document.getElementById("my-button");
// Create an event handler within the JS file that listens for a button click.
buttonEl.addEventListener("click", function(){
	console.log("Button pressed");
  // prompt the user to input their name with the prompt() function. 
  var name = prompt("What is your name?");
  var nameStr = "Hello, " + name;
  // change the text from ‘Hello, World!’ to ‘Hello’ + the user’s name
  var helloEl = document.getElementById("hello-world");
  helloEl.innerHTML = nameStr;
})

