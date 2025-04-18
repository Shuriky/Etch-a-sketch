console.log("hello world")

const noRows = 16;
const noColumns = 16;


let container = document.createElement("div");
container.style.display = "flex"; // This makes it a flex container
container.style.justifyContent = 'center';
container.style.alignItems = 'center';


for (let i = 0; i < noColumns; i++) {
    let row = document.createElement("row");
    row.style.flexWrap = "wrap";

    for (let j = 0; j < noRows; j++) {
        let tile = document.createElement("div");
        tile.className = "tile";
        tile.style.backgroundColor = 'White';
        tile.style.width = '50px';
        tile.style.height = '50px';
         tile.style.border = "1px solid black";
        tile.style.margin = '5px';

        row.appendChild(tile);
    }
    container.appendChild(row);
}
document.body.appendChild(container);