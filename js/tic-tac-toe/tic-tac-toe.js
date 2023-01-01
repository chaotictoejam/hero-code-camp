// Game state variables
let gameBoard;
let turn;
let gameOver;

// Initialize the game
function initGame() {
    gameBoard = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];
    turn = "X";
    gameOver = false;

    renderGame();
}

// Render the game board
function renderGame() {
    gameBoard.forEach(function (cell, index) {
        document.getElementById(`cell-${index + 1}`).textContent = cell;
    });
}

// Handle player turn
function handleTurn(event) {
    let cell = event.target;
    let index = cell.id.split("-")[1] - 1;

    if (gameBoard[index] !== "" || gameOver) {
        return;
    }

    gameBoard[index] = turn;
    turn = (turn === "X") ? "O" : "X";
    renderGame();

    checkGameOver();
}

// Check if the game is over
function checkGameOver() {
    let winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // columns
        [0, 4, 8], [2, 4, 6]               // diagonals
    ];

    // Check for a winner
    for (let i = 0; i < winningCombinations.length; i++) {
        let combination = winningCombinations[i];
        if (gameBoard[combination[0]] !== "" && gameBoard[combination[0]] === gameBoard[combination[1]] && gameBoard[combination[1]] === gameBoard[combination[2]]) {
            gameOver = true;
            setTimeout(function () {
                alert(`Player ${gameBoard[combination[0]]} wins!`);
                initGame();
            }, 100);
            return;
        }
    }

    // Check for a tie
    if (gameBoard.indexOf("") === -1) {
        gameOver = true;
        setTimeout(function () {
            alert("It's a tie!");
            initGame();
        }, 100);
    }
}

// Add event listeners
document.querySelectorAll("td").forEach(function (cell) {
    cell.addEventListener("click", handleTurn);
});

// Start the game
initGame();