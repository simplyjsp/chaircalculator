function calculateSavings() {
    // Get values from the input fields
    let sessionCost = document.getElementById('sessionCost').value;
    let sessionsPerMonth = document.getElementById('sessionsPerMonth').value;
    let chairCost = document.getElementById('chairCost').value;
    let chairLifespan = document.getElementById('chairLifespan').value;

    // Calculate total costs
    let totalTherapyCostPerYear = sessionCost * sessionsPerMonth * 12;
    let totalChairCost = chairCost;  // As it's a one-time purchase
    let chairUsageYears = parseFloat(chairLifespan);
    
    // Calculate savings
    let totalTherapyCostOverLifespan = totalTherapyCostPerYear * chairUsageYears;
    let savings = totalTherapyCostOverLifespan - totalChairCost;

    // Display result
    document.getElementById('result').innerHTML = `Estimated Savings over ${chairUsageYears} years: $${savings.toFixed(2)}`;
}
