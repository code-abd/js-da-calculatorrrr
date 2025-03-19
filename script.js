const display = document.getElementById('display');
const toggle = document.getElementById('background-toggle');
const leftSection = document.querySelector('.left-section');
const rightSection = document.querySelector('.right-section');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function toggleBackgroundMode() {
  if (!toggle.checked) {
    leftSection.classList.add('dark-mode');
    rightSection.classList.add('dark-mode');
  } else {
    leftSection.classList.remove('dark-mode');
    rightSection.classList.remove('dark-mode');
  }
}

function calculateResult() {
  try {
    let expression = display.value;

    // Convert the trigonometric functions and square root to JavaScript's Math functions
    expression = expression.replace(/sin\(/g, 'Math.sin(')
                           .replace(/cos\(/g, 'Math.cos(')
                           .replace(/tan\(/g, 'Math.tan(')
                           .replace(/sqrt\(/g, 'Math.sqrt(')
                           .replace(/\^/g, '**');

    display.value = new Function('return ' + expression)();
  } catch (error) {
    console.error(error);
    display.value = 'Error';
  }
}
