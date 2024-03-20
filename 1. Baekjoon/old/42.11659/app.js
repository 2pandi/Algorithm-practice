let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [[N, M], array, ...section] = input;
let aggregate = [0, ...Array(N)];

array.map((el, idx) => (aggregate[idx + 1] = el + aggregate[idx]));

let output = [];

for (let i = 0; i < section.length; i++) {
  const [start, end] = section[i];
  if (start === end) {
    output.push(array[end - 1]);
    continue;
  }
  if (start === 1) {
    output.push(aggregate[end]);
    continue;
  }
  output.push(aggregate[end] - aggregate[start - 1]);
}

console.log(output.join("\n"));

// 각각 콘솔 찍는것보다 join으로 한번에 찍는게 빠르다......
