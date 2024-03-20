let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((el) => +el);

const [plus, minus, goal] = input;
const sum = plus - minus;

console.log(Math.ceil((goal - plus) / sum) + 1);
