let display = document.getElementById('display');
let currentInput = '0';

function appendToDisplay(value) {
  if (currentInput === '0' && value !== '.') {
    currentInput = value;
  } else {
    currentInput += value;
  }
  display.textContent = currentInput;
}

function clearAll() {
  currentInput = '0';
  display.textContent = currentInput;
}

function clearLast() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = '0';
  }
  display.textContent = currentInput;
}

function calculate() {
  try {
    let result = eval(currentInput);
    currentInput = result.toString();
    display.textContent = currentInput;
  } catch {
    display.textContent = 'Error';
    currentInput = '0';
  }
}
function percentage() {
  let value = parseFloat(currentInput);
  if (!isNaN(value)) {
    value = value / 100;
    currentInput = value.toString();
    display.textContent = currentInput;
  }
}