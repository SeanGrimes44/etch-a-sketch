const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mouseover", () => {
        box.classList.add("hovered");
    });
    container.appendChild(box);
}