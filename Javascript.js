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

// 3. Return the second smallest number in a random array of numbers. There may be repeats of a number.

function findSecondSmallest(arr) {
  let smallestNum = arr[0];
  let secondSmallestNum = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNum) {
        secondSmallestNum = smallestNum;
        smallestNum = arr[i];
    } else if ((arr[i] < secondSmallestNum) && (arr[i] !== smallestNum)) {
        secondSmallestNum = arr[i];
    }
 }
  console.log('smallest and second smallest numbers',smallestNum, secondSmallestNum);
  return secondSmallestNum;
}

findSecondSmallest([2,-1,-3,10,2,3,-8,1,4,0,-8])

// 4. You are given an array with positive numbers and a number N. You should find the N-th power of the element in the array with the index N. 
// If N is outside of the array, then return -1. Don't forget that the first element has the index 0. Example:
//    array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;

function index(array, n){
  if(n == 0) {
    return 1;
  }
  if(!array[n])  {
    return -1;
  }
 else if(array[n] == 0) {
    return 0;
  }
  else {
    let i = 1;
    let finalAnswer = array[n];
    while(i < n) {
      finalAnswer = finalAnswer * array[n];
      i++;
    }
    return finalAnswer;
  }
}
