let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(v => v.split(' '));

let num = input[1][0];
let result = 0;
let indexOfE = num.indexOf('e')

if(indexOfE >= 0){
    num = num.slice(0, indexOfE);
}

for(let i = 0; i < num.length; i++){
    result += Number(num[i])
}

console.log(result);
