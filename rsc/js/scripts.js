
let containerDiv = document.querySelector('.container');
let controlDiv = document.createElement("div");

controlDiv.setAttribute('style', "width: fit-content;")

containerDiv.setAttribute('style', "width: 100%; height: 100%");

let squareGrid = "";

for (let i = 1; i <= 1000; i++) {
    
    let gridName = "grid";    
    squareGrid = document.createElement('div');
    
    squareGrid.classList.add(gridName + '-' + i);
    
    squareGrid.setAttribute('style', "width: 5px; height: 5px; border: 1px solid black; border-bottom:0;");

    controlDiv.appendChild(squareGrid);
}

containerDiv.appendChild(controlDiv);

let grids = document.querySelectorAll("div[class ^= 'grid-']");

grids.forEach((grid) => {
    grid.onmouseover = () => grid.style.border = "1px solid red"
})