console.log("hello world")
document.title = "Etch-A-Sketch"

const noRows = 16;
const noColumns = 16;

// Page's background
document.body.style.backgroundImage = "url('absolute-cinema.webp')";
document.body.style.backgroundSize = "contain";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "100% 180%";

// Sketch Mode
let sketchStatus = false;
const sketchButton = document.createElement("input");
sketchButton.type = 'checkbox';
const sketchLabel = document.createElement("label");
sketchLabel.textContent = 'Sketch Mode'
sketchLabel.style.color = 'white';

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
const pencilButton = document.createElement("input");
pencilButton.type = 'checkbox';
const pencilLabel = document.createElement("label");
pencilLabel.textContent = 'Select Mode';
pencilLabel.style.color = 'white';

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
const eraseButton = document.createElement("input");
eraseButton.type = 'checkbox';
const eraseLabel = document.createElement("label");
eraseLabel.textContent = 'Eraser'
eraseLabel.style.color = 'white';

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

// Erase All
const eraseAllButton = document.createElement("input");
eraseAllButton.type = 'button';
eraseAllButton.value = 'Erase All';
eraseAllButton.style.width = '80px';
// Add event listener to the checkbox to detect changes 
eraseAllButton.addEventListener('click', function() {
    // Erase all tiles
    let tiles = document.querySelectorAll('.tile');
    tiles.forEach(til => {
        til.style.backgroundColor = 'White';   
    });

});
// Create a container for the control panel
const controlsContainer = document.createElement("div");
controlsContainer.style.backgroundColor = 'black';
controlsContainer.style.width = '500px';
controlsContainer.style.display = "flex";
controlsContainer.style.justifyContent = "center";
controlsContainer.style.alignItems = "center";
controlsContainer.style.gap = "20px"; // space between controls
controlsContainer.style.padding = "10px";
controlsContainer.style.margin = "30px auto 50px auto"; // top, right/left, bottom

// Append inputs and labels to the container
controlsContainer.appendChild(sketchButton);    
controlsContainer.appendChild(sketchLabel);

controlsContainer.appendChild(pencilButton);
controlsContainer.appendChild(pencilLabel);

controlsContainer.appendChild(eraseButton);
controlsContainer.appendChild(eraseLabel);

controlsContainer.appendChild(eraseAllButton);

// Add the container to the body
document.body.appendChild(controlsContainer);

// Color picker

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
