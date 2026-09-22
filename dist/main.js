"use strict";
const BOARD_SIZE = 8;
const board = document.getElementById("board");
if (board) {
    for (let row = 0; row < BOARD_SIZE; row++) {
        for (let col = 0; col < BOARD_SIZE; col++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.classList.add((row + col) % 2 === 0 ? "light" : "dark");
            board.appendChild(square);
        }
    }
}
