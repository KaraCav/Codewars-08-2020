// 1. An arrow is formed in a rectangle with sides a and b by joining the bottom corners to the midpoint of the top edge 
// and the centre of the rectangle. a and b are integers and > 0. Write a function which returns the area of the arrow.

function arrowArea(a,b) {
 return (a * (b/2)) / 2;
}

// 2. Find the number of unique items in an array
function findNumberOfNonRepeats(arr) {
  let uniqueArr = [arr[0]]
  for(let i = 1; i < arr.length; i++) {
    if(!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr.length;
}

findNumberOfNonRepeats(['e',2,4,'f','f','r','f']);
