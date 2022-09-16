let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(v => v.split(' '));

// let input = [ [ '2' ], [ '3', 'ABC' ], [ '5', '/HTP' ] ]
let T = +input[0]; // 테스트 개수
let result = '';

for(let i = 1; i <= T; i++){
    let R = +input[i][0];
    let S = input[i][1];
    for(let j = 0; j < S.length; j++){
            result += S[j].repeat(R);
    }
    result += '\n';
}
result = result.substring(0, result.length - 1);
console.log(result);