let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let N = +fs.readFileSync(filePath).toString();

let rows = new Array(N).fill(0);
function isPossible(rowNumber, x) {
  for (let i = 0; i < rowNumber; i++) {
    if (rows[i] === x || Math.abs(i - rowNumber) === Math.abs(rows[i] - x))
      return false;
  }
  return true;
}

let count = 0;
function dfs(rowNumber) {
  if (rowNumber === N) {
    count++;
    return;
  }
  for (let i = 0; i < N; i++) {
    if (isPossible(rowNumber, i)) {
      rows[rowNumber] = i;
      dfs(rowNumber + 1);
    }
  }
}

dfs(0);
console.log(count);
