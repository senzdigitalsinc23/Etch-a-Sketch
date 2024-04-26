
let containerMain = document.querySelector('.container');

let gridContainer = createElements("div");
let itemsContainer = createElements("div");
let buttonsContainer = createElements("div");
let btnGridSize = createElements("Button", "Set Grid Size");
let btnReset = createElements("Button", "Clear Screen");
let row = "";
let square = "";

//Helper functions for creating and setting elements on DOM
function createElements(element, text = "") {

    let create = document.createElement(element)

    create.textContent = text;

    return create;
}


function setAttributes(attributes, element) {
    let properties = Object.keys(attributes);
    let values = Object.values(attributes);

    let attribs = "";

    let valueCount = 0;

   for (let i = 0; i < Object.keys(attributes).length; i++) {
        attribs = attribs + properties[i] + ": " + values[i] + ";";
    
    }
    
    element.setAttribute("style", attribs)   
}

function attachElements(parent, child) {
    parent.append(child);
}

//Container for items
itemsContainer.classList.add('items-container');

attachElements(containerMain, itemsContainer);

//Container for buttons
setAttributes({
    'display': "flex",
    'justify-content': "center",
    'padding': "20px",
    'gap': "20px"
}, buttonsContainer);

attachElements(containerMain, buttonsContainer);

//Button for setting grid size
btnGridSize.classList.add("btn-grid-size");

attachElements(buttonsContainer, btnGridSize)


//Button for resetting grid 
btnReset.classList.add("btn-reset");

attachElements(buttonsContainer, btnReset)


//Grid container for grids

gridContainer.classList.add('grid-container')

attachElements(containerMain, gridContainer)


//Print grid
function printGrid() {
    
    let n = gridSize; 

    for (let i = 1; i <= n; i++) {
        
        row = createElements('div');
        let rowSize = 500 / gridSize;

        setAttributes({
            'height': rowSize + "px"
        }, row);

        attachElements(gridContainer, row);

        row.classList.add('row');
        
        for (let j = 1; j <= n; j++) {

            square = createElements("div");
            let squareSize = 500 / gridSize;

            attachElements(row, square);

            setAttributes({
                'width': squareSize + "px",
                'height': squareSize + "px",
                'padding': 0,
                'margin': 0
            }, square);

            square.classList.add("square");


            let opacity = 0.2;

            square.addEventListener('mouseover', (e) => {

                let colorArr = [];
                for (let i = 0; i < 3; i++) {

                    let color = Math.floor(Math.random() * 128);                    
                     
                    colorArr.push(color);
                }
                
                if (opacity < 1) {
                    opacity += 0.2;                    
                    //e.target.style = "opacity:" + opacity.;
                    e.target.style = `background-color:rgb(${colorArr.toString()});opacity:${opacity.toString()}`;
                } 
                
            })
        }
        
    }
    
}


function clearGrid() {
    gridContainer.textContent = "";

    printGrid();
}



btnReset.onclick = () => {
    clearGrid();
}

//Getting grid size from user
let gridSize = 16;

btnGridSize.onclick = () => {    
    gridSize = prompt("Enter number squares per grid. (NB: Max is 100)"); 

    if (gridSize < 5 || gridSize > 100) {
        alert("Enter a valid figure (Between 5 and 100)")
    } else {  

        clearGrid();      
    }
}

printGrid();