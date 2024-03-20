let fs = require("fs");

let [A, B, C] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split(" ")
  .map(BigInt);

const solve = (power) => {
  if (power === 1n) {
    return A % C;
  }

  const half = solve(power / 2n) % C;

  if (power % 2n) {
    return (half * half * (A % C)) % C;
  }

  return (half * half) % C;
};

console.log(solve(B).toString());
