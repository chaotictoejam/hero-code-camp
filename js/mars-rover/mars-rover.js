const gridSize = 5;
let rover = { x: 0, y: 0 };
let obstacles = [];
let samples = [];
let samplesCollected = 0;

function generateRandomPositions(count) {
  let positions = [];
  while (positions.length < count) {
    let pos = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };
    if (!positions.some((p) => p.x === pos.x && p.y === pos.y)) {
      positions.push(pos);
    }
  }
  return positions;
}

function createGrid() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = `cell-${x}-${y}`;

      if (x === rover.x && y === rover.y) {
        cell.classList.add("rover");
        cell.innerText = "🛰️";
      } else if (obstacles.some((o) => o.x === x && o.y === y)) {
        cell.classList.add("obstacle");
        cell.innerText = "🚧";
      } else if (samples.some((s) => s.x === x && s.y === y)) {
        cell.classList.add("sample");
        cell.innerText = "🔬";
      }

      grid.appendChild(cell);
    }
  }
}

function startMission() {
  obstacles = generateRandomPositions(3);
  samples = generateRandomPositions(3);
  rover = { x: 0, y: 0 };
  samplesCollected = 0;
  createGrid();

  setTimeout(() => moveRover(), 500);
}

function moveRover() {
  console.log("🚀 Mission Started!");

  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      if (obstacles.some((o) => o.x === x && o.y === y)) {
        console.log(`⚠️ Obstacle at (${x}, ${y}) - Changing path!`);
        continue;
      }

      setTimeout(() => {
        rover.x = x;
        rover.y = y;
        createGrid();

        if (samples.some((s) => s.x === x && s.y === y)) {
          console.log(`🔬 Sample collected at (${x}, ${y})!`);
          samplesCollected++;
          samples = samples.filter((s) => !(s.x === x && s.y === y));
        }

        if (x === gridSize - 1 && y === gridSize - 1) {
          setTimeout(
            () =>
              alert(
                `✅ Mission Complete! Samples Collected: ${samplesCollected}`
              ),
            500
          );
        }
      }, (x * gridSize + y) * 500);
    }
  }
}

createGrid();
