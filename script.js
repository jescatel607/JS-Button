const button = document.getElementById("button");
const counterDisplay = document.getElementById("counter");
let count = 0;

button.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = `Count: ${count}`;

  if (count === 11) {
    alert("You have clicked the button 11 times!");
    count = 0; // Reset the counter
    counterDisplay.textContent = count; // Update the display
  }
});

const redSlider = document.getElementById("rangedRed");
const greenSlider = document.getElementById("rangedGreen");
const blueSlider = document.getElementById("rangedBlue");
const colorOutput = document.getElementById("colorOutput");
const container = document.querySelector(".container");

function updateColor() {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;

  const rgb = `rgb(${r}, ${g}, ${b})`;
  container.style.backgroundColor = rgb;
  colorOutput.textContent = rgb;
}

// Update color when any slider changes
redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

// Set initial color
// updateColor();

// Add a reset button to reset the color sliders
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => {
  redSlider.value = 0;
  greenSlider.value = 0;
  blueSlider.value = 0;
  updateColor(); // Update the color display
});
