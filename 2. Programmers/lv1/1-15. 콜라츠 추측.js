function solution(num) {
    let a = num;
    let count = 0;
    while(a !== 1){
        count++
        if(count === 501) return -1;
        if(a % 2 === 0) a /= 2;
        else a = a * 3 + 1;
    }
    return count;
}