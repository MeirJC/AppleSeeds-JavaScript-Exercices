// Ex5.2 - String Repeat
// Write a function called repeat_str which repeats the given string src exactly count times.
//  // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(count,src){
  let repeat = src.repeat(count);
  return repeat;
}

console.log(repeatStr(6, "I"))
console.log(repeatStr(7, `_.~"(`))
console.log(repeatStr(5, "Hello")) //HelloHelloHelloHelloHello
