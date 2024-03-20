let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = +fs.readFileSync(filePath).toString();

// function hanoi(number, from, to, other) {
//   if (number === 0) return;
//   hanoi(number - 1, from, other, to); // 가장 큰 수보다 작은 것들을 other로 옮기고
//   console.log(`${from}번에서 ${to}로 옮긴다`); // 가장 큰 수를 to로 옮기고
//   hanoi(number - 1, other, to, from); // 작은 것들을 other에서 to로 옮긴다.
// }

let array = [];

function hanoi(origin, num, from, to, other) {
  if (num === 0) return;
  hanoi(origin, num - 1, from, other, to);
  array.push(`${from} ${to}`);
  hanoi(origin, num - 1, other, to, from);
}

console.log(`${BigInt(2 ** input) - 1n}`);
if (input <= 20) {
  hanoi(input, input, 1, 3, 2);
  console.log(array.join("\n"));
}
