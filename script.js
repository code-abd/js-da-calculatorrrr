let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function getToggleValue() {
  const toggle = document.getElementById('background-toggle');
  const leftSection = document.querySelector('.left-section');
  const rightSection = document.querySelector('.right-section');

  if (!toggle.checked) {
    leftSection.style.backgroundColor = '#463d8c';  // Dark mode background
    leftSection.style.color = '#ecf0f1';  // Light text color

    rightSection.style.backgroundColor = '#9c9c9c';  // Dark mode background
    rightSection.style.color = '#ecf0f1';  // Light text color
  } else {
    leftSection.style.backgroundColor = '#8373fa';  // Light mode background
    leftSection.style.color = '#2c3e50';  // Dark text color

    rightSection.style.backgroundColor = '#ecf0f1';  // Light mode background
    rightSection.style.color = '#2c3e50';  // Dark text color
  }
}  


function calculateResult() {
  try {
    let expression = display.value;
debugger
    // Automatically close any unclosed parentheses for sin, cos, tan, sqrt
    expression = expression.replace(/(sin|cos|tan|sqrt)\($/g, '$1()');

    // Convert the trigonometric functions and square root to JavaScript's Math functions
    expression = expression.replace(/sin\(/g, 'Math.sin(')
                           .replace(/cos\(/g, 'Math.cos(')
                           .replace(/tan\(/g, 'Math.tan(')
                           .replace(/sqrt\(/g, 'Math.sqrt(')
                           .replace(/\^/g, '**');  // Handle exponentiation

    // Calculate the result using eval() (works because we've replaced operators with valid JavaScript expressions)
    display.value = eval(expression);
  } catch (error) {
    display.value = 'Error';
  }
}
