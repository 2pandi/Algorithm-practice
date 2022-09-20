let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

//let input = 'baekjoon';
let result = '';
let alphabet = 'abcdefghijklmnopqrstuvwxyz';

for(let i = 0; i < alphabet.length - 1; i++){
    result += input.indexOf(alphabet[i]) + '\ ';
}
result += input.indexOf(alphabet[alphabet.length - 1]);

console.log(result);