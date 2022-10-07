// Ex5.4 - To Weird Case
// Write a function toWeirdCase (weird-case in Ruby) that accepts a string, and returns the same
// string with all even indexed characters in each word upper-cased, and all odd indexed
// characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
// index is even, therefore that character should be upper-cased.
//   The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
// be present if there are multiple words. Words will be separated by a single space(' ').
//   Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(str) {
  str = str.split(" ")
  for (let i = 0; i < str.length; i++) {
    let tempStr = str[i].split("");
    for (let j = 0; j < str[i].length; j++) {
      j % 2 === 0 ? tempStr[j] = tempStr[j].toUpperCase() : tempStr[j] = tempStr[j].toLowerCase();
    }
    str[i] = tempStr.join("");
  }
  return str.join(" ");
}

console.log(toWeirdCase( "String" )); // StRiNg
console.log(toWeirdCase( "Weird string case" )); // WeIrD StRiNg CaSe
console.log(toWeirdCase("hey you")); // HeY YoU