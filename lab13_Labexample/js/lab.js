// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants
var maxFactors = 10;
var outputEl;

// Functions
function getFactorObj() {
    var factorObj = {};
    for (var factor = 0; factor < maxFactors; factor++) {
        var numId = "num" + factor;
        var textId = "text" + factor;
        var numElement = document.getElementById(numId);
        var textElement = document.getElementById(textId);
        var numValue = numElement ? numElement.value : "";
        var textValue = textElement ? textElement.value : "";
        console.log(factor + ") num:", numValue, "text:", textValue);

        if (numValue && textValue) {
            factorObj[numValue] = textValue;
        }
    }
    return factorObj;
}

function outputToPage(str) {
    var newEl = document.createElement("p");
    newEl.innerHTML = str;
    outputEl.appendChild(newEl);
}

function fizzBuzzBoom(maxNums, factorObj) {
    for (var num = 0; num < maxNums; num++) {
        debugger;

        var outputStr = "";

        for (var factor in factorObj) {
            if (num % factor == 0) {
                outputStr += factorObj[factor];
            }
        }

        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr);
    }
}

function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.addEventListener("DOMContentLoaded", function () {
    outputEl = document.getElementById("output");

    document.getElementById("submit").addEventListener("click", function () {
        var max = document.getElementById("max").value;
        console.log("max:", max);
        if (!max) {
            reportError("You must provide a maximum");
            return;
        }
        var factorObj = getFactorObj();
        console.log("factorObj:", factorObj);
        if (Object.keys(factorObj).length === 0) {
            reportError("Put in stuff, dude");
            return;
        }

        outputEl.innerHTML = "";
        fizzBuzzBoom(max, factorObj);
        outputEl.classList.add("cols");
    });
});

// Let's get this party started
console.log("helloooo why isn't this working? Is the JavaScript linked?");
