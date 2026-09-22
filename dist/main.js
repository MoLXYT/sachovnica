"use strict";
const BOARD_SIZE = 8;
const FILES = ["A", "B", "C", "D", "E", "F", "G", "H"];
const HIGHLIGHT_MS = 800;
const board = document.getElementById("board");
if (board) {
    for (let row = 0; row < BOARD_SIZE; row++) {
        for (let col = 0; col < BOARD_SIZE; col++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.classList.add((row + col) % 2 === 0 ? "light" : "dark");
            if (col === 0) {
                const rank = document.createElement("span");
                rank.classList.add("label", "rank");
                rank.textContent = String(BOARD_SIZE - row);
                square.appendChild(rank);
            }
            if (row === BOARD_SIZE - 1) {
                const file = document.createElement("span");
                file.classList.add("label", "file");
                file.textContent = FILES[col];
                square.appendChild(file);
            }
            square.addEventListener("click", () => {
                square.classList.add("selected");
                setTimeout(() => square.classList.remove("selected"), HIGHLIGHT_MS);
            });
            board.appendChild(square);
        }
    }
}
