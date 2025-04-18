console.log("hello world")
document.title = "Etch-A-Sketch"

const noRows = 16;
const noColumns = 16;

// Sketch Mode
let sketchStatus = false;
const sketchButton = document.createElement("input");
sketchButton.type = 'checkbox';
const sketchLabel = document.createElement("label");
sketchLabel.textContent = 'Sketch Mode'

// Add event listener to the checkbox to detect changes 
sketchButton.addEventListener('change', function() {
    // Add the hover effect
    let tiles = document.querySelectorAll('.tile');
    tiles.forEach(til => {
        if(sketchButton.checked) {
            til.addEventListener('mouseover', sketchMouseLeave);
            }
        else {
            til.removeEventListener('mouseover', sketchMouseLeave);          
        }
    });

});

// Select Mode
let pencilStatus = false;
const pencilButton = document.createElement("input");
pencilButton.type = 'checkbox';
const pencilLabel = document.createElement("label");
pencilLabel.textContent = 'Select Mode'

// Add event listener to the checkbox to detect changes 
pencilButton.addEventListener('change', function() {
    // Add the hover effect
    let tiles = document.querySelectorAll('.tile');
    tiles.forEach(til => {
        if(pencilButton.checked) {
            til.addEventListener('click', pencilMouseClick);
            }
        else {
            til.removeEventListener('click', pencilMouseClick);          
        }
    });

});

// Eraser
let eraseStatus = false;
const eraseButton = document.createElement("input");
eraseButton.type = 'checkbox';
const eraseLabel = document.createElement("label");
eraseLabel.textContent = 'Eraser'

// Add event listener to the checkbox to detect changes 
eraseButton.addEventListener('change', function() {
    // Add the hover effect
    let tiles = document.querySelectorAll('.tile');
    tiles.forEach(til => {
        if(eraseButton.checked) {
            til.addEventListener('mousedown', eraser);
            }
        else {
            til.removeEventListener('mousedown', eraser);          
        }
    });

});

document.body.appendChild(sketchButton);
document.body.appendChild(sketchLabel);
document.body.appendChild(pencilButton);
document.body.appendChild(pencilLabel);
document.body.appendChild(eraseButton);
document.body.appendChild(eraseLabel);

// Create the grid
function createGrid() {
    let container = document.createElement("div");
    container.style.display = "flex"; // This makes it a flex container
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';

    for (let i = 0; i < noColumns; i++) {
        let row = document.createElement("div");
        row.style.flexWrap = "wrap";

        for (let j = 0; j < noRows; j++) {
            let tile = document.createElement("div");
            tile.className = "tile";
            tile.style.backgroundColor = 'White'; 
            tile.style.width = '30px';  
            tile.style.height = '30px'; 
            tile.style.border = "1px solid black";
            tile.style.margin = '3px'; // Change spacing of tiles
            row.appendChild(tile);
        }

        container.appendChild(row);
    }
    document.body.appendChild(container);
}

function sketchMouseEnter() {
    this.style.backgroundColor = 'skyblue';
}

function sketchMouseLeave() {
    this.style.backgroundColor = 'red';
}

function pencilMouseClick() {
    this.style.backgroundColor = 'red';
}

function eraser() {
    this.style.backgroundColor = 'white';
}
createGrid();
