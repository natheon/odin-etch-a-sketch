let INITIAL_GRID_SIZE = 16;
let GRID_SIZE_LIMIT = 100;

const resetBtn = document.querySelector('button#reset');
resetBtn.addEventListener("click", (e) => {
    // Prompt for grid size and warn if it is above limit
    let gridSize = prompt("Grid size", "0");
    gridSize = parseInt(gridSize, 10);
    
    if (gridSize > GRID_SIZE_LIMIT) {
        console.log(`Limit is ${GRID_SIZE_LIMIT} and you entered ${gridSize}. Resetting grid size to ${GRID_SIZE_LIMIT}`);
        gridSize = GRID_SIZE_LIMIT;
    }
    
    drawGrid(gridSize);
})

const containerDiv = document.querySelector('div#container');

function drawGrid(gridSize) {
    // Reset content of container and draw the grid
    containerDiv.innerHTML = '';

    for (let i=0; i < gridSize; i++) {
    
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        containerDiv.appendChild(rowDiv);
    
        for (let j=0; j < gridSize; j++) {

            const squareDiv = document.createElement("div");
            squareDiv.classList.add("square");
            squareDiv.style.opacity = 1;
            squareDiv.addEventListener("mouseover", (e) => {
                hoverEffect(e.target);
            })
            
            rowDiv.appendChild(squareDiv);
        }
    
    }    
}

function hoverEffect(element) {
    element.style.opacity = Math.max(element.style.opacity - 0.1, 0);
    element.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

drawGrid(INITIAL_GRID_SIZE);