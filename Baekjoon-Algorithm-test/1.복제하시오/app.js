let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" "); // 띄어쓰기로 구분한 경우
let input = fs.readFileSync(filePath).toString().trim(); // 띄어쓰기 없는 경우

console.log(input);
//🟢한 줄인 경우



let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

console.log(input);
//🟢여러 줄인 경우