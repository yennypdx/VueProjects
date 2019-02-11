function initializeLogin() {

    $('#error').hide();

    $('#submit-btn').click(function(event) {
        if (validateLoginAttempt()) {
            alert("Submitting Login");
        }
    });
}

function validateLoginAttempt() {
    if ($('#email').val().length == 0) {
        displayError("Email address must be entered.");
        return false;
    }
    if ($('#passwd').val().length == 0) {
        displayError("Password must be entered.");
        return false;
    }
    return true;
}

function displayError(error) {
    $('#error').text(error);
    $('#error').show();
}