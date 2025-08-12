// script.js

// Wait for the HTML to load
document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("h1");
    const btn = document.querySelector(".btn");

    // Change heading text when the page loads
    heading.textContent = "Hello from JavaScript!";

    // Add a click event to the button
    btn.addEventListener("click", (event) => {
        event.preventDefault(); // stop the link from opening immediately
        alert("Button clicked! Redirecting you to Example.com...");
        window.location.href = btn.href; // redirect after alert
    });
});
