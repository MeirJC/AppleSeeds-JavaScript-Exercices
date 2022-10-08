// Ex5.6 - Mask
// Usually when you buy something, you're asked whether your credit card number, phone number
// or answer to your most secret question is still correct. However, since someone could look over
// your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
//   Examples
// maskify("4556364607935616") == "############5616"
// maskify( "64607935616") == "#######5616"
// maskify( "1") == "1"
// maskify( "") == "" // "What was the name of your first pet?"
// maskify("Skippy") == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!

function maskify(str) {
  if (str.length <= 4) {
    return str;
  }
  str = str.split("");
  for (let i = 0; i < str.length - 4; i++) {
    str[i] = "#";
  }
  return str.join("");
}

console.log(maskify("4556364607935616")); // ############5616
console.log(maskify("64607935616")); // #######5616
console.log(maskify("1")); // 1
console.log(maskify("")); //   (empty string)
console.log(maskify("Skippy")); // ##ippy
console.log(maskify("Nananananananananananananananana Batman!")); // ####################################man!
