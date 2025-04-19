console.log("hello world")
document.title = "Etch-A-Sketch"
document.body.style.fontFamily = "Arial, sans-serif";

let noRows = 16;
let noColumns = 16;
const defaultColor = 'transparent';

// Page Heading
const pageHeading = document.createElement('h1');
pageHeading.textContent = "Etch-A-Sketch";
pageHeading.style.display = 'flex';
pageHeading.style.fontSize = '80px';
pageHeading.style.justifyContent = 'center';
document.body.appendChild(pageHeading);

// Credits
const subHeading = document.createElement('h2');
subHeading.textContent = "Created by Shuriky (April 2025)";
subHeading.style.display = 'flex';
subHeading.style.fontSize = '15px';
subHeading.style.justifyContent = 'center';
subHeading.style.marginTop = '-50px';
document.body.appendChild(subHeading);

// Page's background
// document.body.style.backgroundImage = "url('absolute-cinema.webp')";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover"; // Make background image fit the page

// Sketch Mode
const sketchButton = document.createElement("input");
sketchButton.type = 'checkbox';
const sketchLabel = document.createElement("label");
sketchLabel.textContent = 'Sketch Mode:'
// sketchLabel.style.color = 'white';

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



// Click Mode
const pencilButton = document.createElement("input");
pencilButton.type = 'checkbox';
const pencilLabel = document.createElement("label");
pencilLabel.textContent = 'Click Mode:';
// pencilLabel.style.color = 'white';

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
eraseLabel.textContent = 'Eraser:'
// eraseLabel.style.color = 'white';

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
            til.removeEventListener('mouseover', eraser);         
        }
        if(sketchButton.checked && eraseButton.checked) {
            til.addEventListener('mouseover', eraser);
            }
        else {
            til.removeEventListener('mouseover', eraser);          
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
        til.style.backgroundColor = defaultColor;   
    });

});

// Color Picker
let curColor = 'black'; // Default color
const colorPickerButton = document.createElement("input");
colorPickerButton.type = 'color';
const colorPickerLabel = document.createElement("label");
colorPickerLabel.textContent = 'Choose Color:';
// colorPickerLabel.style.color = 'white';
colorPickerButton.value = curColor;

// Color Picker Logics
colorPickerButton.addEventListener("input", changeColor, false);
colorPickerButton.addEventListener("change", changeColor, false);

function changeColor() {
    curColor = this.value;
  }

// Change grid size
let widthInput = document.createElement("input");
widthInput.className = 'inputNumber';
widthInput.type = 'number';
widthInput.value = noColumns;

let heightInput = document.createElement("input");
heightInput.className = 'inputNumber';
heightInput.type = 'number';
heightInput.value = noRows;

widthInput.addEventListener("change", changeGridWidth);
heightInput.addEventListener("change", changeGridHeight);

function changeGridHeight(event) {
    noRows = event.target.value;
    deleteGrid();
    createGrid();
}

function changeGridWidth(event) {
    noColumns = event.target.value;
    deleteGrid();
    createGrid();
}

const gridSizeLabel = document.createElement("label");
gridSizeLabel.textContent = 'Change Grid Size: ';
// gridSizeLabel.style.color = 'white';

const x = document.createElement("label");
x.textContent = 'x';
// x.style.color = 'white';
x.style.marginLeft = '-10px';
x.style.marginRight = '-10px';

// Create a container for the control panel
const controlsContainer = document.createElement("div");
// controlsContainer.style.backgroundColor = 'black';
controlsContainer.style.width = '1000px';
controlsContainer.style.display = "flex";
controlsContainer.style.justifyContent = "center";
controlsContainer.style.alignItems = "center";
controlsContainer.style.gap = "20px"; // space between controls
controlsContainer.style.padding = "10px";
controlsContainer.style.margin = "30px auto 50px auto"; // top, right/left, bottom

// Append inputs and labels to the container
controlsContainer.appendChild(gridSizeLabel);
controlsContainer.appendChild(widthInput);
controlsContainer.appendChild(x);
controlsContainer.appendChild(heightInput);

controlsContainer.appendChild(colorPickerLabel);
controlsContainer.appendChild(colorPickerButton);

controlsContainer.appendChild(sketchLabel);
controlsContainer.appendChild(sketchButton);    

controlsContainer.appendChild(pencilLabel);
controlsContainer.appendChild(pencilButton);

controlsContainer.appendChild(eraseLabel);
controlsContainer.appendChild(eraseButton);

controlsContainer.appendChild(eraseAllButton);

document.body.appendChild(controlsContainer);

let inputNumbers = document.querySelectorAll('.inputNumber');
inputNumbers.forEach(box => {
    box.style.width = '30px';
});

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
            tile.style.backgroundColor = defaultColor; 
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

// Delete the Grid
function deleteGrid() {
    tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.remove();
    })
}

function sketchMouseEnter() {
    this.style.backgroundColor = 'skyblue';
}

function sketchMouseLeave() {
    this.style.backgroundColor = curColor;
}

function pencilMouseClick() {
    this.style.backgroundColor = curColor;
}

function eraser() {
    this.style.backgroundColor = defaultColor;
}

createGrid();

// Auto-select the sketch mode when enter site
sketchButton.checked = true;
let tiles = document.querySelectorAll('.tile');
tiles.forEach(til => {
    if(sketchButton.checked) {
        til.addEventListener('mouseover', sketchMouseLeave);
        }
    else {
        til.removeEventListener('mouseover', sketchMouseLeave);          
    }
});

