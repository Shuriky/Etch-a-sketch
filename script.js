console.log("hello world")
document.title = "Etch-A-Sketch"

const noRows = 16;
const noColumns = 16;

// Sketch on-off check
let sketchStatus = false;
const sketchButton = document.createElement("input");
sketchButton.type = 'checkbox';
const sketchLabel = document.createElement("label");
sketchLabel.textContent = 'Grid on/off'

// Add event listener to the checkbox to detect changes 
sketchButton.addEventListener('change', function() {
    // Add the hover effect
    let tiles = document.querySelectorAll('.tile');
    tiles.forEach(til => {
        if(sketchButton.checked) {
            til.addEventListener('mouseenter', mouseEnter);
            til.addEventListener('mouseleave', mouseLeave);
            }
        else {
            til.removeEventListener('mouseenter', mouseEnter);
            til.removeEventListener('mouseleave', mouseLeave);          
        }
    });

});

document.body.appendChild(sketchButton);
document.body.appendChild(sketchLabel);

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

function mouseEnter() {
    this.style.backgroundColor = 'skyblue';
}

function mouseLeave() {
    this.style.backgroundColor = 'red';
}
createGrid();
