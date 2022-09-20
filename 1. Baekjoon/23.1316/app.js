let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(v => v.split(' '));

let N = +input[0];
let count = 0;

function isGroup (str) {
    let checked = '';
    for(let i = 0; i < str.length; i++){
        if(!checked.includes(str[i])) checked += str[i];
        else if(checked[checked.length - 1] === str[i]) continue;
        else return false;
    }
    return true;
}

for(let i = 1; i <= N; i++){
    if(isGroup(input[i][0])) count ++;
}

console.log(count);

// 연속되는 숫자로만 이어진 단어가 아니면 그룹단어가 아니다.
