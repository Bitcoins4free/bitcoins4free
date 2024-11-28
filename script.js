// Form submission handling
document.getElementById("giveawayForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Collect form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        bitcoinAddress: document.getElementById("bitcoinAddress").value,
    };

    console.log("Form data:", formData); // Log the data being sent

    // Send form data to your EmailJS service and template
    emailjs
        .send("service_4wb3isl", "template_e8vem1j", formData)
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
