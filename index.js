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

    // Calculate total costs
    let totalTherapyCostPerYear = sessionCost * sessionsPerMonth * 12;
    let totalChairCost = chairCost; // As it's a one-time purchase
    let chairUsageYears = chairLifespan;

    // Calculate savings
    let totalTherapyCostOverLifespan = totalTherapyCostPerYear * chairUsageYears;
    let savings = totalTherapyCostOverLifespan - totalChairCost;

    // Display result
    let resultElement = document.getElementById('result');
    resultElement.innerHTML = `Estimated Savings over ${chairUsageYears} years: $${savings.toFixed(2)}`;
    resultElement.style.display = 'block'; // Make the result visible
}
