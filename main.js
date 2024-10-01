//Write a function that takes a string input and returns the string in a reversed case and order.

// .reverse()       [1,2,3,4,5] >>> [5,4,3,2,1]

function invert(str) {
  let string = str.split("");

  let singleValue = string
    .reduceRight((acc, curr) => acc.concat(curr))
    .split("");

  let reverseChar = singleValue.map((char) =>
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  );

  let joinChar = reverseChar.join("");

  return joinChar;
}

console.log(invert("dLROW YM sI HsEt"));
console.log(invert("ytInIUgAsnOc"));
console.log(invert("step on NO PETS"));
console.log(invert("XeLPMoC YTiReTXeD"));
