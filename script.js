// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Replace the still_giftbox.gif with giftbox.gif
        replaceImageWithGif(function() {
            // After playing the gif for 3.8 seconds, redirect to message_page.html
            setTimeout(function() {
                window.location.href = 'proceedwithcare.html';
            }, 2010); // Wait for 3.8 seconds
        });
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to replace still_giftbox.gif with giftbox.gif
function replaceImageWithGif(callback) {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Clear existing content in the image container
    imageContainer.innerHTML = '';
    // Create a new Image element for the gift box
    var giftBoxImage = new Image();
    // Set the source (file path) for the gift box image
    giftBoxImage.src = 'catinabox.gif'; // Assuming the gift box image is named "giftbox.gif"
    // Set alternative text for the image (for accessibility)
    giftBoxImage.alt = 'Gift Box';
    // When the gift box image is fully loaded, add it to the image container
    giftBoxImage.onload = function() {
        imageContainer.appendChild(giftBoxImage);
        // If a callback function is provided, execute it
        if (callback) {
            callback();
        }
    };
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#FADADD'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 4000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'frame1.png'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'giftbox.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the cat.gif initially
displayCat();