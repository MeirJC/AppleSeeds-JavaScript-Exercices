// Ex6.4 - isogram
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str){
  arr=str.toLowerCase().split("");
  let twoStrikeAndYourOut = [];
  for (let i = 0; i < str.length; i++) {
    if (twoStrikeAndYourOut.includes(arr[i])){
      return false;
    } else {
      twoStrikeAndYourOut.push(arr[i])
    }
  }
  return true;
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));