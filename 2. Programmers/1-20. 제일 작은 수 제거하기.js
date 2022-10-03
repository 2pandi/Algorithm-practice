function solution(arr) {
  let min = Math.min(...arr);
  return arr.length === 1 ? [-1] : arr.filter((x) => x !== min);
}

/**
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}

splice로 하나만 빼기...splice 잘 써보자
 */
