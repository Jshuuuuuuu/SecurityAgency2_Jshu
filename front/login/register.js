document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('.register-form');
	if (!form) return;

	form.addEventListener('submit', function(event) {
		event.preventDefault();

		const email = document.getElementById('reg-email').value.trim();
		const password = document.getElementById('reg-password').value;
		const password2 = document.getElementById('reg-password2').value;

		if (!email) {
			alert('Please enter an email');
			return;
		}

		if (password !== password2) {
			alert('Passwords do not match');
			return;
		}

		const payload = { email, password };

		fetch('http://localhost:5000/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
		})
		.then(res => res.json().catch(() => ({})))
		.then(data => {
			if (data && data.success) {
				alert(data.message || 'Registration successful. Please log in.');
				window.location.href = 'login.html';
			} else {
				alert(data.message || 'Registration failed');
			}
		})
		.catch(err => {
			console.error('Registration error:', err);
			alert('Registration error. Check console for details.');
		});
	});
});

document.addEventListener('DOMContentLoaded', function() {
    const loginLink = document.querySelector('a[href="login.html"]');
    
    if (loginLink) {
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            const formContainer = document.querySelector('.form-container');
            formContainer.classList.add('slide-out');
            
            setTimeout(function() {
                window.location.href = 'login.html';
            }, 400);
        });
    }
});