// Construct 8 x 8
// Chessboard without
// printing a new line

let grid = 8; // Number data type
let board = ''; // String data type

for (let x = 0; x < grid; x++) {

  for (let y = 0; y < grid; y++) {

    if ((x + y) % 2 == 0) {

      board += " ";

    } else {

      board += "#"

    }


  } // end inner loop

  board += ": (Line:"+ x +") -- after constructing a line initate a linebreak" + "\n";

} // end outer loop


console.log(board);
