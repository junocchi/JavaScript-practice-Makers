const addToBatch = (array, number) => {
  if (array.length <= 5) {
    console.log(array.concat(number));
  }
  else {
    console.log(array);
  }
}
//if the array's length is already 5 or greater, 
//it should just return the array without 
//adding any new numbers

addToBatch([1], 3);
addToBatch([1, 2, 3], 4);
addToBatch([], 8);
addToBatch([1, 2, 3, 4, 5, 6], 10);

//outputs:
// [ 1, 3 ]
// [ 1, 2, 3, 4 ]
// [ 8 ]
// [ 1, 2, 3, 4, 5, 6 ]