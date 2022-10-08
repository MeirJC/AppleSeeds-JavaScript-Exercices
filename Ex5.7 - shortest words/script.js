// Ex5.7 - shortest words
// Simple, given a string of words, return the length of the shortest word(s).
//   String will never be empty and you do not need to account for different data types.

function shortest(str){
  if (!str) return "0";
  let arr = str.split(" ");
  let currentShort = arr[0].length;
  for (let element of arr) {
    if (element.length < currentShort) {
      currentShort = element.length;
    }
  }
  return currentShort;
}

console.log(shortest("")) // 0
console.log(shortest(null)) // 0
console.log(shortest("String will never be empty and you do not need to account for different data types.")) // 2
console.log(shortest("Stringwill neverbe emptyand youdonot need toaccount fordifferent datatypes.")) // 4
console.log(shortest("Stringwillnever beemptyandyoudonot needtoaccountfor differentdatatypes.")) // 15

