let fs = require("fs");
let [line1, ...line2] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, C] = line1.split(" ").map((e) => +e);
const houses = line2.map((e) => +e).sort((a, b) => a - b);

let L = 1,
  R = houses.at(-1);

while (L <= R) {
  const mid = parseInt((L + R) / 2);
  if (isPossible(mid)) L = mid + 1;
  else R = mid - 1;
}

console.log(R);

function isPossible(num) {
  count = C - 1;
  let pre = houses[0];
  for (let i = 1; i < N; i++) {
    if (houses[i] - pre >= num) {
      count--;
      pre = houses[i];
    }
  }
  return count <= 0;
}
