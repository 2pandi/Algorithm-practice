let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n").map(v => +v);

let [N, ...arr] = input;

arr = arr.sort((a, b) => a - b);

for(let i = 0; i < N; i++){
    console.log(arr[i]);
}
