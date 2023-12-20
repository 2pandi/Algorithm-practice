function solution(absolutes, signs) {
  let result = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) result += absolutes[i];
    else result -= absolutes[i];
  }
  return result;
}

/**
function solution(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}

reduce, 삼항연산자 사용하기
 */
