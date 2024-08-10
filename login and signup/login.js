document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const logoutButton = document.getElementById('logout');
    const validUsername = "admin"; // Replace with your desired username
    const validPassword = "password123"; // Replace with your desired password

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === validUsername && password === validPassword) {
                sessionStorage.setItem('userLoggedIn', 'true'); // Store session info
                window.location.href = 'index.html'; // Redirect to dashboard
            } else {
                alert('Invalid username or password!');
            }
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            sessionStorage.removeItem('userLoggedIn'); // Remove session info
            window.location.href = 'login.html'; // Redirect to login page
        });
    }

    // Redirect to login if not authenticated
    if (window.location.pathname.endsWith('index.html')) {
        if (!sessionStorage.getItem('userLoggedIn')) {
            window.location.href = 'login.html';
        }
    }
});
