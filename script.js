// Initialize EmailJS
(function () {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

// Form submission handling
document.getElementById("giveawayForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        bitcoinAddress: document.getElementById("bitcoinAddress").value,
    };

    emailjs
        .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
        .then(
            function () {
                alert("Thank you! Your submission has been sent.");
                document.getElementById("giveawayForm").reset();
            },
            function (error) {
                console.error("Email failed to send:", error);
                alert("Oops! Something went wrong. Please try again.");
            }
        );
});
