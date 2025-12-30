const main = document.querySelector(".main");
const container = document.createElement("div");
const colorInput = document.querySelector("#color");
const colorOutput = document.querySelector("#color-output");

const userInput = document.querySelector("#userInput");
const btn = document.querySelector("button");

let gridSize = 8;
container.classList.add("container");

main.appendChild(container);

btn.addEventListener("click", () => {
  if (userInput.value > 0 && userInput.value <= 100) {
    gridSize = userInput.value;
    container.textContent = "";

    grid = gridSize * gridSize;
    boxSize = 100 / gridSize;
    createGrid(gridSize);
  } else {
    alert("Please input a valid number (1 - 100): ");
  }
  userInput.value = "";
});

addEventListener("input", (e) => {
  colorOutput.textContent = colorInput.value;
  navigator.clipboard.writeText(colorInput.value);
});
createGrid(gridSize);

function createGrid(gridSize) {
  container.textContent = "";
  const grid = gridSize * gridSize;
  const boxSize = 100 / gridSize;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < grid; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = "white";
    box.style.width = boxSize + "%";
    box.style.height = boxSize + "%";

    box.addEventListener("mouseenter", () => {
      box.style.backgroundColor = colorInput.value;
    });

    fragment.appendChild(box);
  }
  container.appendChild(fragment);
}
