// index.js - Arrays and Objects
// Author: Aiden Olivier and 
// Date: 5.1.23

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

// Hi prof and tas :))
main();
//Here we define our variables
var myTransport = ["Bike", "bus", "walking"];

//These are being defined here because they were causing errors elsewhere

var year = 1950

myBike = {
  make: "Beacon",
  model: "Roadmaster",
  color: "silver and red",
  year: "1950",
  age: 2023 - year,
}

// output
console.log(myBike)

console.log(myTransport)

document.writeln("Transportion type: ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>",
   JSON.stringify(myBike, null, '\t'), 
   "</pre");
