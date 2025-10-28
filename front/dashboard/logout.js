document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Optional: Add confirmation dialog
            if (confirm('Are you sure you want to logout?')) {
                // Clear any stored user data (if you're using localStorage/sessionStorage)
                // localStorage.clear();
                // sessionStorage.clear();
                
                // Redirect to login page
                window.location.href = '/front/login/login.html'; // Update with your actual login page path
            }
        });
    }
});