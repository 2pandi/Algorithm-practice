let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = +fs.readFileSync(filePath).toString().trim();

let fib = (num) => {
  return num <= 1 ? num : fib(num - 1) + fib(num - 2);
};

console.log(fib(input));
