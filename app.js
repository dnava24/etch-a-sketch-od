const container = document.querySelector("#container");

const grid = document.createElement("div");
grid.classList.add("grid");
container.appendChild(grid);

const clearButton = document.createElement("button");
clearButton.classList.add("clear-btn");
clearButton.textContent = "Clear";
container.appendChild(clearButton);

const rgbButton = document.createElement("button");
rgbButton.classList.add("rgb-btn");
container.appendChild(rgbButton);
rgbButton.textContent = "RGB";

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

// Inside the container, create a grid of individual cells 16x16 using nested `<div>` elements.
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

function draw(e) {
	if (rgbButton.classList.contains("active")) {
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);
		e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
	} else {
		e.target.style.backgroundColor = "black";
	}
}

function clearGrid() {
	grid.innerHTML = "";
	createGrid();
}

function toggleRGB() {
	rgbButton.classList.toggle("active");
}

// Event listeners
clearButton.addEventListener("click", clearGrid);
rgbButton.addEventListener("click", toggleRGB);
slider.addEventListener("input", function () {
	screenVal.textContent = slider.value;
	clearGrid();
});
