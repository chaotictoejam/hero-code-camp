const orbitRadius = 120;
let debrisPositions = [];
let energyPositions = [];
let energyCollected = 0;

function generateRandomPositions(count) {
  let positions = [];
  for (let i = 0; i < count; i++) {
    let angle = Math.random() * 2 * Math.PI;
    positions.push({
      x: Math.cos(angle) * orbitRadius + 135,
      y: Math.sin(angle) * orbitRadius + 135,
    });
  }
  return positions;
}

function createObjects() {
  debrisPositions = generateRandomPositions(3);
  energyPositions = generateRandomPositions(3);

  document.querySelectorAll(".debris, .energy").forEach((e) => e.remove());

  debrisPositions.forEach((pos) => {
    let debris = document.createElement("div");
    debris.classList.add("debris");
    debris.style.left = `${pos.x}px`;
    debris.style.top = `${pos.y}px`;
    document.querySelector(".space-container").appendChild(debris);
  });

  energyPositions.forEach((pos) => {
    let energy = document.createElement("div");
    energy.classList.add("energy");
    energy.style.left = `${pos.x}px`;
    energy.style.top = `${pos.y}px`;
    document.querySelector(".space-container").appendChild(energy);
  });
}

function startOrbit() {
  createObjects();
  energyCollected = 0;
  let satellite = document.getElementById("satellite");
  let statusText = document.getElementById("status");
  let angle = 0;

  function moveSatellite() {
    if (angle >= 360) {
      statusText.innerText = `✅ Orbit Complete! Energy Collected: ${energyCollected}`;
      return;
    }

    let x = Math.cos(angle * (Math.PI / 180)) * orbitRadius + 135;
    let y = Math.sin(angle * (Math.PI / 180)) * orbitRadius + 135;

    // Avoid debris
    let debrisDetected = debrisPositions.some(
      (d) => Math.abs(d.x - x) < 15 && Math.abs(d.y - y) < 15
    );
    if (debrisDetected) {
      console.log("🚨 Space Debris detected! Adjusting orbit...");
      angle += 20; // Skip past debris
      setTimeout(moveSatellite, 200);
      return;
    }

    // Check for energy collection
    let energyDetected = energyPositions.some(
      (e) => Math.abs(e.x - x) < 15 && Math.abs(e.y - y) < 15
    );
    do {
      if (energyDetected) {
        console.log("⚡ Energy collected!");
        energyCollected++;
        energyPositions = energyPositions.filter(
          (e) => !(Math.abs(e.x - x) < 15 && Math.abs(e.y - y) < 15)
        );
        statusText.innerText = `⚡ Energy collected: ${energyCollected}`;
      }
    } while (false);

    // Move satellite
    satellite.style.transform = `translate(${x - 15}px, ${y - 15}px)`;
    angle += 10;

    setTimeout(moveSatellite, 200);
  }

  moveSatellite();
}
