// Ex2.5 - Summation
// Write a program that finds the summation of every number from 1 to num. The number will
// always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

function summation(num){
  return num%1 ===0 && num>=1 ? (1+num)*num/2: undefined;
  //No voodoo here :) Gauss's formula for arithmetic progression. ( a(0)=1 , a(n)=num , n=num )
}

console.log(summation(2)) // 3
console.log(summation(8)) // 36
console.log(summation(5)) // 15
console.log(summation(11)) // 66
console.log(summation(-1)) // undefined
console.log(summation(Math.E)) // undefined (Euler number =~ 2.781 ... or any float)
