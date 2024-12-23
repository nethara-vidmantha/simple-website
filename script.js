// Handle form submission
document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const course = document.getElementById('course').value;

    // Send data to the backend
    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, age, course }),  // Send the form data
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message); // Show success message
        } else {
            alert(`Error: ${result.message}`); // Show error message
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to connect to the server.');
    }
});
