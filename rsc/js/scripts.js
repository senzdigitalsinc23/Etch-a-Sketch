
let containerMain = document.querySelector('.container');

function createElements(element) {
    return document.createElement(element);
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

let container = createElements("div");

setAttributes({
    'color': "red",
    'border': "2px solid orange",
    'width': "500px",
    'height': "500px"
}, container);

attachElements(containerMain, container)