const board = document.querySelector('.board');
const resetButton = document.getElementById('reset');
const btnDebug = document.getElementById('debug');
const player1 = 'X';
const player2 = 'O';
let player = player1;
function addPiece(e) {
   console.log(e.target);
   e.target.innerHTML = player;
   if (player === player1) player = player2;
   else player = player1;
}


// board
function resetBoardDiv() {
   const board = document.querySelector('.board');
   for (let i = 0; i < board.children.length; i++) {
      board.children[i].innerText = '';
   }
   const children = Array.from(board.children);
   const empty = children.filter(function (child) {
      return child.innerText == 'X' || child.innerText == 'O';
   });
   console.log(empty);
}

function checkForWinner(){
   const board = document.querySelector('.board');
   const children = Array.from(board.children);
   let player1Array = [];
   let player2Array = [];
   for (let i = 0; i < board.children.length; i++) {
      if (board.children[i].innerText != ''){
         if (board.children[i].innerText == 'X'){
            player1Array[i] = 1;

         }
         else { 
            player2Array[i] = 1;
         }
      }
   }
   
}
function checkData(){
   const board = document.querySelector('.board');
   const children = Array.from(board.children);
   for (i = 0; i < children.length; i++){
      console.log(i + ':' +children[i].innerText);
   }
}
btnDebug.addEventListener('click', checkData);
board.addEventListener('click', addPiece);
reset.addEventListener('click', resetBoardDiv);