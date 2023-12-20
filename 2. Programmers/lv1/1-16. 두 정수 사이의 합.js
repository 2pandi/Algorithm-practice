function solution(a, b) {
  let answer = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  }

  return answer;
}

/**
function adder(a, b){
    return (a + b) * (Math.abs(b - a) + 1) / 2;
}
 */
