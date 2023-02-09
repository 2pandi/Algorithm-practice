let fs = require("fs");
let [line1, ...line2] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, K] = line1.split(" ").map((e) => +e);
const cha = line2.map((e) => +e).sort((a, b) => a - b);

const isPossible = (level) => {
  let t = K;
  for (let i = 0; i < N; i++) {
    const up = level - cha[i];
    if (up > 0) t -= up;
  }
  return t >= 0;
};

let L = cha[0],
  R = cha.at(-1) + K;

while (L <= R) {
  const mid = parseInt((L + R) / 2);
  if (isPossible(mid)) L = mid + 1;
  else R = mid - 1;
}

console.log(R);
