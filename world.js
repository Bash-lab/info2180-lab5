document.addEventListener('DOMContentLoaded', function() {
    const lookupBtn = document.getElementById('lookup');
    const cityBtn = document.getElementById('lookup-cities');
    const countryInput = document.getElementById('country');
    const resultDiv = document.getElementById('result');

    // Helper function to handle the AJAX call
    function fetchData(lookupType) {
        const country = countryInput.value.trim();
        const xhr = new XMLHttpRequest();
        
        // Build the URL based on input
        // Exercise 5: Adding the lookup parameter
        let url = `world.php?country=${encodeURIComponent(country)}&lookup=${encodeURIComponent(lookupType)}`;
        
        xhr.open('GET', url, true);
        
        xhr.onload = function() {
            if (xhr.status === 200) {
                // Remove whitespace to check if real data came back
                let response = xhr.responseText.trim();
                resultDiv.innerHTML = response;
            } else {
                resultDiv.innerHTML = "Error fetching data.";
            }
        };
        
        xhr.send();
    }

    // Event listener for the "Lookup" (Countries) button
    lookupBtn.addEventListener('click', function() {
        fetchData('countries'); // Default to countries
    });

    // Event listener for the "Lookup Cities" button
    cityBtn.addEventListener('click', function() {
        fetchData('cities'); // Pass 'cities' as the lookup type
    });
});