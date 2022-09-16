//한 줄인 경우
let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

input = input.map(a => Number(a));
let A = input[0];
let B = input[1];

console.log(`${A+B}\n${A-B}\n${A*B}\n${Math.floor(A/B)}\n${A%B}`);


