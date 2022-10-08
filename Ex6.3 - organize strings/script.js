// Ex6.3 - organize strings
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
// longest possible, containing distinct letters,
//   each taken only once - coming from s1 or s2.
//   Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1,s2){
  let arr = s1.toLowerCase().split("").concat(s2.toLowerCase().split(""));
  const newArr=[];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])){
      newArr.push(arr[i])
    }
  }
  return newArr.sort().join("");
}

console.log(longest("U","fedcba")); // abcdefu
console.log(longest("xyaabbbccccdefww","xxxxyyyyabklmopq")); // abcdefklmopqwxy
console.log(longest("abcdefghijklmnopqrstuvwxyz","abcdefghijklmnopqrstuvwxyz")); // abcdefghijklmnopqrstuvwxyz