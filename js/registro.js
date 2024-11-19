document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeatPassword').value;
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const city = document.getElementById('city').value;
    const locality = document.getElementById('locality').value;
    const terms = document.getElementById('terms').checked;

    // Validate passwords match
    if (password !== repeatPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Validate terms and conditions are accepted
    if (!terms) {
        alert('You must accept the terms and conditions to proceed.');
        return;
    }

    // Additional simple validation
    if (!email || !password || !name || !surname || !department || !city || !locality) {
        alert('Please fill in all required fields.');
        return;
    }

    // If all validation passes, proceed to submit the form
    alert('Form submitted successfully!');
    // Here you could add logic to actually send the form data to a server
    // e.g., using fetch() or another method
});


