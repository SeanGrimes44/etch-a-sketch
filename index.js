createGrid(4);

const resizeButton = document.querySelector("button");
resizeButton.addEventListener("click", resizeGrid);

function resizeGrid () {
    let child = document.querySelector(".container").lastElementChild;
    while (child) {
        document.querySelector(".container").removeChild(child);
        child = document.querySelector(".container").lastElementChild;
    }
    let size = prompt("Enter a grid size. Must be a valid number that is less than or equal to 100.");
    let sizeInt = parseInt(size);
    if (sizeInt != NaN && sizeInt <= 100) {
        createGrid(sizeInt);
    }
    else {
        resizeGrid();
    }
}


function createGrid (gridSize) {
    const container = document.querySelector(".container");
    container.style.gridTemplateColumns = "repeat(" + gridSize.toString() + ", 1fr)";
    for (let i = 0; i < gridSize * gridSize; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.addEventListener("mouseover", () => {
            box.classList.add("hovered");
        });
        container.appendChild(box);
    }
}