// JavaScript to handle navigation and interactivity
document.querySelector('#contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your submission! We will get back to you soon.');
});

// Function to dynamically show recommendations
function showRecommendation(destinationType) {
    var elements = document.querySelectorAll('.destination');
    elements.forEach(function(element) {
        if (element.classList.contains(destinationType)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}

// Example for event listeners for beach recommendations
document.querySelector('#beach-button').addEventListener('click', function() {
    showRecommendation('beach');
});

// Additional interactivity can be added here based on further requirements
