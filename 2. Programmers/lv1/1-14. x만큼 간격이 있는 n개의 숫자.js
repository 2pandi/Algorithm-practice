function solution(x, n) {
    let arr = [];
    let i = x;
    while (arr.length < n) {
        arr.push(i);
        i += x;
    }
    return arr;
}