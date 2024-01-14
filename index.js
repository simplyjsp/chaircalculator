function calculateSavings() {
    // Get values from the input fields
    let sessionCost = parseFloat(document.getElementById('sessionCost').value);
    let sessionsPerMonth = parseFloat(document.getElementById('sessionsPerMonth').value);
    let chairCost = parseFloat(document.getElementById('chairCost').value);
    let chairLifespan = parseFloat(document.getElementById('chairLifespan').value);

    // Check for valid inputs
    if (isNaN(sessionCost) || isNaN(sessionsPerMonth) || isNaN(chairCost) || isNaN(chairLifespan)) {
        alert("Please enter valid numbers in all fields.");
        return; // Exit the function if any input is invalid
    }

    // Calculate total therapy cost over the lifespan of the chair
    let totalTherapyCostPerYear = sessionCost * sessionsPerMonth * 12;
    let totalTherapyCostOverLifespan = totalTherapyCostPerYear * chairLifespan;

    // Calculate savings
    let savings = totalTherapyCostOverLifespan - chairCost;

    // Format savings as currency
    let formattedSavings = savings.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    // Display result with a shocked face emoji
    let resultElement = document.getElementById('analysisResult');
    resultElement.innerHTML = `Estimated Savings over ${chairLifespan} years: ${formattedSavings} 🥳`;
    resultElement.style.display = 'block'; // Make the result visible
}
