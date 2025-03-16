

document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:5000/getCounts')
        .then(response => response.json())
        .then(data => {
            document.getElementById('activePersonnelCount').textContent = data.activePersonnel;
            document.getElementById('inactivePersonnelCount').textContent = data.inactivePersonnel;
            document.getElementById('availableContractsCount').textContent = data.availableContracts;
        })
        .catch(error => {
            console.error('Error fetching counts:', error);
        });
});