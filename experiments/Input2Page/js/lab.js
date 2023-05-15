var buttonEl = document.getElementById ("my-button")
buttonEl.addEventListener("click", function (){
  var inputEl = document.getElementById("my-input");
  var value = inputEl.value;
  console.log(value)
  var newEl = document.createElement("p");
  newEl.innerHTML = value;
  document.getElementById("output").appendChild(newEl);
})


function sortMe(str) {
  return str.split('').sort().join('');
}