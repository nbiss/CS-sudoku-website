class sudokuBoard {
  constructor(){
    this.currboard = this.boards[0] 
    //this.startingBoard[this.randBoard()]
  }

  isValid(){
    let res = true
    const row = new Map()
    const col = new Map()
    const square = new Map()

    for(let r=0; r<9; r++){
      for(let c=0; c<9; c++){
        let toIdx = (r*9) + c
        const aCell = document.querySelector(`.grid-item[data-index='${toIdx}']`).textContent

        if(aCell === '') {res = undefined; continue;};
        const sqrBox = `${Math.floor(r/3)},${Math.floor(c/3)}`

        if (row.get(r) && row.get(r).has(aCell)) return false;
        if (col.get(c) && col.get(c).has(aCell)) return false;
        if (square.get(sqrBox) && square.get(sqrBox).has(aCell)) return false;

        if (!row.has(r)) row.set(r, new Set());
        if (!col.has(c)) col.set(c, new Set());
        if (!square.has(sqrBox)) square.set(sqrBox, new Set())
        
        row.get(r).add(aCell)
        col.get(c).add(aCell)
        square.get(sqrBox).add(aCell)

      }
    }    
    return res
  }

  build(){

  }
  randBoard(){
    let randint = Math.floor(Math.random() * 10)
    return randint
  }

  boards = {
  0: [{2:3},{6:2},{10:6},{12:9},{13:8},{16:4},{17:3},{18:4},{19:9},{22:3},{23:1},{26:6},{27:9},{29:7},{33:8},{34:6},
    {37:4},{40:9},{41:8},{47:5},{48:4},{50:7},{51:1},{53:9},{54:6},{59:3},{60:9},{62:5},{63:5},{65:8},{66:1},{70:7},
    {71:2},{72:2},{74:9},{76:5},{77:6},{79:3},{80:8}],
  1: [{}, {}], 
  2: [{}, {}]

  }
}



/*create cells and add event listeners*/
window.addEventListener('DOMContentLoaded', () => {
// initialize board
  const BOARD = new sudokuBoard()
// initialize cells
  const grid = document.getElementById('sudokuGrid');
  for (let i = 0; i < 81; i++) {
    const cell = document.createElement('div');
    cell.dataset.index = i
    cell.classList.add('grid-item');
    cell.setAttribute('contenteditable', 'true');
    cell.textContent = '';
    
    cell.addEventListener('blur', () => {
      const value = cell.textContent.trim();
      if (!/^[1-9]?$/.test(value)) {
        alert("Please enter a number between 1 and 9.");
          cell.textContent = '';
      }
    });

  grid.appendChild(cell);
  }

// set the board with a valid one
  for (let i=0; i<BOARD.currboard.length;i++){
    for (let key in BOARD.currboard[i]){
      const c = document.querySelector(`.grid-item[data-index='${key}']`)
      c.textContent = BOARD.currboard[i][key];
      c.setAttribute('contenteditable', 'false')
    }
  }

// reset button
  const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', () => {
      const allCells = document.querySelectorAll('.grid-item');
      allCells.forEach(cell => {
        if(cell.getAttribute('contenteditable') === 'true'){
          cell.textContent = '';
        }      
      });
  });

// check win button
  const checkWin = document.getElementById('checkWin');
    checkWin.addEventListener('click', () => {
      const validBoard = BOARD.isValid()
      const isValidMsg = (validBoard === undefined) ? 'Not quite' : (validBoard === false) ? 'Womp Womp. Try Again.' : 'Congrats! You did it!';
    showSplash(isValidMsg)
  });

  // start X button event listener
  const xButton = document.getElementById('x-button')
  const startMenu = document.getElementById('start-menu')
  xButton.addEventListener('click', ()=> {
    xButton.remove()
    startMenu.remove()
  })

  // Difficulty slider event listener
  const diffSlider = document.getElementById('diffSlider')
  const diffText  = document.getElementById('diffText')
  diffSlider.addEventListener('input', ()=> {
    diffText.textContent = diffSlider.value
    diffText.style.backgroundColor = rgb(255, 0, 242)
   

  })

});




//funcitons

function showSplash(text, duration = 2000) {
  const splash = document.createElement('div');
  splash.classList.add('splash-text', 'show');
  splash.textContent = text;
  document.body.appendChild(splash)

  setTimeout(() => {
    splash.classList.remove("show");
    // splash.remove()
  }, duration);
}

function getDiffColor(n) {
  const colorList = [rgb(0, 225, 0), rgb(0, 211, 21), rgb(0, 170, 17), rgb(255, 242, 0), 
    rgb(214, 203, 0), rgb(204, 194, 0), rgb(246, 139, 0), rgb(224, 127, 0), rgb(193, 44, 34), rgb(243, 16, 0)]

  return colorList[n]
}