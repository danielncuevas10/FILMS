// Store the image file names in an array
var images = ['Images/2023/TheFabelmans.jpg', 'Images/2023/Tar.jpg',
 'Images/2023/Oppenheimer.jpg', 'Images/2023/IndianaJones.jpg','Images/2023/Barbie.jpg',
'Images/2023/TheFlash.jpg','Images/2023/Babylon.jpg'];
var currentIndex = 0;
var imgElement = document.getElementById('myImage');

function changeImage() {
  // Fade out the image
  imgElement.style.opacity = 0;

  setTimeout(function() {
    // Change the image source
    imgElement.src = images[currentIndex];

    // Fade in the image
    imgElement.style.opacity = 1;

    // Increment the index
    currentIndex++;

    // Reset the index to 0 if it exceeds the array length
    if (currentIndex >= images.length) {
      currentIndex = 0;
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

    expandedContainer.appendChild(expandedImage);
    document.body.appendChild(expandedContainer);
  }
