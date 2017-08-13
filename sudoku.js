//Sudoku checker

//PUZZLE
var puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
[ 2,7,1,   9,6,3,   4,8,5 ],
[ 4,6,3,   5,8,1,   7,9,2 ],

[ 9,3,4,   6,1,7,   2,5,8 ],
[ 5,1,7,   2,3,8,   9,6,4 ],
[ 6,8,2,   4,5,9,   3,7,1 ],

[ 1,5,9,   8,7,4,   6,2,3 ],
[ 7,4,6,   3,2,5,   8,1,9 ],
[ 3,2,8,   1,9,6,   5,4,7 ]];

var p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
[ 8,7,1,9,6,3,4,8,5 ],
[ 4,6,3,5,8,1,7,9,2 ],
[ 9,3,4,6,1,7,2,5,8 ],
[ 5,1,7,2,3,8,9,6,4 ],
[ 6,8,2,4,5,9,3,7,1 ],
[ 1,5,9,8,7,4,6,2,3 ],
[ 7,4,6,3,2,5,8,1,9 ],
[ 3,2,8,1,9,6,5,4,7 ]];


//getRow

function getRow(puzzle, rowIndex){
  var rowArray = puzzle[rowIndex];
  return rowArray;
}


// //getColumn

function getColumn(puzzle, columnIndex) {
  var columnArray = [];
  for(var i = 0; i < puzzle.length; i++){
  columnArray.push(puzzle[i][columnIndex]);
  }
  return columnArray;
}

//getSection

function getSection(puzzle,x,y) {
  var sectionArray = [];
  var xStartingIndex = x * 3;
  var yStartingIndex = y * 3;
  for(var i = yStartingIndex; i <= yStartingIndex + 2; i++){
    for(var j = xStartingIndex; j <= xStartingIndex + 2; j++){
    sectionArray.push(puzzle[i][j]);
    }
  }
return sectionArray;
}

// Includes 1 to 9

function includes1to9(array) {
  var testArray = [1,2,3,4,5,6,7,8,9];
  var count = 0;
  for(var i = 0; i < testArray.length; i++){
    if(array.indexOf(testArray[i]) == -1){
    count += 1;
    }
  }
  if(count === 0 && array.length === 9){
    return true
  }
  return false
}


function sudokuIsValid(puzzle) {
  var rowColumn = 0;
  var section = 0;
  for(var i = 0; i < 9; i ++){
    if((includes1to9(getRow(puzzle, i))) && includes1to9(getColumn(puzzle, i))){
    rowColumn += 1;
    }
  }
  for(var x = 0; x < 3; x++){
    for(var y =0; y < 3; y++){
      if((includes1to9(getSection(puzzle,x,y)))){
      section += 1
      }
    }
  }
  if(section === 9 && rowColumn === 9){
    return true
  }
  return false
}


function isSame(array1, array2){
  if(array1.join() === array2.join()){
    return true;
  }
  return false;
}

isSame(puzzle, puzzle); //true


