// players
const players = {player1: "X", player2: "O"}

// Turn number
let turn = 0;

// message selector
let msg = document.getElementById("message");

// row selector
let rows = document.querySelectorAll(".row");

// Display message
msg.textContent = `${turn ? players.player2 : players.player1}'s turn`

//click event listener
rows.forEach(row => {
    row.addEventListener("click", () => alert("you clicked me!"));
});
