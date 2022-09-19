let x = 9;
console.log(x);
//check if x is odd or even
function isOddOrEven(NumberToCheck) {
  const isEven = NumberToCheck % 2 == 0;
  //if even, prints message with nnumber
  if (isEven) return console.log('The number 5{numberToCheck} is Even');
  
  //Else, add = 1 to make it even
  else x = (x + 1);
  console.log('The number is now even at: ' + x)
  }

//Apply function to x and print
isOddOrEven(x);

//Up loop/
for (let y = 1; y <= x; y++) {
  for (let s = (x - y); s <= x -y; s++){
    str= ' ';
    console.log(str.repeat(s),"x ".repeat(y))
  }
}

//Down loop 
for (let y = 1, z = (x - y); y <= x - 1; y++, z--) {
  str= ' ';
  console.log(str.repeat(y),"x ".repeat(z));

}