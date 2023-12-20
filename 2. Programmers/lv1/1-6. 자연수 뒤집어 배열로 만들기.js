function solution(n) {
    let arr = [];
    let a = '' + n;
    for(let i = a.length - 1; i >= 0; i--){
        arr.push(a[i]);
    }
    return arr.map(v => +v);
}