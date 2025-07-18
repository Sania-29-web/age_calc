document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const dobInput = document.getElementById('dob').value;
    const dob = new Date(dobInput);
    const today = new Date();

    if (dobInput) {
        let years = today.getFullYear() - dob.getFullYear();
        let months = today.getMonth() - dob.getMonth();
        let days = today.getDate() - dob.getDate();

        // Adjust for negative days
        if (days < 0) {
            months--;
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += lastMonth.getDate(); // Get the number of days in the last month
        }

        // Adjust for negative months
        if (months < 0) {
            years--;
            months += 12;
        }

        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `Your age is: ${years} years, ${months} months, and ${days} days`;
    } else {
        alert('Please enter a valid date of birth.');
    }
});
