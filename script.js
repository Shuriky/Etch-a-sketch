console.log("hello world")

for (let i = 0; i < 5; i++) {
    let tile = document.createElement("div");
    tile.className = "tile";
    tile.style.backgroundColor = 'Red';
    tile.style.width = '50px';
    tile.style.height = '50px';
    document.body.appendChild(tile);
}