// Ex6.2 - Counting Duplicates
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and
// numeric digits that occur more than once in the input string. The input string can be assumed to
// contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function maxDuplicates(str) {
  let charArr = str.toLowerCase().split("");
  let maxCharArr = [];
  let currentMax = 0;
  for (let i = 0; i < charArr.length; i++) {
    let localCount = 0;
    if (maxCharArr.includes(charArr[i])) {
      continue;
    } else {
      for (let j = i; j < charArr.length; j++) {
        if (charArr[i] === charArr[j]) {
          localCount++;
        }
      }
      if (localCount > currentMax && localCount > 1) {
        currentMax = localCount;
        maxCharArr = [charArr[i]];
        localCount = 0;
      } else if (localCount === currentMax && localCount > 1) {
        maxCharArr.push(charArr[i]);
        localCount = 0;
      }
    }
  }
  return currentMax === 0
    ? "0 - no letters repeat"
    : `${maxCharArr} appears ${currentMax} times`;
}

console.log(maxDuplicates("abcde")); // 0 - no letters repeat
console.log(maxDuplicates("aabbcde")); //a,b appears 2 times
console.log(maxDuplicates("aabBcde")); //a,b appears 2 times
console.log(maxDuplicates("indivisibility")); //i appears 6 times
console.log(maxDuplicates("Indivisibilities")); //i appears 7 times
console.log(maxDuplicates("aA11")); //a,1 appears 2 times
console.log(maxDuplicates("ABBA")); //a,b appears 2 times
