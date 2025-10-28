document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const loginData = {
        email,
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
            alert(data.message || 'Invalid email or password');
        }
    })
    .catch(error => {
        console.error('Error during login:', error);
    });
});