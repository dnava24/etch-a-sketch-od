
const container = document.querySelector('#container');
const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

// Create a new cell for each cell in the grid.
// for (let i = 0; i < 16; i++) {
    //   for (let j = 0; j < 16; j++) {
        //     const cell = document.createElement('div');
        //     cell.classList.add('cell');
        //     grid.appendChild(cell);
        //     cell.addEventListener("mouseover", (e) => {
            //         e.target.style.backgroundColor = "black";
            //     });
            //   }
            // }
const cell = document.createElement("div");
cell.classList.add("cell");

// Inside the container, create a grid of individual cells 16x16 using nested `<div>` elements.
for (let i = 0; i < 16; i++) {
	for (let j = 0; j < 16; j++) {
		// Use the cell variable to create a new cell.
		grid.appendChild(cell.cloneNode());
	}
}
// Append the container element to the document body.
document.container.appendChild(grid);


grid.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";

});


