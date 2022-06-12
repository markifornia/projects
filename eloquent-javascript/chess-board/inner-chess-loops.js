// A simplified program
// for constructing the
// 8 x 8 chessboard
// Inner loop:


let grid = 8;

let board = '';

for (let x = 0; x < grid; x++) {

  board += x +" #";

  board += "\n";

  console.log(board);

}
