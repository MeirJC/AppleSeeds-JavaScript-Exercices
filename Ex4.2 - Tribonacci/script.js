// Well met with Fibonacci bigger brother, AKA Tribonacci.
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3
// (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I
// won't get to hear non-native Italian speakers trying to pronounce it :(
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature),
// we have this sequence:
//   [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1]
// basically shifts the common Fibonacci sequence by once place, you may be tempted to think
// that we would get the same sequence shifted by 2 places, but that is not the case and we would
// get:
//   [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function
// that given a signature array/list, returns the first n elements - signature included of the so
// seeded sequence.
//   Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then
//   return an empty array (except in C return NULL) and be ready for anything else which is not
// clearly specified ;)

function nthOfFibonacci(signature, n = 1) {
  if (n == 0) return [];
  if (n < 0) return null;
  const tribonacci = signature.slice(0);
  for (let i = tribonacci.length; i < n; i++) {
    tribonacci.push(tribonacci[i - 1] + tribonacci[i - 2] + tribonacci[i - 3]);
  }
  return tribonacci;
}

// console.log(nthOfFibonacci([0, 1, 1], 10)) // returns the first n elements
// console.log(nthOfFibonacci([0, 1, 1], 0)) // n == 0 ----> [] (the desc states n==0, so just in case we get 0 as a string
// console.log(nthOfFibonacci([0, 1, 1], "C")) // n === C ----> null
// console.log(nthOfFibonacci([0, 1, 1], -4)) // n === C ----> null
// console.log(nthOfFibonacci([0, 0, 1], "3")) // signature variations 1
// console.log(nthOfFibonacci([0, 1, 1], "5")) // signature variations 2
// console.log(nthOfFibonacci([1, 1, 1], "7")) // signature variations 3
// console.log(nthOfFibonacci([1, 1, 2, 4, 7], "9")) // longer signatures (not requested but acceptable by function too)
