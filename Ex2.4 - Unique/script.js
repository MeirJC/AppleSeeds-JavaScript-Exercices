// Ex2.4 - Unique
//--------------------------------------------------------------------------------------------
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
//--------------------------------------------------------------------------------------------

function findUniq(arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] !== arr[(i + 1) % length] && arr[i] !== arr[(i + 2) % length]) {
      return arr[i];
    }
  }
}

console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([0, 0, 0.55, 0, 0])); // 0.55
console.log(findUniq([1, 0, 0])); // 1
console.log(findUniq([0, -1, 0])); // -1
console.log(findUniq([0, 0, 3.14159])); // 3.14159
