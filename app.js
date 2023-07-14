const container = document.querySelector("#container");

const grid = document.createElement("div");
grid.classList.add("grid");
container.appendChild(grid);

const clearButton = document.createElement("button");
clearButton.classList.add("clear-btn");
clearButton.textContent = "Clear";
container.appendChild(clearButton);

const eraseButton = document.createElement("button");
eraseButton.classList.add("erase-btn");
eraseButton.textContent = "Eraser";
container.appendChild(eraseButton);

const rgbButton = document.createElement("button");
rgbButton.classList.add("rgb-btn");
rgbButton.textContent = "RGB";
container.appendChild(rgbButton);

const blackButton = document.createElement("button");
blackButton.classList.add("black-btn");
blackButton.textContent = "Black";
container.appendChild(blackButton);

const slider = document.createElement("input");
slider.classList.add("slider");
container.appendChild(slider);
slider.type = "range";
slider.value = 16;
slider.min = 1;
slider.max = 100;
slider.step = 1;

const screenVal = document.createElement("output");
screenVal.classList.add("value");
slider.insertAdjacentElement("afterend", screenVal);
screenVal.textContent = slider.value;
screenVal.style.color = "white";

// create grid function and attaching draw listener function to each cell
function createGrid() {
	const gridSize = slider.value;
	grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
	grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

	for (let i = 0; i < gridSize * gridSize; i++) {
		const cell = document.createElement("div");
		cell.classList.add("cell");
		grid.appendChild(cell);
		cell.addEventListener("mouseover", draw);
	}
}
createGrid();

// drawing function
function draw(e) {
	if (e.buttons !== 1) return; // Checking if the left mouse button is being pressed.

	if (rgbButton.classList.contains("active")) {
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);
		e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
	} else if (blackButton.classList.contains("active")) {
		e.target.style.backgroundColor = "black";
	} else if (eraseButton.classList.contains("active")) {
		e.target.style.backgroundColor = "transparent";
	}
}

function clearGrid() {
	grid.innerHTML = "";
	createGrid();
}

function toggleEraseMode() {
	eraseButton.classList.toggle("active");
	blackButton.classList.remove("active"); // Ensure that only one drawing mode is active at a time
	rgbButton.classList.remove("active");

}

function toggleRGB() {
	rgbButton.classList.toggle("active");
	blackButton.classList.remove("active"); // Ensure that only one drawing mode is active at a time
	eraseButton.classList.remove("active");
}

function toggleBlack() {
	blackButton.classList.toggle("active");
	rgbButton.classList.remove("active"); // Ensure that only one drawing mode is active at a time
	eraseButton.classList.remove("active");
}

// Event listeners
clearButton.addEventListener("click", clearGrid);
rgbButton.addEventListener("click", toggleRGB);
blackButton.addEventListener("click", toggleBlack);
eraseButton.addEventListener("click", toggleEraseMode);
slider.addEventListener("input", function () {
	screenVal.textContent = slider.value;
	clearGrid();
});
