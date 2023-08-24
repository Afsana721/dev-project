$(document).ready(function () {
    $("#login-form").submit(function (event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Clear previous error messages
        $(".error").text("");

        // Get input values
        var email = $("#email").val();
        var password = $("#password").val();

        // Regular expression for email validation
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Perform validation
        if (!emailPattern.test(email)) {
            $("#email-error").text("You must enter a valid email.");
        }
        if (password.length < 6) {
            $("#password-error").text("Your password is too short.");
        }
    });
});
