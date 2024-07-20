$(document).ready(function() {
    // Function to show success message
    function showSuccessMessage() {
        $('#successMessage').fadeIn().delay(3000).fadeOut(); // Fade in, delay, then fade out
    }

    // Event listener for form submission
    $('#uploadForm').submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        // Clear any existing error message
        $('#errorMessage').text('');

        // Get the uploaded file
        const uploadedFile = $('#file')[0].files[0];

        // Check if a file is selected
        if (!uploadedFile) {
            // Display error message if no file is selected
            $('#errorMessage').text('Please select a file.');
        } else {
            // Submit the form data asynchronously
            const formData = new FormData(this);

            $.ajax({
                type: 'POST',
                url: '/upload',
                data: formData,
                processData: false,
                contentType: false,
                success: function(response) {
                    // Show success message
                    showSuccessMessage();
                    // Handle success response if needed
                    console.log(response);
                },
                error: function(xhr, status, error) {
                    // Handle error response
                    if (xhr.status === 400) {
                        // Display "Invalid filename" error message
                        $('#errorMessage').text('Invalid filename. Kindly check!');
                    } else {
                        // Display general error message
                        $('#errorMessage').text('An error occurred. Please try again later.');
                    }
                }
            });
        }
    });
});
