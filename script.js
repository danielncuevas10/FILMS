// Store the image file names in an array
var images = ['Images/Posters/ThereWill.jpg', 'Images/Posters/Goodfellas.jpg',
 'Images/Posters/list.jpg', 'Images/Posters/DarthVader.jpg', 
 'Images/Posters/michael.jpg', 
 'Images/Posters/Chinatown.jpg','Images/Posters/LOTR.jpg'];
var currentApp = 0;
var imgElement = document.getElementById('myImage');

function changeImage() {
  // Fade out the image
  imgElement.style.opacity = 0;

  setTimeout(function() {
    // Change the image source
    imgElement.src = images[currentApp];

    // Fade in the image
    imgElement.style.opacity = 1;

    // Increment the App
    currentApp++;

    // Reset the App to 0 if it exceeds the array length
    if (currentApp >= images.length) {
      currentApp = 0;
    }
  }, 500); // Adjust the delay to match the CSS transition time
}

setInterval(changeImage, 4000);

/* JavaScript to handle image expansion */

  function expandImage(img) {
    var expandedContainer = document.createElement("div");
    expandedContainer.className = "expanded-image";
    expandedContainer.onclick = function() {
      document.body.removeChild(this);
    };

    var expandedImage = document.createElement("img");
    expandedImage.src = img.src;
    expandedImage.alt = img.alt;

    expandedContainer.AppendChild(expandedImage);
    document.body.AppendChild(expandedContainer);
  }
