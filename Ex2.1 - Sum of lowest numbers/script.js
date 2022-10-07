// Ex2.1 - Sum of the lowest numbers
// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoLowest(arr) {
  const arrCopy = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 1 === 0 && arr[i] === Math.abs(arr[i])) {
      arrCopy.push(arr[i])
    }
  }
  let num1 = Math.min(...arrCopy);
  arrCopy.splice(arrCopy.indexOf(num1), 1)
  let num2 = Math.min(...arrCopy);
  return num1 + num2;
}

console.log(sumTwoLowest([1.1, -15, -8, 21, 1, 0, 0, 2.21, 999.99])); //0
console.log(sumTwoLowest([19, 5, 42, 2, 77])); //7
console.log(sumTwoLowest([10, 343445353, 3453445, 3453545353453])); //3453455

// ----- FOR MYSELF - CHECK LATER -----
// --- Another way to correctly sort the array, how does it works?? ---
// A function that defines a sort order.
// The function should return a negative, zero, or positive value, depending on the arguments:
// function(a, b){return a-b}
// When sort() compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
//----------Another example of same concept----------------------------
// function sumTwoSmallestNumbers(numbers) {
//   numbers = numbers.sort((a, b) => {
//     return a - b; });};
// this will turn the numbers list into the 2 lowest numbers