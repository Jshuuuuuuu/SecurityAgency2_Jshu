document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const loginData = {
        username,
        password
    };

    fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Login successful');
            window.location.href = '/front/dashboard/dashboard.html'; // Redirect to dashboard
        } else {
            alert('Invalid username or password');
        }
    })
    .catch(error => {
        console.error('Error during login:', error);
    });
});