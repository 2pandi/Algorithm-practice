function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    const sqrt = Math.sqrt(i);
    sqrt === Math.floor(sqrt) ? (result -= i) : (result += i);
  }
  return result;
}
/**
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
  }
  
  비슷하게 풀었다
 */
