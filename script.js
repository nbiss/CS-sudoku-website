class sudokuBoard {
    constructor(){
        board = [['.','.','.','.','.','.','.','.','.',],
            ['.','.','.','.','.','.','.','.','.',],
            ['.','.','.','.','.','.','.','.','.',],
            ['.','.','.','.','.','.','.','.','.',],
            ['.','.','.','.','.','.','.','.','.',],
            ['.','.','.','.','.','.','.','.','.',],
            ['.','.','.','.','.','.','.','.','.',],
            ['.','.','.','.','.','.','.','.','.',],
            ['.','.','.','.','.','.','.','.','.',]]
    }

    isValid(){

    }

    build(){

    }
}
/*create cells and add event listeners*/
window.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('sudokuGrid');
    for (let i = 0; i < 81; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-item');
        cell.setAttribute('contenteditable', 'true');
    
        cell.addEventListener('blur', () => {
            const value = cell.textContent.trim();
            if (!/^[1-9]?$/.test(value)) {
              alert("Please enter a number between 1 and 9.");
              cell.textContent = '';
            }
        });
    grid.appendChild(cell);
  } 
});

// reset button
const resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', () => {
    const allCells = document.querySelectorAll('.grid-item');
    allCells.forEach(cell => {
      cell.textContent = '';
    });
});

// check win button
const checkWin = document.getElementById('checkWin');
  checkWin.addEventListener('click', () => {
    //sudoku.isValid()
});