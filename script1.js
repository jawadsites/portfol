let display = document.getElementById('display');
le
// Append value to display
function appendValue(value) {
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

// Clear the display
function clearDisplay() {
    display.textContent = '0';
}

// Delete the last character
function deleteLast() {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') display.textContent = '0';
}

// Calculate result
function calculateResult() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}
