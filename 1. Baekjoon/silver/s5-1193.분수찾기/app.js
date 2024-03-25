let fs = require("fs");
let input = +fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();
let pointer = 1;
let i = 1;

while (input > pointer) {
  pointer += i * 4;
  i++;
}

if (input === pointer) console.log(`${i}/${i}`);
else {
  let j = i;
  while (pointer !== input) {
    pointer--;
    if ((i + j) % 2) {
      i === 1 ? j-- : (i--, j++);
    } else {
      j === 1 ? i-- : (i++, j--);
    }
  }
  console.log(`${i}/${j}`);
}
