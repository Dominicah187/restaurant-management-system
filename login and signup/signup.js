document.addEventListener('DOMContentLoaded', function() {
    // Get references to form elements
    const form = document.querySelector('.signup-form');
    const submitButton = document.querySelector('button[type="submit"]');

    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form input values
        const username = form.querySelector('input[name="username"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const password = form.querySelector('input[name="password"]').value.trim();
        const confirmPassword = form.querySelector('input[name="confirm-password"]').value.trim();

        // Basic validation
        if (!username || !email || !password || !confirmPassword) {
            alert('Please fill out all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Simulate form submission (e.g., send data to server)
        console.log('Form submitted successfully.');
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);

        // Optionally, clear form fields after submission
        form.reset();
    });
});
