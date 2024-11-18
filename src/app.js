/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let gameBoard = [
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
  ];

  function renderBoard() {
    const container = document.getElementById("game-container");
    container.innerHTML = "";

    gameBoard.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const cellDiv = document.createElement("div");
        cellDiv.dataset.row = rowIndex;
        cellDiv.dataset.col = colIndex;
        cellDiv.classList.add("cell");

        if (cell === 2) cellDiv.classList.add("sunken");
        if (cell === 3) cellDiv.classList.add("missed");

        cellDiv.addEventListener("click", () =>
          fireTorpedo(rowIndex, colIndex)
        );
        container.appendChild(cellDiv);
      });
    });
  }

  function fireTorpedo(row, col) {
    if (gameBoard[row][col] === 1) {
      alert("Hit!");
      gameBoard[row][col] = 2;
    } else if (gameBoard[row][col] === 0) {
      alert("Miss!");
      gameBoard[row][col] = 3;
    } else {
      alert("Already fired here!");
    }
    renderBoard();
  }

  function showShips() {
    const cells = document.querySelectorAll("#game-container div");
    gameBoard.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell === 1) {
          const cellDiv = Array.from(cells).find(
            div => div.dataset.row == rowIndex && div.dataset.col == colIndex
          );
          if (cellDiv) {
            cellDiv.style.backgroundColor = "yellow";
          }
        }
      });
    });
  }

  document.body.innerHTML +=
    '<div id="game-container" class="game-container"></div>';
  document.body.innerHTML += '<button id="show-ships">Show Ships</button>';

  document.getElementById("show-ships").addEventListener("click", showShips);
  renderBoard();
};
