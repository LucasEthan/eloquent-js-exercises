#!/usr/bin/env node

const range = (start, end, step = 1) => {
  let nums = [];
  for (let i = start; i <= end; i += step) {
    nums.push(i);
  }
  return nums;
}

console.log(range(1, 10));

const sum = nums => nums.reduce((acc, num) => acc + num, 0);

console.log(sum(range(1, 10)));