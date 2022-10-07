// Ex3.2 - People on the Bus
// Number of people in the bus
// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two
// items which represent number of people get into bus (The first item) and number of people get
// off the bus (The second item) in a bus stop.
//--------------------------------------------------------------------------------------------------
// Your task is to return number of people who are still in the bus after the last bus station (after
// the last array). Even though it is the last bus stop, the bus is not empty and some people are still
// in the bus, and they are probably sleeping there :D
// Take a look on the test cases.
//   Please keep in mind that the test cases ensure that the number of people in the bus is always
// >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

const testArr =  [[10,0],[9,1],[8,2],[7,3],[6,4],[5,5],[4,6],[3,7],[2,8],[1,9],[0,9]];
const testArr2 =  [[10,0],[9,1],[8,12],[7,3],[6,4],[5,5],[4,6],[3,7],[2,8],[1,9],[0,9]]; // test for total < 0
const getOn = 0;
const getOff = 1;

function pepoleOnTheBus(arr){
  let total=0;
  for (let item of arr) total += item[getOn] - item[getOff];
  return total>=0?total:undefined;
}

console.log(pepoleOnTheBus(testArr)); // 1
console.log(pepoleOnTheBus(testArr2)); // undefined