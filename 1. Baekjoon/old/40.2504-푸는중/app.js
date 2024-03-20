let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim(); // 띄어쓰기 없는 경우

let small = 0;
let large = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") small++;
  else if (input[i] === ")") small--;
}

console.log(input);
