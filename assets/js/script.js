// -----------------------------------------------------------
// Setting up the Photo Slide for displaying the Zine Pages 
// -----------------------------------------------------------

// To start from Page 1: Front Cover
let currentImage = 1; 

// The total number of Images to choose from 
const totalImages = 10;

// To get the image element 
const imageElements = document.getElementById("zineImage");

// Function to update the image source based on the current page
function updateImage() {
    imageElements.src = `assets/img/Zines-Pages/Pg${currentImage}.jpg`; // Update the image source from Image 1 to Image 2, and then to Image 3 so on 
}

// Previous Button Set-Up
document.querySelector(".previousButton").addEventListener("click", () => {
    currentImage--; // Decrease the Image Number
    if (currentImage < 1) {
        currentImage = totalImages; // Loop back to the Last Image
    }
    updateImage(); // Update the image thats displayed
});

// Next button Set-Up
document.querySelector(".nextButton").addEventListener("click", () => {
    currentImage++; // Increase the Image Number
    if (currentImage > totalImages) {
        currentImage = 1; // Loop back to the First Image
    }
    updateImage(); // Update the image thats displayed
});