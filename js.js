document.getElementById("alertButton").addEventListener("click", function() {
    alert("Button clicked!");
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted!");
});
