let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = +fs.readFileSync(filePath).toString().split(" ")[0];
let resultArr = [];

const hanoi = (num, from = 1, to = 3, via = 2) => {
  if (num === 0) return;
  hanoi(num - 1, from, via, to);
  resultArr.push(`${from} ${to}`);
  hanoi(num - 1, via, to, from);
};

hanoi(input);

console.log(`${resultArr.length}\n${resultArr.join("\n")}`);
