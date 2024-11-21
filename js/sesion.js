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
