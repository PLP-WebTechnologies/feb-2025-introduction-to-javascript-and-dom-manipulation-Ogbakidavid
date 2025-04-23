document.addEventListener('DOMContentLoaded', function() {
    const mainHeading = document.getElementById('mainHeading');
    const dynamicText = document.getElementById('dynamicText');
    const contentBox = document.getElementById('contentBox');
    const toggleBox = document.getElementById('toggleBox');
});

// Change text Button
document.getElementById('changeTextBtn').addEventListener('click', function() {
    // Change text content dynamically
    const texts = [
        "Text has been successfully change!",
        "DOM manipulation is easy with javascript!",
        "You can change content dynamically!",
        "This is a simple example of DOM Manipulation!"
    ];
    
    // Get random text from array
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    dynamicText.textContent = randomText;
    
    // Add fade-out effect
    dynamicText.style.transition = 'opacity 0.5s ease-linear';
    dynamicText.style.opacity = '0';
    setTimeout(() => {
        dynamicText.style.opacity ='1';
    }, 100);
});

// Change style button
document.getElementById('changeStyleBtn').addEventListener('click', function() {
    // Modify css style via Javascript
    const colors = ['#ff5777', '#4caa99', '#ff9800', '#2196f3', '#673ab7'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    contentBox.style.backgroundColor = randomColor;
    contentBox.style.transition = 'background-color 0.5s ease-linear';
    contentBox.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)';
    
    // reset after 2 seconds
    setTimeout(() => {
        contentBox.style.boxShadow = 'none';
    }, 2000);
});

// Toggle element button
document.getElementById('toggleElementBtn').addEventListener('click', function() {
    // Add or remove element when button is clicked
    if (toggleBox.classList.contains('removed')) {
        toggleBox.classList.remove('removed');
        this.textContent = 'Hide Element';
    } else {
        toggleBox.classList.add('removed');
        this.textContent = 'Show Element';
    }
});

// Reset Button

document.getElementById('resetBtn').addEventListener('click', function() {
    // Reset all changes
    dynamicText.textContent = 'This text will change when u click the button.';
    contentBox.style.backgroundColor = '#0ef';
    contentBox.style.boxShadow = 'none';
    toggleBox.classList.remove('removed');
    document.getElementById(toggleElementBtn).textContent = 'Toggle Element';
});