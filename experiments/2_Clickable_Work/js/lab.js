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
const imageOverlay = document.querySelector(".image-overlay");
const modal = document.getElementById("modal");
const modalImage = document.querySelector(".modal-image");
const modalText = document.querySelector(".modal-text");
const closeButton = document.querySelector(".close-button");
let secondImage = null;

imageOverlay.addEventListener("click", function() {
  modal.style.display = "block";
  modalImage.src = this.previousElementSibling.src;
  modalText.innerHTML = this.querySelector(".image-text").innerHTML;

  // Check if the second image exists, if not, create it
  if (!secondImage) {
    secondImage = document.createElement("img");
    secondImage.src = "img/lab11-2.png";
    modalText.appendChild(secondImage);
  }

  // Show the second image
  secondImage.style.display = "block";
});

closeButton.addEventListener("click", function() {
  modal.style.display = "none";
  // Hide the second image when the modal is closed
  if (secondImage) {
    secondImage.style.display = "none";
  }
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    // Hide the second image when the modal is closed
    if (secondImage) {
      secondImage.style.display = "none";
    }
  }
});
