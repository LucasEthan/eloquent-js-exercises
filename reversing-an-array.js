#!/usr/bin/env node

const reverseArray = ary => {
  let newAry = [];
  for (elem of ary) {
    newAry.unshift(elem);
  }
  return newAry;
}

console.log(reverseArray([1, 2, 3, 4, 5]))

const reverseArrayInPlace = ary => {
  for (elem of [...ary]) {
    ary.unshift(elem);
    ary.pop();
  }
  return ary;
}

let ary = [1, 2, 3, 4, 5, 6];
console.log(reverseArrayInPlace(ary));
console.log(ary);