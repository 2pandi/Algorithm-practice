let fs = require("fs");
let input = +fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const fn = (num, five) => {
  if (five === -1) {
    if (input >= 5) five = ~~(num / 5);
    else five = 0;
  }
  if (!five && input % 3) return -1;
  if (!((input - five * 5) % 3)) return five + (input - five * 5) / 3;
  else return fn(num, five - 1);
};

console.log(fn(input, -1));
