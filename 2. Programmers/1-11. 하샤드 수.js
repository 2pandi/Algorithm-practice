function solution(x) {
    let s = ("" + x).split("").map(v => +v).reduce((a, b) => a + b);
    if(x % s === 0) return true;
    else return false;
}