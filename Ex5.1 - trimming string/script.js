// Ex5.1 - trimming string
// It's pretty straightforward. Your goal is to create a function that removes the first and last
// characters of a string. You're given one parameter, the original string. You don't have to worry
// with strings with less than two characters.

function trimmingStrings(str){
  // removes any leading and ending spaces if existed, then trims the string.
  return str.trim().slice(1,-1);
}

console.log(trimmingStrings(" Qhidinge       "))
console.log(trimmingStrings("Dad"))
console.log(trimmingStrings("       emessd")+trimmingStrings("rager     "))
console.log(trimmingStrings("in")+trimmingStrings("tink"))
console.log(trimmingStrings("theres"))
console.log(trimmingStrings(" -:)-"))