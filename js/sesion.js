document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    // Here you could add logic to authenticate the user
    // For example, making an API call to validate credentials
    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
        // Redirect to another page or perform some action
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
