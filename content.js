// content.js

// Function to click the button
function clickButton() {
    var button = document.querySelector('.ytp-ad-skip-button-modern.ytp-button'); // Adjust the selector as needed
    if (button) {
        button.click();
        console.log('Button clicked!');
    }
}

// Call the clickButton function when the page is loaded
document.addEventListener('DOMContentLoaded', clickButton);

// Use a MutationObserver to detect dynamically added buttons
var observer = new MutationObserver(function (mutations) {
    console.log('added button!');
    mutations.forEach(function (mutation) {
        if (mutation.type === 'childList') {
            clickButton();
        }
    });
});

// Start observing changes in the DOM
observer.observe(document.body, {
    childList: true,
    subtree: true
});
