const container = document.querySelector("#container");


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

const colorSelector = document.createElement ("input");
colorSelector.classList.add("color-selector");
container.appendChild(colorSelector);
colorSelector.type = "color";



const colorSelectorLabel = document.createElement("label");
colorSelectorLabel.classList.add("color-selector-label");
colorSelectorLabel.textContent = "Color Selector";
colorSelector.insertAdjacentElement("afterend", colorSelectorLabel);

const buttonWrapper = document.createElement("div");
buttonWrapper.classList.add("button-wrapper");
container.appendChild(buttonWrapper);
buttonWrapper.appendChild(clearButton);
buttonWrapper.appendChild(eraseButton);
buttonWrapper.appendChild(rgbButton);
buttonWrapper.appendChild(blackButton);
buttonWrapper.appendChild(colorSelector);
buttonWrapper.appendChild(colorSelectorLabel);
// buttonWrapper.appendChild(slider);
// buttonWrapper.appendChild(screenVal);


const grid = document.createElement("div");
grid.classList.add("grid");
container.appendChild(grid);


const slider = document.createElement("input");
slider.classList.add("slider");
container.appendChild(slider);
slider.type = "range";
slider.value = 16;
slider.min = 1;
slider.max = 64;
slider.step = 1;


const screenVal = document.createElement("output");
screenVal.classList.add("value");
slider.insertAdjacentElement("afterend", screenVal);
screenVal.textContent = slider.value;

const gridWrapper = document.createElement("div");
gridWrapper.classList.add("grid-wrapper");
container.appendChild(gridWrapper);
gridWrapper.appendChild(grid);
gridWrapper.appendChild(slider);
gridWrapper.appendChild(screenVal);

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
	 grid.addEventListener("mousedown", (e) => {
			e.preventDefault();
			grid.classList.add("crosshair");
		});

		grid.addEventListener("mouseup", () => {
			grid.classList.remove("crosshair");
		});
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
	else if (colorSelector.classList.contains("active")) {
        e.target.style.backgroundColor = colorSelector.value;
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

function togglecolorSelector() {
	colorSelector.classList.toggle("active");
	blackButton.classList.remove("active"); 
	eraseButton.classList.remove("active");
	clearButton.classList.remove("active");
	rgbButton.classList.remove("active");

}

// Event listeners
clearButton.addEventListener("click", clearGrid);
rgbButton.addEventListener("click", toggleRGB);
blackButton.addEventListener("click", toggleBlack);
eraseButton.addEventListener("click", toggleEraseMode);
colorSelector.addEventListener("click", togglecolorSelector);
slider.addEventListener("input", function () {
	screenVal.textContent = slider.value;
	clearGrid();
});