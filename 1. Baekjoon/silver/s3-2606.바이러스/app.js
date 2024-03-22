let fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const [totalPc, totalPair] = [input[0], input[1]].map(Number);
const pairs = [];
for (let i = 2; i < totalPair + 2; i++) {
  pairs.push(input[i].split(" ").map(Number));
}
const virusMap = [];
for (let i = 0; i <= totalPc; i++) {
  virusMap.push(Array.from({ length: totalPc + 1 }).fill(false));
}

for (let [a, b] of pairs) {
  virusMap[a][b] = true;
  virusMap[b][a] = true;
}

const visited = Array.from({ length: totalPc + 1 }).fill(false);

const bfs = (origin) => {
  visited[origin] = true;
  for (let i = 1; i <= totalPc; i++) {
    if (!visited[i] && virusMap[origin][i]) bfs(i);
  }
};

bfs(1);

console.log(visited.filter((v) => v === true).length - 1);
