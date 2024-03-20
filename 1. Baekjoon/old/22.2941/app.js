let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

let Croatian = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let result = input.trim();

for(let i = 0; i < Croatian.length; i++){
    let regex = new RegExp(Croatian[i], 'g');
    result = result.replace(regex, '_');
}

console.log(result.length);
