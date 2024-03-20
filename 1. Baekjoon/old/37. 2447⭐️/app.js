let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim();

// let input = 9;
let result = "";

const printStars = (i, j) => {
  if (i % 3 === 1 && j % 3 === 1) result += " ";
  else {
    if (Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0) result += "*";
    else printStars(Math.floor(i / 3), Math.floor(j / 3));
  }
};

for (let i = 0; i < input; i++) {
  for (let j = 0; j < input; j++) {
    printStars(i, j);
    if (j === input - 1) result += "\n";
  }
}

console.log(result);

// 공백이 들어가야 하는 좌표에 집중하여 코딩해야 함.
