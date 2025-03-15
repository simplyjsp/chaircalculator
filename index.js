
document.addEventListener('DOMContentLoaded', function() {
  const calculatorForm = document.getElementById('massage-calculator-form');
  const resultsContainer = document.getElementById('results-container');
  const resetButton = document.getElementById('reset-button');
  
  // Input elements
  const sessionCostInput = document.getElementById('sessionCost');
  const sessionsPerMonthInput = document.getElementById('sessionsPerMonth');
  const chairCostInput = document.getElementById('chairCost');
  const warrantyInput = document.getElementById('warranty');
  
  // Result elements
  const roiSummary = document.getElementById('roi-summary');
  const breakEvenMonths = document.getElementById('break-even-months');
  const breakEvenDate = document.getElementById('break-even-date');
  const totalSavings = document.getElementById('total-savings');
  const monthlyMassageCost = document.getElementById('monthly-massage-cost');
  const monthlyChairCost = document.getElementById('monthly-chair-cost');
  const monthlySavings = document.getElementById('monthly-savings');
  
  // Helper function to format currency
  function formatCurrency(value) {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  }
  
  // Helper function to format currency with cents
  function formatCurrencyWithCents(value) {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
  
  // Format input value as currency
  function formatInputAsCurrency(input) {
    if (!input.value) return;
    
    let value = parseFloat(input.value.replace(/[^0-9.]/g, ''));
    if (isNaN(value)) value = 0;
    
    // Only update if the active element is not this input (to prevent cursor jumping)
    if (document.activeElement !== input) {
      input.value = formatCurrency(value).replace('$', '');
    }
  }
  
  // Add input event listeners to format currency inputs
  [sessionCostInput, chairCostInput].forEach(input => {
    input.addEventListener('blur', function() {
      formatInputAsCurrency(this);
    });
    
    input.addEventListener('focus', function() {
      this.value = this.value.replace(/[^0-9.]/g, '');
    });
  });
  
  // Calculate massage chair ROI
  calculatorForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get values from inputs
    const sessionCost = parseFloat(sessionCostInput.value.replace(/[^0-9.]/g, ''));
    const sessionsPerMonth = parseInt(sessionsPerMonthInput.value);
    const chairCost = parseFloat(chairCostInput.value.replace(/[^0-9.]/g, ''));
    const warranty = parseInt(warrantyInput.value);
    
    // Calculate values
    const monthlyProfessionalCost = sessionCost * sessionsPerMonth;
    const chairCostPerMonth = chairCost / (warranty * 12);
    const monthlyChairSavings = monthlyProfessionalCost - chairCostPerMonth;
    const breakEvenTime = chairCost / monthlyProfessionalCost;
    const totalSavingsAmount = (monthlyProfessionalCost * warranty * 12) - chairCost;
    
    // Format break-even date
    const today = new Date();
    const breakEvenDateObj = new Date(today);
    breakEvenDateObj.setMonth(today.getMonth() + Math.ceil(breakEvenTime));
    const breakEvenDateFormatted = breakEvenDateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
    
    // Update results
    roiSummary.textContent = `Based on ${formatCurrency(chairCost)} chair cost and ${sessionsPerMonth} massage sessions per month`;
    breakEvenMonths.textContent = `${Math.ceil(breakEvenTime)} months`;
    breakEvenDate.textContent = `Estimated: ${breakEvenDateFormatted}`;
    totalSavings.textContent = formatCurrency(totalSavingsAmount);
    monthlyMassageCost.textContent = formatCurrencyWithCents(monthlyProfessionalCost);
    monthlyChairCost.textContent = formatCurrencyWithCents(chairCostPerMonth);
    monthlySavings.textContent = formatCurrencyWithCents(monthlyChairSavings);
    
    // Show results and reset button
    resultsContainer.classList.remove('hidden');
    resetButton.classList.remove('hidden');
    
    // Scroll to results
    setTimeout(() => {
      resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  });
  
  // Reset calculator
  resetButton.addEventListener('click', function() {
    // Reset form values to defaults
    sessionCostInput.value = '80';
    sessionsPerMonthInput.value = '4';
    chairCostInput.value = '3000';
    warrantyInput.value = '5';
    
    // Hide results
    resultsContainer.classList.add('hidden');
    resetButton.classList.add('hidden');
  });
  
  // Initialize currency formatting
  formatInputAsCurrency(sessionCostInput);
  formatInputAsCurrency(chairCostInput);
});
