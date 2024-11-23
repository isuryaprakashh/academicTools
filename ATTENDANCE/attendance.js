// Constants for component weights
const WEIGHTS = {
    lecture: 100,
    tutorial: 25,
    practical: 50,
    skilling: 25
};

function calculateAttendance() {
    // Get all input values
    const components = {
        lecture: document.getElementById('lecture').value,
        tutorial: document.getElementById('tutorial').value,
        practical: document.getElementById('practical').value,
        skilling: document.getElementById('skilling').value
    };

    // Validate inputs
    if (!validateInputs(components)) {
        showError('Please enter valid percentages between 0 and 100');
        return;
    }

    // Calculate total attendance
    const result = calculateTotal(components);
    if (!result) return;

    // Update UI with results
    updateResultDisplay(result);
}

function validateInputs(components) {
    let hasValidInput = false;
    
    for (const [component, value] of Object.entries(components)) {
        if (value !== '') {
            hasValidInput = true;
            const numValue = parseFloat(value);
            if (numValue < 0 || numValue > 100) {
                return false;
            }
        }
    }

    return hasValidInput;
}

function calculateTotal(components) {
    let totalWeight = 0;
    let totalScore = 0;

    for (const [component, value] of Object.entries(components)) {
        if (value !== '') {
            const weight = WEIGHTS[component];
            totalWeight += weight;
            totalScore += parseFloat(value) * (weight / 100);
        }
    }

    if (totalWeight === 0) {
        showError('Please enter at least one component');
        return null;
    }

    return (totalScore / totalWeight) * 100;
}

function updateResultDisplay(percentage) {
    const resultDiv = document.getElementById('result');
    const roundedPercentage = percentage.toFixed(2);
    
    // Update percentage display with color coding
    resultDiv.textContent = `${roundedPercentage}%`;
    resultDiv.className = getPercentageClass(percentage);
}

function getPercentageClass(percentage) {
    if (percentage >= 85) return 'excellent';
    if (percentage >= 75) return 'good';
    if (percentage >= 65) return 'average';
    return 'warning';
}

function showError(message) {
    // Remove existing error message if any
    const existingError = document.querySelector('.error-message');
    if (existingError) existingError.remove();

    // Create and show new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    const form = document.getElementById('attendanceForm');
    form.insertAdjacentElement('beforebegin', errorDiv);

    // Remove error after 3 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// Add event listeners for input validation
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', function() {
        if (this.value !== '' && (parseFloat(this.value) < 0 || parseFloat(this.value) > 100)) {
            this.classList.add('invalid');
            showError('Please enter a value between 0 and 100');
        } else {
            this.classList.remove('invalid');
        }
    });
});

const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
    }
});
