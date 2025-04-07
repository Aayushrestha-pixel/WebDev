const colorBox = document.getElementById('colorBox');
const colorPicker = document.getElementById('colorPicker');
const resetBtn = document.getElementById('resetBtn');
const defaultColor = '#ffffff';

// Load stored color on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('selectedColor');
  if (savedColor) {
    colorBox.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
  } else {
    colorBox.style.backgroundColor = defaultColor;
  }
});

// Change background color on input
colorPicker.addEventListener('input', () => {
  const selectedColor = colorPicker.value;
  colorBox.style.backgroundColor = selectedColor;
  localStorage.setItem('selectedColor', selectedColor);
});

// Reset to default color
resetBtn.addEventListener('click', () => {
  colorBox.style.backgroundColor = defaultColor;
  colorPicker.value = defaultColor;
  localStorage.removeItem('selectedColor');
});

