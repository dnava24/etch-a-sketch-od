
const container = document.querySelector('#container');

const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

const clearButton = document.createElement('button');
clearButton.classList.add('clear-btn')
clearButton.textContent = "Clear";
container.appendChild(clearButton);

const rgbButton = document.createElement('button');
rgbButton.classList.add('rgb-btn');
container.appendChild(rgbButton);
rgbButton.textContent = "RGB";

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
// const cell = createGrid;

// Inside the container, create a grid of individual cells 16x16 using nested `<div>` elements.
function createGrid(){
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            grid.appendChild(cell);
            cell.addEventListener("mouseover", draw);
        }
    }
}
createGrid();

function draw(e){
   if (rgbButton.classList.contains('active')){
     const r = Math.floor(Math.random() * 256);
	 const g = Math.floor(Math.random() * 256);
	 const b = Math.floor(Math.random() * 256);
	 e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
   } else {
       e.target.style.backgroundColor = "black";
   }
}
function clearGrid(){
    grid.innerHTML = "";
    createGrid();
}
function toggleRGB(){
    rgbButton.classList.toggle('active');
}
clearButton.addEventListener("click", clearGrid);
rgbButton.addEventListener("click", toggleRGB);





