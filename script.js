const DEFAULT_SIZE = 16;
const DEFAULT_COLOUR = "#d9d9d9";
const DEFAULT_MODE = "normal";

let currentSize = DEFAULT_SIZE;
let currentColour = DEFAULT_COLOUR;
let currentMode = DEFAULT_MODE;

const grid = document.getElementById("grid");
const resetBtn = document.getElementById("resetBtn");
const smallBtn = document.getElementById("smallBtn");
const mediumBtn = document.getElementById("mediumBtn");
const largeBtn = document.getElementById("largeBtn");
const normalbtn = document.getElementById("normalbtn");
const colourbtn = document.getElementById("colourbtn");

resetBtn.addEventListener("click", clearGrid);
smallBtn.addEventListener("click", () => setCurrentSize(16));
mediumBtn.addEventListener("click", () => setCurrentSize(32));
largeBtn.addEventListener("click", () => setCurrentSize(64));
normalBtn.addEventListener("click", () => setCurrentMode("normal"));
colourBtn.addEventListener("click", () => setCurrentMode("rainbow"));

function setCurrentSize(newSize) {
    clearGrid();
    currentSize = newSize;
    setupGrid(newSize);
}


function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.addEventListener("mouseenter", changeColour);
        grid.appendChild(square);
    }
}


function changeSize(size) {
    setCurrentSize(size);
    clearGrid();
}


function setCurrentMode(mode) {
    currentMode = mode;
}


function changeColour(e) {
    if(currentMode === "normal") {
        e.target.style.backgroundColor = "black";
    }
    if(currentMode === "rainbow") {
        const randomR = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        console.log("Red: " + randomR);
        console.log("Blue: " + randomB);
        console.log("Green: " + randomG);
        e.target.style.backgroundColor = `rgb(${randomR},${randomB},${randomG})`;
    }
}


setupGrid(currentSize);


function clearGrid() {
    grid.innerHTML = "";
    setupGrid(currentSize);
}