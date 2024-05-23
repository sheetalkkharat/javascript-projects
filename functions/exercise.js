//Write a function makeLine(size) that returns a line with exactly size hashes.

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }

  console.log(makeLine(5));


  //Write a function called makeSquare(size)
function makeSquare(size){
    let square = '';
    for( let i = 0;i< size;i++){
        square +=('\n' +  makeLine(size))
    }
    return square.slice(1);
}

console.log(makeSquare(4));


//makeRectangle(width, height)

  function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) +'\n');
    }
    return rectangle.slice(0, -1);
  }

  console.log(makeRectangle(5, 3));



  //makeDownwardStairs(height)

  function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1);
  }

  console.log(makeDownwardStairs(5));


  //makeSpaceLine(numSpaces, numChars)

  function makeSpaceLine(numSpaces, numChars) {
    let line = '';
    for (let i = 0; i < numSpaces; i++) {
      line += ' ';
      for (let j = 0; j < numChars; j++) {
       line += '#';
    }
}
    return line;
  }

  console.log(makeSpaceLine(3, 5));

  //makeIsoscelesTriangle(height)

  function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }


console.log(makeIsoscelesTriangle(5));


//makeDiamond(height)

function makeDiamond(height){  
    let diamond = '';
    for (let i = height; i >= 0; i--) {
      diamond += (makeLine(height - i - 1, 2*i + 1) + '\n');
     
    }
    for (let i = 0; i < height; i++) {
        diamond += (makeLine(height - i - 1, 2 * i + 1) + '\n');
    }
    return diamond.slice(0, -1);
  }


console.log(makeDiamond(5));