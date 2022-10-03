let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = +fs.readFileSync(filePath).toString().trim();

const fact = (num) => {
  return num < 1 ? 1 : fact(num - 1) * num;
};

console.log(fact(input));
