let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ").map(v => {
    let numStr = '';
    for(let i = v.length - 1; i >= 0; i--){
        numStr += v[i];
    }
    return numStr;
}).map(v => +v);

let [a, b] = input;

console.log(a > b ? a : b);