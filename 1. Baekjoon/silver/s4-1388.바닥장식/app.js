let fs = require("fs");

let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);

const graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split(""));
const visited = Array.from({ length: n }, () => Array.from(m).fill(false));

function dfs(y, x, item) {
  visited[y][x] = true;

  if (item === "|") {
    const ny = y + 1;
    if (ny < n && !visited[ny][x] && graph[ny][x] === item) dfs(ny, x, item);
  } else {
    const nx = x + 1;
    if (nx < m && !visited[y][nx] && graph[y][nx] === item) dfs(y, nx, item);
  }
}

let cnt = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!visited[i][j]) {
      cnt++;
      dfs(i, j, graph[i][j]);
    }
  }
}

console.log(cnt);
