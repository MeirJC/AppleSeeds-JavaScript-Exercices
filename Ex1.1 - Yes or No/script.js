// Ex1.1 - Yes or No
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No"
// string for false.

function yesOrNo(val){
  return val?"Yes":"No";
}

console.log(yesOrNo(true)); //Yes
console.log(yesOrNo(false)); //No
console.log(yesOrNo("COOL")); //Yes
console.log(yesOrNo(0)); //No