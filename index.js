"use strict";

function duplicateEncode(word) {
  const array = word.toLowerCase().split("");
  return array
    .map((current, index, arr) => {
      const arrCompare = [...arr];
      arrCompare.splice(index, 1);
      return arrCompare.includes(current) ? ")" : "(";
    })
    .join("");
}

console.log(duplicateEncode("recede"));

//  Best practice is to

function duplicateEncodeBEST(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}
