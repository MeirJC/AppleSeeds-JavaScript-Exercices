// Ex5.5 - Abbreviate two words
// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
//   The output should be two capital letters with a dot separating them.
//   It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

function abbreviate(str) {
  let arr = str.toUpperCase().split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0];
  }
  return arr.join(".");
}

console.log(abbreviate("Sam Harris"));
console.log(abbreviate("Patrick Feeney"));
