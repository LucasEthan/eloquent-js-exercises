#!/usr/bin/env node

const swap = (...[b, a]) => [a, b];


let a = "egg";
let b = "meat";
console.log(a, b);
[a, b] = swap(a, b);
console.log(a, b);
