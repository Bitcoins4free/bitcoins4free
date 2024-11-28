// Initialize EmailJS
(function () {
    emailjs.init("kL8LldtVITo1oHfSk"); // Your public EmailJS API key
})();

// Form submission handling
document.getElementById("giveawayForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Collect form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        bitcoinAddress: document.getElementById("bitcoinAddress").value,
    };

    // Send form data to your EmailJS service and template
    emailjs
        .send("service_4wb3isl", "template_e8vem1j", formData) // Using your template ID here
        .then(
            function () {
                alert("Thank you! Your submission has been sent.");
                document.getElementById("giveawayForm").reset(); // Clear the form after submission
            },
            function (error) {
                console.error("Email failed to send:", error);
                alert("Oops! Something went wrong. Please try again.");
            }
        );
});
