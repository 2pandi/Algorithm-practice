let fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const map = [];
for (let i = 1; i <= n; i++) {
  map.push(input[i].split(" ").map(Number));
}

const dfs = (x, y) => {
  const point = map[y][x];
  if (point === -1) {
    map[n - 1][n - 1] = "goal";
    return;
  }
  if (point === 0) return;
  if (x + point < n) dfs(x + point, y);
  if (y + point < n) dfs(x, y + point);
};

dfs(0, 0);

console.log(map[n - 1][n - 1] === "goal" ? "HaruHaru" : "Hing");
