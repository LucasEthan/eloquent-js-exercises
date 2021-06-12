#!/usr/bin/env node

const countBs = str => {
  let numBs = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] == "B") {
      numBs++;
    }
  }
  return numBs;
}

console.log(countBs("BaBy"));

const countChar = (str, letter = "e") => {
  let numLetters = 0;
  for (let j = 0; j < str.length - 1; j++) {
    if (str[j] == letter) {
      numLetters++;
    }
  }
  return numLetters
}

console.log(countChar("hello"));