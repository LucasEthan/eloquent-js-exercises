#!/usr/bin/env node

let size = 8;

for (let i = 1; i <= size; i++) {
  if (i % 2 == 0) {
    for (let j = 1; j <= size; j++) {
      if (j % 2 == 0) {
        process.stdout.write(" ");
      } else {
        process.stdout.write("#");
      }
    }
    console.log("");
  } else {
    for (let k = 1; k <= size; k++) {
      if (k % 2 == 0) {
        process.stdout.write("#");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log("");
  }
} 