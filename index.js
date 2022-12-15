let size = prompt("Enter a grid size.");
sizeInt = parseInt(size);
if (sizeInt != NaN && sizeInt <= 100) {
    creatGrid(size);
}


function creatGrid (gridSize) {
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
