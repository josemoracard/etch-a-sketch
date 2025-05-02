const container = document.getElementById("gridContainer");
const slider = document.getElementById("gridSize");
const clearBtn = document.getElementById("clearBtn");
const toggleColorBtn = document.getElementById("toggleColorBtn");
const sizeDisplay = document.getElementById("sizeDisplay");
const sizeDisplay2 = document.getElementById("sizeDisplay2");

let useRandomColor = true;
let isMouseDown = false;

// Color generator
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Create grid
function createGrid(size) {
    container.textContent = "";
    const boxSize = 600 / size;

    for (let i = 0; i < size * size; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;

        // Pintar solo si el mouse está presionado
        box.addEventListener("mousedown", paint);
        box.addEventListener("mouseover", (e) => {
            if (isMouseDown) paint(e);
        });

        container.appendChild(box);
    }
}

// Pintar función
function paint(e) {
    e.preventDefault(); // ← esto evita que el cursor se bugee
    e.target.style.backgroundColor = useRandomColor ? getRandomColor() : "black";
}

// Eventos de mouse
document.body.addEventListener("mousedown", () => isMouseDown = true);
document.body.addEventListener("mouseup", () => isMouseDown = false);

// Slider
slider.addEventListener("input", () => {
    const size = slider.value;
    sizeDisplay.textContent = size;
    sizeDisplay2.textContent = size;
    createGrid(size);
});

// Clear
clearBtn.addEventListener("click", () => {
    document.querySelectorAll(".box").forEach(box => {
        box.style.backgroundColor = "white";
    });
});

// Toggle color mode
toggleColorBtn.addEventListener("click", () => {
    useRandomColor = !useRandomColor;
    toggleColorBtn.textContent = useRandomColor ? "Mode: Random" : "Mode: Black";
});

// Inicializar
createGrid(slider.value);
