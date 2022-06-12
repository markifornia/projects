// A simplified program
// for constructing the
// 8 x 8 chessboard
// Inner loop:


let grid = 8;

let board = '';

for (let x = 0; x < grid; x++) {

  board += x + " #";

  board += "\n";

  // console.log(board);

  for (let y = 0; y < grid; y++) {

    let getSum = x + y;

    let getModulus = ((x + y) % 2 == 0) ? 'false' : 'true';

    

    board += "\t";

    board += y + " # Sum: " + x + "+"  + y + " =" + getSum + "(" + getModulus +")";

    board += "\n";

  }

}


console.log(board);
