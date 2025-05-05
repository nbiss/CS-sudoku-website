class sudokuBoard {
    constructor(){
      this.currboard = this.boards[0] //this.startingBoard[this.randBoard()]
    }
  
    isValid(){
  
    }
  
    build(){
  
    }
    
    randBoard(){
      let randint = Math.floor(Math.random() * 10)
      return randint
    }
  
    boards = {
    0: [{0: 5}, {4: 3}, {11: 6}, {19: 9}, {20: 8}, {27: 8}, {31: 6}, {40: 6}, {60: 4}, {67: 1}, {80: 9}],
    1: [{}, {}], 
    2: [{}, {}]
  
    }
}

// const BOARD = new sudokuBoard()

// for (let i=0; i<BOARD.currboard.length;i++){
//     for (let key in BOARD.currboard[i]){
        
//     }
// }



function fib(n){
  if (n == 0){
    return 0
  }
  return fib(n-2) + fib(n-1)
}


console.log(fib(3))