const container = document.getElementById("gridContainer");
const slider = document.getElementById("gridSize");
const clearBtn = document.getElementById("clearBtn");
const sizeDisplay = document.getElementById("sizeDisplay");
const sizeDisplay2 = document.getElementById("sizeDisplay2");

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
    container.innerHTML = ""; // clear previous
    const totalBoxes = size * size;

    for (let i = 0; i < totalBoxes; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${600 / size}px`;
        box.style.height = `${600 / size}px`;

        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = getRandomColor();
        });

        container.appendChild(box);
    }
}

slider.addEventListener("input", () => {
    const size = slider.value;
    sizeDisplay.textContent = size;
    sizeDisplay2.textContent = size;
    createGrid(size);
});

clearBtn.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.style.backgroundColor = "white");
});

// Inicializa con valor por defecto
createGrid(slider.value);
