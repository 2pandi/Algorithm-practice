let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();

let count = 1;
const func = (str) => {
  let isPalindrome = 0;
  let left = str[0];
  let right = str[str.length - 1];
  if (str.length <= 1) {
    isPalindrome = 1;
  } else if (left === right) {
    count++;
    return func(str.substring(1, str.length - 1));
  }
  let result = `${isPalindrome} ${count}`;
  count = 1;
  return result;
};

let result = input.map((v) => func(v)).join("\n");

console.log(result);
