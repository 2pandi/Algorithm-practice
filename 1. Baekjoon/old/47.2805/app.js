let fs = require("fs");
let [[N, M], trees] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

function getMid(val1, val2) {
  return parseInt((val1 + val2) / 2);
}

function cutTrees(height) {
  let woods = 0;
  for (let i = 0; i < trees.length; i++) {
    if (trees[i] > height) {
      woods += trees[i] - height;
    }
  }
  return woods;
}

trees = trees.sort((a, b) => a - b);
let min = 0,
  max = trees.at(-1);
let mid = getMid(max, min);

while (min <= max) {
  const woods = cutTrees(mid);
  if (woods >= M) {
    min = mid + 1;
    mid = getMid(min, max);
  } else {
    max = mid - 1;
    mid = getMid(min, max);
  }
}

console.log(mid);
