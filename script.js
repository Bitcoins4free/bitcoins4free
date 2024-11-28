// Initialize EmailJS
(function () {
    emailjs.init("kL8LldtVITo1oHfSk"); // Your public EmailJS API key
})();

// Test email sending
document.getElementById("testButton").addEventListener("click", function () {
    const formData = {
        name: "Test Name",
        email: "test@example.com",
        bitcoinAddress: "test_bitcoin_address_123",
    };

    emailjs.send("service_4wb3isl", "template_e8vem1j", formData)
        .then(
            function(response) {
                console.log("Email sent successfully:", response);
                alert("Test email sent successfully!");
            },
            function(error) {
                console.error("Email failed to send:", error);
                alert("Test email failed. Check console for error.");
            }
        );
});
